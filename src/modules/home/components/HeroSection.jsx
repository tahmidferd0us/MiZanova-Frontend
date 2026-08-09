import { motion } from 'motion/react';
import HeroVisual from './HeroVisual';

const trustMarkers = ['🇦🇺 Australian-hosted', 'APP Compliant', 'Non-clinical', 'Evidence-based'];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] } }),
};

const HeroSection = () => (
  <section className="bg-brand-50 py-6 sm:py-10 lg:py-14">
    <div className="container-page">
      <div className="overflow-hidden rounded-2xl bg-brand-100 px-6 py-12 sm:rounded-3xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-6">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center rounded-full border border-brand-200 bg-surface px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700"
            >
              Neurodiversity Ecosystem
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="text-balance text-[2rem] font-bold leading-[1.08] tracking-tight text-content sm:text-5xl lg:text-[3.4rem]"
            >
              <span className="block">Support every learner.</span>
              <span className="block">Empower every educator.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="max-w-xl text-pretty text-base text-content-muted sm:text-lg"
            >
              Neurodiversity-affirming AI strategies in under 20 seconds. Built with educators, validated by specialists, hosted in Australia.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="flex flex-wrap items-center gap-x-2.5 gap-y-2 pt-2 text-sm text-content-muted"
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
            className="overflow-hidden rounded-xl shadow-soft"
          >
            <HeroVisual className="block h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
