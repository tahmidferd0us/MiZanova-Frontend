import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@modules/auth/hooks/useAuth';
import { ROUTES } from './routes';

const GuestRoute = () => {
  const { isAuthenticated, isBootstrapping } = useAuth();

  if (isBootstrapping) return null;

  return isAuthenticated ? <Navigate to={ROUTES.dashboard} replace /> : <Outlet />;
};

export default GuestRoute;
