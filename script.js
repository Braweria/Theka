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
  element.addEventListener('touchstart', handleTap, false);

  if (alsoDblClick) {
    element.addEventListener('dblclick', func, false);
  }

  return () => {
    element.removeEventListener('touchstart', handleTap);
    if (alsoDblClick) {
      element.removeEventListener('dblclick', func);
    }
  }
}

onDoubleTap(chapter, e => {
  console.log("double tap that");
});