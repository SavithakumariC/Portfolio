import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-custom" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h2 className="logo-text">Savithakumari C</h2>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <i className={isOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        <div className={`nav-links-wrapper ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#home" className="nav-item" onClick={() => setIsOpen(false)}>HOME</a>
            <a href="#abt" className="nav-item" onClick={() => setIsOpen(false)}>ABOUT ME</a>
            <a href="#skills" className="nav-item" onClick={() => setIsOpen(false)}>SKILLS</a>
            <a href="#projects" className="nav-item" onClick={() => setIsOpen(false)}>PROJECTS</a>
            <a href="#contact" className="nav-item" onClick={() => setIsOpen(false)}>CONTACT</a>
            <a href="/Savithakumari_Resume.pdf" download="Savithakumari_Resume.pdf" className="resume-download-link">
              <button className="resume-btn" aria-label="Download resume">RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;