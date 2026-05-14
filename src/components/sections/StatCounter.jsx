import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "../../hooks/useCounter";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const active = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(value, active);

  return (
    <div ref={ref} className="rounded-card border border-av-orange/15 bg-av-ivory p-5 shadow-soft">
      <strong className="display-title block text-5xl text-av-green md:text-6xl">
        {count.toLocaleString("en-IN")}
        {suffix}
      </strong>
      <span className="mt-3 block text-sm font-bold text-av-bark/70">{label}</span>
    </div>
  );
}
