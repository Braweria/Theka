import { updateChapterStyle } from "./updateChapterStyle";
import { fontSettings } from "./fontSettings";

/**
 * eine beschreibung...
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
const fsTypeSans = document.getElementById("fs-type-sans");
const fsTypeSerif = document.getElementById("fs-type-serif");
const fsTypeMono = document.getElementById("fs-type-mono");
const fsReset = document.getElementById("fs-reset");

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
  fsTypeSans,
  fsTypeSerif,
  fsTypeMono,
  fsReset,
];

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
    sans: fsTypeSans,
    serif: fsTypeSerif,
    mono: fsTypeMono,
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

const mapFontSettings = new Map([
  [fsFontDown, (setting) => changeFontSettings(setting, "fd")],
  [fsFontUp, (setting) => changeFontSettings(setting, "fu")],
  [fsLineDown, (setting) => changeFontSettings(setting, "ld")],
  [fsLineUp, (setting) => changeFontSettings(setting, "lu")],
  [fsSpacingDown, (setting) => changeFontSettings(setting, "sd")],
  [fsSpacingUp, (setting) => changeFontSettings(setting, "su")],
  [fsWidthDown, (setting) => changeFontSettings(setting, "wd")],
  [fsWidthUp, (setting) => changeFontSettings(setting, "wu")],
  // [fsFontSelection, (setting) => changeFontSettings(setting, "fs")],
  // currently not used, because I'll work with only the three specifications of fonts: Sans, Serif and Mono
  [fsTypeSans, (setting) => changeFontSettings(setting, "sa")],
  [fsTypeSerif, (setting) => changeFontSettings(setting, "se")],
  [fsTypeMono, (setting) => changeFontSettings(setting, "mo")],
  [fsReset, (setting) => changeFontSettings(setting, "re")],
]);

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
    console.log(obj);
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
  sa(obj) {
    return {
      key: obj.key,
      value: "sans-serif",
      unit: obj.unit,
    };
  },
  se(obj) {
    return {
      key: obj.key,
      value: "serif",
      unit: obj.unit,
    };
  },
  mo(obj) {
    return {
      key: obj.key,
      value: "monospace",
      unit: obj.unit,
    };
  },
  re(obj) {
    console.log(obj);
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

/**
 * TODO: BETTER NAMING CONVENTION
 * TODO: das "fs" als prefix entfernen, da sich eh alles um font settings hier handelt
 * TODO: mach es für emrox!
 */

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
        console.log(objActions);
        const newValues = objFontFunc[what](objActions);
        console.log(newValues);

        updateChapterStyle(newValues.key, newValues.value, newValues.unit);
        obj.value = newValues.value;
      }
    }
  });
}

export function fontSettingsAction() {
  fontSettings.addEventListener("click", (e) => {
    arrFontSettings.forEach((setting) => {
      const boolIsSetting = e.path.includes(setting);
      if (boolIsSetting) {
        console.log(setting);
        if (setting === fsReset) {
          chapter.style.cssText = "";
          return (arrUserFontSettings = arrDefaultFontSettings);
        }
        mapFontSettings.get(setting)(setting);
      }
    });
  });
}
