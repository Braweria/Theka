import { toolbarAction } from "./toolbarActions";

/**
 * Shows the toolbar and moves it above the selection
 */
export function showToolbar(rect, range) {
  const toolbar = document.getElementById("select-toolbar");
  toolbar.classList.add("show-block");
  const height = toolbar.offsetHeight;
  const width = toolbar.offsetWidth;
  toolbar.style.left = `${
    (rect.right - rect.left) / 2 + rect.left - width / 2 + 5
  }px`;
  toolbar.style.top = `${
    rect.top - height - 15 + document.querySelector("html").scrollTop
  }px`;

  toolbarAction(toolbar, range);
}

/**
 * Hides the toolbar
 */
export function hideToolbar() {
  const toolbar = document.getElementById("select-toolbar");
  toolbar.classList.remove("show-block");
}
