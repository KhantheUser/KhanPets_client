import { useState } from "react";

function useResize() {
  const [size, setSize] = useState(window.innerWidth);
  var delay = 300;
  var resetTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
      setSize(window.innerWidth);
    }, delay);
  });
  return size;
}
export default useResize;
