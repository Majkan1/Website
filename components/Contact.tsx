import { site } from "@/lib/data";
import { IconDownload, IconGitHub, IconLinkedIn } from "./icons";

const socialClass =
  "inline-flex items-center gap-2.5 rounded-sm border border-line px-7 py-3.5 font-mono text-[13px] tracking-[0.04em] text-muted transition-[border-color,color,background] hover:border-accent hover:bg-accent-dim hover:text-accent [&_svg]:h-4 [&_svg]:w-4";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg2 px-12 py-30 text-center mobile:px-6 mobile:py-20"
    >
      <div className="mx-auto max-w-[700px]">
        <div className="reveal mb-15 flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent before:h-px before:w-20 before:bg-accent before:opacity-40 before:content-['']">
          05 — Contact
        </div>
        <h2 className="reveal mb-5 mt-6 font-display text-[clamp(40px,6vw,80px)] font-extrabold leading-none tracking-[-0.04em] text-ink">
          Let&apos;s work
          <br />
          <em className="not-italic text-accent">together</em>
        </h2>
        <p className="reveal mb-12 text-base leading-[1.7] text-muted">
          I&apos;m looking for a remote full-stack role I can do from anywhere.
          If you have an open position or just want to talk, reach out — I
          respond fast.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="reveal mb-12 inline-block border-b-2 border-accent pb-1 font-display text-[clamp(18px,3vw,28px)] font-bold tracking-[-0.01em] text-ink transition-colors hover:text-accent"
        >
          {site.email}
        </a>
        <div className="reveal flex flex-wrap justify-center gap-4">
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
          >
            <IconDownload />
            Download CV
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
          >
            <IconGitHub />
            GitHub / Majkan1
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
          >
            <IconLinkedIn />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
