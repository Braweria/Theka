import { fontSettingsContainer } from "./fontSettingsContainer";
import { fontSettingsActions } from "./fontSettingActions";
import * as buttonGroup from "./fontSettingButtons";
import { userFontSettings, backToDefaultSettings } from "./changeFontSettings";

/**
 * When clicking a button, check if it is a button from the font settings THEN
 * Either make an action that changes the font settings OR
 * sets all the settings back to the default THEN
 * save the new User Settings to the Storage
 */
export function fontSettingsAction() {
  fontSettingsContainer.addEventListener("click", (e) => {
    fontSettingsActions.forEach((fontFunction, key) => {
      if (e.path.includes(key)) {
        if (key === buttonGroup.resetButton) {
          chapter.style.cssText = "";
          backToDefaultSettings();
        } else {
          fontFunction(key);
        }
      }
    });

    localStorage.setItem(
      "fontSettingsContainer",
      JSON.stringify(userFontSettings)
    );
  });
}
