import { learning } from "@/lib/data";

export default function Learning() {
  return (
    <section id="learning">
      <div className="section-label reveal">04 — Currently</div>
      <h2 className="section-title reveal">Leveling up</h2>
      <div className="learning-grid">
        {learning.map((item, i) => (
          <div
            className={`learning-item reveal reveal-delay-${i + 1}`}
            key={item.num}
          >
            <div className="learning-num">{item.num}</div>
            <div className="learning-body">
              <div className="learning-title">{item.title}</div>
              <div className="learning-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
