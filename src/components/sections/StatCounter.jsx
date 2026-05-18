import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "../../hooks/useCounter";

export default function StatCounter({ value, suffix = "", label, icon: Icon }) {
  const ref = useRef(null);
  const active = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(value, active);

  return (
    <div ref={ref} className="relative min-h-[156px] overflow-hidden rounded-card border border-av-orange/10 bg-white/78 p-5 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-av-green/20">
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-av-leaf/14 text-lg text-av-green">
            <Icon aria-hidden="true" />
          </span>
        )}
        <span className="text-[10px] font-black uppercase tracking-[.16em] text-av-orange">
          Impact Goal
        </span>
      </div>

      <strong className="display-title mt-5 block text-5xl text-av-green lg:text-[3.4rem]">
        {count.toLocaleString("en-IN")}
        {suffix}
      </strong>
      <span className="mt-2 block max-w-[15rem] text-sm font-bold leading-6 text-av-bark/70">{label}</span>
    </div>
  );
}
