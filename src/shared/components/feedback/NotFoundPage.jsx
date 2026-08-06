import { Link } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import Button from '@shared/components/ui/Button';

const NotFoundPage = () => (
  <section className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
    <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">404</p>
    <h1 className="text-3xl font-semibold text-content sm:text-4xl">This page could not be found</h1>
    <p className="max-w-md text-content-muted">The page you are looking for may have been moved, renamed, or never existed.</p>
    <Link to={ROUTES.home}>
      <Button>Back to home</Button>
    </Link>
  </section>
);

export default NotFoundPage;
