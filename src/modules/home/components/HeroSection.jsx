import { motion } from 'motion/react';
import HeroVisual from './HeroVisual';

const trustMarkers = ['🇦🇺 Australian-hosted', 'APP Compliant', 'Non-clinical', 'Evidence-based'];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] } }),
};

const HeroSection = () => (
  <section className="bg-canvas px-4 py-8 sm:px-6 sm:py-12 lg:px-20 lg:py-16">
    <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 rounded-xl bg-brand-600/5 px-5 py-10 sm:px-6 sm:py-12 lg:py-[46px] xl:flex-row xl:gap-16">
      <div className="flex w-full flex-col items-start gap-6 xl:max-w-[584px] xl:flex-1">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center rounded-full border border-brand-200/70 bg-surface px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-700"
        >
          Neurodiversity Ecosystem
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="text-balance text-[clamp(2rem,3.34vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-content sm:text-[clamp(2.5rem,3.34vw,3rem)]"
        >
          <span className="block">Support every learner.</span>
          <span className="block">Empower every educator.</span>
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="max-w-xl text-pretty text-base leading-relaxed text-content-muted">
          Neurodiversity-affirming AI strategies in under 20 seconds. Built with educators, validated by specialists, hosted in Australia.
        </motion.p>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="flex flex-wrap items-center gap-x-2.5 gap-y-2 pt-1 text-[13px] text-content-muted"
        >
          {trustMarkers.map((marker) => (
            <li key={marker} className="flex items-center gap-2.5 after:text-content-muted/40 after:content-['•'] last:after:hidden">
              {marker}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full overflow-hidden rounded-lg shadow-soft xl:max-w-[584px] xl:flex-1"
      >
        <HeroVisual className="block h-auto w-full" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
