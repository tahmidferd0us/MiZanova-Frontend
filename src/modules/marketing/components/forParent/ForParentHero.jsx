import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ROUTES } from '@app/router/routes';
import Button from '@shared/components/ui/Button';
import DailyReportVisual from './DailyReportVisual';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] } }),
};

const ForParentHero = () => (
  <section className="bg-teal-50/40 px-4 py-12 sm:px-6 lg:px-20 lg:py-16">
    <div className="mx-auto grid max-w-[1280px] items-center gap-12 xl:grid-cols-2 xl:gap-16">
      <div className="flex flex-col items-start gap-6">
        <motion.span variants={fadeUp} initial="hidden" animate="visible" className="text-[11px] font-bold uppercase tracking-[0.12em] text-amber-500">
          For Families
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="text-balance text-[clamp(2rem,3.34vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-content sm:text-[clamp(2.5rem,3.34vw,3rem)]"
        >
          Be your child&apos;s strongest advocate
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="max-w-xl text-pretty text-base leading-relaxed text-content-muted">
          Get real-time updates and evidence-based strategies tailored to your child&apos;s unique needs. Bridge the gap between school and home with data-driven insights.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link to={`${ROUTES.register}/parent`} className="sm:w-auto">
            <Button variant="cta" size="lg" fullWidth className="h-12 rounded-full px-7 font-bold">
              Start 7-day Free Trial
            </Button>
          </Link>
          <a href="#sample-report" className="sm:w-auto">
            <Button variant="secondary" size="lg" fullWidth className="h-12 rounded-full border-teal-200 bg-surface px-7 font-bold text-content hover:bg-teal-50">
              See sample report
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
        <DailyReportVisual />
      </motion.div>
    </div>
  </section>
);

export default ForParentHero;
