import { motion } from 'motion/react';
import { cn } from '@shared/utils/cn';
import { LockIcon } from '@shared/components/icons';
import { resourceThumbClass, resourceTypeClass } from '../../data/resources';

const ResourceCard = ({ resource, index = 0 }) => {
  const { type, meta, title, description, author, date, access } = resource;
  const isPremium = access === 'Premium';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-soft transition-shadow hover:shadow-md"
    >
      <div className={cn('relative flex h-40 items-center justify-center bg-gradient-to-br', resourceThumbClass(type))}>
        <span className={cn('absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em]', resourceTypeClass(type))}>{type}</span>
        <span className="absolute right-3 top-3 rounded bg-black/45 px-2 py-1 text-[10px] font-medium text-white">{meta}</span>
        {isPremium && (
          <span className="flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
            <LockIcon className="size-3.5" /> Premium content
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-bold leading-snug tracking-tight text-content">{title}</h3>
        <p className="text-sm leading-relaxed text-content-muted">{description}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="flex min-w-0 items-center gap-2">
            <span className="size-6 shrink-0 rounded-full bg-surface-muted" />
            <span className="truncate text-xs text-content-muted">
              {author} • {date}
            </span>
          </span>
          <span
            className={cn(
              'shrink-0 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em]',
              isPremium ? 'bg-amber-50 text-amber-600' : 'bg-brand-50 text-cta',
            )}
          >
            {access}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default ResourceCard;
