import Immutable from 'seamless-immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './actions';

const initialState = Immutable({
  id: null,
  email: null,
  busy: false,
  error: null
});

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return Immutable({
        ...initialState,
        busy: true
      });
    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
      return Immutable({
        ...initialState,
        ...action.payload
      });
    default:
      return state;
  }
}