export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-12 pb-20 mobile:px-6 mobile:pb-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(120px,20vw,260px)] font-extrabold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(240,237,232,0.04)]">
        FULL-STACK
      </div>

      <div className="mb-8 inline-flex animate-[fadeUp_0.7s_0.2s_forwards] items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent opacity-0 before:h-px before:w-6 before:bg-accent before:content-['']">
        Open to remote work · Worldwide
      </div>

      <h1 className="mb-8 animate-[fadeUp_0.7s_0.35s_forwards] font-display text-[clamp(52px,8vw,110px)] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink opacity-0">
        Mikołaj
        <br />
        <em className="not-italic text-accent">Michalak</em>
      </h1>

      <div className="flex animate-[fadeUp_0.7s_0.5s_forwards] items-end justify-between gap-10 opacity-0 mobile:flex-col mobile:items-start">
        <p className="max-w-[420px] text-base leading-[1.7] text-muted [&_strong]:font-medium [&_strong]:text-ink">
          <strong>Full-Stack Developer</strong> building and shipping real,
          deployed products with <strong>Next.js</strong>,{" "}
          <strong>TypeScript</strong>, <strong>Prisma</strong> and{" "}
          <strong>PostgreSQL</strong>. Open to remote roles — anywhere in the
          world.
        </p>
        <div className="flex shrink-0 gap-12 mobile:justify-start">
          <div className="text-right">
            <div className="font-display text-4xl font-bold leading-none text-ink">
              5<span className="text-accent">+</span>
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-dim">
              Live Projects
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-4xl font-bold leading-none text-ink">
              B2
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-dim">
              English
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
