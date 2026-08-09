import { BellIcon, ClipboardIcon } from '@shared/components/icons';

const queue = [
  { title: 'Executive Function Strategy', source: 'Request from: Oakwood High' },
  { title: 'Sensory Profile Validation', source: 'Request from: Parent Direct' },
];

const stats = [
  { label: 'Weekly Contributions', value: '12' },
  { label: 'Monthly Earnings', value: '$1,450' },
];

const SpecialistQueueVisual = () => (
  <div className="flex w-full flex-col gap-5 rounded-2xl border border-border-subtle bg-surface p-5 shadow-soft sm:p-6">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-content-muted">Welcome back</p>
        <p className="text-base font-bold text-content">Dr. Sarah Thompson</p>
      </div>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-cta">
        <BellIcon className="size-4" />
      </span>
    </div>

    <div className="flex flex-col gap-2.5 rounded-xl bg-surface-muted p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-content">
          <ClipboardIcon className="size-4 text-cta" /> Review Queue
        </span>
        <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-white">4 New</span>
      </div>

      {queue.map(({ title, source }) => (
        <div key={title} className="flex items-center justify-between gap-3 rounded-lg bg-surface px-3 py-2.5">
          <span className="min-w-0">
            <span className="block truncate text-xs font-bold text-content">{title}</span>
            <span className="block truncate text-[11px] text-content-muted">{source}</span>
          </span>
          <span aria-hidden className="shrink-0 text-content-muted">
            &rsaquo;
          </span>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-3">
      {stats.map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-border-subtle p-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-content-muted">{label}</p>
          <p className="mt-1 text-xl font-bold text-content">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SpecialistQueueVisual;
