import { useState, useCallback, useEffect } from "react"

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState(null);

  const updateWindowWidth = useCallback(
    () => { if (window) setWindowWidth(window.innerWidth) },
    []
  );

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', updateWindowWidth);
      updateWindowWidth();
    };

    return () => {
      if (window) window.removeEventListener('resize', updateWindowWidth);
    }
  }, []);

  return windowWidth;
}
