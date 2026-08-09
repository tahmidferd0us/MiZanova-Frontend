import { motion } from 'motion/react';
import { env } from '@app/config/env';
import { BookIcon, LightbulbIcon, UsersIcon } from '@shared/components/icons';

const supports = [
  {
    Icon: BookIcon,
    card: 'bg-brand-50/60',
    tone: 'bg-cta text-white',
    title: 'Daily Reports',
    description: "No more waiting for parent-teacher night. Get a snapshot of your child's emotional state, focus peaks, and social wins every afternoon.",
  },
  {
    Icon: LightbulbIcon,
    card: 'bg-amber-50/70',
    tone: 'bg-amber-400 text-white',
    title: 'AI Strategies',
    description: "Evidence-based advice based on the day's events. If lunch was loud and difficult, we'll suggest calming sensory activities for after school.",
  },
  {
    Icon: UsersIcon,
    card: 'bg-teal-50/70',
    tone: 'bg-teal-600 text-white',
    title: 'Professional Collaboration',
    description: "Easily share behavioral patterns and engagement data with your child's OT, Psychologist, or Speech Pathologist in one click.",
  },
];

const ParentSupportSection = () => (
  <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">How {env.appName} supports you</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {supports.map(({ Icon, card, tone, title, description }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col gap-4 rounded-2xl p-6 ${card}`}
          >
            <span className={`flex size-10 items-center justify-center rounded-lg ${tone}`}>
              <Icon className="size-5" />
            </span>
            <h3 className="text-base font-bold tracking-tight text-content">{title}</h3>
            <p className="text-sm leading-relaxed text-content-muted">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ParentSupportSection;
