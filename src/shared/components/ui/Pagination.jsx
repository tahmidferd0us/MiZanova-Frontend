import { cn } from '@shared/utils/cn';
import Button from './Button';

const buildPages = (page, totalPages, siblings = 1) => {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);

  const left = Math.max(page - siblings, 2);
  const right = Math.min(page + siblings, totalPages - 1);

  return [1, left > 2 && '…', ...Array.from({ length: right - left + 1 }, (_, index) => left + index), right < totalPages - 1 && '…', totalPages].filter(Boolean);
};

const Pagination = ({ page, limit, total, onPageChange, onLimitChange, limitOptions = [10, 25, 50, 100], className }) => {
  const totalPages = Math.max(Math.ceil(total / limit) || 1, 1);
  const from = total === 0 ? 0 : (page - 1) * limit + 1;
  const to = Math.min(page * limit, total);

  return (
    <div className={cn('flex flex-col items-center justify-between gap-3 border-t border-border-subtle px-4 py-3 sm:flex-row', className)}>
      <p className="text-sm text-content-muted">
        Showing <span className="font-medium text-content">{from}</span>–<span className="font-medium text-content">{to}</span> of{' '}
        <span className="font-medium text-content">{total}</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {onLimitChange && (
          <select
            value={limit}
            onChange={(event) => onLimitChange(Number(event.target.value))}
            aria-label="Rows per page"
            className="h-9 rounded-lg border border-border-subtle bg-surface px-2 text-sm"
          >
            {limitOptions.map((option) => (
              <option key={option} value={option}>
                {option} / page
              </option>
            ))}
          </select>
        )}

        <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
          Prev
        </Button>

        <div className="hidden items-center gap-1 sm:flex">
          {buildPages(page, totalPages).map((item, index) =>
            item === '…' ? (
              <span key={`gap-${index}`} className="px-2 text-sm text-content-muted">
                …
              </span>
            ) : (
              <Button
                key={item}
                size="sm"
                variant={item === page ? 'primary' : 'ghost'}
                aria-current={item === page ? 'page' : undefined}
                onClick={() => onPageChange(item)}
                className="min-w-9"
              >
                {item}
              </Button>
            ),
          )}
        </div>

        <span className="text-sm text-content-muted sm:hidden">
          {page} / {totalPages}
        </span>

        <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
