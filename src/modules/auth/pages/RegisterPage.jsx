import { Link } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => (
  <section className="flex flex-col gap-6">
    <header className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">Create your account</h1>
      <p className="text-sm text-content-muted">Start building on MiZanova in under a minute.</p>
    </header>

    <RegisterForm />

    <p className="text-center text-sm text-content-muted">
      Already have an account?{' '}
      <Link to={ROUTES.login} className="font-medium text-brand-600 underline-offset-4 hover:underline">
        Log in
      </Link>
    </p>
  </section>
);

export default RegisterPage;
