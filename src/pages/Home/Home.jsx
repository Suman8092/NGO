import { useRef } from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiCamera,
  FiCheckCircle,
  FiCompass,
  FiCpu,
  FiCreditCard,
  FiDroplet,
  FiHeart,
  FiShield,
  FiTarget,
  FiUsers
} from "react-icons/fi";
import Reveal from "../../components/animations/Reveal";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import GlassCard from "../../components/cards/GlassCard";
import ImageCard from "../../components/cards/ImageCard";
import SectionHeading from "../../components/sections/SectionHeading";
import StatCounter from "../../components/sections/StatCounter";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { brand, images, pathways, stats } from "../../utils/content";

const icons = [FiBookOpen, FiCompass, FiCpu, FiHeart];

const galleryPreview = [
  ["Education", "Creative learning", images.creative],
  ["Community", "Village action", images.sustainability],
  ["Mentorship", "Guidance circle", images.mentorship],
  ["Volunteer", "Action day", images.volunteer],
  ["Skills", "Technology learning", images.skills]
];

const donationAmounts = [
  ["Rs. 500", "Learning supplies"],
  ["Rs. 1,000", "Support education"],
  ["Rs. 2,500", "Skill workshop"],
  ["Rs. 5,000", "Empower a family"]
];

const donationSignals = [
  [FiShield, "Registered NGO", brand.registration],
  [FiCheckCircle, "Transparent Use", "Program-first giving"],
  [FiCreditCard, "Support Channels", "UPI, bank transfer, cards"]
];

const donationMilestones = [
  [FiUsers, "8,000+", "Students targeted"],
  [FiHeart, "40,000+", "Lives envisioned"],
  [FiCalendar, "20", "Centers planned"]
];

const donationMailHref = `mailto:${brand.email}?subject=${encodeURIComponent("Donation support for AnukalpVriksha Foundation")}`;

const campaigns = [
  {
    tag: "Education",
    title: "Education for Every Child",
    text: "Provide coaching, books, digital learning materials, and mentor support for rural students.",
    image: images.classroom,
    icon: FiBookOpen,
    raised: "Rs. 2,45,000",
    target: "Rs. 4,00,000",
    progress: 61,
    days: 32,
    donors: 245
  },
  {
    tag: "Learning Kits",
    title: "Learning and Care Kits",
    text: "Support notebooks, digital learning supplies, awareness sessions, and family outreach for children in need.",
    image: images.creative,
    icon: FiHeart,
    raised: "Rs. 1,80,000",
    target: "Rs. 3,00,000",
    progress: 60,
    days: 18,
    donors: 189
  },
  {
    tag: "Healthcare",
    title: "Healthcare Awareness",
    text: "Help us run basic health awareness, hygiene education, and community wellbeing programs.",
    image: images.mentorship,
    icon: FiShield,
    raised: "Rs. 3,20,000",
    target: "Rs. 5,00,000",
    progress: 64,
    days: 25,
    donors: 312
  },
  {
    tag: "Environment",
    title: "Sustainable Villages",
    text: "Plant trees, improve local awareness, and support greener community action in rural areas.",
    image: images.sustainability,
    icon: FiDroplet,
    raised: "Rs. 95,000",
    target: "Rs. 2,00,000",
    progress: 48,
    days: 12,
    donors: 124
  }
];

function campaignMailHref(title) {
  return `mailto:${brand.email}?subject=${encodeURIComponent(`Campaign donation support: ${title}`)}`;
}

function DonationSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-av-ivory py-8 sm:py-10 lg:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf3_0%,#fff1e5_52%,#fffaf3_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(36,68,14,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(36,68,14,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
      <div className="section-shell flex min-h-[calc(100svh-4rem)] flex-col justify-center">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center xl:gap-6">
          <div className="relative overflow-hidden rounded-card border border-av-orange/10 bg-white/86 p-5 shadow-soft backdrop-blur sm:p-6 lg:p-5 xl:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-av-green text-lg text-av-ivory sm:h-11 sm:w-11">
                <FiHeart />
              </span>
              <p className="kicker text-av-green">Make an Impact</p>
            </div>

            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,9vw,5.2rem)] font-light leading-[.94] text-av-night lg:text-[4rem] xl:text-[4.25rem]">
              Your donation can change rural lives.
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-av-bark/75 sm:text-base sm:leading-7 lg:text-sm lg:leading-6">
              Every contribution helps us bring learning access, mentorship, practical skills, and community-led growth to children and families.
            </p>

            <div className="mt-4 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-card bg-av-leaf/12 px-3 py-2.5 text-xs font-black leading-5 text-av-green sm:inline-flex sm:px-4">
              <FiShield className="text-lg" />
              <span>Secure conversation with the team</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-av-green/45 sm:block" />
              <span>Program-first support</span>
            </div>

            <div className="mt-5">
              <p className="kicker mb-3 text-av-bark/75">Choose Donation Amount</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {donationAmounts.map(([amount, label], index) => (
                  <button
                    className={`min-h-[68px] rounded-card border px-3 py-2.5 text-left transition hover:-translate-y-0.5 hover:border-av-green hover:shadow-soft ${
                      index === 0 ? "border-av-green bg-av-leaf/10" : "border-av-orange/15 bg-av-ivory"
                    }`}
                    key={amount}
                    type="button"
                  >
                    <span className="block text-lg font-black leading-tight text-av-green sm:text-xl xl:text-lg">{amount}</span>
                    <span className="mt-1 block text-[11px] font-semibold leading-4 text-av-bark/72">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto]">
              <label className="flex min-h-12 min-w-0 items-center rounded-card border border-av-orange/15 bg-av-ivory px-3 text-av-bark/60 sm:px-4">
                <span className="mr-3 shrink-0 border-r border-av-orange/15 pr-3 text-lg font-black text-av-night sm:mr-4 sm:pr-4 sm:text-xl">Rs.</span>
                <input
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-av-bark/45"
                  inputMode="numeric"
                  placeholder="Custom amount"
                  type="text"
                />
              </label>
              <PrimaryButton href={donationMailHref} variant="orange" className="min-h-12 w-full px-6 md:w-auto lg:w-full xl:w-auto xl:px-8" icon={false}>
                Donate Now
              </PrimaryButton>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {donationSignals.map(([Icon, title, text]) => (
                <div className="flex gap-2 rounded-card bg-av-leaf/10 p-2.5" key={title}>
                  <Icon className="mt-0.5 shrink-0 text-lg text-av-green" />
                  <div>
                    <p className="text-xs font-black text-av-night sm:text-sm xl:text-xs 2xl:text-sm">{title}</p>
                    <p className="mt-0.5 text-[11px] font-semibold leading-4 text-av-bark/68">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="kicker mb-2 text-av-bark/75">Support Channels</p>
              <div className="flex flex-wrap gap-2">
                {["UPI", "Bank Transfer", "Cards", "CSR", "In-kind"].map((item) => (
                  <span className="rounded-card border border-av-orange/15 bg-white/70 px-3 py-1.5 text-xs font-black text-av-green shadow-soft" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-4">
            <div className="relative min-h-[300px] overflow-hidden rounded-card bg-av-night shadow-green sm:min-h-[360px] md:min-h-[420px] lg:min-h-[300px] xl:min-h-[330px]">
              <img className="absolute inset-0 h-full w-full object-cover" src={images.classroom} alt="Rural students in a learning session" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-av-night/85 via-av-night/20 to-transparent" />
              <div className="absolute right-4 top-4 grid h-24 w-24 place-items-center rounded-full border border-av-ivory/50 bg-av-amber p-3 text-center text-[11px] font-black leading-4 text-av-night shadow-soft sm:right-5 sm:top-5 sm:h-28 sm:w-28 sm:p-4 sm:text-xs sm:leading-5 md:h-32 md:w-32">
                Be the reason for a brighter future
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-av-ivory sm:p-6 lg:p-7">
                <p className="kicker text-av-amber">Education Support</p>
                <h3 className="mt-3 max-w-xl font-display text-3xl leading-tight sm:text-4xl lg:text-[2.35rem] xl:text-[2.8rem]">Help a child stay curious, confident, and supported.</h3>
              </div>
            </div>

            <div className="rounded-card border border-white/10 bg-av-night p-5 text-av-ivory shadow-green sm:p-6 lg:p-5 xl:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="min-w-0">
                  <p className="kicker text-av-amber">Help Us Reach Our Goal</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-av-ivory sm:text-3xl lg:text-[1.55rem] xl:text-[1.75rem]">Rs. 15,00,000 annual learning fund</h3>
                </div>
                <FiHeart className="hidden text-4xl text-av-amber md:block" />
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-av-ivory/68 lg:text-xs lg:leading-5 xl:text-sm xl:leading-6">
                First milestone: Rs. 8,50,000 for coaching support, kits, workshops, and mentor-led sessions.
              </p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-av-ivory/18">
                <div className="grid h-full w-[57%] place-items-center rounded-full bg-gradient-to-r from-av-amber via-av-orange to-av-red text-[10px] font-black leading-none text-av-ivory">
                  57%
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {donationMilestones.map(([Icon, value, label]) => (
                  <div className="flex items-center gap-3" key={label}>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-av-ivory/12 text-lg text-av-amber">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-lg font-black text-av-ivory sm:text-xl lg:text-lg xl:text-xl">{value}</span>
                      <span className="block text-xs font-semibold leading-5 text-av-ivory/64">{label}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-card bg-av-ivory px-4 py-2.5 text-center text-sm font-black leading-6 text-av-green sm:px-5">
                Together, we can build a better tomorrow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CampaignsSection() {
  return (
    <section id="campaigns" className="relative isolate flex min-h-[100svh] scroll-mt-24 overflow-hidden bg-av-ivory py-8 sm:py-10 lg:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf3_0%,#fff5ec_48%,#fffaf3_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(36,68,14,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(36,68,14,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
      <div className="section-shell flex min-h-[calc(100svh-4rem)] flex-col justify-center">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-4xl">
            <div className="mb-3 flex items-center gap-4 text-av-green">
              <span className="h-px w-12 bg-av-green/45" />
              <p className="kicker text-av-green">Our Campaigns</p>
            </div>
            <h2 className="display-title max-w-3xl text-5xl text-av-night sm:text-6xl lg:text-[4.35rem]">
              Together we can make an impact.
            </h2>
            <p className="body-lead mt-4 max-w-2xl text-av-bark/75">
              Explore active campaigns and support the causes that need help most. Every contribution moves a rural family one step closer to change.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-[430px] lg:flex-nowrap lg:justify-end">
            {[
              ["4", "Active causes"],
              ["870", "Donors"],
              ["Rs. 8.4L", "Raised"]
            ].map(([value, label]) => (
              <div className="min-w-[120px] flex-1 rounded-card border border-av-orange/15 bg-white/75 px-4 py-3 shadow-soft backdrop-blur lg:min-w-[132px] lg:flex-none" key={label}>
                <span className="block text-lg font-black leading-none text-av-green xl:text-xl">{value}</span>
                <span className="mt-1 block text-xs font-black uppercase tracking-[.12em] text-av-bark/60">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {campaigns.map((campaign, index) => {
            const Icon = campaign.icon;

            return (
              <article
                className="group relative isolate flex min-h-[430px] min-w-0 overflow-hidden rounded-card bg-av-night text-av-ivory shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-green xl:min-h-[350px] 2xl:min-h-[370px]"
                key={campaign.title}
              >
                <img className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" src={campaign.image} alt={campaign.title} loading="lazy" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-av-night via-av-night/62 to-av-night/8" />
                <span className="absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-av-ivory/95 px-3 py-2 text-[10px] font-black uppercase tracking-[.08em] text-av-green shadow-soft">
                  <Icon className="text-base" />
                  {campaign.tag}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-av-amber px-3 py-2 text-xs font-black text-av-night shadow-soft">
                  {campaign.progress}% funded
                </span>

                <div className="mt-auto flex w-full flex-col p-5 sm:p-6 xl:p-4 2xl:p-5">
                  <h3 className="text-2xl font-black leading-tight text-av-ivory sm:text-3xl xl:text-[1.28rem] 2xl:text-[1.45rem]">{campaign.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-av-ivory/78 xl:line-clamp-2 xl:text-[13px] xl:leading-5">{campaign.text}</p>

                  <div className="mt-4 xl:mt-3">
                    <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                      <span className="text-2xl font-black leading-none text-av-amber sm:text-3xl xl:text-xl 2xl:text-2xl">{campaign.raised}</span>
                      <span className="text-sm font-semibold text-av-ivory/72 xl:text-xs 2xl:text-sm">raised of {campaign.target}</span>
                    </div>
                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-av-ivory/20">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-av-amber via-av-orange to-av-red"
                        style={{ width: `${campaign.progress}%` }}
                        aria-label={`${campaign.progress}% funded`}
                      />
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center xl:grid-cols-[minmax(0,1fr)_auto]">
                      <div className="grid grid-cols-2 gap-2 rounded-card bg-av-ivory/12 p-3 backdrop-blur xl:p-2 2xl:p-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <FiCalendar className="shrink-0 text-lg text-av-amber xl:text-base 2xl:text-lg" />
                          <span>
                            <span className="block text-base font-black leading-none text-av-ivory xl:text-sm 2xl:text-base">{campaign.days}</span>
                            <span className="block text-xs font-semibold text-av-ivory/64 xl:text-[10px] 2xl:text-xs">Days left</span>
                          </span>
                        </div>
                        <div className="flex min-w-0 items-center gap-2">
                          <FiUsers className="shrink-0 text-lg text-av-amber xl:text-base 2xl:text-lg" />
                          <span>
                            <span className="block text-base font-black leading-none text-av-ivory xl:text-sm 2xl:text-base">{campaign.donors}</span>
                            <span className="block text-xs font-semibold text-av-ivory/64 xl:text-[10px] 2xl:text-xs">Donors</span>
                          </span>
                        </div>
                      </div>

                      <PrimaryButton href={campaignMailHref(campaign.title)} variant="orange" className="min-h-10 w-full px-4 text-xs sm:w-auto xl:w-auto" icon={false}>
                        Donate Now
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
          <PrimaryButton to="/contact-us" variant="outline" className="min-h-12 w-full border-av-green bg-white/60 px-6 text-av-green hover:border-av-green hover:bg-av-green sm:w-auto sm:px-10" icon={false}>
            <span className="inline-flex items-center justify-center gap-3">
              <FiTarget className="text-xl" />
              View All Campaigns
            </span>
          </PrimaryButton>
          <p className="flex items-center justify-center gap-2 text-sm font-semibold text-av-bark/72">
            <FiHeart className="text-av-green" />
            Every small contribution creates a big change.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const scope = useRef(null);
  useGsapReveal(scope);

  return (
    <main ref={scope}>
      <section className="relative min-h-[100svh] overflow-hidden bg-av-night text-av-ivory">
        <video className="absolute inset-0 h-full w-full object-contain object-center opacity-75" autoPlay muted loop playsInline preload="metadata">
          <source src={brand.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,7,.9),rgba(16,24,7,.42)_58%,rgba(16,24,7,.78)),linear-gradient(180deg,rgba(16,24,7,.18),rgba(16,24,7,.78))]" />
        <div className="section-shell relative flex min-h-[100svh] items-center pb-10 pt-28 md:pb-12 md:pt-32">
          <div className="max-w-6xl">
            <p className="kicker mb-5 text-av-amber">Every Rural Life Matters</p>
            <h1 className="display-title max-w-6xl text-[clamp(2.75rem,4.8vw,4.6rem)] text-av-ivory">
              <span className="block">Empowering rural youth</span>
              <span className="block">through education, skills,</span>
              <span className="block">and sustainable growth.</span>
            </h1>
            <p className="body-lead mt-6 max-w-2xl text-av-ivory/78">
              A focused movement for learning access, mentorship, practical skills, and village-led development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/stories" variant="light">Explore Impact</PrimaryButton>
              <PrimaryButton to="/become-volunteer" variant="outline" className="border-white/35 text-av-ivory hover:border-av-orange">Volunteer</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCounter key={item.label} {...item} />
          ))}
        </div>
      </section>

      <DonationSection />

      <CampaignsSection />

      <section className="page-section bg-av-ivory/50">
        <div className="section-shell">
          <SectionHeading
            kicker="Core Initiatives"
            title="One mission, four practical pathways."
            text="Every program is designed to feel grounded, measurable, and useful for rural learners and families."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {pathways.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <GlassCard icon={icons[index]} eyebrow={item.tag} title={item.title} text={item.text} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-shell grid gap-4 lg:grid-cols-[1.08fr_.92fr]">
          <div className="image-frame min-h-[430px]">
            <img className="image-cover" src={images.creative} alt="Children learning creatively" loading="lazy" />
          </div>
          <div className="forest-panel p-8 md:p-10 lg:p-12">
            <p className="kicker text-av-amber">Story Preview</p>
            <h2 className="section-title mt-4 text-av-ivory">A classroom that made opportunity feel close.</h2>
            <p className="mt-6 text-base font-semibold leading-7 text-av-ivory/72 md:text-lg md:leading-8">
              Learning is strongest when a child is supported as a whole person: curious, creative, social, and capable of leading change.
            </p>
            <div className="mt-8">
              <PrimaryButton to="/stories" variant="light">Read Stories</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="impact-gallery" className="page-section bg-av-cream">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <p className="kicker mb-4">Impact Gallery</p>
              <h2 className="section-title text-av-night">Moments from learning and community spaces.</h2>
              <p className="body-lead mt-5 max-w-xl text-av-bark/75">
                A quick look at classrooms, mentor circles, village programs, and volunteer-led field moments.
              </p>
              <div className="mt-7">
                <PrimaryButton to="/gallery" variant="orange">View Gallery</PrimaryButton>
              </div>
            </div>

            <div className="space-y-4 overflow-hidden">
              {[galleryPreview, [...galleryPreview].reverse()].map((row, rowIndex) => (
                <div className="gallery-marquee" key={`gallery-row-${rowIndex}`}>
                  <div className={`gallery-marquee-track ${rowIndex === 1 ? "gallery-marquee-track--reverse" : ""}`}>
                    {[0, 1].map((copy) => (
                      <div className="gallery-marquee-set" aria-hidden={copy === 1} key={`gallery-copy-${rowIndex}-${copy}`}>
                        {row.map(([tag, title, image]) => (
                          <article
                            className="group relative h-[220px] w-[250px] shrink-0 overflow-hidden rounded-card bg-av-night shadow-soft sm:w-[292px] md:h-[244px] lg:w-[320px]"
                            key={`${title}-${rowIndex}-${copy}`}
                          >
                            <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" src={image} alt={title} loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-av-night/88 via-av-night/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-av-ivory">
                              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-av-orange px-3 py-1 text-[10px] font-black uppercase tracking-[.16em]">
                                <FiCamera />
                                {tag}
                              </span>
                              <h3 className="font-display text-3xl leading-none md:text-4xl">{title}</h3>
                            </div>
                          </article>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-av-night text-av-ivory">
        <div className="section-shell">
          <SectionHeading
            kicker="Impact Areas"
            title="Programs that move together, not apart."
            text="Education, mentorship, skills, and community action work best when they reinforce each other."
            className="[&_h2]:text-av-ivory [&_p]:text-av-ivory/70 [&_.kicker]:text-av-amber"
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {pathways.map((item) => (
              <ImageCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
