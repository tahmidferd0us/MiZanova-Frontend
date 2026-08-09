import { BadgeIcon, CheckIcon, ShieldIcon, StarIcon, TrophyIcon } from '@shared/components/icons';
import { AWARDS } from '../../data/about';

const icons = [BadgeIcon, TrophyIcon, ShieldIcon, StarIcon, CheckIcon, BadgeIcon];

const RecognitionSection = () => (
  <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto flex max-w-[1100px] flex-col gap-10">
      <h2 className="text-center text-2xl font-bold tracking-tight text-content sm:text-3xl lg:text-[2rem]">Recognized by</h2>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {AWARDS.map((award, index) => {
          const Icon = icons[index];

          return (
            <li key={award} className="flex flex-col items-center gap-2 rounded-xl border border-border-subtle p-5 text-content-muted">
              <Icon className="size-6" />
              <span className="text-xs">{award}</span>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default RecognitionSection;
