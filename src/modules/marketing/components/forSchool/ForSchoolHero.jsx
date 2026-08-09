import { motion } from 'motion/react';
import { ArrowRightIcon } from '@shared/components/icons';
import Button from '@shared/components/ui/Button';
import SchoolDashboardVisual from './SchoolDashboardVisual';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] } }),
};

const ForSchoolHero = () => (
  <section className="bg-surface px-4 py-12 sm:px-6 lg:px-20 lg:py-16">
    <div className="mx-auto grid max-w-[1280px] items-center gap-12 xl:grid-cols-2 xl:gap-16">
      <div className="flex flex-col items-start gap-6">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-cta"
        >
          For School Leaders
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="text-balance text-[clamp(2rem,3.34vw,3rem)] font-bold leading-[1.2] tracking-[-0.02em] text-content sm:text-[clamp(2.5rem,3.34vw,3rem)]"
        >
          Institution-grade neurodiversity support
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="max-w-xl text-pretty text-base leading-relaxed text-content-muted">
          Implement evidence-based strategies across your entire campus. Fully APP compliant, Australian-hosted, and designed to reduce teacher workload while improving student outcomes.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#request-pilot" className="sm:w-auto">
            <Button variant="cta" size="lg" fullWidth rightIcon={<ArrowRightIcon className="size-4" />} className="h-14 rounded-lg font-bold">
              Request a Pilot (60-90 days)
            </Button>
          </a>
          <a href="#brochure" className="sm:w-auto">
            <Button variant="secondary" size="lg" fullWidth className="h-14 rounded-lg border-brand-100 bg-surface font-bold text-cta hover:bg-brand-50">
              Download Brochure (PDF)
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
        <SchoolDashboardVisual />
      </motion.div>
    </div>
  </section>
);

export default ForSchoolHero;
