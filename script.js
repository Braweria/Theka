const chapter = document.getElementById("chapter");

function onDoubleTap(element, func, alsoDblClick = false) {
  let recentTap = false;

  function handleTap(e) {
    if (!recentTap) {
      recentTap = true;
      setTimeout(() => recentTap = false, 500);
      return;
    }
    func(e);
  }
  element.addEventListener('touchend', handleTap, false);

  if (alsoDblClick) {
    element.addEventListener('dblclick', func, false);
  }

  return () => {
    element.removeEventListener('touchend', handleTap);
    if (alsoDblClick) {
      element.removeEventListener('dblclick', func);
    }
  }
}

const fontSettings = document.getElementById("font-settings");
let boolFontSettings = false;

onDoubleTap(chapter, e => {
  fontSettings.classList.add("show-flex");
  boolFontSettings = true;
});


window.addEventListener("touchstart", (e) => {
  if (boolFontSettings) {
    const boolInside = e.path.includes(fontSettings);
    if (boolInside) {
      // do something
    } else {
      fontSettings.classList.remove("show-flex");
    }
  }
});