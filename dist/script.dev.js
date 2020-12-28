"use strict";

var chapter = document.getElementById("chapter");

function onDoubleTap(element, func) {
  var alsoDblClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var recentTap = false;

  function handleTap(e) {
    if (!recentTap) {
      recentTap = true;
      setTimeout(function () {
        return recentTap = false;
      }, 500);
      return;
    }

    func(e);
  }

  element.addEventListener('touchend', handleTap, false);

  if (alsoDblClick) {
    element.addEventListener('dblclick', func, false);
  }

  return function () {
    element.removeEventListener('touchend', handleTap);

    if (alsoDblClick) {
      element.removeEventListener('dblclick', func);
    }
  };
}

var fontSettings = document.getElementById("font-settings");
var boolFontSettings = false;
onDoubleTap(chapter, function (e) {
  fontSettings.classList.add("show-flex");
  boolFontSettings = true;
});
window.addEventListener("touchstart", function (e) {
  if (boolFontSettings) {
    var boolInside = e.path.includes(fontSettings);

    if (boolInside) {// do something
    } else {
      fontSettings.classList.remove("show-flex");
    }
  }
});