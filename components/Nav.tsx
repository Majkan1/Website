import { navLinks, site } from "@/lib/data";

const navLinkClass =
  "font-mono text-xs tracking-[0.08em] text-muted uppercase transition-colors hover:text-accent";

export default function Nav() {
  return (
    <nav
      id="nav"
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-transparent px-12 py-6 transition-[border-color,backdrop-filter,background] duration-300 mobile:px-6 mobile:py-5"
    >
      <a
        href="#hero"
        className="font-display text-lg font-extrabold tracking-[-0.02em] text-ink"
      >
        MM<span className="text-accent">.</span>
      </a>
      <ul className="flex list-none gap-10 mobile:hidden">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            Résumé
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        className="rounded-sm bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-[0.06em] text-bg transition-[opacity,transform] hover:-translate-y-px hover:opacity-85"
      >
        Hire Me →
      </a>
    </nav>
  );
}
