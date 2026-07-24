import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = ({ toggleDarkMode, darkMode, onHomeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        🍽️ Recipe Finder
      </h1>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            onClick={() => {
              onHomeClick();
              closeMenu();
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#recipes"
            onClick={closeMenu}
          >
            Recipes
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <button
            onClick={() => {
              toggleDarkMode();
              closeMenu();
            }}
            className="dark-btn"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
