import { site } from "@/lib/data";
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from "./icons";

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-line px-[18px] py-2.5 font-mono text-xs text-muted transition-[border-color,color,background] hover:border-accent hover:bg-accent-dim hover:text-accent [&_svg]:h-3.5 [&_svg]:w-3.5";

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-line py-[18px]">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-dim">
        {label}
      </span>
      <span className="text-right text-sm text-ink">{value}</span>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="bg-bg2 px-12 py-30 mobile:px-6 mobile:py-20"
    >
      <div className="grid grid-cols-2 items-start gap-20 mobile:grid-cols-1 mobile:gap-10">
        <div className="reveal">
          <div className="section-label">01 — About</div>
          <h2 className="section-title mb-8">Who I am</h2>
          <p className="mb-12 text-[17px] leading-[1.8] text-muted [&_strong]:font-medium [&_strong]:text-ink">
            I&apos;m a Computer Science student at{" "}
            <strong>Wrocław University of Science and Technology</strong> and a
            self-taught <strong>full-stack developer</strong> working in the
            Next.js / TypeScript stack. I design, build and ship real, deployed
            products end-to-end — from React UIs to <strong>PostgreSQL</strong>{" "}
            databases on <strong>Supabase</strong>, authentication, validation,
            tests and CI.
          </p>
          <p className="mb-12 text-[17px] leading-[1.8] text-muted [&_strong]:font-medium [&_strong]:text-ink">
            I care about clean, strictly-typed code, secure data handling and a
            polished user experience. I&apos;m looking for a{" "}
            <strong>remote full-stack role — anywhere in the world</strong> —
            where I can take ownership, learn from a strong team, and have
            visible impact on a real product. I work comfortably in English.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={pillClass}
            >
              <IconDownload />
              Download CV
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={pillClass}
            >
              <IconGitHub />
              GitHub
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={pillClass}
            >
              <IconLinkedIn />
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} className={pillClass}>
              <IconMail />
              Email
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 pt-20 mobile:pt-0">
          <div className="border-t border-line">
            <InfoRow label="Location" value="Wrocław, Poland · Remote 🇵🇱" />
            <InfoRow label="University" value="WUST — CS" />
            <InfoRow label="Focus" value="Full-Stack" />
            <InfoRow label="Stack" value="Next.js · Prisma · Supabase" />
            <InfoRow
              label="English"
              value={
                <>
                  <span className="font-mono text-accent">B2–C1</span>{" "}
                  Professional working
                </>
              }
            />
            <InfoRow
              label="Goal"
              value={
                <span className="font-mono text-accent">
                  Remote full-stack role abroad
                </span>
              }
            />
            <InfoRow
              label="Availability"
              value={
                <span className="font-mono text-accent">Open to offers</span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
