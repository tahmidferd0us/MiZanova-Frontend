import { motion } from 'motion/react';
import Button from '@shared/components/ui/Button';
import SpecialistQueueVisual from './SpecialistQueueVisual';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] } }),
};

const ForSpecialistHero = () => (
  <section className="relative overflow-hidden bg-surface px-4 py-12 sm:px-6 lg:px-20 lg:py-16">
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_78%_0%,rgba(251,191,36,0.12),transparent_70%)]" />

    <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 xl:grid-cols-2 xl:gap-16">
      <div className="flex flex-col items-start gap-6">
        <motion.span variants={fadeUp} initial="hidden" animate="visible" className="text-[11px] font-bold uppercase tracking-[0.12em] text-amber-500">
          For Neurodiversity Specialists
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="text-balance text-[clamp(2rem,3.34vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-content sm:text-[clamp(2.5rem,3.34vw,3rem)]"
        >
          Amplify your impact, beyond the consultation room
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="max-w-xl text-pretty text-base leading-relaxed text-content-muted">
          Join a network of qualified professionals supporting neurodivergent learners. Review AI-generated strategies, contribute evidence to the curated library, and collaborate
          directly with families and schools.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#apply" className="sm:w-auto">
            <Button variant="cta" size="lg" fullWidth className="h-12 rounded-lg px-6 font-bold">
              Apply to Join the Network
            </Button>
          </a>
          <a href="#specialist-pack" className="sm:w-auto">
            <Button variant="secondary" size="lg" fullWidth className="h-12 rounded-lg border-brand-100 bg-surface px-6 font-bold text-cta hover:bg-brand-50">
              Download Specialist Pack
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
        <SpecialistQueueVisual />
      </motion.div>
    </div>
  </section>
);

export default ForSpecialistHero;
