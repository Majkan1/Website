import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  // Doubled so the CSS translateX(-50%) loop is seamless.
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
