// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#section1">YouTube Feed</a>
        </li>
        <li className="nav-item">
          <a href="#section2">Twitter Feed</a>
        </li>
        <li className="nav-item">
          <a href="#section3">Google News Feed</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
