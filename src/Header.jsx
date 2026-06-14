import React from "react";
import logo from "./assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = ({ ChangePage }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2>Al-Jawad</h2>
      </div>

      <nav className="btn-container">
        <button onClick={() => ChangePage("home")}>Home</button>
        <button onClick={() => ChangePage("menu")}>Menu</button>
      </nav>

      <div className="social-media">
        <a
          href="https://www.facebook.com/aljawad.marwan.ali/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/al_jawad/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/marwan-ali-b16b29133/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
