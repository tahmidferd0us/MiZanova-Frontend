import { CheckIcon } from '@shared/components/icons';

const points = [
  { label: 'Jan', value: 12 },
  { label: 'Feb', value: 19 },
  { label: 'Mar', value: 15 },
  { label: 'Apr', value: 25 },
  { label: 'May', value: 31 },
  { label: 'Jun', value: 28 },
];

const chartWidth = 420;
const chartHeight = 180;
const maxValue = 35;
const toX = (index) => (index / (points.length - 1)) * chartWidth;
const toY = (value) => chartHeight - (value / maxValue) * chartHeight;
const line = points.map(({ value }, index) => `${index === 0 ? 'M' : 'L'} ${toX(index)} ${toY(value)}`).join(' ');

const SchoolDashboardVisual = () => (
  <div className="relative w-full pb-10 pl-4 sm:pb-12">
    <div className="flex overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-soft">
      <div className="hidden w-32 shrink-0 flex-col gap-2.5 bg-surface-muted p-3 sm:flex">
        <span className="h-3 w-20 rounded bg-border-subtle" />
        <span className="h-6 rounded bg-surface" />
        <span className="h-6 rounded bg-surface" />
        <span className="h-6 rounded bg-teal-100/70" />
        <span className="h-6 rounded bg-surface" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-5 p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-surface-muted p-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-content-muted">Active IEPs</p>
            <p className="mt-1 text-2xl font-bold text-cta">142</p>
          </div>
          <div className="rounded-lg bg-surface-muted p-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.06em] text-content-muted">Compliance score</p>
            <p className="mt-1 text-2xl font-bold text-cta">98%</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col justify-between py-1 text-[10px] text-content-muted">
            {[30, 20, 10, 0].map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
          <div className="min-w-0 flex-1">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none" aria-hidden="true" className="h-32 w-full sm:h-36">
              <defs>
                <linearGradient id="fs-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2c7a7b" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#2c7a7b" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75].map((fraction) => (
                <line key={fraction} x1={chartWidth * fraction} y1="0" x2={chartWidth * fraction} y2={chartHeight} stroke="currentColor" strokeWidth="1" className="text-border-subtle" />
              ))}
              <path d={`${line} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`} fill="url(#fs-area)" />
              <path d={line} fill="none" stroke="#2c7a7b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="mt-1 flex justify-between text-[10px] text-content-muted">
              {points.map(({ label }) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 flex items-center gap-2.5 rounded-lg border border-border-subtle bg-surface px-3 py-2.5 shadow-soft">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <CheckIcon className="size-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-bold text-content">Compliance Audit</span>
        <span className="block text-[11px] text-content-muted">Verified 2m ago</span>
      </span>
    </div>
  </div>
);

export default SchoolDashboardVisual;
