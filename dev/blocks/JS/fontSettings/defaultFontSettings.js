/**
 * Default Font Settings
 * @const   {object[]}
 */
export const defaultFontSettings = [
  {
    down: "fontDown",
    up: "fontUp",
    key: "--font-size",
    value: 1,
    unit: "rem",
  },
  {
    down: "lineDown",
    up: "lineUp",
    key: "--line-height",
    value: 1.5,
    unit: "rem",
  },
  {
    down: "spacingDown",
    up: "spacingUp",
    key: "--letter-spacing",
    value: 0,
    unit: "rem",
  },
  {
    selection: null,
    sans: "typeSans",
    serif: "typeSerif",
    mono: "typeMono",
    key: "--font-type",
    value: "inherit",
    unit: "",
  },
  {
    down: "widthDown",
    up: "widthUp",
    key: "--text-width",
    value: checkViewport(),
    unit: "%",
  },
];

import { vw } from "../getViewport";

function checkViewport() {
  if (vw >= 1200) {
    return 50;
  } else {
    return 100;
  }
}
