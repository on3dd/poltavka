import axios from 'axios';
import { API_BASE_URL } from './constants';
// import Storage from './storage';

// const storage = Storage.getInstance();

const axiosService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    // token: storage.get('token'),
    token: 'bruh',
  },
});

export default axiosService;
