import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { useLogoutMutation } from '../api/authApi';
import { selectAuthUser, selectIsAuthenticated, selectIsBootstrapping, sessionCleared } from '../store/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [logoutRequest, { isLoading: isLoggingOut }] = useLogoutMutation();

  const logout = async () => {
    await logoutRequest().unwrap().catch(() => null);
    dispatch(sessionCleared());
  };

  return {
    user: useAppSelector(selectAuthUser),
    isAuthenticated: useAppSelector(selectIsAuthenticated),
    isBootstrapping: useAppSelector(selectIsBootstrapping),
    isLoggingOut,
    logout,
  };
};
