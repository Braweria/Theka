/**
 * Checks if there was a double tap or double click
 */
export const onDoubleTap = (element, func, alsoDblClick = false) => {
  let recentTap = false;

  function handleTap(e) {
    if (!recentTap) {
      recentTap = true;
      setTimeout(() => (recentTap = false), 500);
      return;
    }
    func(e);
  }
  element.addEventListener("touchend", handleTap, false);

  if (alsoDblClick) {
    element.addEventListener("dblclick", func, false);
  }

  return () => {
    element.removeEventListener("touchend", handleTap);
    if (alsoDblClick) {
      element.removeEventListener("dblclick", func);
    }
  };
};
