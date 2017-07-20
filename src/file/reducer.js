import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './actions';

const initialState = {
  id: null,
  email: null,
  busy: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...initialState,
        busy: true
      }
    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
      return {
        ...initialState,
        ...action.payload
      }
    default:
      return state;
  }
}