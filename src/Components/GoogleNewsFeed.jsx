// src/components/GoogleNewsFeed.js
import React, { useEffect, useState } from 'react';
import { fetchGoogleNewsFeed } from '../apiServices';
import './GoogleNewsFeed.css'; // Create this CSS file for styling

const GoogleNewsFeed = () => {
  //const [articles, setArticles] = useState([]);
  const articles = [
    {
      urlToImage: "aimage1.jpg",
      title: "पहली बार 100 दिनों में अभूतपूर्व काम हुआ, टारगेट को सिर्फ पूरा नहीं बल्कि उसे पार किया गया: जयंत चौधरी - 100 days of Modi government",
      link:"https://www.etvbharat.com/hi/!bharat/jayant-chaudhary-said-for-the-first-time-unprecedented-work-was-done-in-100-days-hindi-news-jhn24091707468"
    },
    {
      urlToImage: "aimage2.jpg",
      title: "Jayant Chaudhary Visits France to Cheer for Team India at WorldSkills 2024; 60 Participants Competing in 52 Skills",
      link: "https://www.business-standard.com/content/press-releases-ani/jayant-chaudhary-visits-france-to-cheer-for-team-india-at-worldskills-2024-60-participants-competing-in-52-skills-124091300607_1.html",
    },
    {
      urlToImage: "aimage3.jpg",
      title: "Empowering Women and Youth: Shri Jayant Chaudhary unveils an array of Skill Development initiatives in Ranchi",
      link: "https://indiaeducationdiary.in/empowering-women-and-youth-shri-jayant-chaudhary-unveils-an-array-of-skill-development-initiatives-in-ranchi/",
    },
    {
      urlToImage: "aimage4.jpg",
      title: "झारखंड: पीएम मोदी के जन्मदिन पर मंत्री संजय सेठ और जयंत चौधरी ने पौधारोपण किया",
      link: "https://jantaserishta.com/others/jharkhand-ministers-sanjay-seth-and-jayant-chaudhary-planted-saplings-on-pm-modis-birthday-3531751",
    },
    // {
    //   urlToImage: "https://via.placeholder.com/150",
    //   title: "JavaScript: Tips and Tricks for Mastering the Language",
    //   description: "JavaScript remains a vital skill for web developers. Here are some expert tips to sharpen your JS skills.",
    // },
  ];
  

  // useEffect(() => {
  //   const loadArticles = async () => {
  //     const articleData = await fetchGoogleNewsFeed('jayant choudhary');
  //     setArticles(articleData);
  //   };

  //   loadArticles();
  // }, []);
  const shuffledArticles = articles.sort(() => 0.5 - Math.random()).slice(0, 5);
  return (
    <div className="google-news-feed">
      <h2>Google News Feed</h2>
      <div className="cards">
        {shuffledArticles.map((article, index) => (
          <div className="card" key={index}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt={article.title} />
            </a>
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleNewsFeed;
