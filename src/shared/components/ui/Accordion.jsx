import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@shared/utils/cn';
import { ChevronDownIcon } from '@shared/components/icons';

const Accordion = ({ items = [], defaultOpenIndex = null, className }) => {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map(({ question, answer }, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={question} className={cn('overflow-hidden rounded-xl border transition-colors', isOpen ? 'border-brand-100 bg-brand-50/50' : 'border-border-subtle bg-surface')}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-${index}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-content"
              >
                {question}
                <ChevronDownIcon className={cn('size-5 shrink-0 text-content-muted transition-transform duration-200', isOpen && 'rotate-180')} />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${baseId}-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-content-muted">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
