import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@app/router/routes';
import { useToast } from '@shared/hooks/useToast';
import { applyFieldErrors, getErrorMessage } from '@shared/utils/apiError';
import Button from '@shared/components/ui/Button';
import Input from '@shared/components/ui/Input';
import { useRegisterMutation } from '../api/authApi';
import { registerSchema } from '../validation/authSchemas';

const RegisterForm = () => {
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async ({ confirmPassword: _confirmPassword, ...values }) => {
    try {
      await registerUser(values).unwrap();
      toast.success('Account created', { description: 'You are now signed in.' });
      navigate(ROUTES.dashboard, { replace: true });
    } catch (error) {
      if (!applyFieldErrors(error, setError)) toast.error('Registration failed', { description: getErrorMessage(error) });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <Input label="Full name" autoComplete="name" placeholder="Jane Doe" required error={errors.fullName?.message} {...register('fullName')} />
      <Input label="Email" type="email" autoComplete="email" placeholder="you@company.com" required error={errors.email?.message} {...register('email')} />
      <Input
        label="Password"
        type="password"
        autoComplete="new-password"
        placeholder="••••••••"
        required
        hint="At least 8 characters with an uppercase letter and a number."
        error={errors.password?.message}
        {...register('password')}
      />
      <Input
        label="Confirm password"
        type="password"
        autoComplete="new-password"
        placeholder="••••••••"
        required
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <Button type="submit" variant="cta" size="lg" fullWidth isLoading={isLoading} className="h-12 rounded-lg text-base font-bold">
        Create account
      </Button>
    </form>
  );
};

export default RegisterForm;
