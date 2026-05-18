"use client";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sprout, UsersRound } from "lucide-react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { brand, images } from "@/utils/content";

const focusAreas = [
  {
    icon: BookOpen,
    title: "Learning access",
    text: "Free coaching, books, and guided academic support for rural children.",
  },
  {
    icon: UsersRound,
    title: "Mentorship",
    text: "Career guidance and confidence-building through local support circles.",
  },
  {
    icon: Sprout,
    title: "Village growth",
    text: "Sustainable habits, skill readiness, and community-led development.",
  },
];

export default function AboutSection1() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealUp = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.16,
        duration: 0.65,
      },
    }),
    hidden: {
      y: 32,
      opacity: 0,
      filter: "blur(10px)",
    },
  };
  const fadeIn = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.12,
        duration: 0.65,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section
      ref={sectionRef}
      className="page-section relative isolate overflow-hidden bg-av-ivory"
    >
      <TimelineContent
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf3_0%,#fff1e5_48%,#fffaf3_100%)]"
        animationNum={0}
        customVariants={fadeIn}
        timelineRef={sectionRef}
      />
      <TimelineContent
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(36,68,14,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(36,68,14,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45"
        animationNum={1}
        customVariants={fadeIn}
        timelineRef={sectionRef}
      />

      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-center">
          <TimelineContent
            animationNum={0}
            customVariants={revealUp}
            timelineRef={sectionRef}
            className="max-w-3xl"
          >
            <p className="kicker mb-4 text-av-green">About {brand.name}</p>
            <h2 className="display-title text-[clamp(2.25rem,4.2vw,4.15rem)] text-av-night">
              <VerticalCutReveal
                splitBy="lines"
                staggerDuration={0.08}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 230,
                  damping: 28,
                }}
                containerClassName="leading-[.96]"
                wordLevelClassName="whitespace-nowrap"
                elementLevelClassName="whitespace-nowrap"
              >
                {"Empowering Rural Dreams,\nCreating Sustainable Futures"}
              </VerticalCutReveal>
            </h2>
            <p className="body-lead mt-5 max-w-2xl text-av-bark/75">
              We bring education, mentorship, practical skills, and sustainable
              action closer to families who need opportunity within reach.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {focusAreas.map(({ icon: Icon, title, text }, index) => (
                <TimelineContent
                  as="article"
                  animationNum={index + 1}
                  customVariants={revealUp}
                  key={title}
                  timelineRef={sectionRef}
                  className="rounded-card border border-av-orange/10 bg-white/82 p-4 shadow-soft backdrop-blur"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-av-leaf/14 text-av-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-black text-av-night">{title}</h3>
                  <p className="mt-2 text-xs font-semibold leading-5 text-av-bark/70">
                    {text}
                  </p>
                </TimelineContent>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about-us"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-av-night px-6 text-sm font-extrabold text-av-ivory shadow-soft transition hover:bg-av-orange"
              >
                Know More
                <ArrowRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/become-volunteer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-av-orange/25 px-6 text-sm font-extrabold text-av-red transition hover:border-av-orange hover:bg-av-orange hover:text-av-ivory"
              >
                Join Us
              </Link>
            </div>
          </TimelineContent>

          <TimelineContent
            animationNum={2}
            customVariants={revealUp}
            timelineRef={sectionRef}
            className="relative self-center"
          >
            <div className="relative mx-auto max-w-[34rem] overflow-hidden rounded-card border border-av-orange/10 bg-av-night shadow-green lg:max-w-[38rem]">
              <div className="aspect-[5/4]">
                <img
                  src={images.classroom}
                  alt="Rural students learning together"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
