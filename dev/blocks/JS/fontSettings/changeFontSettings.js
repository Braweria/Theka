import { updateChapterStyle } from "../updateChapterStyle";
import { defaultFontSettings } from "./defaultFontSettings";
import { fontFunctions } from "./fontFunctions";

/**
 * @const   {object[]}    storageFontSettings   Gets the font settings from the localStorage and parses it
 */
const storageFontSettings = JSON.parse(localStorage.getItem("fontSettings"));

/**
 * User Font Settings
 * @const   {object[]}
 */
export let userFontSettings = [];

/**
 * Checks if storageFontSettings exists and updates the style accordingly
 */
export function checkForStorage() {
  console.log("hello....");
  if (storageFontSettings) {
    userFontSettings = storageFontSettings;
    userFontSettings.forEach((el) => {
      updateChapterStyle(el.key, el.value, el.unit);
    });
  }
}

/**
 * Change the Font Settings
 * @param    {HTMLElement}   setting   The Font Setting Button that has been clicked
 * @param    {string}        action    What action has to be taken
 */
export function changeFontSettings(setting, action) {
  userFontSettings.length === 0
    ? (userFontSettings = defaultFontSettings)
    : (userFontSettings = userFontSettings);

  userFontSettings.forEach((obj) => {
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
        const newValues = fontFunctions[action](objActions);

        updateChapterStyle(newValues.key, newValues.value, newValues.unit);
        obj.value = newValues.value;
      }
    }
  });
}

export function backToDefaultSettings() {
  userFontSettings = defaultFontSettings;
  localStorage.setItem("fontSettings", JSON.stringify(defaultFontSettings));
}
