import { Link } from 'react-router-dom';
import { env } from '@app/config/env';
import { ROUTES } from '@app/router/routes';
import AuthShell from '@shared/components/layout/AuthShell';

const ForgotPasswordPage = () => (
  <AuthShell footerNote={`© ${new Date().getFullYear()} ${env.appName} Unified Authentication Portal`}>
    <section className="flex w-full max-w-[440px] flex-col gap-4 rounded-xl border border-border-subtle bg-surface p-6 text-center shadow-soft sm:p-10">
      <h1 className="text-2xl font-bold tracking-tight text-content">Reset your password</h1>
      <p className="text-sm text-content-muted">Account recovery is not available yet. Contact your school admin or support to reset your password.</p>
      <Link to={ROUTES.login} className="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700">
        Back to login
      </Link>
    </section>
  </AuthShell>
);

export default ForgotPasswordPage;
