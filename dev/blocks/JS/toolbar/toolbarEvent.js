import { showToolbar, hideToolbar } from "./toggleToolbar";

/**
 * Creates an event if a selection was made to toggle the toolbar
 * @param   {HTMLElement}   el    Where it should listen to an event
 */
export function toolbarEvent(el) {
  el.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0).cloneRange();
    const rect = range.getClientRects()[0];

    if (selection.type === "Range") {
      showToolbar(rect, range);
    } else {
      hideToolbar();
    }
  });
}

/**
 * todo es sollte möglich sein, dass die toolbar
 * todo gefixt wird an die seite des fensters,
 * todo wie die font settings
 */
