// hooks/useScrollAnimation.js
import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9;
    };

    // Add 'show' class to visible elements
    const animateElements = () => {
      const sections = document.querySelectorAll(".section-animate");
      sections.forEach((section) => {
        if (isInViewport(section)) {
          section.classList.add("show");
        }
      });

      const cards = document.querySelectorAll(".card-animate");
      cards.forEach((card) => {
        if (isInViewport(card)) {
          card.classList.add("show");
        }
      });
    };

    // Initial check
    animateElements();

    // Add scroll listener
    window.addEventListener("scroll", animateElements);

    return () => window.removeEventListener("scroll", animateElements);
  }, []);
};

export default useScrollAnimation;
