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

  element.addEventListener('touchstart', handleTap, false);

  if (alsoDblClick) {
    element.addEventListener('dblclick', func, false);
  }

  return function () {
    element.removeEventListener('touchstart', handleTap);

    if (alsoDblClick) {
      element.removeEventListener('dblclick', func);
    }
  };
}

onDoubleTap(chapter, function (e) {
  console.log("double tap that");
});