import { changeFontSettings } from "./changeFontSettings";
import * as buttonGroup from "./fontSettingButtons";

/**
 * A Map for the different Setting Options
 * @return  {array}              [return description]
 */
export const fontSettingsActions = new Map([
  [buttonGroup.fontDownButton, (setting) => changeFontSettings(setting, "fd")],
  [buttonGroup.fontUpButton, (setting) => changeFontSettings(setting, "fu")],
  [buttonGroup.lineDownButton, (setting) => changeFontSettings(setting, "ld")],
  [buttonGroup.lineUpButton, (setting) => changeFontSettings(setting, "lu")],
  [
    buttonGroup.spacingDownButton,
    (setting) => changeFontSettings(setting, "sd"),
  ],
  [buttonGroup.spacingUpButton, (setting) => changeFontSettings(setting, "su")],
  [buttonGroup.widthDownButton, (setting) => changeFontSettings(setting, "wd")],
  [buttonGroup.widthUpButton, (setting) => changeFontSettings(setting, "wu")],
  // [fontSelectionButton, (setting) => changeFontSettings(setting, "fs")],
  // currently not used, because I'll work with only the three specifications of fonts: Sans, Serif and Mono
  [buttonGroup.typeSansButton, (setting) => changeFontSettings(setting, "sa")],
  [buttonGroup.typeSerifButton, (setting) => changeFontSettings(setting, "se")],
  [buttonGroup.typeMonoButton, (setting) => changeFontSettings(setting, "mo")],
  [buttonGroup.resetButton, (setting) => changeFontSettings(setting, "re")],
]);
