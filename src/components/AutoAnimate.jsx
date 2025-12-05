// components/AutoAnimate.jsx
import { useEffect } from "react";

const AutoAnimate = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      // Animate sections
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
          section.classList.add("animated");
        }
      });

      // Animate cards
      const cards = document.querySelectorAll(
        ".card, .service-card, .portfolio-card, .team-member, .testimonial-card, .info-card, .form-wrapper"
      );
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight * 0.85) {
          card.classList.add("animated");
        }
      });
    };

    // Run on load
    animateOnScroll();

    // Run on scroll
    window.addEventListener("scroll", animateOnScroll);

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AutoAnimate;
