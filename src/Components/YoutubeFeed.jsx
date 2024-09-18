// // src/components/YouTubeFeed.js
// import React, { useEffect, useState } from 'react';
// import { fetchYouTubeFeed } from '../apiServices';
// import './YoutubeFeed.css'; // Create this CSS file for styling

// const YouTubeFeed = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const loadVideos = async () => {
//       const videoData = await fetchYouTubeFeed('Jayant Choutdhary union minister');
//       setVideos(videoData);
//     };

//     loadVideos();
//   }, []);

//   return (
//     <div className="youtube-feed">
//       <h2>YouTube Feed</h2>
//       <div className="cards">
//         {videos.map((video) => (
//           <div className="card" key={video.id.videoId}>
//             <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
//             <h3>{video.snippet.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YouTubeFeed;

import React from 'react';

const YouTubeFeed = () => {
  // Hardcoded dummy data for YouTube videos
  const videos = [
    { id: "vid1", title: "Jayant Singh Chaudhary takes oath as a Minister PM Modi-led NDA govt", image: "yimage1.jpg" },
    { id: "vid2", title: "Lok Sabha Elections 2024: RLD's Jayant Chaudhary Calls A Meeting With His 2 MPs Who Won | N18ER", image: "yimage2.jpg" },
    { id: "vid3", title: "Jayant Chaudhary Speech: जब शाह के सामने जयंत ने भरी हुंकार! | Lok Sabha Election 2024 | Amit Shah", image: "yimage3.jpg" },
    { id: "vid4", title: "Jayant Chaudhary LIVE: There will be a tough contest this time in Baghpat, listen to what Jayant Chaudhary said?", image: "yimage4.jpg" },
    { id: "vid5", title: "PM Modi 3.0 New Cabinet Update: मंत्री बनने के बाद Jayant Chaudhary 'जीवन में मोड़ आते हैं'", image: "yimage5.jpg" },
    { id: "vid6", title: "Lok Sabha Elections 2024: Jayant Chaudhary To Meet Newly Elected RLD MPs | N18ER | English News", image: "yimage6.jpg" },
    // { id: "vid7", title: "पहली बार 100 दिनों में अभूतपूर्व काम हुआ, टारगेट को सिर्फ पूरा नहीं बल्कि उसे पार किया गया: जयंत चौधरी - 100 days of Modi government", image: "yimage" },
    // { id: "vid8", title: "Responsive Web Design with Flexbox", image: "images/flexbox.png" },
    // { id: "vid9", title: "Building REST APIs with Express.js", image: "images/express.png" },
  ];

  // Shuffle the array and select 6 random videos
  const randomVideos = videos.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className="youtube-feed">
      <h2>YouTube Feed</h2>
      <div className="cards">
        {randomVideos.map((video) => (
          <div className="card" key={video.id}>
            <img src={video.image} alt={video.title} />
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeFeed;
