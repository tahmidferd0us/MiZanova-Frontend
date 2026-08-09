import { Link } from 'react-router-dom';
import { env } from '@app/config/env';
import { ROUTES } from '@app/router/routes';
import AuthShell from '@shared/components/layout/AuthShell';
import LoginForm from '../components/LoginForm';
import SocialAuthButtons from '../components/SocialAuthButtons';

const footerLinks = [
  { label: 'Privacy Policy', href: '/#privacy' },
  { label: 'Help Center', href: '/#help' },
];

const LoginPage = () => (
  <AuthShell footerNote={`© ${new Date().getFullYear()} ${env.appName} Unified Authentication Portal`} footerLinks={footerLinks}>
    <section className="flex w-full max-w-[440px] flex-col gap-8 rounded-xl border border-border-subtle bg-surface p-6 shadow-soft sm:p-10">
      <header className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-content sm:text-[1.75rem]">Welcome Back</h1>
        <p className="text-sm text-content-muted">Sign in to access your educational ecosystem</p>
      </header>

      <LoginForm />

      <SocialAuthButtons />

      <p className="text-center text-sm text-content-muted">
        Don&apos;t have an account?{' '}
        <Link to={ROUTES.register} className="font-semibold text-brand-600 transition-colors hover:text-brand-700">
          Create an account
        </Link>
      </p>
    </section>
  </AuthShell>
);

export default LoginPage;
