import { Link, useLocation } from 'react-router-dom';
import { cn } from '@shared/utils/cn';
import { ArrowLeftIcon, ArrowRightIcon } from '@shared/components/icons';
import { findPageNeighbours } from '@shared/constants/pageOrder';

const NavCard = ({ page, direction }) => {
  const isNext = direction === 'next';

  return (
    <Link
      to={page.to}
      rel={isNext ? 'next' : 'prev'}
      className={cn(
        'group flex min-h-20 flex-1 items-center gap-4 rounded-xl border border-border-subtle bg-surface p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40',
        isNext && 'justify-end text-right',
      )}
    >
      {!isNext && <ArrowLeftIcon className="size-5 shrink-0 text-content-muted transition-colors group-hover:text-cta" />}
      <span className="min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-content-muted">{isNext ? 'Next' : 'Previous'}</span>
        <span className="mt-0.5 block truncate text-base font-bold text-content transition-colors group-hover:text-cta">{page.label}</span>
      </span>
      {isNext && <ArrowRightIcon className="size-5 shrink-0 text-content-muted transition-colors group-hover:text-cta" />}
    </Link>
  );
};

const PageNav = () => {
  const { previous, next } = findPageNeighbours(useLocation().pathname);

  if (!previous && !next) return null;

  return (
    <nav aria-label="Page navigation" className="bg-surface px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-4 border-t border-border-subtle pt-10 sm:flex-row">
        {previous ? <NavCard page={previous} direction="previous" /> : <span className="hidden flex-1 sm:block" />}
        {next ? <NavCard page={next} direction="next" /> : <span className="hidden flex-1 sm:block" />}
      </div>
    </nav>
  );
};

export default PageNav;
