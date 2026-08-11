import { baseApi } from '@app/api/baseApi';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { useLogoutMutation } from '../api/authApi';
import { selectAuthUser, selectIsAuthenticated, selectIsBootstrapping, sessionCleared } from '../store/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [logoutRequest, { isLoading: isLoggingOut }] = useLogoutMutation();

  const logout = async () => {
    dispatch(sessionCleared());
    dispatch(baseApi.util.resetApiState());
    await logoutRequest().unwrap().catch(() => null);
  };

  return {
    user: useAppSelector(selectAuthUser),
    isAuthenticated: useAppSelector(selectIsAuthenticated),
    isBootstrapping: useAppSelector(selectIsBootstrapping),
    isLoggingOut,
    logout,
  };
};
