import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@shared/hooks/useToast';
import { FileIcon, ShieldIcon, UploadIcon } from '@shared/components/icons';
import { Button, Input, Select, Textarea } from '@shared/components/ui';
import { PROFESSIONAL_CATEGORY_OPTIONS, specialistSchema } from '../../validation/specialistSchema';

const labelClass = 'text-[11px] font-bold uppercase tracking-[0.08em] text-content-muted';

const uploads = [
  { label: 'CV / Resume', Icon: FileIcon },
  { label: 'Registration', Icon: UploadIcon },
  { label: 'WWCC Proof', Icon: ShieldIcon },
];

const defaultValues = { firstName: '', lastName: '', email: '', category: '', registrationNumber: '', yearsExperience: '', linkedinUrl: '', bio: '' };

const SpecialistApplySection = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(specialistSchema), defaultValues });

  const onSubmit = async (values) => {
    toast.info('Applications are not connected yet', { description: `We captured ${values.firstName}'s details, but there is no backend endpoint to send them to.` });
    reset();
  };

  return (
    <section id="apply" className="bg-canvas px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto flex w-full max-w-[820px] flex-col gap-6 rounded-2xl border border-border-subtle bg-surface p-6 shadow-soft sm:p-10"
      >
        <header className="flex flex-col gap-2 text-center">
          <h2 className="text-xl font-bold tracking-tight text-content sm:text-2xl">Apply to join the network</h2>
          <p className="text-sm text-content-muted">Our team will review your application within 3-5 business days.</p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2">
          <Input label="First name" labelClassName={labelClass} placeholder="Jane" error={errors.firstName?.message} {...register('firstName')} />
          <Input label="Last name" labelClassName={labelClass} placeholder="Doe" error={errors.lastName?.message} {...register('lastName')} />
        </div>

        <Input label="Email address" labelClassName={labelClass} type="email" placeholder="jane@practice.com" error={errors.email?.message} {...register('email')} />

        <div className="grid gap-5 sm:grid-cols-2">
          <Select label="Professional category" labelClassName={labelClass} options={PROFESSIONAL_CATEGORY_OPTIONS} placeholder="Psychologist" error={errors.category?.message} {...register('category')} />
          <Input label="Registration number" labelClassName={labelClass} placeholder="e.g. PSY0001234" error={errors.registrationNumber?.message} {...register('registrationNumber')} />
          <Input label="Years of experience" labelClassName={labelClass} type="number" min="0" placeholder="e.g. 5" error={errors.yearsExperience?.message} {...register('yearsExperience')} />
          <Input label="LinkedIn profile URL" labelClassName={labelClass} placeholder="linkedin.com/in/yourname" error={errors.linkedinUrl?.message} {...register('linkedinUrl')} />
        </div>

        <Textarea label="Brief professional bio" labelClassName={labelClass} rows={4} placeholder="Tell us about your specialisation..." error={errors.bio?.message} {...register('bio')} />

        <div className="grid gap-3 sm:grid-cols-3">
          {uploads.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => toast.info('Document upload is not available yet', { description: 'File storage is not configured on the backend.' })}
              className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border-subtle px-3 py-4 text-content-muted transition-colors hover:border-brand-300 hover:text-cta"
            >
              <Icon className="size-5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.08em]">{label}</span>
            </button>
          ))}
        </div>

        <Button type="submit" variant="cta" size="lg" fullWidth isLoading={isSubmitting} className="h-12 rounded-lg font-bold">
          Submit Application
        </Button>
      </form>
    </section>
  );
};

export default SpecialistApplySection;
