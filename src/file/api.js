import axios from 'axios';
import { apiHost } from '../config';

axios.defaults.baseURL = apiHost;

const getFileList = (folder) => {
  return axios.get('/file', {
    params: {
      folder
    },
    headers: {
      Authorization: `JWT ${localStorage.getItem('JWT')}`
    }
  })
    .then((res) => {
      return res.data.data;
    });
};

export default {
  getFileList
};