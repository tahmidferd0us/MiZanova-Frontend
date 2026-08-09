import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRightIcon } from '@shared/components/icons';

const RolePathCard = ({ to, Icon, title, description, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    className="h-full"
  >
    <Link
      to={to}
      className="flex h-full flex-col items-center gap-4 rounded-xl border border-border-subtle bg-surface p-6 text-center transition-colors hover:border-brand-300 hover:bg-brand-50/40 focus-visible:border-brand-500"
    >
      <span className="flex size-14 items-center justify-center rounded-full bg-brand-50 text-cta">
        <Icon className="size-7" />
      </span>
      <h2 className="text-lg font-bold tracking-tight text-content">{title}</h2>
      <p className="text-sm leading-relaxed text-content-muted">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-600">
        Continue <ArrowRightIcon className="size-4" />
      </span>
    </Link>
  </motion.div>
);

export default RolePathCard;
