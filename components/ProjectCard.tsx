import type { Project } from "@/lib/data";
import { IconExternal, IconGitHub } from "./icons";

const cardChrome =
  "relative overflow-hidden bg-bg3 transition-colors hover:bg-[#1a1a1a] " +
  "after:absolute after:inset-x-0 after:top-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-[400ms] after:content-[''] hover:after:scale-x-100";

const btnLive =
  "inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 font-mono text-xs font-medium tracking-[0.06em] text-bg transition-[opacity,transform] hover:-translate-y-px hover:opacity-85 [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:shrink-0";
const btnGh =
  "inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 font-mono text-xs tracking-[0.06em] text-muted transition-[border-color,color] hover:border-muted hover:text-ink [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:shrink-0";

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
    <div className="mb-8 flex flex-wrap gap-1.5">
      {stack.map((tag) => (
        <span
          className="rounded-xs border border-line px-2.5 py-[5px] font-mono text-[10px] tracking-[0.05em] text-muted"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );

  const actions = (
    <div className="mt-auto flex gap-3">
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={btnLive}>
        <IconExternal />
        Live Demo
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={btnGh}>
        <IconGitHub />
        GitHub
      </a>
    </div>
  );

  const num_ = (
    <div className="mb-6 font-mono text-[11px] tracking-[0.12em] text-dim">
      {num}
    </div>
  );
  const heading = (
    <h3 className="mb-3 font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink">
      {title}
    </h3>
  );
  const desc = (
    <p className="mb-7 flex-1 text-sm leading-[1.7] text-muted">{description}</p>
  );

  if (featured) {
    return (
      <div
        className={`reveal ${cardChrome} col-span-2 grid grid-cols-2 items-center gap-15 px-10 py-12 mobile:col-span-1 mobile:grid-cols-1`}
      >
        <div className="flex flex-col">
          {num_}
          {heading}
          {desc}
          {stackTags}
          {actions}
        </div>
        <div className="flex flex-col">
          <div className="relative flex h-[220px] items-center justify-center overflow-hidden rounded-lg border border-line bg-bg2">
            <div className="absolute left-4 top-3 flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <div className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            {preview && (
              <div className="text-center font-mono text-xs leading-loose text-dim">
                <div className="text-accent">{preview.top}</div>
                {preview.middle.map((line) => (
                  <div key={line}>{line}</div>
                ))}
                <div className="text-accent">{preview.bottom}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`reveal ${delayClass ?? ""} ${cardChrome} flex flex-col px-10 py-12`.trim()}
    >
      {num_}
      {heading}
      {desc}
      {stackTags}
      {actions}
    </div>
  );
}
