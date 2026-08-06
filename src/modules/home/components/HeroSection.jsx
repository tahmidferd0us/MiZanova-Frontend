import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ROUTES } from '@app/router/routes';
import Button from '@shared/components/ui/Button';

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '<80ms', label: 'API latency' },
  { value: '12k+', label: 'Teams onboarded' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] } }),
};

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-brand-100),transparent_70%)]" />

    <div className="container-page flex flex-col items-center gap-8 py-16 text-center sm:py-24 lg:py-28">
      <motion.span
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
      >
        New · Modular monolith starter
      </motion.span>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.05}
        className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-content sm:text-5xl lg:text-6xl"
      >
        Build your product on a foundation that actually scales
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="max-w-2xl text-pretty text-base text-content-muted sm:text-lg"
      >
        MiZanova gives you a clean modular architecture, secure authentication and a reusable component system — so your team spends time on features, not plumbing.
      </motion.p>

      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link to={ROUTES.register} className="sm:w-auto">
          <Button size="lg" fullWidth>
            Get started free
          </Button>
        </Link>
        <Link to={ROUTES.login} className="sm:w-auto">
          <Button size="lg" variant="secondary" fullWidth>
            Log in
          </Button>
        </Link>
      </motion.div>

      <motion.dl
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="grid w-full max-w-2xl grid-cols-1 gap-4 pt-6 sm:grid-cols-3"
      >
        {stats.map(({ value, label }) => (
          <div key={label} className="rounded-card border border-border-subtle bg-surface px-4 py-5 shadow-soft">
            <dt className="text-2xl font-semibold text-content">{value}</dt>
            <dd className="mt-1 text-sm text-content-muted">{label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default HeroSection;
