import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@modules/auth/hooks/useAuth';
import Spinner from '@shared/components/ui/Spinner';
import { ROUTES } from './routes';

const ProtectedRoute = ({ roles }) => {
  const { isAuthenticated, isBootstrapping, user } = useAuth();
  const location = useLocation();

  if (isBootstrapping)
    return (
      <div className="flex min-h-dvh items-center justify-center text-brand-600">
        <Spinner size="lg" />
      </div>
    );

  if (!isAuthenticated) return <Navigate to={ROUTES.login} state={{ from: location }} replace />;
  if (roles && !roles.includes(user?.role)) return <Navigate to={ROUTES.home} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
