import axios from 'axios';
import { apiHost } from 'config';
import { uploadProgress } from 'modal/actions'

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

const uploadFiles = (dispatch, files) => {
  const formData = new FormData();
  files.map(file => formData.append('file', file));
  return axios.post(`/file`, formData, {
    headers: {
      Authorization: `JWT ${localStorage.getItem('JWT')}`
    },
    onUploadProgress: e => {
      dispatch(uploadProgress(e.loaded/e.total));
    }
  })
    .then((res) => {
      return res.data.data;
    });
};

export default {
  getFileList,
  uploadFiles
};