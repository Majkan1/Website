import { site } from "@/lib/data";
import { IconDownload, IconGitHub, IconLinkedIn } from "./icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label reveal">05 — Contact</div>
        <h2 className="contact-title reveal">
          Let&apos;s work
          <br />
          <em>together</em>
        </h2>
        <p className="contact-sub reveal">
          I&apos;m looking for a remote full-stack role I can do from anywhere.
          If you have an open position or just want to talk, reach out — I
          respond fast.
        </p>
        <a href={`mailto:${site.email}`} className="contact-email reveal">
          {site.email}
        </a>
        <div className="contact-socials reveal">
          <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className="social-btn">
            <IconDownload />
            Download CV
          </a>
          <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="social-btn">
            <IconGitHub />
            GitHub / Majkan1
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-btn">
            <IconLinkedIn />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
