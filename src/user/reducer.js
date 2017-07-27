import Immutable from 'seamless-immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from 'user/actions';

const initialState = Immutable({
  id: null,
  email: null,
  busy: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Immutable({
        ...state,
        busy: true
      });
    case LOGIN_SUCCESS:
      return Immutable({
        ...state,
        busy: false,
        ...action.payload
      });
    case LOGIN_FAILED:
      return Immutable({
        ...state,
        busy: false
      });
    default:
      return state;
  }
}