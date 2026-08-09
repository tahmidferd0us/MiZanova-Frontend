import { motion } from 'motion/react';
import { cn } from '@shared/utils/cn';
import { CheckIcon } from '@shared/components/icons';
import Button from '@shared/components/ui/Button';

const plans = [
  {
    name: 'Essential',
    tagline: 'Basic insights for home support.',
    price: '$9.99',
    features: [
      { label: 'Daily summary reports' },
      { label: 'Focus & engagement tracking' },
      { label: '5 AI-powered strategies per week' },
      { label: 'Direct specialist portal access', excluded: true },
    ],
    action: 'Choose Essential',
  },
  {
    name: 'Premium',
    tagline: 'Complete advocacy and collaboration.',
    price: '$19.99',
    features: [
      { label: 'Real-time classroom updates' },
      { label: 'Unlimited AI clinical strategies' },
      { label: 'Direct specialist collaboration portal' },
      { label: 'IEP/ILP data export tools' },
    ],
    action: 'Choose Premium',
    featured: true,
  },
];

const ParentPlansSection = () => (
  <section id="plans" className="bg-canvas px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[880px] flex-col gap-10">
      <header className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">A plan for every family</h2>
        <p className="text-sm text-content-muted">Invest in clarity and consistent support for your child&apos;s neurodivergent journey.</p>
      </header>

      <div className="grid items-start gap-6 sm:grid-cols-2">
        {plans.map(({ name, tagline, price, features, action, featured }, index) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={cn('relative flex flex-col gap-5 rounded-2xl border-2 bg-surface p-6 shadow-soft sm:p-7', featured ? 'border-teal-700' : 'border-transparent')}
          >
            {featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">Recommended</span>
            )}

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold tracking-tight text-content">{name}</h3>
              <p className="text-xs text-content-muted">{tagline}</p>
            </div>

            <p className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold tracking-tight text-content">{price}</span>
              <span className="text-sm text-content-muted">/mo</span>
            </p>

            <ul className="flex flex-col gap-3">
              {features.map(({ label, excluded }) => (
                <li key={label} className={cn('flex items-start gap-2.5 text-sm', excluded ? 'text-content-muted/50 line-through' : 'text-content-muted')}>
                  {excluded ? <span className="mt-0.5 w-4 shrink-0 text-center leading-4">&#10005;</span> : <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-600" />}
                  {label}
                </li>
              ))}
            </ul>

            <Button
              variant={featured ? 'cta' : 'secondary'}
              fullWidth
              className={cn('mt-auto h-11 rounded-lg font-bold', !featured && 'border-brand-100 bg-surface text-cta hover:bg-brand-50')}
            >
              {action}
            </Button>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ParentPlansSection;
