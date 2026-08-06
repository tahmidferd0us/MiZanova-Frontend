import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '@shared/components/layout';
import Spinner from '@shared/components/ui/Spinner';
import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from './routes';

const HomePage = lazy(() => import('@modules/home/pages/HomePage'));
const LoginPage = lazy(() => import('@modules/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('@modules/auth/pages/RegisterPage'));
const DashboardPage = lazy(() => import('@modules/dashboard/pages/DashboardPage'));
const NotFoundPage = lazy(() => import('@shared/components/feedback/NotFoundPage'));

const Fallback = () => (
  <div className="flex min-h-dvh items-center justify-center text-brand-600">
    <Spinner size="lg" />
  </div>
);

const AppRouter = () => (
  <Suspense fallback={<Fallback />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.dashboard} element={<DashboardPage />} />
        </Route>
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Route>

      <Route element={<GuestRoute />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.register} element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
);

export default AppRouter;
