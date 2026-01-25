// HeaderWithSidebar.jsx - Updated with dropdown positioning fix
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaBars,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaTimes,
  FaChevronUp,
} from "react-icons/fa";

const HeaderWithSidebar = () => {
  // States
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownBtnRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  // Auto-position dropdown to prevent cutoff
  useEffect(() => {
    const handleDropdownPosition = () => {
      if (dropdownContainerRef.current && servicesOpen) {
        const container = dropdownContainerRef.current;
        const dropdown = container.querySelector(".dropdown-menu");
        if (!dropdown) return;

        const containerRect = container.getBoundingClientRect();
        const dropdownRect = dropdown.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        // Check if dropdown would overflow on the right
        const wouldOverflowRight =
          containerRect.left + dropdownRect.width > viewportWidth - 20;

        // Check if dropdown would overflow on the left
        const wouldOverflowLeft = containerRect.right - dropdownRect.width < 20;

        if (wouldOverflowRight && !wouldOverflowLeft) {
          // Position dropdown to the left of the button
          dropdown.style.left = "auto";
          dropdown.style.right = "0";
        } else if (wouldOverflowLeft && !wouldOverflowRight) {
          // Position dropdown to the right of the button
          dropdown.style.left = "0";
          dropdown.style.right = "auto";
        } else {
          // Default position (centered under button)
          dropdown.style.left = "0";
          dropdown.style.right = "auto";
        }
      }
    };

    if (servicesOpen) {
      handleDropdownPosition();
      window.addEventListener("resize", handleDropdownPosition);
    }

    return () => {
      window.removeEventListener("resize", handleDropdownPosition);
    };
  }, [servicesOpen]);

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    {
      id: 2,
      label: "Services",
      link: "/services",
      dropdown: true,
      dropdownItems: [
        { label: "Website Development", link: "/services#website-development" },
        { label: "Shopify Development", link: "/services#shopify-development" },
        {
          label: "WordPress Development",
          link: "/services#wordpress-development",
        },
        { label: "Digital Marketing", link: "/services#digital-marketing" },
        { label: "Graphic Designing", link: "/services#graphic-designing" },
        { label: "SEO Optimization", link: "/services#seo-optimization" },
        { label: "Video Editing", link: "/services#video-editing" },
        {
          label: "Mobile App Development",
          link: "/services#mobile-app-development",
        },
      ],
    },
    { id: 3, label: "Our Project", link: "/portfolio" },
    { id: 4, label: "About", link: "/about" },
    { id: 5, label: "Contact", link: "/contact" },
  ];

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleServicesHover = (open) => {
    setServicesOpen(open);
  };

  return (
    <>
      {/* Combined Header Component */}
      <header className={`header-combined ${scrolled ? "scrolled" : ""}`}>
        {/* Topbar Section */}
        <div className="header-topbar">
          <div className="container">
            <div className="topbar-content">
              {/* Left Side: Support Info */}
              <div className="topbar-left">
                <div className="support-info">
                  <FaPhone className="phone-icon" />
                  <span className="support-label">Support By:</span>
                  <span className="support-number">+92 313 6928882</span>
                </div>
              </div>

              {/* Right Side: Social Icons */}
              <div className="topbar-right">
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=61577731470061"
                    className="social-icon"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/weblypro/"
                    className="social-icon"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/webly_pro1/"
                    className="social-icon"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.tiktok.com/@weblypro?_r=1&_t=ZS-91wIGpgWl0B"
                    className="social-icon"
                    aria-label="TikTok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Section */}
        <div className="header-main">
          <div className="container">
            <div className="header-content">
              {/* Logo */}
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dnvkirfyz/image/upload/v1764780020/Blue_and_Pink_Y2k_Denim_Playful_Presentation_1_oq09ea.png"
                    alt="WeblyPro Logo"
                    className="logo-img"
                  />
                </Link>
              </div>

              {/* Desktop Navigation Menu */}
              <nav className="nav-menu">
                <ul className="nav-list">
                  {menuItems.map((item) => (
                    <li key={item.id} className="nav-item">
                      {item.dropdown ? (
                        <div
                          className="dropdown-container"
                          ref={dropdownContainerRef}
                          onMouseEnter={() => handleServicesHover(true)}
                          onMouseLeave={() => handleServicesHover(false)}
                        >
                          <button
                            ref={dropdownBtnRef}
                            className="nav-link dropdown-btn"
                            onClick={toggleServices}
                          >
                            {item.label}
                            <FaChevronDown
                              className={`dropdown-icon ${
                                servicesOpen ? "rotated" : ""
                              }`}
                            />
                          </button>

                          <div
                            ref={dropdownRef}
                            className={`dropdown-menu ${
                              servicesOpen ? "open" : ""
                            }`}
                          >
                            <div className="dropdown-content">
                              {item.dropdownItems.map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.link}
                                  className="dropdown-item"
                                  onClick={() => {
                                    setServicesOpen(false);
                                    if (sidebarOpen) closeSidebar();
                                  }}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.link}
                          className="nav-link"
                          onClick={() => setServicesOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Get Quote Button */}
              <Link
                to="/contact"
                className="quote-btn"
                onClick={() => setServicesOpen(false)}
              >
                Get Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="hamburger"
                onClick={toggleSidebar}
                aria-label="Open menu"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          {/* Sidebar Header */}
          <div className="sidebar-header">
            <button
              className="close-btn"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="sidebar-nav">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <div className="dropdown-section">
                      <button
                        className="nav-link dropdown-toggle"
                        onClick={toggleMobileServices}
                      >
                        {item.label}
                        {mobileServicesOpen ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>

                      {mobileServicesOpen && (
                        <div className="dropdown-items">
                          {item.dropdownItems.map((service, idx) => (
                            <Link
                              key={idx}
                              to={service.link}
                              className="dropdown-item"
                              onClick={closeSidebar}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="nav-link"
                      onClick={closeSidebar}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="sidebar-footer">
            <div className="sidebar-social">
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61577731470061"
                  className="social-icon"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/weblypro/"
                  className="social-icon"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/webly_pro1/"
                  className="social-icon"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@weblypro?_r=1&_t=ZS-91wIGpgWl0B"
                  className="social-icon"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWithSidebar;
