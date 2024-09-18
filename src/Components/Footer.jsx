// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Ensure this CSS file exists for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Made by Tata Strive</p>
      </div>
      <div className="footer-right">
        <nav>
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
