import api from 'file/api';
import { closeUploadModal, uploadProgress } from 'modal/actions'

export const GET_FOLDER_REQUEST = 'GET_FOLDER_REQUEST';
export const GET_FOLDER_SUCCESS = 'GET_FOLDER_SUCCESS';
export const GET_FOLDER_FAILED = 'GET_FOLDER_FAILED';
export const HIGHLIGHT_FILE = 'HIGHLIGHT_FILE';
export const CLEAR_HIGHLIGHT = 'CLEAR_HIGHLIGHT';

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

export const highlight = (fileId, extraKey) => {
  return (dispatch, getState) => {
    const fileList = getState().file.files;
    const selected = getState().file.selected;
    let files = null;
    switch (extraKey) {
      case 'meta':
        files = fileList.map(file => (
          file.id === fileId ? { ...file, highlighted: !file.highlighted } : file
        ));
        break;
      case 'shift':
        let selection = false;
        files = fileList.map(file => {
          if (file.id === selected || file.id === fileId) {
            selection = !selection;
          }
          let highlighted = true;
          if (file.id !== fileId && !selection) {
            highlighted = file.highlighted;
          }
          return { ...file, highlighted }
        });
        break;
      default:
        files = fileList.map(file => ({
          ...file, highlighted: file.id === fileId
        }));
    }
    return dispatch({
      type: HIGHLIGHT_FILE,
      payload: {
        files,
        selected: fileId
      }
    });
  }
};

export const clearHighlight = () => ({
  type: CLEAR_HIGHLIGHT
});

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
        refreshDashboard(dispatch);
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

export const refreshDashboard = (dispatch) => {
  dispatch(uploadProgress(0));
  dispatch(closeUploadModal());
  dispatch(tryGetFolder());
};

export const deleteFile = (filename) => {
  return dispatch => {
    return api.deleteFile(filename)
      .then(() => {
        refreshDashboard(dispatch);
      })
  }
};