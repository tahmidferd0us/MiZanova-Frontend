import { motion } from 'motion/react';
import { SchoolIcon, UserIcon } from '@shared/components/icons';

const tracks = [
  {
    Icon: SchoolIcon,
    tone: 'bg-brand-50 text-cta',
    dot: 'bg-cta',
    title: 'School-Contracted',
    points: [
      'Fixed fee per school audit or strategy review pack',
      'Regular monthly retainers for high-volume contributors',
      'Support whole-school neurodiversity initiatives',
      'Quarterly reporting on system-wide impact',
    ],
  },
  {
    Icon: UserIcon,
    tone: 'bg-amber-50 text-amber-600',
    dot: 'bg-amber-500',
    title: 'Parent Direct',
    points: [
      'Pay-per-review for specific student profiles',
      'Direct micro-consulting session fees',
      'Instant payment via secure platform wallet',
      'Flexible hours—set your own availability',
    ],
  },
];

const EngagementSection = () => (
  <section className="bg-canvas px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1100px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Two ways to engage</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {tracks.map(({ Icon, tone, dot, title, points }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 rounded-2xl border border-border-subtle bg-surface p-6 shadow-soft sm:p-7"
          >
            <div className="flex items-center gap-3">
              <span className={`flex size-10 items-center justify-center rounded-lg ${tone}`}>
                <Icon className="size-5" />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-content">{title}</h3>
            </div>

            <ul className="flex flex-col gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-content-muted">
                  <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${dot}`} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementSection;
