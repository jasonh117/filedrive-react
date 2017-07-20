import axios from 'axios';
import { apiHost } from '../config';

axios.defaults.baseURL = apiHost;

const login = (email, password) => {
  return axios.post('/user/login', { email, password })
    .then((res) => {
      localStorage.setItem('JWT', res.data.data.jwt);
      return res.data.data;
    });
};

export default {
  login
};