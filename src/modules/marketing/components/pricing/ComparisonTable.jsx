import { Fragment } from 'react';
import { cn } from '@shared/utils/cn';
import { CheckIcon } from '@shared/components/icons';

const Cell = ({ value, highlight }) => {
  if (value === true) return <CheckIcon className="mx-auto size-4 text-cta" />;
  if (value === false) return <span className="text-content-muted/50">—</span>;

  return <span className={cn('text-sm', highlight ? 'font-bold text-teal-700' : 'text-content-muted')}>{value}</span>;
};

const ComparisonTable = ({ title, columns, groups }) => (
  <section className="bg-canvas px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1000px] flex-col gap-8">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">{title}</h2>

      <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-surface shadow-soft">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-muted/60">
              <th scope="col" className="px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.1em] text-content-muted">
                Feature
              </th>
              {columns.map((column, index) => (
                <th key={column} scope="col" className={cn('px-5 py-3.5 text-center text-sm font-bold text-content', index === columns.length - 1 && 'bg-brand-50/40')}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {groups.map(({ title: groupTitle, rows }) => (
              <Fragment key={groupTitle}>
                <tr className="bg-surface-muted/40">
                  <th scope="colgroup" colSpan={columns.length + 1} className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-cta">
                    {groupTitle}
                  </th>
                </tr>
                {rows.map(({ label, values }) => (
                  <tr key={label} className="border-b border-border-subtle last:border-0">
                    <th scope="row" className="px-5 py-3.5 text-sm font-normal text-content">
                      {label}
                    </th>
                    {values.map((value, index) => (
                      <td key={columns[index]} className={cn('px-5 py-3.5 text-center', index === columns.length - 1 && 'bg-brand-50/40')}>
                        <Cell value={value} highlight={index === values.length - 1} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
