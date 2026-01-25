// components/AutoScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AutoScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Handle hash links (anchor links)
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const headerHeight =
            document.querySelector("header")?.offsetHeight || 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
    // Scroll to top on regular route change
    else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash, key]);

  return null;
};

export default AutoScrollToTop;
