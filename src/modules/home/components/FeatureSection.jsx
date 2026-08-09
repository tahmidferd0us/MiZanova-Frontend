import { motion } from 'motion/react';
import { BrainIcon, ClockIcon, WifiIcon } from '@shared/components/icons';

const features = [
  {
    Icon: ClockIcon,
    tone: 'bg-teal-50 text-teal-700',
    title: 'Log behaviour in 20 seconds',
    description: 'Three taps. No paperwork. Designed for teachers in the moment to quickly capture essential context without disrupting the class.',
  },
  {
    Icon: BrainIcon,
    tone: 'bg-amber-50 text-amber-600',
    title: 'AI + human-validated strategies',
    description: 'Every strategy reviewed by safeguarding logic before reaching you. Combining advanced AI with expert-backed methodologies.',
  },
  {
    Icon: WifiIcon,
    tone: 'bg-violet-50 text-violet-600',
    title: 'Works offline, always',
    description: 'PWA technology means you can log anywhere, even without internet. Syncs automatically when you are back online.',
  },
];

const FeatureSection = () => (
  <section id="features" className="bg-surface px-4 pb-16 pt-16 sm:px-6 lg:px-20 lg:pb-24 lg:pt-[149px]">
    <div className="mx-auto grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map(({ Icon, tone, title, description }, index) => (
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
  </section>
);

export default FeatureSection;
