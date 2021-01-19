const chapter = document.getElementById("chapter");

import "./style.scss";

import { onDoubleTap } from "./blocks/onDoubleTap";
import { fontSettingsAction } from "./blocks/fontSettingsAction";
import { fontSettings } from "./blocks/fontSettings";

/**
 * Listen if User tapped outside the Font Settings
 *
 * @return      Remove class .show-flex from #font-settings
 */

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
 * @param   {Array}           infoBox         Array of HtmlElements
 * @param   {HtmlElement}     box             Single Item of infoBox
 * @param   {Bool}            boolIsInfoBox   Checks if click event is inside infoBox
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

/**
 * Makes the Footnote collapseable
 *
 * @param   {HtmlElement}   footnote        Single Item of hasFootnote
 * @param   {Bool}          boolIsFootnote  Checks if clicked area is a footnote
 */
const hasFootnote = Array.from(document.querySelectorAll(".has-footnote"));

chapter.addEventListener("click", (e) => {
  hasFootnote.forEach((footnote) => {
    const boolIsFootnote = e.path.includes(footnote);

    if (boolIsFootnote) {
      const footnoteNote = footnote.querySelector(".footnote-note");
      footnoteNote.classList.toggle("show-block");
    }
  });
});

fontSettingsAction();
