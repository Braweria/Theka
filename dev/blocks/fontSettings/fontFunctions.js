/**
 * Object of functions for the different settings
 * @return  {obj}          [return description]
 */
export const fontFunctions = {
  fontDown(obj) {
    return {
      key: obj.key,
      value: obj.value > 0.6 ? obj.value - 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  fontUp(obj) {
    return {
      key: obj.key,
      value: obj.value < 4.9 ? obj.value + 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  lineDown(obj) {
    return {
      key: obj.key,
      value: obj.value > 0.5 ? obj.value - 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  lineUp(obj) {
    return {
      key: obj.key,
      value: obj.value < 5.0 ? obj.value + 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  spacingDown(obj) {
    return {
      key: obj.key,
      value: obj.value > -0.4 ? obj.value - 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  spacingUp(obj) {
    return {
      key: obj.key,
      value: obj.value < 0.4 ? obj.value + 0.1 : obj.value,
      unit: obj.unit,
    };
  },
  widthDown(obj) {
    return {
      key: obj.key,
      value: obj.value > 10 ? obj.value - 10 : obj.value,
      unit: obj.unit,
    };
  },
  widthUp(obj) {
    return {
      key: obj.key,
      value: obj.value < 100 ? obj.value + 10 : obj.value,
      unit: obj.unit,
    };
  },
  fontSelection(obj) {
    // font selection
  },
  typeSans(obj) {
    return {
      key: obj.key,
      value: "sans-serif",
      unit: obj.unit,
    };
  },
  typeSerif(obj) {
    return {
      key: obj.key,
      value: "serif",
      unit: obj.unit,
    };
  },
  typeMono(obj) {
    return {
      key: obj.key,
      value: "monospace",
      unit: obj.unit,
    };
  },
  reset(obj) {
    // code
  },
};
