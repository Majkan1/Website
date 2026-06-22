<div align="center">

# mikolajmichalak.dev — Personal Portfolio

**The portfolio of Mikołaj Michalak — Full-Stack Developer.**
A fast, statically-rendered single-page site built with the Next.js App Router and Tailwind CSS.

[![Live](https://img.shields.io/badge/▲_Live-mikolajmichalak.dev-c8ff33?style=for-the-badge&logo=vercel&logoColor=black)](https://www.mikolajmichalak.dev)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## ✨ Highlights

- **Single source of content** — every piece of text, link and project lives in [`lib/data.ts`](lib/data.ts). Update the whole site without touching markup.
- **Component-driven** — each section is its own component; [`app/page.tsx`](app/page.tsx) is pure composition.
- **Tailwind CSS v4** — themed with design tokens (`@theme`), utility-first, with only a thin CSS layer for JS-driven effects.
- **Custom motion** — a blend-mode cursor, scroll-reveal via `IntersectionObserver`, an infinite tech marquee and a blurred sticky nav.
- **SEO-ready** — full metadata, Open Graph and Twitter cards, and a canonical URL.
- **Static & fast** — every route is prerendered (`○ Static`) and served from Vercel's edge.
- **Responsive** — a desktop-first layout that collapses cleanly on mobile.

## 🧱 Tech stack

| | |
| --- | --- |
| Framework | **Next.js 16** (App Router, Turbopack) |
| Language | **TypeScript** |
| UI | **React 19** |
| Styling | **Tailwind CSS v4** |
| Fonts | Syne · DM Mono · DM Sans |
| Hosting | **Vercel** |
| DNS | **Cloudflare** |

## 🗂️ Project structure

```
app/
├── layout.tsx        # <html>, metadata / SEO / OG, fonts
├── page.tsx          # composes every section
└── globals.css       # Tailwind import, @theme tokens, JS-driven effects
components/
├── Nav · Hero · Marquee · About · Skills
├── Projects · ProjectCard · Learning · Contact · Footer
├── ClientEffects.tsx # "use client" — cursor, scroll, reveal
└── icons.tsx         # inline SVG icons
lib/
└── data.ts           # ⬅ all content: site info, projects, skills, marquee…
public/
└── Mikolaj_Michalak_CV.pdf
```

## 🎨 Styling approach

Styling is **Tailwind-first**. Design tokens (colours, fonts) are declared once in [`app/globals.css`](app/globals.css) via Tailwind v4's `@theme`, so they're available everywhere as utilities (`bg-accent`, `text-ink`, `font-display`). Layout, spacing, typography, hover states, pseudo-elements (`before:` / `after:`) and the responsive `mobile:` variant all live as utilities in the components.

Only the few things that genuinely belong in CSS stay there:

- the JS-positioned **custom cursor**,
- the **reveal-on-scroll** classes toggled by `IntersectionObserver`,
- the `@keyframes` (marquee, fade-up) and the film-grain noise overlay.

## ✏️ Editing the site

Almost everything is data-driven — to change content, edit **[`lib/data.ts`](lib/data.ts)**:

```ts
// Add a project — it renders itself, numbering & animations included.
export const projects: Project[] = [
  {
    num: "06",
    title: "New Project",
    description: "…",
    stack: ["Next.js", "TypeScript"],
    liveUrl: "https://…",
    githubUrl: "https://github.com/Majkan1/…",
  },
];
```

Contact details, social links, skills, the marquee and the "Leveling up" list all live in that same file.

## 🚀 Getting started

```bash
git clone https://github.com/Majkan1/Website.git
cd Website
npm install
npm run dev      # http://localhost:3000
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## ☁️ Deployment

Hosted on **Vercel** and connected to this repo — every push to `main` ships to production. The `mikolajmichalak.dev` domain is managed in **Cloudflare** (an `A` record to Vercel and a `www` `CNAME`), with automatic HTTPS.

---

<div align="center">
<a href="https://www.mikolajmichalak.dev">Live site</a> ·
<a href="https://github.com/Majkan1">GitHub</a> ·
<a href="https://www.linkedin.com/in/mikolaj-michalak">LinkedIn</a>
</div>
