import Immutable from 'seamless-immutable';
import {
  GET_FOLDER_REQUEST,
  GET_FOLDER_SUCCESS,
  GET_FOLDER_FAILED
} from './actions';

const initialState = Immutable({
  busy: false,
  error: null,
  folder: '/',
  selected: null,
  files: null
});

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FOLDER_REQUEST:
      return Immutable({
        ...initialState,
        busy: true,
        ...action.payload
      })
    case GET_FOLDER_SUCCESS:
    case GET_FOLDER_FAILED:
      return Immutable({
        ...state,
        busy: false,
        selected: null,
        ...action.payload
      })
    default:
      return state;
  }
}