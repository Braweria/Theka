/**
 * Object of functions for the different settings
 * @return  {obj}          [return description]
 */
export const fontFunctions = {
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
    // code
  },
};
