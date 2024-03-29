import axios from 'axios';
import { apiHost } from 'config';
import { uploadProgress } from 'modal/actions'

axios.defaults.baseURL = apiHost;

const getFileList = (options) => {
  return axios.get('/file', {
    params: options,
    headers: {
      Authorization: `JWT ${localStorage.getItem('JWT')}`
    }
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('JWT');
        return;
      }
      return Promise.reject(error);
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

const deleteFile = (filename) => {
  return axios.delete(`/file/${filename}`, {
    headers: {
      Authorization: `JWT ${localStorage.getItem('JWT')}`
    }
  });
};

export default {
  getFileList,
  uploadFiles,
  deleteFile
};