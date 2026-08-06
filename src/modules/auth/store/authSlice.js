import { createSlice } from '@reduxjs/toolkit';
import { tokenStorage } from '@shared/utils/storage';
import { authApi } from '../api/authApi';

const initialState = { user: null, accessToken: tokenStorage.get(), isBootstrapping: true };

const applySession = (state, { user, accessToken }) => {
  state.user = user;
  state.accessToken = accessToken;
  state.isBootstrapping = false;
  tokenStorage.set(accessToken);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sessionCleared: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isBootstrapping = false;
      tokenStorage.clear();
    },
    bootstrapFinished: (state) => {
      state.isBootstrapping = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => applySession(state, payload.data))
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => applySession(state, payload.data))
      .addMatcher(authApi.endpoints.me.matchFulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.isBootstrapping = false;
      })
      .addMatcher(authApi.endpoints.me.matchRejected, (state) => {
        state.isBootstrapping = false;
      });
  },
});

export const { sessionCleared, bootstrapFinished } = authSlice.actions;

export const selectAuthUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => Boolean(state.auth.user);
export const selectIsBootstrapping = (state) => state.auth.isBootstrapping;

export default authSlice.reducer;
