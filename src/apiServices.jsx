// src/apiService.js
import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyBllryUFiMT7_XV5_vwuEXzxvd2iSjNtws';
const TWITTER_BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAOG8vwEAAAAA2xx1RB9Z4OYzYxC7%2Fn1o9SayCZE%3Dk7KxkGUvnS9jxFaFO5Z8DVdnLGU7zuqEerUUHJLAXD7HTrZBwO';
const NEWS_API_KEY = '060e3e3a49fb45db9c8ce5aa5d169a7f';

export const fetchYouTubeFeed = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 8,
        q: query,
        key: YOUTUBE_API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return [];
  }
};

export const fetchTwitterFeed = async (query) => {
  try {
    const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
      params: {
        query: query,
        max_results: 3,
      },
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    return [];
  }
};

export const fetchGoogleNewsFeed = async (query) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        q: query,
        country:'in',
        apiKey: NEWS_API_KEY,
        pageSize: 4,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching Google News data:', error);
    return [];
  }
};
