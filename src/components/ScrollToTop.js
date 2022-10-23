import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Represents the current browser url
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the page to the top when the path name changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
