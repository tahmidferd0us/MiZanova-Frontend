import { AccessibilityIcon, BadgeIcon, ChatIcon, ClockIcon, GraduationCapIcon, ShieldIcon } from '@shared/components/icons';

const criteria = [
  { label: 'Tertiary qualification in relevant field', Icon: GraduationCapIcon },
  { label: 'Professional registration (AHPRA, AASW, etc)', Icon: BadgeIcon },
  { label: 'Current Working With Children Check (WWCC)', Icon: ShieldIcon },
  { label: '3+ years clinical/practical experience', Icon: ClockIcon },
  { label: 'Neurodiversity-affirming practice alignment', Icon: AccessibilityIcon },
  { label: 'Commitment to non-clinical language', Icon: ChatIcon },
];

const AcceptanceSection = () => (
  <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1000px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Who we accept</h2>

      <ul className="grid gap-4 sm:grid-cols-2">
        {criteria.map(({ label, Icon }) => (
          <li key={label} className="flex items-center gap-3 rounded-xl bg-canvas p-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface text-cta shadow-soft">
              <Icon className="size-4" />
            </span>
            <span className="text-sm font-medium text-content">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AcceptanceSection;
