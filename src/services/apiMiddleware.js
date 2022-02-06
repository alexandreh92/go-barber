import api from './api';

const apiMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const returnValue = next(action);

    const { token } = getState().auth;

    if (token) {
      api.defaults.headers.common.authorization = token;
    } else {
      delete api.defaults.headers.common.authorization;
    }

    return returnValue;
  };

export default apiMiddleware;
