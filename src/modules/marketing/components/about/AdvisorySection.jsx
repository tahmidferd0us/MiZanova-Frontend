import { ADVISORY_BOARD, initialsOf } from '../../data/about';

const AdvisorySection = () => (
  <section className="bg-canvas px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Advisory board</h2>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {ADVISORY_BOARD.map(({ name, role }) => (
          <li key={name} className="flex flex-col items-center gap-2 rounded-xl border border-border-subtle bg-surface p-4 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-brand-100 text-sm font-bold text-cta">{initialsOf(name)}</span>
            <span className="block text-xs font-bold text-content">{name}</span>
            <span className="block text-[11px] leading-tight text-content-muted">{role}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AdvisorySection;
