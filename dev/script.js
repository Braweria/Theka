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
  [fsFontDown, (setting) => changeFontSettings(setting, "fd")],
  [fsFontUp, (setting) => changeFontSettings(setting, "fu")],
  [fsLineDown, (setting) => changeFontSettings(setting, "ld")],
  [fsLineUp, (setting) => changeFontSettings(setting, "lu")],
  [fsSpacingDown, (setting) => changeFontSettings(setting, "sd")],
  [fsSpacingUp, (setting) => changeFontSettings(setting, "su")],
  [fsWidthDown, (setting) => changeFontSettings(setting, "wd")],
  [fsWidthUp, (setting) => changeFontSettings(setting, "wu")],
  [fsFontSelection, (setting) => changeFontSettings(setting, "fs")],
]);

const arrDefaultFontSettings = [
  {
    down: fsFontDown,
    up: fsFontUp,
    key: "--font-size",
    value: 1,
    unit: "rem",
  },
  {
    down: fsLineDown,
    up: fsLineUp,
    key: "--line-height",
    value: 1.5,
    unit: "rem",
  },
  {
    down: fsSpacingDown,
    up: fsSpacingUp,
    key: "--letter-spacing",
    value: 0,
    unit: "rem",
  },
  {
    selection: fsFontSelection,
    key: "--font-type",
    value: "inherit",
    unit: "",
  },
  {
    down: fsWidthDown,
    up: fsWidthUp,
    key: "--text-width",
    value: 100,
    unit: "%",
  },
];

let arrUserFontSettings = [];

fontSettings.addEventListener("click", (e) => {
  arrFontSettings.forEach((setting) => {
    const boolIsSetting = e.path.includes(setting);
    if (boolIsSetting) {
      mapFontSettings.get(setting)(setting);
      // changeFontSettings(setting);
    }
  });
});

function updateChapterStyle(type, value, unit) {
  return chapter.style.setProperty(type, value + unit);
}

function changeFontSettings(setting, what) {
  arrUserFontSettings.length === 0
    ? (arrUserFontSettings = arrDefaultFontSettings)
    : (arrUserFontSettings = arrUserFontSettings);

  arrUserFontSettings.forEach((obj) => {
    for (let k in obj) {
      if (obj[k] === setting) {
        const value = obj.value;
        const unit = obj.unit;
        const key = obj.key;

        const objActions = {
          key: key,
          value: value,
          unit: unit,
        };

        const newValues = objFontFunc[what](objActions);

        updateChapterStyle(newValues.key, newValues.value, newValues.unit);
        obj.value = newValues.value;
      }
    }
  });
}

const objFontFunc = {
  fd(obj) {
    return {
      key: obj.key,
      value: obj.value > 0.6 ? obj.value - 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  fu(obj) {
    return {
      key: obj.key,
      value: obj.value < 4.9 ? obj.value + 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  ld(obj) {
    return {
      key: obj.key,
      value: obj.value > 0.5 ? obj.value - 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  lu(obj) {
    return {
      key: obj.key,
      value: obj.value < 5.0 ? obj.value + 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  sd(obj) {
    return {
      key: obj.key,
      value: obj.value > -0.4 ? obj.value - 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  su(obj) {
    return {
      key: obj.key,
      value: obj.value < 0.4 ? obj.value + 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  wd(obj) {
    return {
      key: obj.key,
      value: obj.value > 10 ? obj.value - 10 : obj.value,
      unit: obj.unit,
    };
  },
  wu(obj) {
    return {
      key: obj.key,
      value: obj.value < 100 ? obj.value + 10 : obj.value,
      unit: obj.unit,
    };
  },
  fs(obj) {
    // font selection
  },
};

function getFontAction(e) {
  const fontAttr = e.target.id;
  const regFontType = /fs-(\w+)-(\w+)/g;
  const matches = fontAttr.matchAll(regFontType);
  let objType = {};

  for (const [_, g1, g2] of matches) {
    objType.type = g1;
    objType.action = g2;
  }
  return objType;
}
