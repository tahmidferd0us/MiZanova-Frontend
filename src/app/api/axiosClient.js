import axios from 'axios';
import { env } from '../config/env';
import { tokenStorage } from '@shared/utils/storage';
import { emitUnauthorized } from './authEvents';

export const axiosClient = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});

axiosClient.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let refreshPromise = null;

const refreshAccessToken = () => {
  refreshPromise ??= axios
    .post(`${env.apiBaseUrl}/auth/refresh`, {}, { withCredentials: true })
    .then(({ data }) => {
      tokenStorage.set(data.data.accessToken);
      return data.data.accessToken;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
};

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    const isAuthEndpoint = original?.url?.includes('/auth/login') || original?.url?.includes('/auth/refresh');

    if (error.response?.status !== 401 || original?._retried || isAuthEndpoint) return Promise.reject(error);

    original._retried = true;

    try {
      const token = await refreshAccessToken();
      original.headers.Authorization = `Bearer ${token}`;
      return axiosClient(original);
    } catch (refreshError) {
      tokenStorage.clear();
      emitUnauthorized();
      return Promise.reject(refreshError);
    }
  },
);
