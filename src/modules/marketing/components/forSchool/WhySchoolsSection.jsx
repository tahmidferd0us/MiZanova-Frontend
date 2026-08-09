import { motion } from 'motion/react';
import { env } from '@app/config/env';
import { ClockIcon, ShieldIcon, TrendingUpIcon } from '@shared/components/icons';

const reasons = [
  {
    Icon: ClockIcon,
    tone: 'bg-brand-50 text-cta',
    title: 'Operational Efficiency',
    description: 'Reduce administrative overhead by up to 40%. Centralise neurodiversity data and generate IEPs in minutes, not hours.',
  },
  {
    Icon: ShieldIcon,
    tone: 'bg-amber-50 text-amber-600',
    title: 'Compliance & Safeguarding',
    description: 'Automated audit trails and role-based access control ensure your school exceeds Department of Education standards.',
  },
  {
    Icon: TrendingUpIcon,
    tone: 'bg-violet-50 text-violet-600',
    title: 'Measurable Outcomes',
    description: 'Track student progress with robust data analytics. Prove the impact of intervention strategies with longitudinal reporting.',
  },
];

const WhySchoolsSection = () => (
  <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Why schools choose {env.appName}</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ Icon, tone, title, description }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface p-6 shadow-soft"
          >
            <span className={`flex size-10 items-center justify-center rounded-lg ${tone}`}>
              <Icon />
            </span>
            <h3 className="text-base font-bold tracking-tight text-content">{title}</h3>
            <p className="text-sm leading-relaxed text-content-muted">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhySchoolsSection;
