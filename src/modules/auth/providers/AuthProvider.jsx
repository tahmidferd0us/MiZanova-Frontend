import { useEffect } from 'react';
import { onUnauthorized } from '@app/api/authEvents';
import { useAppDispatch } from '@app/store/hooks';
import { tokenStorage } from '@shared/utils/storage';
import { useMeQuery } from '../api/authApi';
import { bootstrapFinished, sessionCleared } from '../store/authSlice';

const AuthProvider = ({ children }) => {
  const dispatch = useAppDispatch();
  const hasToken = Boolean(tokenStorage.get());

  useMeQuery(undefined, { skip: !hasToken });

  useEffect(() => {
    if (!hasToken) dispatch(bootstrapFinished());
  }, [hasToken, dispatch]);

  useEffect(() => onUnauthorized(() => dispatch(sessionCleared())), [dispatch]);

  return children;
};

export default AuthProvider;
