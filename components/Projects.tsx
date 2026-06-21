import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  let regularIndex = 0;

  return (
    <section id="projects">
      <div className="projects-header">
        <div>
          <div className="section-label reveal">03 — Projects</div>
          <h2 className="section-title reveal">Selected work</h2>
        </div>
        <p className="projects-sub reveal">
          {projects.length} live projects, each built from scratch and deployed
          to production.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const delayClass = project.featured
            ? undefined
            : `reveal-delay-${(regularIndex++ % 3) + 1}`;
          return (
            <ProjectCard
              key={project.title}
              project={project}
              delayClass={delayClass}
            />
          );
        })}
      </div>
    </section>
  );
}
