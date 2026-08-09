import { FileIcon, LockIcon, MapPinIcon, RefreshIcon, UsersIcon } from '@shared/components/icons';

const guarantees = [
  { label: 'Australian-hosted servers', Icon: MapPinIcon },
  { label: 'Fully anonymized AI processing', Icon: UsersIcon },
  { label: 'GDPR & APPs Compliant', Icon: FileIcon },
  { label: 'Encrypted Data Transmission', Icon: RefreshIcon },
];

const ParentDataSection = () => (
  <section className="bg-canvas px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col items-start gap-4">
        <span className="flex size-11 items-center justify-center rounded-xl bg-cta text-white">
          <LockIcon className="size-5" />
        </span>
        <h2 className="text-balance text-2xl font-bold tracking-tight text-content sm:text-3xl">Your child&apos;s data, your control</h2>
        <p className="max-w-md text-sm leading-relaxed text-content-muted">
          We treat your family&apos;s data with the highest level of security. You decide who can see your child&apos;s reports, and you can revoke access at any time. We follow
          strict Australian data privacy standards.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {guarantees.map(({ label, Icon }) => (
          <li key={label} className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface p-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-cta">
              <Icon className="size-4" />
            </span>
            <span className="text-sm font-medium text-content">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ParentDataSection;
