// Testimonials.jsx
import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import CountUp from "react-countup";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Muhammad Shehbaz",
      role: "CEO, Modern Interprises Solutions.",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764865042/Screenshot_2025-12-04_at_9.17.15_PM_gn4z7n.png",
      rating: 5,
      comment:
        "WeblyPro delivered an exceptionally well-designed and fully informative website that perfectly matches the standards of 2025. Their attention to detail, smooth user experience, and modern UI made our platform stand out—especially for our U.S. audience. The development quality, communication, and overall support were outstanding.",
      category: "Website Development",
      company: "Modern Interprises Solutions",
      date: "March 2025",
    },

    {
      id: 2,
      name: "Shama Faisal",
      role: "CEO, Dillangzo International Academy",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764865350/Screenshot_2025-12-04_at_9.22.24_PM_jfczdb.png",
      rating: 5,
      comment:
        "WeblyPro developed a world-class, multilingual platform for our International Academy. The website is beautifully designed, highly informative, and perfectly structured for global language learners. User experience, speed, and mobile responsiveness are on an exceptional level. This platform has significantly improved our global reach and student engagement.",
      category: "Educational Website Development",
      company: "Dillangzo International Academy",
      date: "May 2025",
    },
    {
      id: 3,
      name: "Sikandar Hayat",
      role: "CEO, Konnect Study Advisor",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764865137/Screenshot_2025-12-04_at_9.18.47_PM_wfqzbi.png",
      rating: 5,
      comment:
        "WeblyPro delivered an exceptionally well-designed and informative study-abroad website for us. Even though I delayed the launch from my side, their work was outstanding. The site is clean, modern, fast, and built exactly according to international standards. Their understanding of the education consulting industry and student needs was impressive.",
      category: "Education & Study Abroad Website",
      company: "Konnect Study Advisor",
      date: "January 2025",
    },

    {
      id: 4,
      name: "Zain-ul-Abedeen",
      role: "Branch Manager",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764868427/Screenshot_2025-12-04_at_10.13.41_PM_lhwhr5.png",
      rating: 5,
      comment:
        "WeblyPro designed a highly professional and user-friendly website for Musa Al Raza Travel & Tours. The layout, tour package presentation, and overall user experience are outstanding. Our clients now find it much easier to explore and book tours. Their work truly elevated our digital presence.",
      category: "Travel & Tours Website",
      company: "Musa Al Raza Travel & Tours",
      date: "December 2024",
    },

    {
      id: 5,
      name: "Muhammad Ali",
      role: "CEO, Textile Hub",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764868406/Screenshot_2025-12-04_at_10.13.19_PM_grkjwy.png",
      rating: 5,
      comment:
        "Our clothing e-commerce website built with PHP and React was developed flawlessly. The product pages, filters, speed, and checkout flow are extremely well optimized. WeblyPro delivered a modern, clean, and fully responsive website that perfectly fits our brand. Highly recommended!",
      category: "E-commerce Development",
      company: "Textile Hub",
      date: "November 2025",
    },
    {
      id: 6,
      name: "Salman Anwaar",
      role: "CEO, Abroad Mentors",
      image:
        "https://res.cloudinary.com/du3tkzdhe/image/upload/v1764868326/Screenshot_2025-12-04_at_10.11.59_PM_txoeo0.png",
      rating: 5,
      comment:
        "Our study abroad website was developed with exceptional clarity and professionalism. The design, speed, and user flow are perfectly optimized for students. WeblyPro delivered exactly what we needed—an informative, modern, and trustworthy platform for international education consulting.",
      category: "Study Abroad Website",
      company: "Abroad Mentors",
      date: "October 2023",
    },
  ];

  // Start counters when component mounts
  useEffect(() => {
    setCountersStarted(true);
  }, []);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`star ${index < rating ? "filled" : ""}`}
      />
    ));
  };

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAnimating]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <h2 className="section-title">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="section-description">
            Trusted by businesses worldwide. See the impact we've made.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className={`testimonial-slider ${isAnimating ? "animating" : ""}`}>
          <div className="slider-wrapper">
            {/* Counter Number Display */}
            <div className="counter-display">
              <div className="counter-number">
                <span className="current-counter">0{activeIndex + 1}</span>
                <span className="counter-divider">/</span>
                <span className="total-counter">0{testimonials.length}</span>
              </div>
              <div className="counter-label">Client Testimonial</div>
            </div>

            {/* Testimonial Card */}
            <div className="testimonial-card">
              {/* Quote Icon */}
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              {/* Rating */}
              <div className="rating-container">
                <div className="stars-wrapper">
                  {renderStars(activeTestimonial.rating)}
                </div>
                <div className="rating-badge">
                  <span className="rating-value">
                    {activeTestimonial.rating}.0
                  </span>
                  <span className="rating-total">/5.0</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "{activeTestimonial.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="author-container">
                <div className="author-info">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <h3 className="author-name">{activeTestimonial.name}</h3>
                    <p className="author-role">{activeTestimonial.role}</p>
                    <div className="company-details">
                      <span className="company-name">
                        {activeTestimonial.company}
                      </span>
                      <span className="service-type">
                        {activeTestimonial.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-date">
                  <span>{activeTestimonial.date}</span>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="slider-controls">
              <button
                className="control-btn prev-btn"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>

              <div className="slider-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className="control-btn next-btn"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section with Counters */}
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">
                {countersStarted && (
                  <CountUp start={0} end={100} duration={3} suffix="%" />
                )}
              </div>
              <p className="stat-label">Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {countersStarted && (
                  <CountUp start={0} end={100} duration={3} suffix="+" />
                )}
              </div>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {countersStarted && (
                  <CountUp start={0} end={4.5} duration={3} decimals={1} />
                )}
                <span className="stat-slash">/5</span>
              </div>
              <p className="stat-label">Average Rating</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {countersStarted && (
                  <CountUp start={0} end={50} duration={3} suffix="+" />
                )}
              </div>
              <p className="stat-label">Repeat Clients</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to write your success story?</h3>
            <p className="cta-text">
              Join our growing list of satisfied clients today.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary-btn">
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="/portfolio" className="cta-btn secondary-btn">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
