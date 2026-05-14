import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import PageHero from "../../components/sections/PageHero";
import { images } from "../../utils/content";

const skills = ["Teaching", "Mentorship", "Design", "Fundraising", "Social Media", "Field Work", "Research", "Event Support"];
const availability = ["Weekends", "Weekdays", "Remote", "Field Visits", "Events", "Flexible"];
const notes = [
  "Good fit: teaching, mentoring, design, fundraising, field support.",
  "Time: weekend, weekday, remote, and field volunteering options.",
  "Follow up: the team will contact you after reviewing the form."
];

export default function BecomeVolunteer() {
  const [step, setStep] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (list, value, setter) => {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  const submit = (event) => {
    event.preventDefault();
    if (step < 2) {
      setStep((value) => value + 1);
      return;
    }
    setSubmitted(true);
  };

  const steps = [
    {
      title: "Personal details",
      content: (
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-black text-av-green">Full Name<input className="light-form-field" required type="text" /></label>
          <label className="grid gap-2 text-sm font-black text-av-green">Email<input className="light-form-field" required type="email" /></label>
          <label className="grid gap-2 text-sm font-black text-av-green">Phone<input className="light-form-field" required type="tel" /></label>
          <label className="grid gap-2 text-sm font-black text-av-green">City / Location<input className="light-form-field" required type="text" /></label>
        </div>
      )
    },
    {
      title: "Skills and availability",
      content: (
        <div className="grid gap-8">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.18em] text-av-red">Skill Selector</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((item) => (
                <button className={`rounded-full border px-4 py-2 text-sm font-black transition ${selectedSkills.includes(item) ? "border-av-orange bg-av-orange text-av-ivory" : "border-av-orange/20 bg-av-ivory text-av-green hover:border-av-orange"}`} type="button" key={item} onClick={() => toggle(selectedSkills, item, setSelectedSkills)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.18em] text-av-red">Availability Selector</p>
            <div className="grid gap-2 md:grid-cols-3">
              {availability.map((item) => (
                <button className={`flex min-h-12 items-center justify-between rounded-full border px-4 text-sm font-black transition ${selectedAvailability.includes(item) ? "border-av-orange bg-av-orange text-av-ivory" : "border-av-orange/20 bg-av-ivory text-av-green hover:border-av-orange"}`} type="button" key={item} onClick={() => toggle(selectedAvailability, item, setSelectedAvailability)}>
                  {item}
                  {selectedAvailability.includes(item) && <FiCheck />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Experience and submit",
      content: (
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-black text-av-green">
            Preferred Role
            <select className="light-form-field" required defaultValue="">
              <option value="" disabled>Select a role</option>
              <option>Teaching and learning support</option>
              <option>Career mentorship</option>
              <option>Skill training</option>
              <option>Community outreach</option>
              <option>Event support</option>
              <option>Fundraising or partnerships</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-black text-av-green">Experience Section<textarea className="light-form-field min-h-36 resize-y" placeholder="Share relevant experience, languages, age groups, or past volunteering work." /></label>
        </div>
      )
    }
  ];

  return (
    <main>
      <PageHero
        dark
        kicker="Volunteer Registration"
        title="Bring your skills, time, and care into rural transformation."
        text="Tell us how you would like to contribute. The team will review your interests and connect you with the right program route."
        image={images.volunteer}
      />

      <section className="page-section">
        <div className="section-shell grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <aside className="grid gap-4">
            <div className="soft-card">
              <FiHeart className="mb-8 text-4xl text-av-orange" />
              <p className="kicker">Before You Apply</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-av-green md:text-5xl">A short form, then a thoughtful match.</h2>
              <p className="body-lead mt-5 text-av-bark/75">The form is designed to understand your strengths and preferred rhythm, not to make volunteering complicated.</p>
            </div>
            {notes.map((item) => (
              <div className="rounded-card border border-av-orange/10 bg-av-ivory p-5 shadow-soft" key={item}>
                <p className="font-semibold leading-7 text-av-bark/75">{item}</p>
              </div>
            ))}
          </aside>

          <motion.div
            className="soft-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {submitted ? (
              <motion.div className="grid min-h-[480px] place-items-center text-center" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
                <div>
                  <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-av-orange text-4xl text-av-ivory"><FiHeart /></span>
                  <h2 className="mt-8 font-display text-5xl leading-none text-av-green">Registration received.</h2>
                  <p className="mx-auto mt-5 max-w-md font-semibold leading-7 text-av-bark/70">Thank you for registering. We have received your volunteer details and will contact you soon.</p>
                  <div className="mt-8">
                    <PrimaryButton to="/events" variant="orange">Explore Events</PrimaryButton>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={submit}>
                <div className="mb-8">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="text-sm font-black uppercase tracking-[.18em] text-av-red">Step {step + 1} of 3</p>
                    <p className="text-right text-sm font-bold text-av-bark/60">{steps[step].title}</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-av-orange/12">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-av-orange to-av-amber" animate={{ width: `${((step + 1) / 3) * 100}%` }} />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={step} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.22 }}>
                    {steps[step].content}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex flex-col gap-3 md:flex-row md:justify-between">
                  <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-av-orange/20 px-5 text-sm font-black text-av-green transition hover:border-av-orange disabled:opacity-35" disabled={step === 0} type="button" onClick={() => setStep((value) => value - 1)}>
                    <FiChevronLeft /> Back
                  </button>
                  <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-av-orange px-6 text-sm font-black text-av-ivory shadow-glow transition hover:bg-av-red" type="submit">
                    {step === 2 ? "Submit Volunteer Form" : "Continue"} <FiChevronRight />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
