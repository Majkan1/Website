import { site } from "@/lib/data";
import { IconDownload, IconGitHub, IconLinkedIn, IconMail } from "./icons";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-row">
      <span className="info-key">{label}</span>
      <span className="info-val">{value}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-left reveal">
          <div className="section-label">01 — About</div>
          <h2 className="section-title">Who I am</h2>
          <p className="about-text">
            I&apos;m a Computer Science student at{" "}
            <strong>Wrocław University of Science and Technology</strong> and a
            self-taught <strong>full-stack developer</strong> working in the
            Next.js / TypeScript stack. I design, build and ship real, deployed
            products end-to-end — from React UIs to <strong>PostgreSQL</strong>{" "}
            databases on <strong>Supabase</strong>, authentication, validation,
            tests and CI.
          </p>
          <p className="about-text">
            I care about clean, strictly-typed code, secure data handling and a
            polished user experience. I&apos;m looking for a{" "}
            <strong>remote full-stack role — anywhere in the world</strong> —
            where I can take ownership, learn from a strong team, and have
            visible impact on a real product. I work comfortably in English.
          </p>
          <div className="about-links">
            <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className="link-pill">
              <IconDownload />
              Download CV
            </a>
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="link-pill">
              <IconGitHub />
              GitHub
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="link-pill">
              <IconLinkedIn />
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} className="link-pill">
              <IconMail />
              Email
            </a>
          </div>
        </div>

        <div className="about-right reveal reveal-delay-2">
          <div className="info-table">
            <InfoRow label="Location" value="Wrocław, Poland · Remote 🇵🇱" />
            <InfoRow label="University" value="WUST — CS" />
            <InfoRow label="Focus" value="Full-Stack" />
            <InfoRow label="Stack" value="Next.js · Prisma · Supabase" />
            <div className="info-row">
              <span className="info-key">English</span>
              <span className="info-val">
                <span className="highlight">B2–C1</span> Professional working
              </span>
            </div>
            <div className="info-row">
              <span className="info-key">Goal</span>
              <span className="info-val">
                <span className="highlight">Remote full-stack role abroad</span>
              </span>
            </div>
            <div className="info-row">
              <span className="info-key">Availability</span>
              <span className="info-val">
                <span className="highlight">Open to offers</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
