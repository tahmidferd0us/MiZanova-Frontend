import { Link, Navigate, useParams } from 'react-router-dom';
import { env } from '@app/config/env';
import { ROUTES } from '@app/router/routes';
import AuthShell from '@shared/components/layout/AuthShell';
import RegisterForm from '../components/RegisterForm';
import { findSignupPath } from '../constants/signupPaths';

const footerLinks = [
  { label: 'Privacy Policy', href: '/#privacy' },
  { label: 'Terms', href: '/#terms' },
  { label: 'Accessibility', href: '/#accessibility' },
];

const RoleSignupPage = () => {
  const path = findSignupPath(useParams().role);

  if (!path) return <Navigate to={ROUTES.register} replace />;

  return (
    <AuthShell footerNote={`© ${new Date().getFullYear()} ${env.appName} by Special Miles`} footerLinks={footerLinks}>
      <section className="flex w-full max-w-[440px] flex-col gap-8 rounded-xl border border-border-subtle bg-surface p-6 shadow-soft sm:p-10">
        <header className="flex flex-col gap-2 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600">{path.title} sign up</p>
          <h1 className="text-2xl font-bold tracking-tight text-content sm:text-[1.75rem]">Create your account</h1>
          <p className="text-sm text-content-muted">{path.description}</p>
        </header>

        <RegisterForm />

        <p className="text-center text-sm text-content-muted">
          Wrong path?{' '}
          <Link to={ROUTES.register} className="font-semibold text-brand-600 transition-colors hover:text-brand-700">
            Choose a different role
          </Link>
        </p>
      </section>
    </AuthShell>
  );
};

export default RoleSignupPage;
