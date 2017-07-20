import api from './api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {
    id: data.id,
    email: data.email
  }
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: {
    error: error.response.data.error
  }
});

export const tryLogin = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    return api.login(email, password)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => dispatch(loginFailed(error)));
  };
};