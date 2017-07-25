import api from 'file/api';
import { closeUploadModal, uploadProgress } from 'modal/actions'

export const GET_FOLDER_REQUEST = 'GET_FOLDER_REQUEST';
export const GET_FOLDER_SUCCESS = 'GET_FOLDER_SUCCESS';
export const GET_FOLDER_FAILED = 'GET_FOLDER_FAILED';
export const HIGHLIGHT_FILE = 'HIGHLIGHT_FILE';

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

export const getFolderFailed = (error) => (
  error.response ? {
    type: GET_FOLDER_FAILED,
    payload: {
      error: error.response.data.error
    }
  } : {
      type: GET_FOLDER_FAILED,
      payload: {
        error: {
          message: 'Failed to retrieve files.'
        }
      }
    }
);

export const highlight = (fileList, fileId) => {
  const files = fileList.map(file => (
    file.id === fileId ? { ...file, highlighted: !file.highlighted } : file
  ));
  return ({
    type: HIGHLIGHT_FILE,
    payload: {
      files,
      selected: fileId
    }
  });
};

export const tryGetFolder = (folder) => {
  return dispatch => {
    dispatch(getFolderRequest(folder));
    return api.getFileList(folder)
      .then(data => dispatch(getFolderSuccess(data)))
      .catch(error => dispatch(getFolderFailed(error)));
  };
};

export const tryUpload = (files) => {
  return dispatch => {
    return api.uploadFiles(dispatch, files)
      .then(() => {
        dispatch(uploadProgress(0));
        dispatch(closeUploadModal());
        dispatch(tryGetFolder());
      })
      .catch(err => {
        const error = err.response ? err.response.data.error : {
          message: 'Failed to upload.'
        };
        dispatch(uploadProgress(0));
        return Promise.reject(error);
      });
  };
};
