import { useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@shared/utils/cn';

const variants = {
  success: { bar: 'bg-emerald-500', icon: '✓', iconClass: 'bg-emerald-50 text-emerald-600' },
  error: { bar: 'bg-red-500', icon: '!', iconClass: 'bg-red-50 text-red-600' },
  warning: { bar: 'bg-amber-500', icon: '!', iconClass: 'bg-amber-50 text-amber-600' },
  info: { bar: 'bg-brand-500', icon: 'i', iconClass: 'bg-brand-50 text-brand-600' },
};

const Toast = ({ id, title, description, variant = 'info', duration = 4000, onDismiss }) => {
  const style = variants[variant] ?? variants.info;

  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => onDismiss(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  return (
    <motion.div
      layout
      role={variant === 'error' ? 'alert' : 'status'}
      initial={{ opacity: 0, y: -16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 24, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-auto flex w-full items-start gap-3 overflow-hidden rounded-xl border border-border-subtle bg-surface p-3 shadow-soft sm:w-96"
    >
      <span className={cn('absolute left-0 top-0 h-full w-1', style.bar)} />
      <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold', style.iconClass)}>{style.icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-content">{title}</p>
        {description && <p className="mt-0.5 text-sm text-content-muted">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        aria-label="Dismiss notification"
        className="shrink-0 rounded-md p-1 text-content-muted transition-colors hover:bg-surface-muted hover:text-content"
      >
        &#10005;
      </button>
    </motion.div>
  );
};

export default Toast;
