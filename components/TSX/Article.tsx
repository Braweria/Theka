import styles from "../SCSS/chapter.module.scss";


interface articleProps {
  content: string,
  title: string,
}

export default function Article({ content, title }: articleProps ) {
  console.log(typeof content)
  return (
    <article id={styles.chapter}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}