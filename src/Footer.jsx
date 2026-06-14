import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Al-Jawad</h2>
          <p>
            Authentic Lebanese taste, serving you since 1992. Fresh food, family
            vibes, and unforgettable flavor.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <FaPhone /> +961 XXX XXX
          </p>
          <p>
            <FaMapMarkerAlt /> Lebanon
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Al-Jawad Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
