import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@shared/hooks/useToast';
import { Button, Input, Select, Textarea } from '@shared/components/ui';
import { pilotSchema, ROLE_OPTIONS, STATE_OPTIONS, STUDENT_COUNT_OPTIONS } from '../../validation/pilotSchema';

const labelClass = 'text-[11px] font-bold uppercase tracking-[0.08em] text-content-muted';

const defaultValues = { schoolName: '', abn: '', contactName: '', role: '', email: '', phone: '', studentCount: '', state: '', interest: '', startDate: '' };

const PilotRequestSection = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(pilotSchema), defaultValues });

  const onSubmit = async (values) => {
    toast.info('Pilot requests are not connected yet', { description: `We captured details for ${values.schoolName}, but there is no backend endpoint to send them to.` });
    reset();
  };

  return (
    <section id="request-pilot" className="bg-surface px-4 pb-16 sm:px-6 lg:px-20 lg:pb-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto flex w-full max-w-[820px] flex-col gap-6 rounded-xl border border-border-subtle bg-surface p-6 shadow-soft sm:p-10"
      >
        <header className="flex flex-col gap-2 text-center">
          <h2 className="text-xl font-bold tracking-tight text-content sm:text-2xl">Request a pilot for your school</h2>
          <p className="text-sm text-content-muted">Submit your details and a specialist will contact you within 24 hours.</p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2">
          <Input label="School name" labelClassName={labelClass} placeholder="Enter school name" error={errors.schoolName?.message} {...register('schoolName')} />
          <Input label="ABN / CRICOS" labelClassName={labelClass} placeholder="12 345 678 910" error={errors.abn?.message} {...register('abn')} />
          <Input label="Contact name" labelClassName={labelClass} placeholder="Full name" error={errors.contactName?.message} {...register('contactName')} />
          <Select label="Role" labelClassName={labelClass} options={ROLE_OPTIONS} placeholder="Principal / Leadership" error={errors.role?.message} {...register('role')} />
          <Input label="School email" labelClassName={labelClass} type="email" placeholder="name@school.edu.au" error={errors.email?.message} {...register('email')} />
          <Input label="Phone" labelClassName={labelClass} type="tel" placeholder="02 1234 5678" error={errors.phone?.message} {...register('phone')} />
          <Select label="Number of students" labelClassName={labelClass} options={STUDENT_COUNT_OPTIONS} placeholder="Under 250" error={errors.studentCount?.message} {...register('studentCount')} />
          <Select label="State" labelClassName={labelClass} options={STATE_OPTIONS} placeholder="NSW" error={errors.state?.message} {...register('state')} />
        </div>

        <Textarea
          label="Why are you interested in a pilot?"
          labelClassName={labelClass}
          rows={4}
          placeholder="Briefly describe your school's current neurodiversity support goals..."
          error={errors.interest?.message}
          {...register('interest')}
        />

        <Input label="Preferred start date" labelClassName={labelClass} type="date" error={errors.startDate?.message} {...register('startDate')} />

        <Button type="submit" variant="cta" size="lg" fullWidth isLoading={isSubmitting} className="h-12 rounded-lg font-bold">
          Submit Pilot Request
        </Button>
      </form>
    </section>
  );
};

export default PilotRequestSection;
