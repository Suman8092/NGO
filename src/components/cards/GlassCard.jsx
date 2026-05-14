import { motion } from "framer-motion";

export default function GlassCard({ icon: Icon, eyebrow, title, text, className = "", children }) {
  return (
    <motion.article
      className={`glass-panel p-6 md:p-8 ${className}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
    >
      {Icon && (
        <span className="mb-8 grid h-11 w-11 place-items-center rounded-full bg-av-orange text-xl text-av-ivory shadow-glow">
          <Icon />
        </span>
      )}
      {eyebrow && <p className="kicker mb-4">{eyebrow}</p>}
      <h3 className="display-title text-3xl text-av-green md:text-[2.45rem]">{title}</h3>
      {text && <p className="mt-5 text-sm font-semibold leading-6 text-av-bark/75 md:text-base">{text}</p>}
      {children}
    </motion.article>
  );
}
