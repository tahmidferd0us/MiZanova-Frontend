import { motion } from 'motion/react';
import { cn } from '@shared/utils/cn';
import { CheckIcon, InfoIcon } from '@shared/components/icons';
import Button from '@shared/components/ui/Button';

const plans = [
  {
    name: 'Small Schools',
    price: '$2,400',
    unit: '/term',
    audience: 'Up to 250 students',
    features: ['Basic IEP generator', 'Parent Portal access', 'Secure data hosting', 'Email support (48hr)'],
    action: 'Select Plan',
  },
  {
    name: 'Mid-size Schools',
    price: '$5,800',
    unit: '/term',
    audience: '250 - 800 students',
    features: ['Advanced AI strategies', 'Unlimited teacher logins', 'Full compliance suite', 'Priority phone support', 'Staff training session'],
    action: 'Select Plan',
    featured: true,
  },
  {
    name: 'Large Schools',
    price: 'Custom',
    audience: '800+ students or Multi-campus',
    features: ['LMS & SIS Integration', 'SSO (SAML/Azure AD)', 'Custom data residency', 'Dedicated Account Manager'],
    action: 'Contact Enterprise',
  },
];

const PricingSection = () => (
  <section id="pricing" className="bg-surface px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
    <div className="mx-auto max-w-[1280px] rounded-2xl bg-canvas px-4 py-14 sm:px-8 lg:px-12 lg:py-16">
      <header className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Pricing scaled to your school</h2>
        <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-content-muted">Annual subscription. Australian dollars.</p>
      </header>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
        {plans.map(({ name, price, unit, audience, features, action, featured }, index) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'relative flex flex-col gap-6 rounded-xl border p-6 sm:p-7',
              featured ? 'border-cta bg-cta text-white shadow-soft lg:-mt-4 lg:pb-10 lg:pt-10' : 'border-border-subtle bg-surface shadow-soft',
            )}
          >
            {featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                Recommended
              </span>
            )}

            <div className="flex flex-col gap-1">
              <h3 className={cn('text-sm font-bold', featured ? 'text-white' : 'text-content')}>{name}</h3>
              <p className="flex items-baseline gap-1.5">
                <span className={cn('text-3xl font-bold tracking-tight', featured ? 'text-white' : 'text-content')}>{price}</span>
                {unit && <span className={cn('text-sm', featured ? 'text-white/70' : 'text-content-muted')}>{unit}</span>}
              </p>
              <p className={cn('text-xs', featured ? 'text-white/70' : 'text-content-muted')}>{audience}</p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {features.map((feature) => (
                <li key={feature} className={cn('flex items-start gap-2.5 text-sm', featured ? 'text-white/90' : 'text-content-muted')}>
                  <CheckIcon className={cn('mt-0.5 size-4 shrink-0', featured ? 'text-white' : 'text-cta')} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={featured ? 'primary' : 'secondary'}
              fullWidth
              className={cn('mt-auto h-11 rounded-lg font-bold', featured ? 'bg-white text-cta hover:bg-white/90' : 'border-brand-100 bg-surface text-cta hover:bg-brand-50')}
            >
              {action}
            </Button>
          </motion.article>
        ))}
      </div>

      <p className="mt-10 flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-content-muted">
        <InfoIcon className="size-4 shrink-0" />
        Regional and low-SES schools are eligible for up to 30% discount.
        <a href="#relief" className="font-semibold text-cta underline underline-offset-2">
          Apply for relief.
        </a>
      </p>
    </div>
  </section>
);

export default PricingSection;
