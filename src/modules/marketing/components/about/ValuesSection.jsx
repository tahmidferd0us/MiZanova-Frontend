import { motion } from 'motion/react';
import { GraduationCapIcon, HeartIcon, LockIcon, SearchIcon } from '@shared/components/icons';
import { VALUES } from '../../data/about';

const icons = [HeartIcon, LockIcon, SearchIcon, GraduationCapIcon];

const ValuesSection = () => (
  <section className="bg-canvas px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">What we stand for</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map(({ title, description }, index) => {
          const Icon = icons[index];

          return (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface p-6 shadow-soft"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <Icon className="size-5" />
              </span>
              <h3 className="text-base font-bold tracking-tight text-content">{title}</h3>
              <p className="text-sm leading-relaxed text-content-muted">{description}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ValuesSection;
