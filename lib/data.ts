export const site = {
  name: "Mikołaj Michalak",
  role: "Full-Stack Developer",
  email: "mikolaj.michalak.dev@gmail.com",
  cvUrl: "/Mikolaj_Michalak_CV.pdf",
  githubUrl: "https://github.com/Majkan1",
  linkedinUrl: "https://www.linkedin.com/in/mikolaj-michalak",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "React 19",
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

export type Skill = {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
};

export const skills: Skill[] = [
  {
    icon: "⚛️",
    name: "React Ecosystem",
    desc: "Building component-driven UIs with hooks, context, React Router and modern state patterns.",
    tags: ["React 19", "Hooks", "React Router v6", "Context API"],
  },
  {
    icon: "🔷",
    name: "TypeScript",
    desc: "Writing strictly typed code with interfaces, generics and custom types for maintainable codebases.",
    tags: ["Interfaces", "Generics", "Type Guards", "Strict Mode"],
  },
  {
    icon: "▲",
    name: "Next.js 16",
    desc: "App Router, Server Components, Server Actions, dynamic routing, and deploying to Vercel production.",
    tags: ["App Router", "Server Components", "Server Actions", "Vercel"],
  },
  {
    icon: "🗄️",
    name: "Backend & Data",
    desc: "Persisting data with Prisma and PostgreSQL on Supabase, securing routes with Clerk auth, and validating every input with Zod.",
    tags: ["Prisma ORM", "PostgreSQL", "Supabase", "Clerk Auth", "Zod"],
  },
  {
    icon: "🧪",
    name: "Testing",
    desc: "Writing unit and integration tests with Vitest and React Testing Library to ship more reliable code.",
    tags: ["Vitest", "React Testing Library", "Coverage"],
  },
  {
    icon: "🛠️",
    name: "Tooling & Workflow",
    desc: "Git-based workflows, CI/CD with GitHub Actions, and deploying to Vercel.",
    tags: ["Git", "GitHub Actions", "Vite", "Vercel", "npm"],
  },
];

export type ProjectPreview = {
  top: string;
  middle: string[];
  bottom: string;
};

export type Project = {
  num: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  preview?: ProjectPreview;
};

export const projects: Project[] = [
  {
    num: "01 / Featured",
    title: "Workout Tracker",
    featured: true,
    description:
      "A fullstack fitness app where authenticated users create, edit and delete workouts and exercises (sets, reps, weight) and review their training stats. Built with the Next.js App Router and Server Actions, secured with Clerk auth and per-user ownership checks on every action, backed by a PostgreSQL database on Supabase via Prisma, with Zod validation, a Vitest test suite and CI on every push.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Clerk Auth",
      "Prisma",
      "PostgreSQL · Supabase",
      "Zod",
      "Vitest · CI",
    ],
    liveUrl: "https://workout-tracker-majkan.vercel.app",
    githubUrl: "https://github.com/Majkan1/workout-tracker",
    preview: {
      top: "▲ next.js 16 · fullstack",
      middle: ["Auth · Prisma · Supabase", "Server Actions · Zod · Vitest CI"],
      bottom: "→ workout-tracker-majkan.vercel.app",
    },
  },
  {
    num: "02 / Featured",
    title: "Sport App",
    featured: true,
    description:
      "A sports league & team browser built with Next.js 16 and the App Router around the TheSportsDB REST API. Dynamic routing for leagues and teams, data fetching with custom loading and error states, and reusable, responsive UI components. Deployed to Vercel.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "TheSportsDB API", "Vercel"],
    liveUrl: "https://sport-app-majkan.vercel.app/",
    githubUrl: "https://github.com/Majkan1/Sport-app",
    preview: {
      top: "▲ next.js 16 · app router",
      middle: ["Sports leagues & teams", "Dynamic routing · Error states"],
      bottom: "→ sport-app-majkan.vercel.app",
    },
  },
  {
    num: "03",
    title: "Real-Time Weather Dashboard",
    description:
      "Live weather app using the Open-Meteo REST API. Features 500ms debounce, dynamic day/night weather icons, memoised components, and a fully responsive layout. 131 commits and 110+ deployments.",
    stack: ["React 19", "JavaScript", "REST API", "GitHub Pages", "CSS"],
    liveUrl: "https://majkan1.github.io/weather-app/",
    githubUrl: "https://github.com/Majkan1/weather-app",
  },
  {
    num: "04",
    title: "Cocktail Browser",
    description:
      "React + TypeScript SPA browsing 250 cocktails from the KNS Cocktails API. Includes real-time search, pagination (5 pages × 50), favourites checkbox, and TypeScript interfaces for the full data model.",
    stack: ["React 19", "TypeScript", "React Router v6", "REST API", "GitHub Pages"],
    liveUrl: "https://majkan1.github.io/Cocktail-App/",
    githubUrl: "https://github.com/Majkan1/Cocktail-App",
  },
  {
    num: "05",
    title: "Mini Budget Tracker",
    description:
      "Personal finance SPA with strict TypeScript interfaces and unidirectional data flow. Tracks income and expenses with real-time balance, category tagging, and a clean empty state. 90% TypeScript codebase.",
    stack: ["React 19", "TypeScript", "CSS-in-JS", "Vite", "GitHub Pages"],
    liveUrl: "https://majkan1.github.io/Mini-Budget-Tracker/",
    githubUrl: "https://github.com/Majkan1/Mini-Budget-Tracker",
  },
];

export type LearningItem = {
  num: string;
  title: string;
  desc: string;
};

export const learning: LearningItem[] = [
  {
    num: "01",
    title: "Full-stack architecture",
    desc: "Designing data models, server actions and auth flows end-to-end — thinking about the whole system, not just the UI.",
  },
  {
    num: "02",
    title: "Databases & data modelling",
    desc: "Going deeper with Prisma, PostgreSQL and Supabase — relations, migrations and type-safe queries.",
  },
  {
    num: "03",
    title: "Testing & CI",
    desc: "Writing meaningful tests with Vitest and React Testing Library, and wiring GitHub Actions so every push is verified before it ships.",
  },
  {
    num: "04",
    title: "Web performance",
    desc: "Core Web Vitals, caching, lazy loading and measuring real-world performance on production apps.",
  },
];
