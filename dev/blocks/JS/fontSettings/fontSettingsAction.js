import { fontSettingsContainer } from "./fontSettingsContainer";
import { fontSettingActions } from "./fontSettingActions";
import { userFontSettings, backToDefaultSettings } from "./changeFontSettings";

/**
 * When clicking a button, read what fontAction it has THEN
 * Either make an action that changes the font settings OR
 * sets all the settings back to the default THEN
 * save the new User Settings to the Storage
 */
export function fontSettingsAction() {
  fontSettingsContainer.addEventListener("click", (e) => {
    const datas = e.target.dataset;
    let curValue;

    for (const [_, value] of Object.entries(datas)) {
      curValue = value;
    }

    curValue === "reset"
      ? (chapter.style.cssText = "" && backToDefaultSettings())
      : fontSettingActions[curValue](curValue);

    localStorage.setItem("fontSettings", JSON.stringify(userFontSettings));
  });
}
