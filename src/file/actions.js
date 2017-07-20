import api from './api';

export const GET_FOLDER_REQUEST = 'GET_FOLDER_REQUEST';
export const GET_FOLDER_SUCCESS = 'GET_FOLDER_SUCCESS';
export const GET_FOLDER_FAILED = 'GET_FOLDER_FAILED';

export const getFolderRequest = (folder) => ({
  type: GET_FOLDER_REQUEST,
  payload: {
    folder
  }
});

export const getFolderSuccess = (files) => ({
  type: GET_FOLDER_SUCCESS,
  payload: {
    files
  }
});

export const getFolderFailed = (error) => ({
  type: GET_FOLDER_FAILED,
  payload: {
    error: error.response.data.error
  }
});

export const tryGetFolder = (folder) => {
  return dispatch => {
    dispatch(getFolderRequest(folder));
    return api.getFileList(folder)
      .then(data => dispatch(getFolderSuccess(data)))
      .catch(error => dispatch(getFolderFailed(error)));
  };
};