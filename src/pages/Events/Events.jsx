import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import PageHero from "../../components/sections/PageHero";
import SectionHeading from "../../components/sections/SectionHeading";
import { images } from "../../utils/content";

const events = [
  ["May", "30", "Rural Learning Open Day", "A classroom visit and orientation for volunteers interested in coaching, reading circles, and creative learning support.", images.classroom, "10:00 AM", "Agra"],
  ["Jun", "14", "Career Guidance Circle", "A mentor-led session on scholarships, school pathways, exams, communication, and decision-making for rural youth.", images.mentorship, "11:30 AM", "Hybrid"],
  ["Jul", "05", "Sustainable Village Action Day", "A field-focused event covering farmer awareness, sanitation conversations, youth participation, and local development planning.", images.sustainability, "9:00 AM", "Iradatnagar"]
];

function Countdown() {
  const target = useMemo(() => new Date("2026-05-30T10:00:00+05:30").getTime(), []);
  const [remaining, setRemaining] = useState(target - Date.now());

  useEffect(() => {
    const timer = setInterval(() => setRemaining(target - Date.now()), 1000);
    return () => clearInterval(timer);
  }, [target]);

  const safe = Math.max(remaining, 0);
  const days = Math.floor(safe / 86400000);
  const hours = Math.floor((safe % 86400000) / 3600000);
  const minutes = Math.floor((safe % 3600000) / 60000);

  return (
    <div className="grid max-w-lg grid-cols-3 gap-3">
      {[
        ["Days", days],
        ["Hours", hours],
        ["Minutes", minutes]
      ].map(([label, value]) => (
        <div className="rounded-card border border-white/10 bg-white/[.08] p-4 text-center" key={label}>
          <strong className="block font-display text-4xl leading-none text-av-amber md:text-5xl">{String(value).padStart(2, "0")}</strong>
          <span className="mt-2 block text-[10px] font-black uppercase tracking-[.18em] text-av-ivory/62">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Events() {
  return (
    <main>
      <PageHero
        dark
        kicker="Upcoming Events"
        title="Workshops, orientations, and community days."
        text="Events are built around clear agendas, focused outcomes, and space for people to contribute with confidence."
        image={images.mentorship}
      >
        <div className="rounded-card border border-white/10 bg-white/[.06] p-5 shadow-green backdrop-blur">
          <div className="mb-4 flex items-center gap-3">
            <FiClock className="text-xl text-av-amber" />
            <span className="font-black text-av-ivory">Next event countdown</span>
          </div>
          <Countdown />
        </div>
      </PageHero>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading
            kicker="Event Calendar"
            title="A calendar made for useful action."
            text="Upcoming sessions connect volunteers, mentors, students, and community members through practical work."
          />
          <div className="mt-10 grid gap-5">
            {events.map(([month, day, title, text, image, time, place], index) => (
              <motion.article
                className="premium-card grid gap-0 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr_230px]"
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="relative min-h-64 overflow-hidden bg-av-night">
                  <img className="h-full w-full object-cover" src={image} alt={title} loading="lazy" />
                  <div className="absolute left-4 top-4 rounded-card bg-av-ivory p-4 shadow-soft">
                    <span className="kicker">{month}</span>
                    <strong className="block font-display text-5xl leading-none text-av-green">{day}</strong>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-4xl leading-tight text-av-green md:text-5xl">{title}</h3>
                  <p className="mt-5 max-w-2xl font-semibold leading-7 text-av-bark/75">{text}</p>
                </div>
                <div className="grid gap-3 border-t border-av-orange/10 bg-av-cream p-6 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0">
                  <p className="flex items-center gap-3 font-black text-av-green"><FiClock className="text-av-orange" /> {time}</p>
                  <p className="flex items-center gap-3 font-black text-av-green"><FiMapPin className="text-av-orange" /> {place}</p>
                  <PrimaryButton to="/become-volunteer" variant="outline">Register</PrimaryButton>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-av-cream">
        <div className="section-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="soft-card">
            <FiUsers className="mb-8 text-4xl text-av-orange" />
            <p className="kicker">How It Works</p>
            <h2 className="mt-4 section-title text-av-green">Every event has a role for you.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {["Briefing", "Action", "Reflection", "Follow Up"].map((title, index) => (
              <div className="soft-card" key={title}>
                <div className="mb-8 flex items-center justify-between">
                  <span className="kicker">0{index + 1}</span>
                  <FiCalendar className="text-2xl text-av-orange" />
                </div>
                <h3 className="text-xl font-black text-av-green">{title}</h3>
                <p className="mt-3 font-semibold leading-7 text-av-bark/72">Participants receive role clarity, contribute in small teams, review outcomes, and continue with next-step opportunities.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
