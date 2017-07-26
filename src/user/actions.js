import api from 'user/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_RESET = 'LOGIN_RESET';

export const loginReset = () => ({
  type: LOGIN_RESET
});

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

export const loginFailed = (error) => {
  if (typeof error === 'string') {
    return {
      type: LOGIN_FAILED,
      payload: {
        error: {
          message: error
        }
      }
    };
  }

  if (error.response) {
    return {
      type: LOGIN_FAILED,
      payload: {
        error: error.response.data.error
      }
    }
  }

  return {
    type: LOGIN_FAILED,
    payload: {
      error: {
        message: 'Failed to login.'
      }
    }
  };
};

export const tryLogin = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    return api.login(email, password)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => dispatch(loginFailed(error)));
  };
};

export const tryRegister = (email, password, confirmPassword) => {
  return dispatch => {
    if (password !== confirmPassword) {
      return dispatch(loginFailed('Passwords do not match.'));
    }
    dispatch(loginRequest());
    return api.register(email, password)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => dispatch(loginFailed(error)));
  };
};