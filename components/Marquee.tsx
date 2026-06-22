import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-line bg-bg py-4">
      <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        {items.map((item, i) => (
          <span
            className="inline-flex items-center gap-6 px-8 font-mono text-xs uppercase tracking-[0.1em] text-dim"
            key={i}
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
