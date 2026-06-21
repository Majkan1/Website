import type { Project } from "@/lib/data";
import { IconExternal, IconGitHub } from "./icons";

export default function ProjectCard({
  project,
  delayClass,
}: {
  project: Project;
  delayClass?: string;
}) {
  const { num, title, description, stack, liveUrl, githubUrl, featured, preview } =
    project;

  const stackTags = (
    <div className="project-stack">
      {stack.map((tag) => (
        <span className="stack-tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );

  const actions = (
    <div className="project-actions">
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
        <IconExternal />
        Live Demo
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-gh">
        <IconGitHub />
        GitHub
      </a>
    </div>
  );

  if (featured) {
    return (
      <div className="project-card featured reveal">
        <div>
          <div className="project-num">{num}</div>
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
          {stackTags}
          {actions}
        </div>
        <div className="project-right">
          <div className="project-preview">
            <div className="preview-dots">
              <div className="preview-dot"></div>
              <div className="preview-dot"></div>
              <div className="preview-dot"></div>
            </div>
            {preview && (
              <div className="preview-content">
                <div className="accent">{preview.top}</div>
                {preview.middle.map((line) => (
                  <div key={line}>{line}</div>
                ))}
                <div className="accent">{preview.bottom}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-card reveal ${delayClass ?? ""}`.trim()}>
      <div className="project-num">{num}</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      {stackTags}
      {actions}
    </div>
  );
}
