import ClientEffects from "./ClientEffects";

const CV_URL = "/Mikolaj_Michalak_CV.pdf";
const EMAIL = "mikolaj.michalak.dev@gmail.com";
const GITHUB_URL = "https://github.com/Majkan1";
// TODO: swap for the up-to-date LinkedIn URL.
const LINKEDIN_URL =
  "https://www.linkedin.com/in/miko%C5%82aj-michalak-5278513b5/";

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  );
}

const marqueeItems = [
  "React 18",
  "TypeScript",
  "Next.js 16",
  "Tailwind CSS",
  "Vitest · RTL",
  "REST APIs",
  "Git & GitHub",
  "React Router v6",
  "Vite",
  "GitHub Actions",
  "Prisma ORM",
  "PostgreSQL",
  "Supabase",
  "Clerk Auth",
  "Zod",
];

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* NAV */}
      <nav id="nav">
        <a href="#hero" className="nav-logo">
          MM<span>.</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </li>
        </ul>
        <a href={`mailto:${EMAIL}`} className="nav-cta">
          Hire Me →
        </a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg-text">FULL-STACK</div>

        <div className="hero-badge">Open to remote work · Worldwide</div>

        <h1 className="hero-name">
          Mikołaj
          <br />
          <em>Michalak</em>
        </h1>

        <div className="hero-bottom">
          <p className="hero-desc">
            <strong>Full-Stack Developer</strong> building and shipping real,
            deployed products with <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Prisma</strong> and{" "}
            <strong>PostgreSQL</strong>. Open to remote roles — anywhere in the
            world.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">
                5<span>+</span>
              </div>
              <div className="stat-label">Live Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                476<span>+</span>
              </div>
              <div className="stat-label">Contributions</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">B2</div>
              <div className="stat-label">English</div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-dot"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
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
              products end-to-end — from React UIs to{" "}
              <strong>PostgreSQL</strong> databases on{" "}
              <strong>Supabase</strong>, authentication, validation, tests and
              CI.
            </p>
            <p className="about-text">
              I care about clean, strictly-typed code, secure data handling and a
              polished user experience. I&apos;m looking for a{" "}
              <strong>remote full-stack role — anywhere in the world</strong> —
              where I can take ownership, learn from a strong team, and have
              visible impact on a real product. I work comfortably in English.
            </p>
            <div className="about-links">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="link-pill">
                <IconDownload />
                Download CV
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="link-pill">
                <IconGitHub />
                GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="link-pill">
                <IconLinkedIn />
                LinkedIn
              </a>
              <a href={`mailto:${EMAIL}`} className="link-pill">
                <IconMail />
                Email
              </a>
            </div>
          </div>

          <div className="about-right reveal reveal-delay-2">
            <div className="info-table">
              <div className="info-row">
                <span className="info-key">Location</span>
                <span className="info-val">Wrocław, Poland · Remote 🇵🇱</span>
              </div>
              <div className="info-row">
                <span className="info-key">University</span>
                <span className="info-val">WUST — CS</span>
              </div>
              <div className="info-row">
                <span className="info-key">Focus</span>
                <span className="info-val">Full-Stack · Next.js / TypeScript</span>
              </div>
              <div className="info-row">
                <span className="info-key">Stack</span>
                <span className="info-val">Prisma · PostgreSQL · Supabase</span>
              </div>
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

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label reveal">02 — Skills</div>
        <h2 className="section-title reveal">What I work with</h2>
        <div className="skills-grid">
          <div className="skill-card reveal reveal-delay-1">
            <div className="skill-icon">⚛️</div>
            <div className="skill-name">React Ecosystem</div>
            <div className="skill-desc">
              Building component-driven UIs with hooks, context, React Router and
              modern state patterns.
            </div>
            <div className="skill-tags">
              <span className="skill-tag">React 18</span>
              <span className="skill-tag">Hooks</span>
              <span className="skill-tag">React Router v6</span>
              <span className="skill-tag">Context API</span>
            </div>
          </div>
          <div className="skill-card reveal reveal-delay-2">
            <div className="skill-icon">🔷</div>
            <div className="skill-name">TypeScript</div>
            <div className="skill-desc">
              Writing strictly typed code with interfaces, generics and custom
              types for maintainable codebases.
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Interfaces</span>
              <span className="skill-tag">Generics</span>
              <span className="skill-tag">Type Guards</span>
              <span className="skill-tag">Strict Mode</span>
            </div>
          </div>
          <div className="skill-card reveal reveal-delay-3">
            <div className="skill-icon">▲</div>
            <div className="skill-name">Next.js 16</div>
            <div className="skill-desc">
              App Router, Server Components, Server Actions, dynamic routing, and
              deploying to Vercel production.
            </div>
            <div className="skill-tags">
              <span className="skill-tag">App Router</span>
              <span className="skill-tag">Server Components</span>
              <span className="skill-tag">Server Actions</span>
              <span className="skill-tag">Vercel</span>
            </div>
          </div>
          <div className="skill-card reveal reveal-delay-1">
            <div className="skill-icon">🗄️</div>
            <div className="skill-name">Backend & Data</div>
            <div className="skill-desc">
              Persisting data with Prisma and PostgreSQL on Supabase, securing
              routes with Clerk auth, and validating every input with Zod.
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Prisma ORM</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Clerk Auth</span>
              <span className="skill-tag">Zod</span>
            </div>
          </div>
          <div className="skill-card reveal reveal-delay-2">
            <div className="skill-icon">🧪</div>
            <div className="skill-name">Testing</div>
            <div className="skill-desc">
              Writing unit and integration tests with Vitest and React Testing
              Library to ship more reliable code.
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Vitest</span>
              <span className="skill-tag">React Testing Library</span>
              <span className="skill-tag">Coverage</span>
            </div>
          </div>
          <div className="skill-card reveal reveal-delay-3">
            <div className="skill-icon">🛠️</div>
            <div className="skill-name">Tooling & Workflow</div>
            <div className="skill-desc">
              Git-based workflows, CI/CD with GitHub Actions, and deploying to
              Vercel.
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">Vite</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">npm</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="projects-header">
          <div>
            <div className="section-label reveal">03 — Projects</div>
            <h2 className="section-title reveal">Selected work</h2>
          </div>
          <p className="projects-sub reveal">
            5 live projects, each built from scratch and deployed to production.
          </p>
        </div>

        <div className="projects-grid">
          {/* Workout Tracker — Featured */}
          <div className="project-card featured reveal">
            <div>
              <div className="project-num">01 / Featured</div>
              <h3 className="project-title">Workout Tracker</h3>
              <p className="project-desc">
                A fullstack fitness app where authenticated users create, edit
                and delete workouts and exercises (sets, reps, weight) and
                review their training stats. Built with the Next.js App Router
                and Server Actions, secured with Clerk auth and per-user
                ownership checks on every action, backed by a PostgreSQL database
                on Supabase via Prisma, with Zod validation, a Vitest test suite
                and CI on every push.
              </p>
              <div className="project-stack">
                <span className="stack-tag">Next.js 16</span>
                <span className="stack-tag">TypeScript</span>
                <span className="stack-tag">Clerk Auth</span>
                <span className="stack-tag">Prisma</span>
                <span className="stack-tag">PostgreSQL · Supabase</span>
                <span className="stack-tag">Zod</span>
                <span className="stack-tag">Vitest · CI</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://workout-tracker-majkan.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live"
                >
                  <IconExternal />
                  Live Demo
                </a>
                <a
                  href="https://github.com/Majkan1/workout-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gh"
                >
                  <IconGitHub />
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-right">
              <div className="project-preview">
                <div className="preview-dots">
                  <div className="preview-dot"></div>
                  <div className="preview-dot"></div>
                  <div className="preview-dot"></div>
                </div>
                <div className="preview-content">
                  <div className="accent">▲ next.js 16 · fullstack</div>
                  <div>Auth · Prisma · Supabase</div>
                  <div>Server Actions · Zod · Vitest CI</div>
                  <div className="accent">→ workout-tracker-majkan.vercel.app</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sport App — Featured */}
          <div className="project-card featured reveal">
            <div>
              <div className="project-num">02 / Featured</div>
              <h3 className="project-title">Sport App</h3>
              <p className="project-desc">
                A sports league & team browser built with Next.js 16 and the App
                Router around the TheSportsDB REST API. Dynamic routing for
                leagues and teams, data fetching with custom loading and error
                states, and reusable, responsive UI components. Deployed to
                Vercel.
              </p>
              <div className="project-stack">
                <span className="stack-tag">Next.js 16</span>
                <span className="stack-tag">TypeScript</span>
                <span className="stack-tag">Tailwind CSS</span>
                <span className="stack-tag">TheSportsDB API</span>
                <span className="stack-tag">Vercel</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://sport-app-majkan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live"
                >
                  <IconExternal />
                  Live Demo
                </a>
                <a
                  href="https://github.com/Majkan1/Sport-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gh"
                >
                  <IconGitHub />
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-right">
              <div className="project-preview">
                <div className="preview-dots">
                  <div className="preview-dot"></div>
                  <div className="preview-dot"></div>
                  <div className="preview-dot"></div>
                </div>
                <div className="preview-content">
                  <div className="accent">▲ next.js 16 · app router</div>
                  <div>Sports leagues & teams</div>
                  <div>Dynamic routing · Error states</div>
                  <div className="accent">→ sport-app-majkan.vercel.app</div>
                </div>
              </div>
            </div>
          </div>

          {/* Weather App */}
          <div className="project-card reveal reveal-delay-1">
            <div className="project-num">03</div>
            <h3 className="project-title">Real-Time Weather Dashboard</h3>
            <p className="project-desc">
              Live weather app using the Open-Meteo REST API. Features 500ms
              debounce, dynamic day/night weather icons, memoised components, and
              a fully responsive layout. 131 commits and 110+ deployments.
            </p>
            <div className="project-stack">
              <span className="stack-tag">React 18</span>
              <span className="stack-tag">JavaScript</span>
              <span className="stack-tag">REST API</span>
              <span className="stack-tag">GitHub Pages</span>
              <span className="stack-tag">CSS</span>
            </div>
            <div className="project-actions">
              <a
                href="https://majkan1.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                <IconExternal />
                Live Demo
              </a>
              <a
                href="https://github.com/Majkan1/weather-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gh"
              >
                <IconGitHub />
                GitHub
              </a>
            </div>
          </div>

          {/* Cocktail App */}
          <div className="project-card reveal reveal-delay-2">
            <div className="project-num">04</div>
            <h3 className="project-title">Cocktail Browser</h3>
            <p className="project-desc">
              React + TypeScript SPA browsing 250 cocktails from the KNS
              Cocktails API. Includes real-time search, pagination (5 pages × 50),
              favourites checkbox, and TypeScript interfaces for the full data
              model.
            </p>
            <div className="project-stack">
              <span className="stack-tag">React 18</span>
              <span className="stack-tag">TypeScript</span>
              <span className="stack-tag">React Router v6</span>
              <span className="stack-tag">REST API</span>
              <span className="stack-tag">GitHub Pages</span>
            </div>
            <div className="project-actions">
              <a
                href="https://majkan1.github.io/Cocktail-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                <IconExternal />
                Live Demo
              </a>
              <a
                href="https://github.com/Majkan1/Cocktail-App"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gh"
              >
                <IconGitHub />
                GitHub
              </a>
            </div>
          </div>

          {/* Budget Tracker */}
          <div className="project-card reveal reveal-delay-3">
            <div className="project-num">05</div>
            <h3 className="project-title">Mini Budget Tracker</h3>
            <p className="project-desc">
              Personal finance SPA with strict TypeScript interfaces and
              unidirectional data flow. Tracks income and expenses with real-time
              balance, category tagging, and a clean empty state. 90% TypeScript
              codebase.
            </p>
            <div className="project-stack">
              <span className="stack-tag">React 18</span>
              <span className="stack-tag">TypeScript</span>
              <span className="stack-tag">CSS-in-JS</span>
              <span className="stack-tag">Vite</span>
              <span className="stack-tag">GitHub Pages</span>
            </div>
            <div className="project-actions">
              <a
                href="https://majkan1.github.io/Mini-Budget-Tracker/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                <IconExternal />
                Live Demo
              </a>
              <a
                href="https://github.com/Majkan1/Mini-Budget-Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gh"
              >
                <IconGitHub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LEVELING UP */}
      <section id="learning">
        <div className="section-label reveal">04 — Currently</div>
        <h2 className="section-title reveal">Leveling up</h2>
        <div className="learning-grid">
          <div className="learning-item reveal reveal-delay-1">
            <div className="learning-num">01</div>
            <div className="learning-body">
              <div className="learning-title">Full-stack architecture</div>
              <div className="learning-desc">
                Designing data models, server actions and auth flows end-to-end —
                thinking about the whole system, not just the UI.
              </div>
            </div>
          </div>
          <div className="learning-item reveal reveal-delay-2">
            <div className="learning-num">02</div>
            <div className="learning-body">
              <div className="learning-title">Databases & data modelling</div>
              <div className="learning-desc">
                Going deeper with Prisma, PostgreSQL and Supabase — relations,
                migrations and type-safe queries.
              </div>
            </div>
          </div>
          <div className="learning-item reveal reveal-delay-3">
            <div className="learning-num">03</div>
            <div className="learning-body">
              <div className="learning-title">Testing & CI</div>
              <div className="learning-desc">
                Writing meaningful tests with Vitest and React Testing Library,
                and wiring GitHub Actions so every push is verified before it
                ships.
              </div>
            </div>
          </div>
          <div className="learning-item reveal reveal-delay-4">
            <div className="learning-num">04</div>
            <div className="learning-body">
              <div className="learning-title">Web performance</div>
              <div className="learning-desc">
                Core Web Vitals, caching, lazy loading and measuring real-world
                performance on production apps.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
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
          <a href={`mailto:${EMAIL}`} className="contact-email reveal">
            {EMAIL}
          </a>
          <div className="contact-socials reveal">
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="social-btn">
              <IconDownload />
              Download CV
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="social-btn">
              <IconGitHub />
              GitHub / Majkan1
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-btn">
              <IconLinkedIn />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-copy">
          © 2026 Mikołaj Michalak — Wrocław, Poland
        </div>
        <div className="footer-stack">
          Built with <span>Next.js · TypeScript</span>
        </div>
      </footer>
    </>
  );
}
