import { learning } from "@/lib/data";

export default function Learning() {
  return (
    <section id="learning" className="relative px-12 py-30 mobile:px-6 mobile:py-20">
      <div className="section-label reveal">04 — Currently</div>
      <h2 className="section-title reveal">Leveling up</h2>
      <div className="mt-15 grid grid-cols-2 gap-10 mobile:grid-cols-1">
        {learning.map((item, i) => (
          <div
            className={`reveal reveal-delay-${i + 1} flex items-start gap-6`}
            key={item.num}
          >
            <div className="w-14 shrink-0 font-display text-5xl font-extrabold leading-none text-accent opacity-30">
              {item.num}
            </div>
            <div>
              <div className="mb-2 font-display text-xl font-bold text-ink">
                {item.title}
              </div>
              <div className="text-sm leading-[1.7] text-muted">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
