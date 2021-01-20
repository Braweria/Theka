import { changeFontSettings } from "./changeFontSettings";

/**
 * A Map for the different Setting Options
 * @return  {array}              [return description]
 */

const fontSettingButtons = Array.from(
  document.querySelectorAll(".square > button")
);

export const fontSettingActions = fontSettingButtons.reduce((acc, cur) => {
  return {
    ...acc,
    [cur.dataset.fontAction]: (setting) =>
      changeFontSettings(setting, cur.dataset.fontAction),
  };
}, {});
