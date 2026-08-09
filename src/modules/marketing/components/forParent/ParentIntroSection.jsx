import { env } from '@app/config/env';

const ParentIntroSection = () => (
  <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
      <h2 className="text-balance text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Every parent deserves to understand their child&apos;s day</h2>
      <p className="text-pretty text-sm leading-relaxed text-content-muted sm:text-base">
        The school day can feel like a black box. You pick up your child and see they are overwhelmed, but you don&apos;t know why. {env.appName} provides the missing
        link—connecting real-time classroom data with actionable home strategies, ensuring you never have to guess about triggers or emotional regulation needs again.
      </p>
    </div>
  </section>
);

export default ParentIntroSection;
