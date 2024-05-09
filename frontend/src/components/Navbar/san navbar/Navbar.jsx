import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./logo.png"
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const newScrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercent(newScrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/About" className="link">About</NavLink>
          <NavLink to="/Contact" className="link">Contact</NavLink>
          {/* Add more NavLink items as needed */}
        </div>
        <div className="buttons">
          <NavLink to="/Button1" className="button">Button 1</NavLink>
          <NavLink to="/Button2" className="button">Button 2</NavLink>
          {/* Add more button links as needed */}
        </div>
        <div className="burger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollPercent}%` }}></div>
      </div>
    </div>
  );
};

export default Navbar;
