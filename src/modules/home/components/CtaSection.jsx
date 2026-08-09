import { motion } from 'motion/react';

const CtaSection = () => (
  <section id="contact" className="relative overflow-hidden bg-cta px-4 py-16 sm:px-6 lg:px-20 lg:py-24">
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.14),transparent_55%),radial-gradient(70%_120%_at_80%_0%,rgba(255,255,255,0.12),transparent_70%)]" />

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex max-w-[896px] flex-col items-center gap-4 text-center"
    >
      <h2 className="max-w-[700px] text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
        Ready to transform support for every learner?
      </h2>
      <p className="max-w-xl text-pretty text-sm text-white/80 sm:text-base">Join schools across Australia building more inclusive classrooms.</p>
    </motion.div>
  </section>
);

export default CtaSection;
