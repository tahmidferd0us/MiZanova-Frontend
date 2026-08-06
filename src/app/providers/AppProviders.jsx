import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@app/store';
import ErrorBoundary from '@shared/components/feedback/ErrorBoundary';
import ToastContainer from '@shared/components/ui/ToastContainer';
import AuthProvider from '@modules/auth/providers/AuthProvider';

const AppProviders = ({ children }) => (
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);

export default AppProviders;
