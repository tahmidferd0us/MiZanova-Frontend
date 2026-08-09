import { motion } from 'motion/react';
import { LinkedInIcon } from '@shared/components/icons';
import { initialsOf, TEAM } from '../../data/about';

const TeamSection = () => (
  <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Our team</h2>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map(({ name, role, bio }, index) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-teal-100 text-xl font-bold text-cta">{initialsOf(name)}</span>
            <span className="block text-base font-bold tracking-tight text-content">{name}</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-teal-700">{role}</span>
            <p className="text-sm leading-relaxed text-content-muted">{bio}</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} on LinkedIn`}
              className="flex size-11 items-center justify-center rounded-lg text-content-muted transition-colors hover:text-cta sm:size-9"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default TeamSection;
