import { cn } from '@shared/utils/cn';

const EmptyState = ({ title = 'Nothing here yet', description, action, className }) => (
  <div className={cn('flex flex-col items-center justify-center gap-3 px-6 py-14 text-center', className)}>
    <div className="flex size-12 items-center justify-center rounded-full bg-surface-muted text-xl text-content-muted">∅</div>
    <h3 className="text-base font-semibold text-content">{title}</h3>
    {description && <p className="max-w-sm text-sm text-content-muted">{description}</p>}
    {action}
  </div>
);

export default EmptyState;
