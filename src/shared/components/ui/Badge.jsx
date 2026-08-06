import { cn } from '@shared/utils/cn';

const variants = {
  neutral: 'bg-surface-muted text-content-muted border-border-subtle',
  brand: 'bg-brand-50 text-brand-700 border-brand-100',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  warning: 'bg-amber-50 text-amber-700 border-amber-100',
  danger: 'bg-red-50 text-red-700 border-red-100',
};

const Badge = ({ variant = 'neutral', className, children }) => (
  <span className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', variants[variant], className)}>
    {children}
  </span>
);

export default Badge;
