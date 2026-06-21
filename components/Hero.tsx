export default function Hero() {
  return (
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
            <div className="stat-num">B2</div>
            <div className="stat-label">English</div>
          </div>
        </div>
      </div>
    </section>
  );
}
