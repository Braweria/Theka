const chapter = document.getElementById("chapter");

function onDoubleTap(element, func) {
  let recentTap = false;

  function handleTap(e) {
    if (!recentTap) {
      recentTap = true;
      setTimeout(() => recentTap = false, 500);
      return;
    }
    func(e);
  }
  element.addEventListener("touchstart", handleTap, false);

  return () => element.removeEventListener("touchstart", handleTap);
}

onDoubleTap(chapter, e => {
  console.log("double tap that");
});