import { motion } from "framer-motion";

export default function PageHero({
  kicker,
  title,
  text,
  image,
  dark = false,
  children,
  align = "left"
}) {
  return (
    <section className={`${dark ? "bg-av-night text-av-ivory" : "bg-transparent text-av-night"} pt-24 md:pt-28 lg:pt-32`}>
      <div className="section-shell">
        <div
          className={`grid min-h-[500px] gap-8 py-10 md:py-12 lg:min-h-[580px] ${
            image ? "lg:grid-cols-[minmax(0,1fr)_minmax(360px,.82fr)] lg:items-center" : "items-center"
          } ${align === "center" ? "text-center" : ""}`}
        >
          <motion.div
            className={align === "center" ? "mx-auto max-w-4xl" : "max-w-4xl"}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {kicker && <p className={`kicker mb-4 ${dark ? "text-av-amber" : ""}`}>{kicker}</p>}
            <h1 className={`hero-title ${dark ? "text-av-ivory" : "text-av-night"}`}>{title}</h1>
            {text && <p className={`mt-5 max-w-2xl ${dark ? "text-av-ivory/72" : "text-av-bark/75"} body-lead ${align === "center" ? "mx-auto" : ""}`}>{text}</p>}
            {children && <div className="mt-7">{children}</div>}
          </motion.div>

          {image && (
            <motion.div
              className={`image-frame h-[320px] shadow-soft md:h-[380px] lg:h-[460px] ${dark ? "border border-white/10" : "border border-av-orange/10"}`}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04, ease: "easeOut" }}
            >
              <img className="image-cover" src={image} alt="" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
