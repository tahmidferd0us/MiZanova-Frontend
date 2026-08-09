import { env } from '@app/config/env';
import Accordion from '@shared/components/ui/Accordion';

const faqs = [
  {
    question: 'Is there a charge during the trial?',
    answer:
      'No, your first 7 days are completely free. We will only bill you after the trial period ends. You can cancel at any time within the trial window through your account settings with zero hassle.',
  },
  {
    question: 'How does the school share data with me?',
    answer:
      "Once your child's teacher logs a behaviour, the anonymised summary and strategies are shared to your dashboard automatically. Your school admin controls whether sharing is on by default or approved per report.",
  },
  {
    question: `What if my child's school doesn't use ${env.appName}?`,
    answer: `You can still start independently. Log your own home observations and receive support strategies, then invite your child's school to join ${env.appName} at any time.`,
  },
  {
    question: "Can I share access with my child's therapist?",
    answer:
      'Yes. Premium plans include a specialist collaboration portal, so you can grant a registered specialist time-limited access to the reports you choose, and revoke it whenever you want.',
  },
  {
    question: 'How specific are the AI strategies?',
    answer:
      "Strategies are generated from the day's logged context — triggers, duration, and sensory profile — then safety-screened before you see them. They are practical and classroom-tested, never diagnostic.",
  },
  {
    question: 'Are the reports clinical or easy to read?',
    answer:
      'Reports are written in plain language for families. Clinical detail is available for specialists you invite, but your dashboard stays readable and free of diagnostic labelling.',
  },
];

const ParentFaqSection = () => (
  <section id="faq" className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[820px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Frequently Asked Questions</h2>
      <Accordion items={faqs} defaultOpenIndex={0} />
    </div>
  </section>
);

export default ParentFaqSection;
