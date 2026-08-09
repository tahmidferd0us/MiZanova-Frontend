import { SpecialistIcon, UserIcon, UsersIcon } from '@shared/components/icons';
import { PARENT_ADD_ONS, PARENT_PLANS } from '../../data/pricingPlans';
import PlanCard from './PlanCard';

const addOnIcons = [UserIcon, UsersIcon, SpecialistIcon];

const ParentPricing = () => (
  <section className="bg-surface px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
    <div className="mx-auto flex max-w-[900px] flex-col gap-14">
      <div className="flex flex-col gap-10">
        <header className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-content sm:text-3xl">Family plans</h2>
          <p className="text-sm text-content-muted">Monthly or annual subscriptions. No hidden costs.</p>
        </header>

        <div className="grid items-stretch gap-6 sm:grid-cols-2">
          {PARENT_PLANS.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} accent="amber" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-center text-xl font-bold tracking-tight text-content sm:text-2xl">Optional add-ons</h2>

        <ul className="grid gap-4 sm:grid-cols-3">
          {PARENT_ADD_ONS.map(({ title, price, unit, description }, index) => {
            const Icon = addOnIcons[index];

            return (
              <li key={title} className="flex flex-col gap-3 rounded-xl bg-canvas p-5">
                <span className="flex size-9 items-center justify-center rounded-full bg-surface text-cta shadow-soft">
                  <Icon className="size-4" />
                </span>
                <span className="block text-sm font-bold text-content">{title}</span>
                <span className="block text-sm">
                  <span className="font-bold text-amber-600">{price}</span> <span className="text-xs text-content-muted">{unit}</span>
                </span>
                <span className="block text-xs leading-relaxed text-content-muted">{description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

export default ParentPricing;
