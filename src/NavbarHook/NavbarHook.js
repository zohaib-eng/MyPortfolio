import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { faEnvelope, faPhone, faHome  } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./NavbarHook.css";
import "../Image/ImageBar";
import about from "../About/about.js"

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "550px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorite"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <div class="social-container">
            <a
              href="https://www.youtube.com/c/jamesqquick"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "1.4em" }} />
            </a>
            <a
              href="https://www.facebook.com/learnbuildteach/"
              className="facebook social"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: "1.4em" }}
              />
            </a>
            <a
              href="https://www.twitter.com/jamesqquick"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "1.4em" }} />
            </a>
            <a
              href="https://www.instagram.com/learnbuildteach"
              className="instagram social"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "1.4em" }}
              />
            </a>
          </div>
        </li>
      </ul>
    );
  };

  const image = () => {
    return(
      <div className="container-image">
        <div className="backwhite">
          <div className="image-dp">
            <div className="image">
              <img src="pic.jpg" alt="pic.jpg" />
            </div>
          </div>
          <div className="textOne">
              <div className="personaltext">
                <h6>HELLO EVERYBODY, I AM</h6>
                <h1>ZOHAIB AKHTER</h1>
                <h4>SOFTWARE ENGINEER <br></br>MERN STACK DEVELOPER</h4>
                <p>As a MERN stack developer, I specialize in building efficient and interactive web applications using MongoDB, Express.js, React, and Node.js.</p>
                <ul className="basic-info">
                  <li><FontAwesomeIcon icon={faEnvelope} className="icon" /> chzohaib860@gmail.com</li>
                  <li><FontAwesomeIcon icon={faPhone} className="icon" /> +92-304-7649426</li>
                  <li><FontAwesomeIcon icon={faHome} className="icon" /> Lahore, Pakistan</li>
                </ul>
                <div className="social-media-buttons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-button facebook">
        <button type="button">
          <FontAwesomeIcon icon={faFacebook} /> 
        </button>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
        <button type="button">
          <FontAwesomeIcon icon={faLinkedin} /> 
        </button>
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-button youtube">
        <button type="button">
          <FontAwesomeIcon icon={faYoutube} /> 
        </button>
      </a>
    </div>
              </div>
          </div>
        </div>
        
      </div>
    );
  }

  const backimage1 = () => {
    return(
      <div className="container-image">
        <div className="backgroundone">
          {/* <img src="my.png" alt="my.png" /> */}
        </div>
        <div className="backgroundtwo">
          {/* <img src="my.png" alt="my.png" /> */}
        </div>
        <div className="backgroundthree">
          {/* <img src="my.png" alt="my.png" /> */}
        </div>
      </div>
    );
  }

  return (
    <>
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          ZA
        </NavLink>

        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
    {image()}
    {backimage1()}
    {about()}
    </>
    
  );

};

export default NavbarHook;
