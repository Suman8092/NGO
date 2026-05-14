import { motion } from "framer-motion";
import { FiCalendar, FiCheckCircle, FiHeart, FiMessageCircle, FiUsers } from "react-icons/fi";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import GlassCard from "../../components/cards/GlassCard";
import PageHero from "../../components/sections/PageHero";
import SectionHeading from "../../components/sections/SectionHeading";
import { images } from "../../utils/content";

const roles = [
  ["Learning Volunteers", "Support English, mathematics, art, sports, reading circles, and exam preparation sessions.", images.classroom],
  ["Career Mentors", "Guide students through scholarships, school options, entrance pathways, and career choices.", images.mentorship],
  ["Community Volunteers", "Help with awareness drives, event coordination, documentation, surveys, and outreach.", images.sustainability]
];

const process = [
  ["Apply", "Share your skills, availability, and preferred contribution area."],
  ["Orient", "Meet the team and understand program expectations."],
  ["Contribute", "Join a classroom, event, mentor circle, or field activity."],
  ["Reflect", "Review outcomes and continue with a meaningful rhythm."]
];

const testimonials = [
  "The sessions are structured, warm, and clear. You always know where your time can help.",
  "Mentoring students here feels practical because the team connects every conversation to a next step."
];

export default function Volunteers() {
  return (
    <main>
      <PageHero
        dark
        kicker="Volunteer Network"
        title="People power every classroom, workshop, and village action."
        text="Volunteers bring time, skills, empathy, and local trust to programs that help rural children and families move toward stronger futures."
        image={images.volunteer}
      >
        <PrimaryButton to="/become-volunteer" variant="light">Become a Volunteer</PrimaryButton>
      </PageHero>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            kicker="Why Volunteer"
            title="Structured enough to matter, personal enough to transform."
            text="Choose a role that matches your strengths, schedule, and interest area."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <GlassCard icon={FiHeart} eyebrow="Purpose" title="Make learning reachable." text="Help children access coaching, confidence, creative exposure, and guidance close to home." />
            <GlassCard icon={FiUsers} eyebrow="Community" title="Work beside committed people." text="Collaborate with mentors, educators, youth leaders, and local families." />
            <GlassCard icon={FiMessageCircle} eyebrow="Growth" title="Build real field experience." text="Learn facilitation, program planning, communication, and community engagement." />
          </div>
        </div>
      </section>

      <section className="page-section bg-av-cream">
        <div className="section-shell">
          <SectionHeading
            kicker="Volunteer Roles"
            title="Three clear entry points into the mission."
            text="Each role has a different rhythm, skill profile, and path into impact."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {roles.map(([title, text, image], index) => (
              <motion.article
                className="premium-card group"
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={image} alt={title} loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-av-orange px-3 py-1 text-xs font-black text-av-ivory">Role {index + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl leading-tight text-av-green md:text-4xl">{title}</h3>
                  <p className="mt-4 min-h-24 font-semibold leading-7 text-av-bark/72">{text}</p>
                  <div className="mt-6">
                    <PrimaryButton to="/become-volunteer" variant="outline">Apply Now</PrimaryButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div>
            <p className="kicker mb-4">Joining Process</p>
            <h2 className="section-title text-av-night">A clear path from interest to action.</h2>
            <p className="body-lead mt-5 text-av-bark/75">Volunteers can start small and grow into deeper roles as they become familiar with the programs.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map(([title, text], index) => (
              <motion.div
                className="soft-card"
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="kicker">0{index + 1}</span>
                  <FiCheckCircle className="text-2xl text-av-orange" />
                </div>
                <h3 className="text-xl font-black text-av-green">{title}</h3>
                <p className="mt-3 font-semibold leading-7 text-av-bark/72">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-av-night text-av-ivory">
        <div className="section-shell grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="kicker mb-4 text-av-amber">Volunteer Voices</p>
            <h2 className="section-title text-av-ivory">Consistent presence creates trust.</h2>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-av-ivory/68">The best volunteer experience is calm, prepared, and connected to a real program need.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((text) => (
              <blockquote className="rounded-card border border-white/10 bg-white/[.06] p-6 shadow-green" key={text}>
                <FiHeart className="mb-8 text-3xl text-av-amber" />
                <p className="text-lg font-semibold leading-8 text-av-ivory/78">{text}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="forest-panel p-8 md:p-12">
          <FiCalendar className="mb-7 text-4xl text-av-amber" />
          <h2 className="section-title max-w-4xl text-av-ivory">Join the volunteer circle.</h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-av-ivory/72">Tell us your skills, availability, and the kind of contribution you want to make. We will match you with a meaningful route into the work.</p>
          <div className="mt-8">
            <PrimaryButton to="/become-volunteer" variant="light">Become a Volunteer</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
