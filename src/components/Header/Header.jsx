import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure to adjust the path for your CSS file

const Header = () => {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <header className={`header ${showContent ? "transition" : ""}`}>
      <div className="logo-container">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          Naman.
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={handleLogoClick}>
          Home
        </Link>
        <Link to="/" onClick={handleLogoClick}>
          Skillset
        </Link>
        <Link to="/" onClick={handleLogoClick}>
          Work Experience
        </Link>
        <Link to="/" onClick={handleLogoClick}>
          Projects
        </Link>
        <Link to="/case-studies">Case Study</Link>
      </nav>
    </header>
  );
};

export default Header;
