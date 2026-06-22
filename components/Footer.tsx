import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-line px-12 py-8 mobile:flex-col mobile:gap-3 mobile:text-center">
      <div className="font-mono text-[11px] tracking-[0.08em] text-dim">
        © 2026 {site.name} — Wrocław, Poland
      </div>
      <div className="font-mono text-[11px] tracking-[0.06em] text-dim">
        Built with <span className="text-accent">Next.js · TypeScript</span>
      </div>
    </footer>
  );
}
