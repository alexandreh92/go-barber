import axios from 'axios';

import { store } from '~/store';

const api = axios.create({
  baseURL: '/api',
});

// INTERCEPTOR FOR AUTH
api.interceptors.request.use(
  (config) => {
    const newConfig = config;

    const { token } = store.getState().auth;

    if (token !== null) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  (err) => Promise.reject(err)
);

export default api;
