import axios from 'axios';
import { apiHost } from 'config';

axios.defaults.baseURL = apiHost;

const login = (email, password) => {
  return axios.post('/user/login', { email, password })
    .then((res) => {
      localStorage.setItem('JWT', res.data.data.jwt);
      return res.data.data;
    });
};

const register = (email, password) => {
  return axios.post('/user', { email, password })
    .then((res) => {
      localStorage.setItem('JWT', res.data.data.jwt);
      return res.data.data;
    });
};

const updateSettings = (user) => {
  return axios.patch('/user', user, {
    headers: {
      Authorization: `JWT ${localStorage.getItem('JWT')}`
    }
  })
    .then((res) => {
      return res.data.data;
    });
};

export default {
  login,
  register,
  updateSettings
};