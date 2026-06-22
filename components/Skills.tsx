import { skills } from "@/lib/data";

const cardClass =
  "relative overflow-hidden bg-bg2 px-8 py-9 transition-colors hover:bg-bg3 " +
  "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:content-[''] hover:after:scale-x-100";

export default function Skills() {
  return (
    <section id="skills" className="relative px-12 py-30 mobile:px-6 mobile:py-20">
      <div className="section-label reveal">02 — Skills</div>
      <h2 className="section-title reveal">What I work with</h2>
      <div className="mt-15 grid grid-cols-3 gap-0.5 mobile:grid-cols-1">
        {skills.map((skill, i) => (
          <div
            className={`reveal reveal-delay-${(i % 3) + 1} ${cardClass}`}
            key={skill.name}
          >
            <div className="mb-4 text-[28px]">{skill.icon}</div>
            <div className="mb-2 font-display text-lg font-bold text-ink">
              {skill.name}
            </div>
            <div className="text-[13px] leading-[1.6] text-muted">
              {skill.desc}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {skill.tags.map((tag) => (
                <span
                  className="rounded-xs bg-[rgba(200,255,51,0.08)] px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-accent"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
