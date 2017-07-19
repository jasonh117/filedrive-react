import axios from 'axios';
import { apiHost } from '../config';

axios.defaults.baseURL = apiHost;

const login = (email, password) => {
  return axios.post('/user/login', { email, password })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.data.error.message);
    });
};

export default {
  login
};