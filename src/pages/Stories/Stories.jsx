import { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen, FiFeather, FiHeart } from "react-icons/fi";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import PageHero from "../../components/sections/PageHero";
import SectionHeading from "../../components/sections/SectionHeading";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { images } from "../../utils/content";

const stories = [
  ["Creative Learning", "Confidence beyond the textbook", "Arts, sports, and expression sessions help children participate, speak, and learn with less hesitation.", images.creative],
  ["Mentorship", "A mentor call that changed direction", "One-to-one guidance can help a student name their goals, prepare steps, and stay connected to school.", images.mentorPortrait],
  ["Volunteer Action", "The weekend team that kept showing up", "Consistent volunteer presence builds trust with children, parents, and local coordinators.", images.volunteer],
  ["Skills", "Digital confidence for young learners", "Technology exposure connects classroom learning with practical employability.", images.skills]
];

const chapters = [
  "A student discovers a scholarship route.",
  "A mentor explains career options in practical language.",
  "A volunteer returns every weekend until trust becomes visible.",
  "A family sees education as continuity, not interruption."
];

export default function Stories() {
  const scope = useRef(null);
  useGsapReveal(scope);

  return (
    <main ref={scope}>
      <PageHero
        kicker="Success Stories"
        title="Stories from classrooms, mentors, and villages."
        text="A calmer editorial space for the steady work behind learning access, student confidence, practical skills, and community-led change."
        image={images.classroom}
      />

      <section className="page-section">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div className="image-frame h-[420px] lg:h-[560px]">
            <img className="image-cover" src={images.community} alt="AnukalpVriksha community program moment" loading="lazy" />
          </div>
          <div className="soft-card">
            <FiBookOpen className="mb-8 text-4xl text-av-orange" />
            <p className="kicker">Feature Story</p>
            <h2 className="mt-4 section-title text-av-green">Impact is the habit of showing up.</h2>
            <p className="body-lead mt-5 text-av-bark/75">A child’s future changes when opportunity stops feeling distant and starts becoming a weekly rhythm.</p>
            <div className="mt-7">
              <PrimaryButton to="/become-volunteer" variant="orange">Help Write the Next Story</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-av-cream">
        <div className="section-shell">
          <SectionHeading
            kicker="Story Cards"
            title="Confidence, guidance, and action in focus."
            text="Each story carries a different lens into the same mission."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stories.map(([tag, title, text, image], index) => (
              <motion.article
                className="premium-card group"
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-64 overflow-hidden bg-av-night">
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={image} alt={title} loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-av-orange px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-av-ivory">{tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl leading-tight text-av-green">{title}</h3>
                  <p className="mt-4 min-h-28 font-semibold leading-7 text-av-bark/72">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-av-red">
                    Read story <FiArrowUpRight />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-av-night text-av-ivory">
        <div className="section-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <FiFeather className="mb-7 text-4xl text-av-amber" />
            <p className="kicker mb-4 text-av-amber">Scroll Storytelling</p>
            <h2 className="section-title text-av-ivory">From aspiration to action.</h2>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-av-ivory/68">The journey is rarely dramatic. It is usually built through clear next steps and steady encouragement.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {chapters.map((text, index) => (
              <div className="gsap-reveal rounded-card border border-white/10 bg-white/[.06] p-6" key={text}>
                <span className="kicker text-av-amber">Chapter {index + 1}</span>
                <p className="mt-6 text-xl font-black leading-8 text-av-ivory">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid overflow-hidden rounded-card bg-av-ivory shadow-soft lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-8 md:p-12">
            <FiHeart className="mb-8 text-4xl text-av-orange" />
            <p className="kicker">Next Story</p>
            <blockquote className="mt-4 section-title text-av-green">Growth begins when a child gets the space to learn, explore, and believe in a future.</blockquote>
          </div>
          <img className="h-80 w-full object-cover lg:h-full" src={images.creative} alt="Creative learning session" loading="lazy" />
        </div>
      </section>
    </main>
  );
}
