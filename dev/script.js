const chapter = document.getElementById("chapter");

import "./style.scss";

import { onDoubleTap } from "./blocks/JS/onDoubleTap";
import { fontSettingsAction } from "./blocks/JS/fontSettings/fontSettingsAction";
import { fontSettingsContainer } from "./blocks/JS/fontSettings/fontSettingsContainer";
import { checkForStorage } from "./blocks/JS/fontSettings/changeFontSettings";

/**
 * If chapter exists, execute the following codes
 */
if (chapter !== null) {
  checkForStorage();

  /**
   * Listen if User tapped outside the Font Settings
   *
   * @return      Remove class .show-flex from #font-settings
   */

  let boolFontSettings = false;

  onDoubleTap(chapter, (e) => {
    fontSettingsContainer.classList.add("show-flex");
    boolFontSettings = true;
  });

  window.addEventListener("touchstart", (e) => {
    if (boolFontSettings) {
      const boolInside = e.path.includes(fontSettingsContainer);
      if (boolInside) {
        // do something
      } else {
        fontSettingsContainer.classList.remove("show-flex");
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
}
