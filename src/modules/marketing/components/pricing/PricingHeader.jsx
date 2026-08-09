import { cn } from '@shared/utils/cn';

const audiences = [
  { id: 'schools', label: 'For Schools' },
  { id: 'parents', label: 'For Parents' },
];

const PricingHeader = ({ audience, onAudienceChange }) => (
  <section className="bg-surface px-4 pb-10 pt-12 sm:px-6 lg:px-20 lg:pt-16">
    <div className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
      <h1 className="text-balance text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-content sm:text-[2.5rem] lg:text-5xl">Pricing that fits your role</h1>
      <p className="text-sm text-content-muted sm:text-base">Simple Australian-dollar pricing. Annual savings. No hidden fees.</p>

      <div role="tablist" aria-label="Pricing audience" className="inline-flex gap-1 rounded-full bg-surface-muted p-1">
        {audiences.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={audience === id}
            onClick={() => onAudienceChange(id)}
            className={cn(
              'min-h-11 rounded-full px-5 text-sm font-semibold transition-colors sm:min-h-9',
              audience === id ? (id === 'parents' ? 'bg-surface text-amber-600 shadow-sm' : 'bg-surface text-cta shadow-sm') : 'text-content-muted hover:text-content',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-content-muted">
        <span>🇦🇺 Showing prices in AUD</span>
        <span aria-hidden className="hidden text-border-subtle sm:inline">
          |
        </span>
        <a href="#currency" className="font-medium text-cta underline underline-offset-2">
          change currency
        </a>
      </p>
    </div>
  </section>
);

export default PricingHeader;
