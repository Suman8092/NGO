import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import PageHero from "../../components/sections/PageHero";
import SectionHeading from "../../components/sections/SectionHeading";
import { images } from "../../utils/content";

const galleryItems = [
  ["Education", "Creative learning", images.creative],
  ["Education", "Free coaching", images.classroom],
  ["Guidance", "Career workshop", images.mentorship],
  ["Mentorship", "Student support", images.mentorPortrait],
  ["Skills", "Technology learning", images.skills],
  ["Community", "Sustainable village", images.sustainability],
  ["Volunteer", "Action day", images.volunteer],
  ["Impact", "Rural transformation", images.hero]
];

const filters = ["All", "Education", "Guidance", "Mentorship", "Skills", "Community", "Volunteer", "Impact"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => (filter === "All" ? galleryItems : galleryItems.filter(([tag]) => tag === filter)), [filter]);

  return (
    <main>
      <PageHero
        kicker="Impact Gallery"
        title="Moments from learning and community spaces."
        text="A focused visual archive of classrooms, mentor circles, village action days, and volunteer-led moments."
        image={images.community}
      />

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            kicker="Gallery"
            title="Filterable frames from the mission."
            text="Hover each image for a story cue, or open it for a larger preview."
          />

          <div className="mt-9 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                  filter === item
                    ? "border-av-orange bg-av-orange text-av-ivory shadow-soft"
                    : "border-av-orange/20 bg-av-ivory text-av-green hover:border-av-orange"
                }`}
                type="button"
                key={item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map(([tag, title, image], index) => (
                <motion.button
                  layout
                  className={`group relative min-h-[280px] overflow-hidden rounded-card bg-av-night text-left shadow-soft ${
                    index === 0 && filter === "All" ? "lg:col-span-2 lg:row-span-2 lg:min-h-[580px]" : ""
                  }`}
                  key={title}
                  type="button"
                  onClick={() => setActive({ tag, title, image })}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.28 }}
                  whileHover={{ y: -3 }}
                >
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={image} alt={title} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-av-night/86 via-av-night/12 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-av-ivory">
                    <span className="rounded-full bg-av-orange px-3 py-1 text-[10px] font-black uppercase tracking-[.16em]">{tag}</span>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <h3 className="font-display text-3xl leading-none md:text-4xl">{title}</h3>
                      <FiZoomIn className="shrink-0 text-2xl text-av-amber" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-av-night/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="max-h-[90svh] w-full max-w-5xl overflow-hidden rounded-card bg-av-night shadow-green"
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 16, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img className="max-h-[72svh] w-full bg-black object-contain" src={active.image} alt={active.title} />
              <div className="flex items-center justify-between gap-4 p-5 text-av-ivory">
                <div>
                  <span className="kicker text-av-amber">{active.tag}</span>
                  <h2 className="font-display text-4xl leading-none">{active.title}</h2>
                </div>
                <button className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white/10" type="button" onClick={() => setActive(null)} aria-label="Close preview">
                  <FiX />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section-shell py-16 md:py-20">
        <div className="forest-panel p-8 md:p-12">
          <h2 className="section-title max-w-4xl text-av-ivory">Be part of the next frame.</h2>
          <p className="mt-5 max-w-xl font-semibold leading-7 text-av-ivory/70">Volunteer, document, teach, mentor, or support the programs that create these moments.</p>
          <div className="mt-8">
            <PrimaryButton to="/become-volunteer" variant="light">Join the Work</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
