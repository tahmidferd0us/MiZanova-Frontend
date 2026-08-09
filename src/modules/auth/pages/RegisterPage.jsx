import { Link } from 'react-router-dom';
import { env } from '@app/config/env';
import { ROUTES } from '@app/router/routes';
import AuthShell from '@shared/components/layout/AuthShell';
import { ArrowRightIcon, GraduationCapIcon, SchoolIcon, SpecialistIcon, UsersIcon } from '@shared/components/icons';
import RolePathCard from '../components/RolePathCard';
import { SIGNUP_PATHS } from '../constants/signupPaths';

const icons = { teacher: SchoolIcon, parent: UsersIcon, specialist: SpecialistIcon };

const footerLinks = [
  { label: 'Privacy Policy', href: '/#privacy' },
  { label: 'Terms', href: '/#terms' },
  { label: 'Accessibility', href: '/#accessibility' },
];

const RegisterPage = () => (
  <AuthShell
    headerRight={
      <p className="text-sm text-content-muted">
        Need help?{' '}
        <a href="/#contact" className="font-semibold text-brand-600 transition-colors hover:text-brand-700">
          Contact Support
        </a>
      </p>
    }
    footerNote={`© ${new Date().getFullYear()} ${env.appName} by Special Miles`}
    footerLinks={footerLinks}
  >
    <section className="flex w-full max-w-[1088px] flex-col gap-8 rounded-xl border border-border-subtle bg-surface p-6 shadow-soft sm:p-10">
      <header className="flex flex-col items-center gap-3 text-center">
        <span className="flex size-12 items-center justify-center rounded-xl bg-cta text-white">
          <GraduationCapIcon className="size-6" />
        </span>
        <h1 className="text-xl font-bold tracking-tight text-content sm:text-2xl">Welcome to {env.appName}</h1>
        <p className="text-sm text-content-muted">Tell us how you&apos;ll be using {env.appName}</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SIGNUP_PATHS.map(({ role, title, description }, index) => (
          <RolePathCard key={role} to={`${ROUTES.register}/${role}`} Icon={icons[role]} title={title} description={description} index={index} />
        ))}
      </div>

      <footer className="flex flex-col items-center gap-1.5 text-center text-sm text-content-muted">
        <p>
          Are you a school admin setting up a new institution?{' '}
          <a href="/#contact" className="inline-flex items-center gap-1 font-semibold text-brand-600 transition-colors hover:text-brand-700">
            Talk to sales <ArrowRightIcon className="size-3.5" />
          </a>
        </p>
        <p>
          Already have an account?{' '}
          <Link to={ROUTES.login} className="font-semibold text-brand-600 transition-colors hover:text-brand-700">
            Sign in
          </Link>
        </p>
      </footer>
    </section>
  </AuthShell>
);

export default RegisterPage;
