import { navLinks, site } from "@/lib/data";

export default function Nav() {
  return (
    <nav id="nav">
      <a href="#hero" className="nav-logo">
        MM<span>.</span>
      </a>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href={site.cvUrl} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta">
        Hire Me →
      </a>
    </nav>
  );
}
