import { baseApi, TAG_TYPES } from '@app/api/baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({ url: '/auth/register', method: 'POST', data: body }),
      invalidatesTags: [TAG_TYPES.AUTH],
    }),
    login: builder.mutation({
      query: (body) => ({ url: '/auth/login', method: 'POST', data: body }),
      invalidatesTags: [TAG_TYPES.AUTH],
    }),
    logout: builder.mutation({
      query: () => ({ url: '/auth/logout', method: 'POST' }),
      invalidatesTags: [TAG_TYPES.AUTH],
    }),
    me: builder.query({
      query: () => ({ url: '/auth/me' }),
      providesTags: [TAG_TYPES.AUTH],
    }),
    changePassword: builder.mutation({
      query: (body) => ({ url: '/auth/change-password', method: 'PATCH', data: body }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useMeQuery, useChangePasswordMutation } = authApi;
