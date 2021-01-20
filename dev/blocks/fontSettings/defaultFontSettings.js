import * as buttonGroup from "./fontSettingButtons";

/**
 * Default Font Settings
 * @const   {object[]}
 */
export const defaultFontSettings = [
  {
    down: buttonGroup.fontDownButton,
    up: buttonGroup.fontUpButton,
    key: "--font-size",
    value: 1,
    unit: "rem",
  },
  {
    down: buttonGroup.lineDownButton,
    up: buttonGroup.lineUpButton,
    key: "--line-height",
    value: 1.5,
    unit: "rem",
  },
  {
    down: buttonGroup.spacingDownButton,
    up: buttonGroup.spacingUpButton,
    key: "--letter-spacing",
    value: 0,
    unit: "rem",
  },
  {
    selection: buttonGroup.fontSelectionButton,
    sans: buttonGroup.typeSansButton,
    serif: buttonGroup.typeSerifButton,
    mono: buttonGroup.typeMonoButton,
    key: "--font-type",
    value: "inherit",
    unit: "",
  },
  {
    down: buttonGroup.widthDownButton,
    up: buttonGroup.widthUpButton,
    key: "--text-width",
    value: 100,
    unit: "%",
  },
];
