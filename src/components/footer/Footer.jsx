import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import { brand, socialLinks } from "../../utils/content";

const footerLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Volunteers", "/volunteers"],
  ["Stories", "/stories"],
  ["Event", "/events"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact-us"],
  ["Become a Volunteer", "/become-volunteer"]
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#073427] text-av-ivory">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <div className="section-shell relative py-10 sm:py-12 lg:py-16">
        <div className="mb-8 flex flex-col gap-5 border-b border-white/10 pb-8 sm:mb-10 sm:pb-9 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="w-fit rounded-full border border-white/25 bg-av-ivory px-3 py-2 shadow-soft sm:px-4">
              <img className="h-10 w-auto sm:h-12 md:h-14" src={brand.logo} alt="AnukalpVriksha Foundation logo" />
            </div>
            <div className="min-w-0">
              <p className="text-lg font-black leading-tight sm:text-xl">Every Rural Life Matters</p>
              <p className="mt-1 break-words text-xs font-semibold leading-5 text-av-ivory/58 sm:text-sm">{brand.registration}</p>
            </div>
          </div>
          <PrimaryButton to="/contact-us" variant="light" className="w-full sm:w-auto">Contact Us</PrimaryButton>
        </div>

        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <h2 className="max-w-full font-display text-[clamp(2.85rem,12vw,4.1rem)] font-light leading-[.96] text-av-ivory sm:max-w-2xl sm:text-[clamp(4rem,8vw,6rem)] lg:text-[clamp(4.7rem,6vw,6.4rem)]">
              <span className="block">United for</span>
              <span className="block">rural</span>
              <span className="block">transformation.</span>
            </h2>
            <p className="mt-5 max-w-full text-base font-semibold leading-7 text-av-ivory/68 sm:max-w-lg sm:text-lg sm:leading-8">
              Education, mentorship, skills, and community development shaped through AnukalpVriksha Foundation.
            </p>

            <div className="mt-7 grid gap-3 text-sm font-bold text-av-ivory/78 sm:grid-cols-2 lg:mt-9 xl:grid-cols-3">
              <p className="flex min-w-0 max-w-full gap-3 rounded-card border border-white/10 bg-white/[.045] p-3">
                <FiMapPin className="mt-1 shrink-0 text-av-amber" />
                <span className="min-w-0 break-words">{brand.address}</span>
              </p>
              <p className="flex min-w-0 max-w-full gap-3 rounded-card border border-white/10 bg-white/[.045] p-3">
                <FiPhone className="mt-1 shrink-0 text-av-amber" />
                <a className="min-w-0 break-words hover:text-av-amber" href={`tel:${brand.phone.replaceAll(" ", "")}`}>{brand.phone}</a>
              </p>
              <p className="flex min-w-0 max-w-full gap-3 rounded-card border border-white/10 bg-white/[.045] p-3 sm:col-span-2 xl:col-span-1">
                <FiMail className="mt-1 shrink-0 text-av-amber" />
                <a className="min-w-0 break-all hover:text-av-amber" href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
            </div>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-[.82fr_1.18fr] lg:gap-6">
            <nav className="grid content-start gap-3 rounded-card border border-white/10 bg-white/[.035] p-5 sm:bg-transparent sm:p-0 sm:border-0">
              <p className="kicker text-av-amber">Explore</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
                {footerLinks.map(([label, to]) => (
                  <Link className="min-w-0 break-words font-semibold leading-5 text-av-ivory/78 transition hover:text-av-amber" key={to} to={to}>
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="rounded-card border border-white/10 bg-white/[.06] p-5 shadow-green sm:p-6">
              <p className="kicker text-av-amber">Stay Connected</p>
              <h3 className="mt-3 font-display text-[2.4rem] leading-tight text-av-ivory sm:text-4xl lg:text-[2.75rem]">Start a conversation.</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-av-ivory/68 sm:text-base sm:leading-7">
                Volunteer, mentor, support a program, or collaborate on education and sustainability initiatives.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-av-night/15 text-sm font-black uppercase transition hover:border-av-amber hover:bg-av-orange/20"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.label}
                  >
                    {item.label === "Instagram" ? <FaInstagram /> : item.label === "LinkedIn" ? <FaLinkedinIn /> : item.short}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm font-bold text-av-ivory/58 sm:mt-10 md:flex-row md:items-center md:justify-between">
          <p>2026 Copyright &copy; AnukalpVriksha Foundation.</p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-card border border-white/10 px-3 py-2">EDU</span>
            <span className="rounded-card border border-white/10 px-3 py-2">SKILL</span>
            <span className="rounded-card border border-white/10 px-3 py-2">GREEN</span>
            <span className="rounded-card border border-white/10 px-3 py-2">CARE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
