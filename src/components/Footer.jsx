// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">
              Webly<span className="purple-gradient">Pro</span>
            </h3>
            <p className="footer-description">
              We create digital experiences that help businesses grow in the
              modern world. Professional web development and digital solutions.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61577731470061"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/in/weblypro/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/webly_pro1/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/weblypro1-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services#web">Web Development</Link>
              </li>
              <li>
                <Link to="/services#shopify">Shopify Development</Link>
              </li>
              <li>
                <Link to="/services#wordpress">WordPress Development</Link>
              </li>
              <li>
                <Link to="/services#marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services#graphic">Graphic Design</Link>
              </li>
              <li>
                <Link to="/services#seo">SEO Optimization</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <span>147-A People's Colony No.1</span>
                  <span>Near Faisal Hospital,</span>
                  <span>Faisalabad, Pakistan</span>
                </div>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <a href="tel:+923136928882" className="contact-link">
                  +92 313 6928882
                </a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:weblypro1@gmail.com" className="contact-link">
                  weblypro1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} WeblyPro. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link to="/">Terms of Service</Link>
              <span className="divider">|</span>
              <Link to="/">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
