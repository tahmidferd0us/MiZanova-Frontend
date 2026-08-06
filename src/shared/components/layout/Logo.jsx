import { Link } from 'react-router-dom';
import { cn } from '@shared/utils/cn';
import { env } from '@app/config/env';

const Logo = ({ to = '/', className }) => (
  <Link to={to} className={cn('inline-flex items-center gap-2 font-semibold tracking-tight text-content', className)}>
    <span className="flex size-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">M</span>
    <span className="text-lg">{env.appName}</span>
  </Link>
);

export default Logo;
