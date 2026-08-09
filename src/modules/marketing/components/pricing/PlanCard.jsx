import { motion } from 'motion/react';
import { cn } from '@shared/utils/cn';
import { CheckIcon, StarIcon } from '@shared/components/icons';
import Button from '@shared/components/ui/Button';

const PlanCard = ({ plan, index = 0, accent = 'cta' }) => {
  const { name, chip, audience, price, unit, annual, inheritsFrom, features, action, featured } = plan;
  const isAmber = accent === 'amber';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative flex h-full flex-col gap-5 rounded-2xl border bg-surface p-6 shadow-soft sm:p-7',
        featured ? (isAmber ? 'border-2 border-teal-700' : 'border-2 border-cta') : 'border-border-subtle',
      )}
    >
      {featured && (
        <span
          className={cn(
            'absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white',
            isAmber ? 'bg-amber-500' : 'bg-cta',
          )}
        >
          {isAmber && <StarIcon className="size-3" />}
          {isAmber ? 'Recommended' : 'Most popular'}
        </span>
      )}

      <div className="flex flex-col gap-1.5">
        {chip && <span className="w-fit rounded bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-content-muted">{chip}</span>}
        <h3 className="text-lg font-bold tracking-tight text-content">{name}</h3>
        <p className="text-xs text-content-muted">{audience}</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="flex flex-wrap items-baseline gap-1.5">
          <span className="text-3xl font-bold tracking-tight text-content">{price}</span>
          {unit && <span className="text-sm text-content-muted">{unit}</span>}
        </p>
        {annual && <p className={cn('text-xs', isAmber ? 'font-semibold text-amber-600' : 'text-content-muted')}>{annual}</p>}
      </div>

      <div className="flex flex-col gap-3">
        {inheritsFrom && <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-cta">{inheritsFrom}</p>}
        <ul className="flex flex-col gap-2.5">
          {features.map(({ label, excluded }) => (
            <li key={label} className={cn('flex items-start gap-2.5 text-sm', excluded ? 'text-content-muted/45' : 'text-content-muted')}>
              <CheckIcon className={cn('mt-0.5 size-4 shrink-0', excluded ? 'text-content-muted/30' : 'text-cta')} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={featured ? 'cta' : 'secondary'}
        fullWidth
        className={cn('mt-auto h-11 rounded-lg font-bold', !featured && 'border-brand-100 bg-surface text-cta hover:bg-brand-50')}
      >
        {action}
      </Button>
    </motion.article>
  );
};

export default PlanCard;
