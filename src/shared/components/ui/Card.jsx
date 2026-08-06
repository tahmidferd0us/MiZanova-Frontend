import { cn } from '@shared/utils/cn';

const Card = ({ title, description, actions, padded = true, className, children }) => (
  <section className={cn('rounded-card border border-border-subtle bg-surface shadow-soft', className)}>
    {(title || actions) && (
      <header className="flex flex-col gap-2 border-b border-border-subtle px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {title && <h3 className="text-base font-semibold text-content">{title}</h3>}
          {description && <p className="mt-0.5 text-sm text-content-muted">{description}</p>}
        </div>
        {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
      </header>
    )}
    <div className={cn(padded && 'p-5')}>{children}</div>
  </section>
);

export default Card;
