import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [resetHome, setResetHome] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
  };

  const handleHomeClick = () => {
    setResetHome((prev) => !prev);
  };

  return (
    <div>
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        onHomeClick={handleHomeClick}
      />

      <section id="home">
        <Hero />
      </section>

      <section id="recipes">
        <Home resetHome={resetHome} />
      </section>
    </div>
  );
};

export default App;
