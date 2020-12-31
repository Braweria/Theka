const chapter = document.getElementById("chapter");

import "./style.scss";

/**
 * Checks if there was a double tap or double click
 */
function onDoubleTap(element, func, alsoDblClick = false) {
  let recentTap = false;

  function handleTap(e) {
    if (!recentTap) {
      recentTap = true;
      setTimeout(() => (recentTap = false), 500);
      return;
    }
    func(e);
  }
  element.addEventListener("touchend", handleTap, false);

  if (alsoDblClick) {
    element.addEventListener("dblclick", func, false);
  }

  return () => {
    element.removeEventListener("touchend", handleTap);
    if (alsoDblClick) {
      element.removeEventListener("dblclick", func);
    }
  };
}

/**
 * Listen if User tapped outside the Font Settings
 *
 * @return      Remove class .show-flex from #font-settings
 */
const fontSettings = document.getElementById("font-settings");
let boolFontSettings = false;

onDoubleTap(chapter, (e) => {
  fontSettings.classList.add("show-flex");
  boolFontSettings = true;
});

window.addEventListener("touchstart", (e) => {
  if (boolFontSettings) {
    const boolInside = e.path.includes(fontSettings);
    if (boolInside) {
      // do something
    } else {
      fontSettings.classList.remove("show-flex");
    }
  }
});

/**
 * Makes the .info-box into a collapseable box,
 * toggling between .show-block
 *
 * @param   {Array}           infoBox
 * @param   {HtmlElement}     box             Single Item of infoBox
 * @param   {Bool}            boolIsInfoBox   Checks if click event is inside infoBox
 * @param   {ClassName}       show-block
 */
const infoBox = Array.from(document.querySelectorAll(".info-box"));

chapter.addEventListener("click", (e) => {
  infoBox.forEach((box) => {
    const boolIsInfoBox = e.path.includes(box);
    if (boolIsInfoBox) {
      const infoText = box.querySelector(".info-text");
      infoText.classList.toggle("show-block");
    }
  });
});

const hasFootnote = Array.from(document.querySelectorAll(".has-footnote"));


chapter.addEventListener("click", (e) => {
  hasFootnote.forEach(footnote => {
    const boolIsFootnote = e.path.includes(footnote);
    console.log(footnote)

    if (boolIsFootnote) {
      const footnoteNote = footnote.querySelector(".footnote-note");
      footnoteNote.classList.toggle("show-block");
    }
  })
})