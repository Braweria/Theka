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

/*
 */
const fsFontDown = document.getElementById("fs-font-down");
const fsFontUp = document.getElementById("fs-font-up");
const fsLineDown = document.getElementById("fs-line-down");
const fsLineUp = document.getElementById("fs-line-up");
const fsSpacingDown = document.getElementById("fs-spacing-down");
const fsSpacingUp = document.getElementById("fs-spacing-up");
const fsWidthDown = document.getElementById("fs-width-down");
const fsWidthUp = document.getElementById("fs-width-up");
const fsFontSelection = document.getElementById("fs-font-selection");
const paragraph = chapter.querySelector("p");

const arrFontSettings = [
  fsFontDown,
  fsFontUp,
  fsLineDown,
  fsLineUp,
  fsSpacingDown,
  fsSpacingUp,
  fsWidthDown,
  fsWidthUp,
  fsFontSelection,
];

const mapFontSettings = new Map([
  [fsFontDown, (e) => getCurrentStyleValue(e)],
  [fsFontUp, (e) => getCurrentStyleValue(e)],
  [fsLineDown, (e) => getCurrentStyleValue(e)],
  [fsLineUp, (e) => getCurrentStyleValue(e)],
  [fsSpacingDown, (e) => getCurrentStyleValue(e)],
  [fsSpacingUp, (e) => getCurrentStyleValue(e)],
  [fsWidthDown, (e) => getCurrentStyleValue(e)],
  [fsWidthUp, (e) => getCurrentStyleValue(e)],
  [fsFontSelection, (e) => getCurrentStyleValue(e)],
]);

fontSettings.addEventListener("click", (e) => {
  arrFontSettings.forEach((setting) => {
    const boolIsSetting = e.path.includes(setting);
    if (boolIsSetting) {
      mapFontSettings.get(setting)(e);
    }
  });
});

function updateChapterStyle(type, value) {
  return (chapter.style = type + ": " + value);
}

function getCurrentStyleValue(e) {
  const fontAttr = e.target.id;
  const regFontType = /fs-(\w+)-(\w+)/g;
  const matches = fontAttr.matchAll(regFontType);
  let type = "";

  for (const [fullMatch, g1, g2] of matches) {
    if (g2 === "selection") {
      type = "fontFamily";
    } else if (g1 !== "font") {
      g1 === "line"
        ? (type = "lineHeight")
        : g1 === "spacing"
        ? (type = "letterSpacing")
        : (type = "width");
    } else {
      type = "fontSize";
    }
  }

  const value = getComputedStyle(paragraph)[type];
  console.log(value);
}
