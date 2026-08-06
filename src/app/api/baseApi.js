import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const TAG_TYPES = { AUTH: 'Auth', USER: 'User' };

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: Object.values(TAG_TYPES),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
