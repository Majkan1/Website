import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">© 2026 {site.name} — Wrocław, Poland</div>
      <div className="footer-stack">
        Built with <span>Next.js · TypeScript</span>
      </div>
    </footer>
  );
}
