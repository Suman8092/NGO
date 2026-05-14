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
    <footer className="bg-[#062f23] text-av-ivory">
      <div className="section-shell py-14 md:py-18 lg:py-20">
        <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full border border-white/25 bg-av-ivory px-4 py-2 shadow-soft">
              <img className="h-12 w-auto md:h-14" src={brand.logo} alt="AnukalpVriksha Foundation logo" />
            </div>
            <div>
              <p className="text-lg font-black">Every Rural Life Matters</p>
              <p className="mt-1 text-sm font-semibold text-av-ivory/58">{brand.registration}</p>
            </div>
          </div>
          <PrimaryButton to="/contact-us" variant="light">Contact Us</PrimaryButton>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <h2 className="section-title max-w-2xl text-av-ivory">United for rural transformation.</h2>
            <p className="mt-5 max-w-lg text-base font-semibold leading-7 text-av-ivory/65">
              Education, mentorship, skills, and community development shaped through AnukalpVriksha Foundation.
            </p>

            <div className="mt-9 grid gap-5 text-sm font-bold text-av-ivory/78 md:grid-cols-3">
              <p className="flex gap-3"><FiMapPin className="mt-1 shrink-0 text-av-amber" /> {brand.address}</p>
              <p className="flex gap-3"><FiPhone className="mt-1 shrink-0 text-av-amber" /> <a href={`tel:${brand.phone.replaceAll(" ", "")}`}>{brand.phone}</a></p>
              <p className="flex gap-3"><FiMail className="mt-1 shrink-0 text-av-amber" /> <a href={`mailto:${brand.email}`}>{brand.email}</a></p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <nav className="grid content-start gap-3">
              <p className="kicker text-av-amber">Explore</p>
              {footerLinks.map(([label, to]) => (
                <Link className="font-semibold text-av-ivory/78 transition hover:text-av-amber" key={to} to={to}>
                  {label}
                </Link>
              ))}
            </nav>
            <div className="rounded-card border border-white/10 bg-white/[.045] p-6 shadow-green">
              <p className="kicker text-av-amber">Stay Connected</p>
              <h3 className="mt-3 font-display text-4xl leading-tight text-av-ivory">Start a conversation.</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-av-ivory/65">
                Volunteer, mentor, support a program, or collaborate on education and sustainability initiatives.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-sm font-black uppercase transition hover:border-av-amber hover:bg-av-orange/20"
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

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm font-bold text-av-ivory/55 md:flex-row md:items-center md:justify-between">
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
