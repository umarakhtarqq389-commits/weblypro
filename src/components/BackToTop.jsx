// components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </a>
  );
};

export default BackToTop;
