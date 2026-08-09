import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import { useToast } from '@shared/hooks/useToast';
import { applyFieldErrors, getErrorMessage } from '@shared/utils/apiError';
import { LockIcon, MailIcon } from '@shared/components/icons';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import { useLoginMutation } from '../api/authApi';
import { loginSchema } from '../validation/authSchemas';

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '' } });

  const onSubmit = async (values) => {
    try {
      const { data } = await login(values).unwrap();
      toast.success('Welcome back', { description: data.user.fullName ?? data.user.email });
      navigate(location.state?.from?.pathname ?? ROUTES.dashboard, { replace: true });
    } catch (error) {
      if (!applyFieldErrors(error, setError)) toast.error('Login failed', { description: getErrorMessage(error) });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <Input
        label="Email Address"
        type="email"
        autoComplete="email"
        placeholder="you@school.edu.au"
        leftIcon={<MailIcon className="size-5" />}
        error={errors.email?.message}
        className="h-12"
        {...register('email')}
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-content">Password</span>
          <Link to={ROUTES.forgotPassword} className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700">
            Forgot Password?
          </Link>
        </div>
        <Input
          aria-label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          leftIcon={<LockIcon className="size-5" />}
          error={errors.password?.message}
          className="h-12"
          {...register('password')}
        />
      </div>

      <label className="flex w-fit items-center gap-2.5 text-sm text-content-muted">
        <input type="checkbox" className="size-4 rounded border-border-subtle text-cta focus:ring-cta/30" {...register('rememberMe')} />
        Remember me
      </label>

      <Button type="submit" variant="cta" size="lg" fullWidth isLoading={isLoading} className="h-12 rounded-lg text-base font-bold">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
