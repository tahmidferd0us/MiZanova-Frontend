import { LightbulbIcon, TrendingUpIcon } from '@shared/components/icons';

const tiles = [
  { label: 'Focus triggers', value: 'Visual Timers, Fidget Tools' },
  { label: 'Sensory profile', value: 'Proprioceptive Seeking' },
];

const DailyReportVisual = () => (
  <div className="flex w-full flex-col gap-5 rounded-2xl border border-border-subtle bg-surface p-5 shadow-soft sm:p-6">
    <div className="flex items-start gap-3">
      <span className="size-10 shrink-0 rounded-full bg-surface-muted" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-content">Emma&apos;s Daily Report</p>
        <p className="text-xs text-content-muted">Today, Oct 24 · Year 3</p>
      </div>
      <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-emerald-700">Updated 10m ago</span>
    </div>

    <div className="flex flex-col gap-2.5 rounded-xl bg-brand-50/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-cta">
          <TrendingUpIcon className="size-4" /> Engagement Levels
        </span>
        <span className="rounded bg-surface px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-content-muted">High</span>
      </div>
      <span className="block h-2 w-full overflow-hidden rounded-full bg-surface">
        <span className="block h-full w-[85%] rounded-full bg-cta" />
      </span>
    </div>

    <div className="grid gap-3 sm:grid-cols-2">
      {tiles.map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-border-subtle p-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-content-muted">{label}</p>
          <p className="mt-1 text-sm font-semibold text-content">{value}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-col gap-1.5 rounded-xl bg-amber-50 p-4">
      <span className="flex items-center gap-2 text-sm font-bold text-amber-700">
        <LightbulbIcon className="size-4" /> Strategy Recommendation
      </span>
      <p className="text-xs leading-relaxed text-amber-900/80">
        Transitioning to home? Use a 5-minute countdown and a physical heavy-work activity to help Emma regulate after the bus ride.
      </p>
    </div>
  </div>
);

export default DailyReportVisual;
