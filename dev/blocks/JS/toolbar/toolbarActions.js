const toolbarActions = {
  highlightContent: (select) => highlight(select),
  bookmarkPosition: (select) => bookmark(select),
};

function highlight(range) {
  
  const highlight = document.createElement("mark");
  highlight.classList.add("highlight");
  range.surroundContents(highlight);
  console.log(range);
}

function bookmark(range) {
  const bookmark = document.createElement("mark");
  bookmark.setAttribute("id", "bookmark");
  range.surroundContents(bookmark);
}

export function toolbarAction(el, range) {
  el.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    toolbarActions[action](range);
  });
}
