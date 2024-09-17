// src/App.js
import React from 'react';
import HeroSection from './Components/Hero';
import YouTubeFeed from './Components/YoutubeFeed';
import TwitterFeed from './Components/TwitterFeed';
import GoogleNewsFeed from './Components/GoogleNewsFeed';
import './App.css'; // Create this CSS file for global styling
import Navbar from './Components/Header';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div>
      <HeroSection />
      </div>
      <div id="section1">
      <YouTubeFeed />
      </div>
      <div id="section2">
      <TwitterFeed />
      </div>
      <div id="section3">
      <GoogleNewsFeed />
      </div>
      
    </div>
  );
};

export default App;
