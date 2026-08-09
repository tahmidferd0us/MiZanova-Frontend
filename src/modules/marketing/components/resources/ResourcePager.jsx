import { cn } from '@shared/utils/cn';
import { ArrowLeftIcon, ArrowRightIcon } from '@shared/components/icons';

const ResourcePager = ({ page, totalPages, shown, total, onPageChange }) => {
  const pages = totalPages <= 5 ? Array.from({ length: totalPages }, (_, index) => index + 1) : [1, 2, 3, 4, '…', totalPages];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="flex size-9 items-center justify-center rounded-lg border border-border-subtle text-content-muted transition-colors hover:bg-surface-muted disabled:opacity-40"
        >
          <ArrowLeftIcon className="size-4" />
        </button>

        {pages.map((item, index) =>
          item === '…' ? (
            <span key={`gap-${index}`} className="px-1.5 text-sm text-content-muted">
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-current={item === page ? 'page' : undefined}
              className={cn(
                'size-9 rounded-lg text-sm font-semibold transition-colors',
                item === page ? 'bg-cta text-white' : 'border border-border-subtle text-content-muted hover:bg-surface-muted',
              )}
            >
              {item}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          aria-label="Next page"
          className="flex size-9 items-center justify-center rounded-lg border border-border-subtle text-content-muted transition-colors hover:bg-surface-muted disabled:opacity-40"
        >
          <ArrowRightIcon className="size-4" />
        </button>
      </div>

      <p className="text-xs text-content-muted">
        {shown} of {total} results
      </p>
    </div>
  );
};

export default ResourcePager;
