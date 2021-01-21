import { changeFontSettings } from "./changeFontSettings";

/**
 * @const  {HTMLElement[]}    fontSettingButtons    Array of Buttons inside #font-settings container
 */
const fontSettingButtons = Array.from(
  document.querySelectorAll("#font-settings button")
);

/**
 * @const {object{key: function}}   fontSettingActions   Object with keys and functions as values
 */
export const fontSettingActions = fontSettingButtons.reduce((acc, cur) => {
  return {
    ...acc,
    [cur.dataset.fontAction]: (setting) =>
      changeFontSettings(setting, cur.dataset.fontAction),
  };
}, {});

console.log(fontSettingActions);
