import { useRef } from "react";
import { FiEye, FiTarget, FiUsers } from "react-icons/fi";
import Reveal from "../../components/animations/Reveal";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import GlassCard from "../../components/cards/GlassCard";
import PageHero from "../../components/sections/PageHero";
import SectionHeading from "../../components/sections/SectionHeading";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { images } from "../../utils/content";

const milestones = [
  ["Learning", "Free coaching and extracurricular exposure help children build academic confidence."],
  ["Guidance", "Mentor conversations and workshops support important student decisions."],
  ["Skills", "Digital and vocational programs prepare youth and women for work."],
  ["Community", "Village programs connect sustainability, awareness, health, and livelihoods."]
];

export default function AboutUs() {
  const scope = useRef(null);
  useGsapReveal(scope);

  return (
    <main ref={scope}>
      <PageHero
        kicker="About AnukalpVriksha"
        title="Creating pathways for rural students to discover their potential."
        text="The foundation combines education, mentorship, extracurricular opportunities, and sustainable growth programs into one grounded rural support system."
        image={images.hero}
      />

      <section className="page-section">
        <div className="section-shell grid gap-4 lg:grid-cols-2">
          <GlassCard icon={FiTarget} eyebrow="Mission" title="Unlock potential. Reduce dropouts. Build confidence." text="Support rural youth with learning access, study continuity, scholarships, career awareness, and steady mentors." />
          <GlassCard icon={FiEye} eyebrow="Vision" title="Rural communities where futures feel reachable." text="Build communities where education, livelihoods, and sustainability grow together through local participation." />
        </div>
      </section>

      <section className="page-section bg-av-night text-av-ivory">
        <div className="section-shell">
          <SectionHeading
            kicker="How We Work"
            title="A simple model for long-term change."
            text="Progress is measured by continuity, confidence, local participation, and families who can see a clearer path forward."
            className="[&_h2]:text-av-ivory [&_p]:text-av-ivory/70 [&_.kicker]:text-av-amber"
          />
          <div className="mt-10 grid gap-3">
            {milestones.map(([title, text], index) => (
              <article className="gsap-reveal grid gap-4 rounded-card bg-av-ivory p-6 text-av-night md:grid-cols-[150px_1fr]" key={title}>
                <strong className="display-title text-4xl text-av-green">{title}</strong>
                <p className="body-lead text-av-bark/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell">
          <SectionHeading kicker="Team and Mentors" title="A network built around trust." text="Educators, mentors, volunteers, and field coordinators bring practical knowledge and consistent support." />
          <div className="mt-10 grid gap-4 lg:grid-cols-[.85fr_1.15fr]">
            <div className="soft-card">
              <FiUsers className="mb-8 text-4xl text-av-orange" />
              <h3 className="display-title text-5xl text-av-green">People make the model work.</h3>
              <p className="body-lead mt-5 text-av-bark/75">The team contributes across education, agriculture, social change, science, skill development, and community management.</p>
              <div className="mt-8">
                <PrimaryButton to="/volunteers" variant="outline">Meet Volunteers</PrimaryButton>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[images.mentorPortrait, images.technical].map((image, index) => (
                <Reveal key={image} delay={index * 0.04}>
                  <div className="image-frame h-[380px]">
                    <img className="image-cover" src={image} alt="AnukalpVriksha mentor" loading="lazy" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="section-shell">
          <div className="grid overflow-hidden rounded-card bg-forest-grad text-av-ivory lg:grid-cols-[.9fr_1.1fr]">
            <img className="h-full min-h-[360px] w-full object-cover" src={images.volunteer} alt="AnukalpVriksha volunteers" loading="lazy" />
            <div className="p-8 md:p-10 lg:p-12">
              <p className="kicker text-av-amber">Take Part</p>
              <h2 className="section-title mt-4 text-av-ivory">Help rural potential grow.</h2>
              <p className="mt-5 text-base font-semibold leading-7 text-av-ivory/72">Volunteer, mentor, collaborate, or support programs that connect education with long-term community development.</p>
              <div className="mt-8">
                <PrimaryButton to="/become-volunteer" variant="light">Become a Volunteer</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
