import { MISSION_PARAGRAPHS } from '../../data/about';

const MissionSection = () => (
  <section className="bg-surface px-4 py-16 sm:px-6 lg:px-20 lg:py-20">
    <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold tracking-tight text-content sm:text-3xl">Our mission</h2>
        {MISSION_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-content-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <div aria-hidden className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 via-amber-50 to-teal-100">
        <span className="absolute left-[18%] top-[30%] size-16 rounded-full bg-teal-300/50" />
        <span className="absolute left-[46%] top-[20%] size-20 rounded-full bg-rose-300/45" />
        <span className="absolute left-[70%] top-[36%] size-14 rounded-full bg-amber-300/50" />
        <span className="absolute inset-x-[12%] bottom-[18%] h-16 rounded-2xl bg-white/60" />
      </div>
    </div>
  </section>
);

export default MissionSection;
