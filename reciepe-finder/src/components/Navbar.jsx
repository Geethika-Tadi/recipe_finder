import React from "react";
import "./styles/Navbar.css";

const Navbar = ({ toggleDarkMode, darkMode, onHomeClick }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        🍽️ Recipe Finder
      </h1>

      <ul className="nav-links">
        <li><a href="#home" onClick={onHomeClick}>Home</a></li>
        <li><a href="#recipes">Recipes</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <button onClick={toggleDarkMode} className="dark-btn">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;