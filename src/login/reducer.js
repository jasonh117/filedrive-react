import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN
} from './actions';

const initialState = {
  id: null,
  email: null,
  busy: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        busy: true
      }
    case RECEIVE_LOGIN:
      return {
        ...state,
        busy: false,
        email: 'blah'
      }
    default:
      return state;
  }
}