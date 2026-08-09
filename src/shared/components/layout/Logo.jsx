import { Link } from 'react-router-dom';
import { cn } from '@shared/utils/cn';
import { env } from '@app/config/env';

const tones = { default: 'wordmark', light: 'text-white' };

const Logo = ({ to = '/', tone = 'default', withWordmark = true, className }) => (
  <Link to={to} aria-label={env.appName} className={cn('inline-flex items-center gap-2.5', className)}>
    <img src="/logo-mark.png" alt="" width="256" height="189" className="h-8 w-auto shrink-0 sm:h-9" />
    {withWordmark && <span className={cn('text-xl font-bold tracking-tight sm:text-2xl', tones[tone])}>{env.appName}</span>}
  </Link>
);

export default Logo;
