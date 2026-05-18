import ctaBackground from "../../assets/bg-12-free-img.jpg";
import { brand } from "../../utils/content";

const donateMessage = `Namaste, I want to donate to ${brand.name}. Please share payment details.`;
const donateHref = `https://wa.me/${brand.phone.replace(/\D/g, "")}?text=${encodeURIComponent(donateMessage)}`;

export default function FooterCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-av-amber text-av-ivory">
      <svg
        className="absolute inset-x-0 top-0 z-20 h-10 w-full text-av-amber sm:h-12"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 0h1440v34c-207 30-402 34-585 12C634 20 425 9 228 24 139 31 63 31 0 23V0Z"
        />
      </svg>

      <div
        className="relative min-h-[300px] bg-av-night bg-cover bg-center bg-fixed sm:min-h-[340px] lg:min-h-[360px]"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="absolute inset-0 bg-av-night/68" />

        <div className="section-shell relative z-10 flex min-h-[300px] flex-col items-center justify-center py-16 text-center sm:min-h-[340px] lg:min-h-[360px]">
          <p className="text-[12px] font-black uppercase tracking-[0.22em] text-av-ivory/90 sm:text-sm">
            Want to make a difference?
          </p>
          <h2 className="mt-5 max-w-none font-display text-[clamp(1.55rem,2.9vw,2.95rem)] font-light leading-tight tracking-normal text-av-ivory lg:whitespace-nowrap">
            Help us raise support for rural education and sustainable futures
          </h2>
          <a
            href={donateHref}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex min-h-[3rem] items-center justify-center rounded-full bg-av-orange px-8 text-sm font-black uppercase tracking-[0.18em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-av-amber focus:outline-none focus:ring-2 focus:ring-av-ivory/70 focus:ring-offset-2 focus:ring-offset-av-night"
          >
            Donate
          </a>
        </div>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 z-20 h-10 w-full text-av-amber sm:h-12"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 48c170-18 343-18 519 0 232 24 453 25 664 2 107-12 193-13 257-3v33H0V48Z"
        />
      </svg>
    </section>
  );
}
