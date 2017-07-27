import Immutable from 'seamless-immutable';
import {
  OPEN_UPLOAD_MODAL,
  CLOSE_UPLOAD_MODAL,
  OPEN_CONTENT_MODAL,
  CLOSE_CONTENT_MODAL,
  UPLOAD_PROGRESS
} from 'modal/actions';

const initialState = Immutable({
  uploadModal: false,
  uploadProgress: 0
});

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_UPLOAD_MODAL:
      return Immutable({
        ...state,
        uploadModal: true
      });
    case CLOSE_UPLOAD_MODAL:
      return Immutable({
        ...state,
        uploadModal: false
      });
    case OPEN_CONTENT_MODAL:
      return Immutable({
        ...state,
        contentModal: true
      });
    case CLOSE_CONTENT_MODAL:
      return Immutable({
        ...state,
        contentModal: false
      });
    case UPLOAD_PROGRESS:
      return Immutable({
        ...state,
        uploadProgress: action.payload.progress
      });
    default:
      return state;
  }
}