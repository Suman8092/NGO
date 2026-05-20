import { useRef, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiChevronRight,
  FiCheckCircle,
  FiCompass,
  FiCpu,
  FiCreditCard,
  FiDroplet,
  FiHeart,
  FiMessageCircle,
  FiPause,
  FiPlay,
  FiSearch,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers
} from "react-icons/fi";
import Reveal from "../../components/animations/Reveal";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import GlassCard from "../../components/cards/GlassCard";
import SectionHeading from "../../components/sections/SectionHeading";
import StatCounter from "../../components/sections/StatCounter";
import AboutSection1 from "../../components/ui/about-section-1";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { brand, images, pathways, stats } from "../../utils/content";

const icons = [FiBookOpen, FiCompass, FiCpu, FiHeart];
const statIcons = [FiUsers, FiBookOpen, FiTarget, FiCompass];

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

const supportChannels = ["UPI", "Bank Transfer", "Cards", "CSR", "In-kind"];

function sanitizeDonationAmount(value) {
  return value.replace(/[^\d]/g, "");
}

function donationSupportHref(amount = "", channel = "payment") {
  const phone = brand.phone.replace(/\D/g, "");
  const amountText = amount ? ` of Rs. ${amount}` : "";
  const message = `Namaste, I want to make a ${channel} donation${amountText} to ${brand.name}. Please share payment details.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

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

const programCards = [
  {
    title: "Education for Every Child",
    text: "Coaching, books, digital learning material, and mentor support for rural students who need consistent academic access.",
    image: images.classroom,
    icon: FiBookOpen
  },
  {
    title: "Career Guidance",
    text: "Scholarship awareness, exam pathways, and confidence-building sessions led by mentors and volunteers.",
    image: images.mentorship,
    icon: FiCompass
  },
  {
    title: "Skill Development",
    text: "Digital literacy, employability readiness, vocational exposure, and entrepreneurship support for youth.",
    image: images.skills,
    icon: FiCpu
  },
  {
    title: "Sustainable Villages",
    text: "Tree planting, local awareness, hygiene habits, and greener community action shaped with village participation.",
    image: images.sustainability,
    icon: FiDroplet
  },
  {
    title: "Creative Learning",
    text: "Creative sessions, classroom activities, and curiosity-led learning moments that keep children engaged.",
    image: images.creative,
    icon: FiHeart
  },
  {
    title: "Volunteer Action",
    text: "Field visits, local campaigns, and hands-on support from people who want to help rural families move forward.",
    image: images.volunteer,
    icon: FiUsers
  }
];

const approachSteps = [
  {
    title: "Connect",
    text: "We visit villages and engage with people through open conversations and active listening.",
    icon: FiMessageCircle
  },
  {
    title: "Understand",
    text: "We assess the real needs, challenges, and opportunities on the ground.",
    icon: FiSearch
  },
  {
    title: "Collaborate",
    text: "We work hand-in-hand with communities to co-create practical and sustainable solutions.",
    icon: FiUsers
  },
  {
    title: "Act",
    text: "We implement initiatives that empower people and address their most pressing needs.",
    icon: FiDroplet
  },
  {
    title: "Follow Up",
    text: "We stay connected, measure progress, and ensure long-term impact.",
    icon: FiTrendingUp
  }
];

function campaignMailHref(title) {
  return `mailto:${brand.email}?subject=${encodeURIComponent(`Campaign donation support: ${title}`)}`;
}

function ApproachSection() {
  return (
    <section id="approach" className="relative isolate overflow-hidden bg-av-ivory py-10 sm:py-12 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf6_0%,#fff2e8_52%,#fffaf6_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(13,13,13,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="section-shell">
        <h2 className="text-center text-2xl font-black leading-tight text-av-night sm:text-3xl">
          Our Approach
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {approachSteps.map(({ title, text, icon: Icon }, index) => (
            <article
              className="relative rounded-card border border-av-orange/10 bg-white/72 p-5 text-center shadow-soft lg:rounded-none lg:border-0 lg:bg-transparent lg:px-6 lg:py-0 lg:shadow-none"
              key={title}
            >
              {index > 0 && <span className="absolute left-0 top-0 hidden h-full w-px bg-av-night/10 lg:block" />}
              {index < approachSteps.length - 1 && (
                <span className="absolute right-0 top-5 z-10 hidden h-6 w-6 translate-x-1/2 place-items-center rounded-full border-2 border-av-ivory bg-av-orange text-av-ivory lg:grid">
                  <FiChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              )}

              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-av-night/10 bg-av-orange/8 text-3xl text-av-night">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-black leading-tight text-av-night">
                {index + 1}. {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[14rem] text-xs font-semibold leading-5 text-av-bark/74">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DonationSection() {
  const [selectedDonation, setSelectedDonation] = useState("500");
  const [customDonation, setCustomDonation] = useState("");
  const activeDonation = customDonation || selectedDonation;
  const donationHref = donationSupportHref(activeDonation);

  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-av-ivory py-8 sm:py-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf6_0%,#fff2e8_52%,#fffaf6_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(13,13,13,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
      <div className="flex min-h-[calc(100svh-4rem)] w-full flex-col justify-center px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="mx-auto grid w-full max-w-[1720px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center xl:gap-10">
          <div className="relative min-w-0 overflow-hidden">
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
                {donationAmounts.map(([amount, label]) => {
                  const amountValue = sanitizeDonationAmount(amount);
                  const isActive = !customDonation && selectedDonation === amountValue;

                  return (
                    <button
                      className={`min-h-[68px] rounded-card border px-3 py-2.5 text-left transition hover:-translate-y-0.5 hover:border-av-green hover:shadow-soft ${
                        isActive ? "border-av-green bg-av-leaf/10" : "border-av-orange/15 bg-white/75"
                      }`}
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedDonation(amountValue);
                        setCustomDonation("");
                      }}
                    >
                      <span className="block text-lg font-black leading-tight text-av-green sm:text-xl xl:text-lg">{amount}</span>
                      <span className="mt-1 block text-[11px] font-semibold leading-4 text-av-bark/72">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto]">
              <label className="flex min-h-12 min-w-0 items-center rounded-card border border-av-orange/15 bg-white/75 px-3 text-av-bark/60 sm:px-4">
                <span className="mr-3 shrink-0 border-r border-av-orange/15 pr-3 text-lg font-black text-av-night sm:mr-4 sm:pr-4 sm:text-xl">Rs.</span>
                <input
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-av-bark/45"
                  inputMode="numeric"
                  placeholder="Custom amount"
                  type="text"
                  value={customDonation}
                  onChange={(event) => {
                    setCustomDonation(sanitizeDonationAmount(event.target.value));
                    setSelectedDonation("");
                  }}
                />
              </label>
              <PrimaryButton href={donationHref} target="_blank" rel="noreferrer" variant="orange" className="min-h-12 w-full px-6 md:w-auto lg:w-full xl:w-auto xl:px-8" icon={false}>
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
                {supportChannels.map((item) => (
                  <a
                    className="rounded-card border border-av-orange/15 bg-white/70 px-3 py-1.5 text-xs font-black text-av-green shadow-soft transition hover:border-av-green hover:bg-av-leaf/10"
                    href={donationSupportHref(activeDonation, item)}
                    key={item}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item}
                  </a>
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

function DonationSectionV2() {
  const [selectedDonation, setSelectedDonation] = useState("500");
  const [customDonation, setCustomDonation] = useState("");
  const activeDonation = customDonation || selectedDonation;
  const donationHref = donationSupportHref(activeDonation);

  return (
    <section className="relative isolate overflow-hidden bg-av-night py-14 text-av-ivory sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(255,108,25,.22),transparent_32%),linear-gradient(135deg,#0D0D0D_0%,#0D0D0D_58%,#ED0001_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

      <div className="mx-auto grid w-full max-w-[1560px] gap-5 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(410px,.78fr)] lg:px-8 xl:gap-8">
        <div className="relative min-h-[560px] overflow-hidden rounded-card border border-white/10 bg-av-night shadow-green lg:min-h-[640px]">
          <img className="absolute inset-0 h-full w-full object-cover" src={images.classroom} alt="Rural students in a learning session" loading="lazy" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,.96)_0%,rgba(13,13,13,.8)_44%,rgba(13,13,13,.26)_100%),linear-gradient(180deg,rgba(13,13,13,.18),rgba(13,13,13,.92))]" />

          <div className="relative flex min-h-[560px] flex-col justify-end p-5 sm:p-7 lg:min-h-[640px] lg:p-9 xl:p-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-av-amber text-lg text-av-night shadow-soft">
                  <FiHeart />
                </span>
                <p className="kicker text-av-amber">Make an Impact</p>
              </div>

              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3.35rem,7vw,6.8rem)] font-light leading-[.94] text-av-ivory">
                Your donation can change rural lives.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-av-ivory/76 sm:text-lg sm:leading-8">
                Every contribution brings learning access, mentorship, practical skills, and community-led growth closer to children and families.
              </p>

              <div className="mt-7 max-w-2xl rounded-card border border-white/10 bg-white/[.07] p-4 backdrop-blur sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="kicker text-av-amber">Annual Learning Fund</p>
                    <p className="mt-2 text-2xl font-black leading-tight text-av-ivory sm:text-3xl">Rs. 15,00,000 goal</p>
                  </div>
                  <span className="w-fit rounded-full bg-av-ivory px-3 py-1 text-xs font-black text-av-green">57% funded</span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-av-ivory/18">
                  <div className="h-full w-[57%] rounded-full bg-gradient-to-r from-av-amber via-av-orange to-av-red" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {donationMilestones.map(([Icon, value, label]) => (
                    <div className="flex items-center gap-3" key={label}>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-av-ivory/12 text-lg text-av-amber">
                        <Icon />
                      </span>
                      <span>
                        <span className="block text-lg font-black text-av-ivory">{value}</span>
                        <span className="block text-xs font-semibold leading-5 text-av-ivory/64">{label}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-card border border-white/10 bg-av-ivory p-5 text-av-night shadow-green sm:p-6 lg:p-7 xl:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="kicker text-av-green">Choose Support</p>
              <h3 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[.96] text-av-night">
                Give with purpose.
              </h3>
            </div>
            <span className="hidden rounded-full bg-av-green px-4 py-2 text-xs font-black uppercase tracking-[.12em] text-av-ivory sm:inline-flex">
              Secure
            </span>
          </div>

          <div className="mt-6 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-card bg-av-leaf/12 px-3 py-2.5 text-xs font-black leading-5 text-av-green sm:inline-flex sm:px-4">
            <FiShield className="text-lg" />
            <span>Secure conversation with the team</span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-av-green/45 sm:block" />
            <span>Program-first support</span>
          </div>

          <div className="mt-7">
            <p className="kicker mb-3 text-av-bark/75">Donation Amount</p>
            <div className="grid grid-cols-2 gap-2">
              {donationAmounts.map(([amount, label]) => {
                const amountValue = sanitizeDonationAmount(amount);
                const isActive = !customDonation && selectedDonation === amountValue;

                return (
                  <button
                    className={`min-h-[76px] rounded-card border px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-av-green hover:shadow-soft ${
                      isActive ? "border-av-green bg-av-leaf/10" : "border-av-orange/15 bg-white/78"
                    }`}
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedDonation(amountValue);
                      setCustomDonation("");
                    }}
                  >
                    <span className="block text-xl font-black leading-tight text-av-green">{amount}</span>
                    <span className="mt-1 block text-xs font-semibold leading-4 text-av-bark/72">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
            <label className="flex min-h-[3.25rem] min-w-0 items-center rounded-card border border-av-orange/15 bg-white/78 px-3 text-av-bark/60 sm:px-4">
              <span className="mr-3 shrink-0 border-r border-av-orange/15 pr-3 text-xl font-black text-av-night sm:mr-4 sm:pr-4">Rs.</span>
              <input
                className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-av-bark/45"
                inputMode="numeric"
                placeholder="Custom amount"
                type="text"
                value={customDonation}
                onChange={(event) => {
                  setCustomDonation(sanitizeDonationAmount(event.target.value));
                  setSelectedDonation("");
                }}
              />
            </label>
            <PrimaryButton href={donationHref} target="_blank" rel="noreferrer" variant="orange" className="min-h-[3.25rem] w-full px-8 sm:w-auto" icon={false}>
              Donate Now
            </PrimaryButton>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {donationSignals.map(([Icon, title, text]) => (
              <div className="flex gap-2 rounded-card bg-av-leaf/10 p-3" key={title}>
                <Icon className="mt-0.5 shrink-0 text-lg text-av-green" />
                <div>
                  <p className="text-sm font-black text-av-night">{title}</p>
                  <p className="mt-0.5 text-[11px] font-semibold leading-4 text-av-bark/68">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="kicker mb-3 text-av-bark/75">Payment Channels</p>
            <div className="flex flex-wrap gap-2">
              {supportChannels.map((item) => (
                <a
                  className="rounded-full border border-av-orange/15 bg-white/78 px-4 py-2 text-xs font-black text-av-green shadow-soft transition hover:border-av-green hover:bg-av-leaf/10"
                  href={donationSupportHref(activeDonation, item)}
                  key={item}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 rounded-card bg-av-night px-4 py-3 text-center text-sm font-black leading-6 text-av-ivory">
            Together, we can build a better tomorrow.
          </p>
        </aside>
      </div>
    </section>
  );
}

function CampaignsSection() {
  return (
    <section id="campaigns" className="relative isolate flex min-h-[100svh] scroll-mt-24 overflow-hidden bg-av-ivory py-8 sm:py-10 lg:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf6_0%,#fff2e8_48%,#fffaf6_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(13,13,13,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
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

function CampaignsSectionV2() {
  return (
    <section id="campaigns" className="relative isolate overflow-hidden bg-av-ivory py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf6_0%,#fff2e8_48%,#fffaf6_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(13,13,13,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />

      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,760px)] lg:items-start lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4 text-av-orange">
              <p className="kicker text-av-orange">Help Us</p>
              <span className="h-px w-12 bg-av-orange/70" />
            </div>
            <h2 className="display-title text-[clamp(3.2rem,7vw,6rem)] text-av-night">
              Our Campaigns
            </h2>
          </div>

          <p className="body-lead max-w-3xl text-av-bark/72 lg:pt-12">
            We work with rural learners, families, and volunteers to create practical support systems for education, skills, mentorship, and sustainable village growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programCards.map(({ title, text, image, icon: Icon }) => (
            <article
              className="group flex min-h-[485px] flex-col overflow-hidden rounded-card border border-av-orange/10 bg-white/86 p-5 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-green"
              key={title}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-card border border-av-orange/10 bg-av-night">
                  <img
                    className="aspect-[1.55/1] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    src={image}
                    alt={title}
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-7 right-4 grid h-16 w-16 place-items-center rounded-full border-[6px] border-white bg-av-orange text-2xl text-av-ivory shadow-soft">
                  <Icon />
                </span>
              </div>

              <div className="flex flex-1 flex-col pt-11">
                <h3 className="text-xl font-black leading-tight text-av-night">{title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-av-bark/72">
                  {text}
                </p>

                <a
                  className="mt-auto grid min-h-14 grid-cols-[minmax(0,1fr)_4.5rem] overflow-hidden rounded-card border border-av-orange/10 bg-av-cream text-sm font-black text-av-green transition hover:border-av-green"
                  href={donationSupportHref("", title)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center px-5">Learn More</span>
                  <span className="grid place-items-center bg-av-green text-xl text-av-ivory transition group-hover:bg-av-orange">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const scope = useRef(null);
  const heroVideoRef = useRef(null);
  const [heroPaused, setHeroPaused] = useState(false);
  useGsapReveal(scope);

  const toggleHeroVideo = () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise?.catch) playPromise.catch(() => {});
      setHeroPaused(false);
    } else {
      video.pause();
      setHeroPaused(true);
    }
  };

  return (
    <main ref={scope}>
      <section className="relative h-[100svh] min-h-[100svh] overflow-hidden bg-av-night text-av-ivory">
        <video ref={heroVideoRef} className="absolute inset-0 h-full w-full object-cover object-center opacity-95" autoPlay muted loop playsInline preload="metadata">
          <source src={brand.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,.1)_0%,rgba(13,13,13,.16)_34%,rgba(13,13,13,.54)_62%,rgba(13,13,13,.94)_100%)] md:bg-[linear-gradient(90deg,rgba(13,13,13,.9),rgba(13,13,13,.42)_58%,rgba(13,13,13,.78)),linear-gradient(180deg,rgba(13,13,13,.18),rgba(13,13,13,.78))]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-av-night via-av-night/72 to-transparent md:hidden" />

        <div className="relative flex min-h-[100svh] items-end px-4 pb-7 pt-28 md:hidden">
          <div className="w-full">
            <h1 className="max-w-[19rem] font-display text-[clamp(2.35rem,10.5vw,3.6rem)] font-light leading-[.98] text-av-ivory [text-wrap:balance] drop-shadow-[0_8px_28px_rgba(0,0,0,.45)]">
              Advancing rural learning, skills, and sustainable growth
            </h1>
            <div className="mt-6 grid grid-cols-[minmax(0,1fr)_3.75rem] items-center gap-3 [&>div]:w-full">
              <PrimaryButton to="/stories" variant="light" className="min-h-12 w-full px-7 text-sm font-extrabold" icon={false}>
                Learn More
              </PrimaryButton>
              <button
                className="grid h-14 w-14 place-items-center rounded-full border border-white/12 bg-av-night/82 text-2xl text-av-ivory shadow-green backdrop-blur-md transition hover:bg-av-green"
                type="button"
                aria-label={heroPaused ? "Play hero video" : "Pause hero video"}
                onClick={toggleHeroVideo}
              >
                {heroPaused ? <FiPlay /> : <FiPause />}
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[100svh] items-end px-8 pb-[clamp(2.75rem,8vh,5rem)] pt-32 lg:px-10 md:flex">
          <div className="max-w-[50rem]">
            <h1 className="display-title max-w-[50rem] text-[clamp(2.6rem,3.6vw,4rem)] text-av-ivory drop-shadow-[0_8px_28px_rgba(0,0,0,.34)]">
              <span className="block">Empowering rural youth</span>
              <span className="block">through education, skills,</span>
              <span className="block">and sustainable growth.</span>
            </h1>
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton to="/stories" variant="light" className="min-h-12 min-w-[13rem] px-8 text-sm" icon={false}>Learn More</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-av-ivory py-10 sm:py-12 lg:py-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf6_0%,#fff2e8_52%,#fffaf6_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(13,13,13,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

        <div className="section-shell">
          <div className="mx-auto mb-7 max-w-3xl text-center">
            <p className="kicker mb-3 text-av-orange">Impact At A Glance</p>
            <h2 className="text-2xl font-black leading-tight text-av-night sm:text-3xl">
              Our 2035 goals
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-6 text-av-bark/72 sm:text-base">
              Focused targets for learning, skills, mentorship, and long-term rural growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <StatCounter key={item.label} {...item} icon={statIcons[index]} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection1 />

      <ApproachSection />

      <DonationSectionV2 />

      <CampaignsSectionV2 />

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
                        {row.map(([, title, image]) => (
                          <article
                            className="group relative h-[220px] w-[250px] shrink-0 overflow-hidden rounded-card bg-av-night shadow-soft sm:w-[292px] md:h-[244px] lg:w-[320px]"
                            key={`${title}-${rowIndex}-${copy}`}
                          >
                            <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" src={image} alt={title} loading="lazy" />
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

      <section className="relative isolate overflow-hidden bg-av-night py-16 text-av-ivory sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(255,108,25,.14),transparent_30%),linear-gradient(180deg,#0D0D0D_0%,#0D0D0D_72%,#170707_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

        <div className="section-shell">
          <SectionHeading
            kicker="Impact Areas"
            title="Programs that move together, not apart."
            text="Education, mentorship, skills, and community action work best when they reinforce each other."
            className="[&_h2]:text-av-ivory [&_p]:text-av-ivory/70 [&_.kicker]:text-av-amber"
          />

          <div className="mt-10 overflow-hidden rounded-card bg-av-night shadow-green">
            <div className="grid lg:grid-cols-4">
              {pathways.map((item, index) => (
                <article
                  className="group relative min-h-[340px] overflow-hidden lg:min-h-[430px]"
                  key={item.title}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,.08)_0%,rgba(13,13,13,.38)_44%,rgba(13,13,13,.9)_100%)] transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(13,13,13,.04)_0%,rgba(13,13,13,.28)_42%,rgba(13,13,13,.86)_100%)]" />
                  {index > 0 && <span className="absolute left-0 top-8 hidden h-[calc(100%-4rem)] w-px bg-white/16 lg:block" />}

                  <div className="relative z-10 flex min-h-[340px] flex-col justify-end p-5 sm:p-6 lg:min-h-[430px] lg:p-7">
                    <span className="mb-4 w-fit rounded-full bg-av-orange px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-av-ivory">
                      {item.tag}
                    </span>
                    <h3 className="max-w-[13rem] font-display text-[2.45rem] leading-[.9] text-av-ivory sm:text-5xl lg:text-[2.7rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[17rem] text-sm font-semibold leading-6 text-av-ivory/78">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
