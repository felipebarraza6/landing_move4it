import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api', // Default to local for now
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
