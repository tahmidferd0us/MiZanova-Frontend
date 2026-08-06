import { cn } from '@shared/utils/cn';
import Pagination from './Pagination';
import Spinner from './Spinner';

const alignments = { left: 'text-left', center: 'text-center', right: 'text-right' };

const cellValue = (column, row, index) => (column.render ? column.render(row, index) : row[column.key]);

const Table = ({
  columns = [],
  data = [],
  rowKey = 'id',
  isLoading = false,
  emptyMessage = 'No records found',
  onRowClick,
  pagination = null,
  caption,
  className,
}) => {
  const resolveKey = (row, index) => (typeof rowKey === 'function' ? rowKey(row, index) : (row[rowKey] ?? index));

  const body = () => {
    if (isLoading)
      return (
        <div className="flex items-center justify-center gap-2 py-12 text-content-muted">
          <Spinner /> <span className="text-sm">Loading…</span>
        </div>
      );

    if (!data.length) return <p className="py-12 text-center text-sm text-content-muted">{emptyMessage}</p>;

    return null;
  };

  const state = body();

  return (
    <div className={cn('overflow-hidden rounded-card border border-border-subtle bg-surface shadow-soft', className)}>
      {state ?? (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-full border-collapse text-sm">
              {caption && <caption className="px-4 pt-4 text-left text-sm text-content-muted">{caption}</caption>}
              <thead className="bg-surface-muted">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className={cn('px-4 py-3 text-xs font-semibold uppercase tracking-wide text-content-muted', alignments[column.align ?? 'left'], column.headerClassName)}
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {data.map((row, index) => (
                  <tr
                    key={resolveKey(row, index)}
                    onClick={onRowClick ? () => onRowClick(row, index) : undefined}
                    className={cn('transition-colors hover:bg-surface-muted/70', onRowClick && 'cursor-pointer')}
                  >
                    {columns.map((column) => (
                      <td key={column.key} className={cn('px-4 py-3 text-content', alignments[column.align ?? 'left'], column.className)}>
                        {cellValue(column, row, index)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="divide-y divide-border-subtle md:hidden">
            {data.map((row, index) => (
              <li
                key={resolveKey(row, index)}
                onClick={onRowClick ? () => onRowClick(row, index) : undefined}
                className={cn('flex flex-col gap-2 px-4 py-3', onRowClick && 'cursor-pointer active:bg-surface-muted')}
              >
                {columns
                  .filter((column) => !column.hideOnMobile)
                  .map((column) => (
                    <div key={column.key} className="flex items-start justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-wide text-content-muted">{column.header}</span>
                      <span className="text-right text-sm text-content">{cellValue(column, row, index)}</span>
                    </div>
                  ))}
              </li>
            ))}
          </ul>
        </>
      )}

      {pagination && <Pagination {...pagination} />}
    </div>
  );
};

export default Table;
