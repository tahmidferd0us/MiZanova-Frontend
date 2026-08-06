import { motion } from 'motion/react';

const features = [
  { title: 'Modular monolith', description: 'Each domain owns its routes, state and UI. Add a module without touching the rest of the app.' },
  { title: 'Secure by default', description: 'JWT access tokens, rotating refresh tokens in http-only cookies, and rate-limited auth endpoints.' },
  { title: 'Reusable components', description: 'Buttons, inputs, tables, modals, toasts and file handling — all built once, on Tailwind CSS.' },
  { title: 'Redux Toolkit + RTK Query', description: 'Server cache and client state cleanly separated, with a single typed HTTP layer underneath.' },
  { title: 'Responsive from the start', description: 'Mobile-first layouts, 44px touch targets and tables that turn into readable cards on small screens.' },
  { title: 'Prisma & Supabase', description: 'A managed Postgres you control, with migrations and a schema that stays readable as you grow.' },
];

const FeatureSection = () => (
  <section id="features" className="border-t border-border-subtle bg-surface-muted/50 py-16 sm:py-24">
    <div className="container-page flex flex-col gap-12">
      <div className="flex max-w-2xl flex-col gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-content sm:text-4xl">Everything wired up, nothing in your way</h2>
        <p className="text-content-muted">A starting point that already answers the boring architectural questions, so your team can start on day one.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 rounded-card border border-border-subtle bg-surface p-5 shadow-soft"
          >
            <h3 className="text-base font-semibold text-content">{title}</h3>
            <p className="text-sm text-content-muted">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;
