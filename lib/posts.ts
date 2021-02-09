import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

/**
 * Path from Current Working Directory to posts
 */
const postsDirectory: string = path.join(process.cwd(), "posts");
const fileNames = fs.readdirSync(postsDirectory);

interface PostData {
  id: string;
  title: string;
  date: string;
}

/**
 * Gets posts and sorts them
 */
export function getSortedPostsData() {
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    /**
     * Combine the data with the id
     */
    return {
      id,
      ...matterResult.data,
    };
  });
  /**
   * Sort posts by date
   */
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

interface PostId {
  params: {
    id: string;
  };
}

export function getAllPostIds(): PostId[] {
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id): object {
  const fullPath: string = path.join(postsDirectory, `${id}.md`);
  const fileContents: string = fs.readFileSync(fullPath, "utf8");

  const matterResult: object = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
