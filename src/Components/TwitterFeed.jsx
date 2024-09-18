// src/components/TwitterFeed.js
import React, { useEffect, useState } from 'react';
import { fetchTwitterFeed } from '../apiServices';
import './TwitterFeed.css'; // Make sure this CSS file exists

const TwitterFeed = () => {
  // Sample tweets array with URLs and images
  const tweets = [
    {
      urlToImage: "timage1.jpg",
      link: "https://x.com/jayantrld/status/1833611973428146189",
    },
    {
      urlToImage: "timage2.jpg",
      link: "https://x.com/jayantrld/status/1832753569021173979",
    },
    {
      urlToImage: "timage3.jpg",
      link: "https://x.com/jayantrld/status/1831746221712797822",
    },
    {
      urlToImage: "timage4.jpg",
      link: "https://x.com/jayantrld/status/1831714574199857425",
    },
  ];

  // Shuffle the tweets array and select 4 random tweets
  const shuffledTweets = tweets.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="twitter-feed">
      <h2>Twitter Feed</h2>
      <div className="cards">
        {shuffledTweets.map((tweet, index) => (
          <div className="card" key={index}>
            <a href={tweet.link} target="_blank" rel="noopener noreferrer">
              <img src={tweet.urlToImage} alt={`Tweet ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed;
