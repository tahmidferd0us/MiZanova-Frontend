import { GraduationCapIcon, MapPinIcon, PhoneIcon } from '@shared/components/icons';
import { SCHOOL_PLANS } from '../../data/pricingPlans';
import PlanCard from './PlanCard';

const highlights = [
  { title: 'Remote/Low-SES', description: '40% off for eligible schools', Icon: MapPinIcon, tone: 'bg-teal-50/70' },
  { title: 'Pilot Programs', description: '60-90 day free school pilots', Icon: GraduationCapIcon, tone: 'bg-canvas' },
  { title: 'Custom needs?', description: 'Talk to our sales experts', Icon: PhoneIcon, tone: 'bg-canvas' },
];

const SchoolPricing = () => (
  <section className="bg-surface px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
    <div className="mx-auto flex max-w-[1100px] flex-col gap-10">
      <header className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-content sm:text-3xl">School subscriptions</h2>
        <p className="text-sm text-content-muted">Annual contracts. Pilot programs available.</p>
      </header>

      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {SCHOOL_PLANS.map((plan, index) => (
          <PlanCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>

      <ul className="grid gap-4 sm:grid-cols-3">
        {highlights.map(({ title, description, Icon, tone }) => (
          <li key={title} className={`flex items-center gap-3 rounded-xl p-4 ${tone}`}>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-cta shadow-soft">
              <Icon className="size-4" />
            </span>
            <span>
              <span className="block text-sm font-bold text-content">{title}</span>
              <span className="block text-xs text-content-muted">{description}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SchoolPricing;
