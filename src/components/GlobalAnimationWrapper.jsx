// components/GlobalAnimationWrapper.jsx
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GlobalAnimationWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize animations on mount and route change
    const initAnimations = () => {
      // Add CSS animations to main sections
      const sections = containerRef.current?.querySelectorAll("section");
      if (sections) {
        sections.forEach((section, index) => {
          section.style.opacity = "0";
          section.style.transform = "translateY(30px)";
          section.style.transition = `opacity 0.6s ease ${
            index * 0.1
          }s, transform 0.6s ease ${index * 0.1}s`;

          // Trigger animation
          setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
          }, 100 + index * 100);
        });
      }

      // Add animations to cards
      const cards = containerRef.current?.querySelectorAll(
        ".card, .service-card, .portfolio-card, .team-member, .testimonial-card"
      );
      if (cards) {
        cards.forEach((card, index) => {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95) translateY(20px)";
          card.style.transition = `opacity 0.5s ease ${
            index * 0.05
          }s, transform 0.5s ease ${index * 0.05}s`;

          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1) translateY(0)";
          }, 200 + index * 50);
        });
      }

      // Add animations to headings
      const headings = containerRef.current?.querySelectorAll(
        "h1, h2, h3, .section-title"
      );
      if (headings) {
        headings.forEach((heading, index) => {
          heading.style.opacity = "0";
          heading.style.transform = "translateY(20px)";
          heading.style.transition = `opacity 0.5s ease ${
            index * 0.1
          }s, transform 0.5s ease ${index * 0.1}s`;

          setTimeout(() => {
            heading.style.opacity = "1";
            heading.style.transform = "translateY(0)";
          }, 100 + index * 100);
        });
      }

      // Add animations to paragraphs
      const paragraphs =
        containerRef.current?.querySelectorAll("p:not(.no-animate)");
      if (paragraphs) {
        paragraphs.forEach((p, index) => {
          p.style.opacity = "0";
          p.style.transform = "translateY(10px)";
          p.style.transition = `opacity 0.4s ease ${
            index * 0.05
          }s, transform 0.4s ease ${index * 0.05}s`;

          setTimeout(() => {
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
          }, 300 + index * 50);
        });
      }

      // Add hover animations to buttons
      const buttons = containerRef.current?.querySelectorAll(
        ".btn, button:not(.no-animate)"
      );
      if (buttons) {
        buttons.forEach((btn, index) => {
          btn.style.transition = "all 0.3s ease";

          // Add hover effect
          btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-3px)";
          });

          btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
          });
        });
      }
    };

    // Run animations after a short delay
    const timeoutId = setTimeout(initAnimations, 300);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]); // Re-run on route change

  // Add scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements =
        containerRef.current?.querySelectorAll(".animate-on-scroll");
      if (elements) {
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.9;

          if (isVisible) {
            element.classList.add("animated");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="global-animation-wrapper">
      {children}
    </div>
  );
};

export default GlobalAnimationWrapper;
