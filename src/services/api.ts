import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;