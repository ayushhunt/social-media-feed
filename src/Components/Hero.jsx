// src/components/HeroSection.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './HeroSection.css'; // Create this CSS file for additional styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showStatus={false}
        className="carousel-container"
      >
        <div>
          <img src="image1.png" alt="Banner 1" className="carousel-image" />
          <h1 className="carousel-caption">Welcome to My Feed App</h1>
        </div>
        <div>
          <img src="image2.png" alt="Banner 2" className="carousel-image" />
          <h1 className="carousel-caption">Stay Updated with the Latest News</h1>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
