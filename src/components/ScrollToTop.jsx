// components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href="#top"
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </a>
  );
};

export default ScrollToTop;
