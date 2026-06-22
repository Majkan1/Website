import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  let regularIndex = 0;

  return (
    <section id="projects" className="bg-bg2 px-12 py-30 mobile:px-6 mobile:py-20">
      <div className="mb-15 flex items-end justify-between gap-10 mobile:flex-col mobile:items-start">
        <div>
          <div className="section-label reveal">03 — Projects</div>
          <h2 className="section-title reveal">Selected work</h2>
        </div>
        <p className="reveal max-w-[320px] text-right text-[15px] text-muted mobile:text-left">
          {projects.length} live projects, each built from scratch and deployed
          to production.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-0.5 mobile:grid-cols-1">
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
