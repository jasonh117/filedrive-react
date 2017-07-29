import Immutable from 'seamless-immutable';
import {
  GET_FOLDER_REQUEST,
  GET_FOLDER_SUCCESS,
  GET_FOLDER_FAILED,
  HIGHLIGHT_FILE,
  CLEAR_HIGHLIGHT
} from 'file/actions';

const initialState = Immutable({
  busy: false,
  error: null,
  folder: '/',
  selected: null,
  files: null,
  sort: 'originalname',
  desc: false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FOLDER_REQUEST:
      return Immutable({
        ...initialState,
        files: state.files,
        busy: true,
        folder: action.payload.folder || state.folder,
        sort: action.payload.sort || state.sort,
        desc: action.payload.desc !== undefined ? action.payload.desc : state.desc
      });
    case GET_FOLDER_SUCCESS:
    case GET_FOLDER_FAILED:
      return Immutable({
        ...initialState,
        folder: state.folder,
        sort: state.sort,
        desc: state.desc,
        ...action.payload
      });
    case HIGHLIGHT_FILE:
      return Immutable({
        ...state,
        ...action.payload
      });
    case CLEAR_HIGHLIGHT:
      const files = state.files.map(file => ({ ...file, highlighted: false }));
      return Immutable({
        ...state,
        files,
        selected: null
      })
    default:
      return state;
  }
}