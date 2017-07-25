import Immutable from 'seamless-immutable';
import {
  OPEN_UPLOAD_MODAL,
  CLOSE_UPLOAD_MODAL,
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
    case UPLOAD_PROGRESS:
      return Immutable({
        ...state,
        uploadProgress: action.payload.progress
      });
    default:
      return state;
  }
}