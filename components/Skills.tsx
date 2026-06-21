import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label reveal">02 — Skills</div>
      <h2 className="section-title reveal">What I work with</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            className={`skill-card reveal reveal-delay-${(i % 3) + 1}`}
            key={skill.name}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.desc}</div>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
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
