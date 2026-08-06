import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { env } from '@app/config/env';
import Button from '@shared/components/ui/Button';

const Fallback = ({ error, resetErrorBoundary }) => (
  <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
    <h1 className="text-2xl font-semibold text-content">Something went wrong</h1>
    <p className="max-w-md text-sm text-content-muted">{env.isDev ? error.message : 'An unexpected error occurred. Please try again.'}</p>
    <Button onClick={resetErrorBoundary}>Reload the page</Button>
  </div>
);

const ErrorBoundary = ({ children }) => (
  <ReactErrorBoundary FallbackComponent={Fallback} onReset={() => window.location.assign('/')}>
    {children}
  </ReactErrorBoundary>
);

export default ErrorBoundary;
