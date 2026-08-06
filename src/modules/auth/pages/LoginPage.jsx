import { Link } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import LoginForm from '../components/LoginForm';

const LoginPage = () => (
  <section className="flex flex-col gap-6">
    <header className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">Log in to your account</h1>
      <p className="text-sm text-content-muted">Enter your email and password to continue.</p>
    </header>

    <LoginForm />

    <p className="text-center text-sm text-content-muted">
      Don&apos;t have an account?{' '}
      <Link to={ROUTES.register} className="font-medium text-brand-600 underline-offset-4 hover:underline">
        Create one
      </Link>
    </p>
  </section>
);

export default LoginPage;
