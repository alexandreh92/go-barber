import api from './api';

const apiMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const token = getState?.().auth?.token;

    if (token !== null && token !== undefined) {
      api.interceptors.request.use(
        (config) => {
          const newConfig = config;

          if (token !== null) {
            newConfig.headers.Authorization = `Bearer ${token}`;
          }

          return newConfig;
        },
        (err) => Promise.reject(err)
      );
    }

    const returnValue = next(action);

    return returnValue;
  };

export default apiMiddleware;
