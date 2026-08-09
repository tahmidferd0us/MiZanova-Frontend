import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] } }),
};

const AboutHero = () => (
  <section className="relative overflow-hidden bg-teal-50/40 px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <span aria-hidden className="pointer-events-none absolute -right-16 -top-20 size-80 rounded-full bg-teal-100/40" />

    <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
      <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-700">
        About Special Miles
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.05}
        className="text-balance text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-content sm:text-[2.5rem] lg:text-5xl"
      >
        Built by educators. Guided by neurodivergent voices.
      </motion.h1>

      <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="max-w-2xl text-pretty text-sm leading-relaxed text-content-muted sm:text-base">
        Special Miles is an Australian education technology company building tools that make every classroom and every home a place where neurodivergent learners thrive.
      </motion.p>
    </div>
  </section>
);

export default AboutHero;
