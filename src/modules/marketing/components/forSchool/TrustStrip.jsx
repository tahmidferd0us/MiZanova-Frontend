import { AuditIcon, GlobeIcon, LockIcon, ShieldDocIcon } from '@shared/components/icons';

const marks = [
  { label: 'Australian-hosted', Icon: GlobeIcon },
  { label: 'APP Compliant', Icon: ShieldDocIcon },
  { label: 'AES-256 Encryption', Icon: LockIcon },
  { label: 'Full Audit Trails', Icon: AuditIcon },
];

const TrustStrip = () => (
  <section className="bg-canvas px-4 py-12 sm:px-6 lg:px-20 lg:py-14">
    <ul className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
      {marks.map(({ label, Icon }) => (
        <li key={label} className="flex flex-col items-center gap-3 text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-surface text-cta shadow-soft">
            <Icon className="size-5" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-content-muted">{label}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default TrustStrip;
