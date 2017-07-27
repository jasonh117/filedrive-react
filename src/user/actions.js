import api from 'user/api';

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

export const loginFailed = () => ({
  type: LOGIN_FAILED
});

const getError = (error) => {
  if (typeof error === 'string') {
    return {
      message: error
    };
  }
  if (error.response) {
    return error.response.data.error;
  }
  return {
    message: 'Failed to login'
  };
};

export const tryLogin = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    return api.login(email, password)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => {
        dispatch(loginFailed(error));
        return Promise.reject(getError(error));
      });
  };
};

export const tryRegister = (email, password) => {
  return dispatch => {
    dispatch(loginRequest());
    return api.register(email, password)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => {
        dispatch(loginFailed(error));
        return Promise.reject(getError(error));
      });
  };
};

export const updateSettings = (user) => {
  return dispatch => {
    dispatch(loginRequest());
    return api.updateSettings(user)
      .then(data => dispatch(loginSuccess(data)))
      .catch(error => {
        dispatch(loginFailed(error));
        return Promise.reject(getError(error));
      });
  };
};
