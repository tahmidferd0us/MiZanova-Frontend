import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { toasts: [], isSidebarOpen: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toastPushed: {
      reducer: (state, action) => {
        state.toasts.push(action.payload);
      },
      prepare: ({ title, description = '', variant = 'info', duration = 4000 }) => ({
        payload: { id: nanoid(), title, description, variant, duration },
      }),
    },
    toastDismissed: (state, action) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    },
    toastsCleared: (state) => {
      state.toasts = [];
    },
    sidebarToggled: (state, action) => {
      state.isSidebarOpen = action.payload ?? !state.isSidebarOpen;
    },
  },
});

export const { toastPushed, toastDismissed, toastsCleared, sidebarToggled } = uiSlice.actions;

export const selectToasts = (state) => state.ui.toasts;
export const selectIsSidebarOpen = (state) => state.ui.isSidebarOpen;

export default uiSlice.reducer;
