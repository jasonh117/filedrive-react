import api from './api';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

export const requestLogin = () => ({
  type: REQUEST_LOGIN
});

export const receiveLogin = () => ({
  type: RECEIVE_LOGIN
});

export const tryLogin = (email, password) => {
  return dispatch => {
    dispatch(requestLogin());
    return api.login(email, password)
      .then(() => dispatch(receiveLogin()));
  };
};