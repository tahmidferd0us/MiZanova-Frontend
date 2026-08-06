import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import { useToast } from '@shared/hooks/useToast';
import { applyFieldErrors, getErrorMessage } from '@shared/utils/apiError';
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <Input
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="you@company.com"
        required
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
        required
        error={errors.password?.message}
        {...register('password')}
      />

      <Button type="submit" size="lg" fullWidth isLoading={isLoading}>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
