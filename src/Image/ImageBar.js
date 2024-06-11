import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
// import { useMediaQuery } from "react-responsive";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import "./setImage.css";

// const NavbarHook = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isMobile = useMediaQuery({ maxWidth: "550px" });

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//     }
//   };

  const ImageBar = () => {
    // const listClassName = isMobile ? "nav__list" : "nav__list__web";
    // const linkClassName = "nav__link";
    // const buttonClassName = "nav__cta";

    return (
      <div className="image">
        <img src="my.png" alt="my.png" />
      </div>
    );
  };

//   return (
//     <header className="header">
//       <nav className="nav container">
//         <NavLink to="/" className="nav__logo">
//           ZA
//         </NavLink>

//         {isMobile && (
//           <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//             <IoMenu />
//           </div>
//         )}

//         {isMobile ? (
//           <div
//             className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
//             id="nav-menu"
//           >
//             {renderNavLinks()}
//             <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//               <IoClose />
//             </div>
//           </div>
//         ) : (
//           renderNavLinks()
//         )}
//       </nav>
//     </header>
//   );
// };

export default ImageBar;
