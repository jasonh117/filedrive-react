import axios from 'axios';
import fileDownload from 'react-file-download';
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

const downloadFile = (file) => {
  return axios.get(`/file/${file.filename}`, {
    responseType: 'arraybuffer',
    headers: {
      Authorization: `JWT ${localStorage.getItem('JWT')}`
    }
  })
    .then((res) => {
      fileDownload(res.data, file.originalname);
    });
};

export default {
  getFileList,
  downloadFile
};