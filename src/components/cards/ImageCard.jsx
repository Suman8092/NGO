import { motion } from "framer-motion";

export default function ImageCard({ image, tag, title, text, className = "", children }) {
  return (
    <motion.article
      className={`group premium-card relative min-h-[360px] text-av-ivory ${className}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
    >
      <img className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" src={image} alt={title} loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-av-night/5 via-av-night/15 to-av-night/85" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
        <span className="mb-4 inline-flex rounded-full border border-white/20 bg-av-orange/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em]">
          {tag}
        </span>
        <h3 className="display-title text-4xl md:text-[3rem]">{title}</h3>
        {text && <p className="mt-4 max-w-sm text-sm font-semibold text-av-ivory/75">{text}</p>}
        {children}
      </div>
    </motion.article>
  );
}
