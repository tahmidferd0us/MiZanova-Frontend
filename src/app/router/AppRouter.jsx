import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@shared/components/layout';
import Spinner from '@shared/components/ui/Spinner';
import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from './routes';

const HomePage = lazy(() => import('@modules/home/pages/HomePage'));
const ForSchoolPage = lazy(() => import('@modules/marketing/pages/ForSchoolPage'));
const ForParentPage = lazy(() => import('@modules/marketing/pages/ForParentPage'));
const ForSpecialistPage = lazy(() => import('@modules/marketing/pages/ForSpecialistPage'));
const PricingPage = lazy(() => import('@modules/marketing/pages/PricingPage'));
const ResourcesPage = lazy(() => import('@modules/marketing/pages/ResourcesPage'));
const AboutPage = lazy(() => import('@modules/marketing/pages/AboutPage'));
const LoginPage = lazy(() => import('@modules/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('@modules/auth/pages/RegisterPage'));
const RoleSignupPage = lazy(() => import('@modules/auth/pages/RoleSignupPage'));
const ForgotPasswordPage = lazy(() => import('@modules/auth/pages/ForgotPasswordPage'));
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
        <Route path={ROUTES.forSchool} element={<ForSchoolPage />} />
        <Route path={ROUTES.forParent} element={<ForParentPage />} />
        <Route path={ROUTES.forSpecialist} element={<ForSpecialistPage />} />
        <Route path={ROUTES.pricing} element={<PricingPage />} />
        <Route path={ROUTES.resources} element={<ResourcesPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.dashboard} element={<DashboardPage />} />
        </Route>
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Route>

      <Route element={<GuestRoute />}>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.register} element={<RegisterPage />} />
        <Route path={ROUTES.registerRole} element={<RoleSignupPage />} />
        <Route path={ROUTES.forgotPassword} element={<ForgotPasswordPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRouter;
