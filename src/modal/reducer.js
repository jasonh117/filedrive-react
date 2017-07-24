import Immutable from 'seamless-immutable';
import {
  TOGGLE_UPLOAD_MODAL
} from 'modal/actions';

const initialState = Immutable({
  uploadModal: false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_UPLOAD_MODAL:
      return Immutable({
        ...state,
        uploadModal: !state.uploadModal
      });
    default:
      return state;
  }
}