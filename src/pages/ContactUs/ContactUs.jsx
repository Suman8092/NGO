import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import PageHero from "../../components/sections/PageHero";
import { brand, images } from "../../utils/content";

const contactItems = [
  [FiMapPin, "Address", brand.address],
  [FiMail, "Email", brand.email],
  [FiPhone, "Phone", `${brand.phone} / ${brand.partnerPhone}`]
];

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      <PageHero
        dark
        kicker="Contact Us"
        title="Join the journey of transforming rural India."
        text="Reach out to volunteer, mentor students, support a project, or collaborate on education and sustainability initiatives."
        image={images.hero}
      />

      <section className="page-section">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <motion.form
            className="soft-card"
            onSubmit={submit}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="kicker">Write to Us</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-av-green md:text-5xl">Start a useful conversation.</h2>
              </div>
              <FiSend className="hidden text-4xl text-av-orange sm:block" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-av-green">Name<input className="light-form-field" required type="text" /></label>
              <label className="grid gap-2 text-sm font-black text-av-green">Email<input className="light-form-field" required type="email" /></label>
              <label className="grid gap-2 text-sm font-black text-av-green">Phone<input className="light-form-field" type="tel" /></label>
              <label className="grid gap-2 text-sm font-black text-av-green">
                Request
                <select className="light-form-field" required defaultValue="">
                  <option value="" disabled>Select request</option>
                  <option>Volunteer</option>
                  <option>Mentorship</option>
                  <option>Partnership</option>
                  <option>Donate or support</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-black text-av-green md:col-span-2">Message<textarea className="light-form-field min-h-32 resize-y" /></label>
            </div>
            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-semibold text-av-bark/65">{sent ? "Thank you. Your message has been queued." : "We usually respond after reviewing the request type."}</p>
              <PrimaryButton variant="orange" icon={false} type="submit">Send Message</PrimaryButton>
            </div>
          </motion.form>

          <div className="grid gap-4">
            {contactItems.map(([Icon, label, value]) => (
              <div className="soft-card flex gap-4" key={label}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-av-orange text-xl text-av-ivory">
                  <Icon />
                </span>
                <div>
                  <p className="kicker">{label}</p>
                  <p className="mt-2 font-semibold leading-7 text-av-bark/76">{value}</p>
                </div>
              </div>
            ))}
            <div className="forest-panel p-6">
              <p className="kicker text-av-amber">Social Links</p>
              <h3 className="mt-3 font-display text-4xl leading-tight text-av-ivory">Follow the work.</h3>
              <div className="mt-6 flex gap-3">
                <a className="grid h-12 w-12 place-items-center rounded-full border border-white/15 transition hover:bg-av-orange/25" href="https://www.instagram.com/anukalpvriksha?utm_source=qr&igsh=cWt4cHo5ODdibmZn" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a className="grid h-12 w-12 place-items-center rounded-full border border-white/15 transition hover:bg-av-orange/25" href="https://www.linkedin.com/company/102994741/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <div className="relative min-h-[430px] overflow-hidden rounded-card border border-av-orange/10 bg-av-green p-8 text-av-ivory shadow-green md:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,243,.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,250,243,.08)_1px,transparent_1px)] bg-[length:48px_48px]" />
          <div className="relative max-w-2xl">
            <p className="kicker text-av-amber">Map Section</p>
            <h2 className="mt-4 section-title text-av-ivory">Iradatnagar, Saiyan Road, Agra.</h2>
            <p className="mt-5 max-w-xl font-semibold leading-7 text-av-ivory/70">Program activity is coordinated from the Agra region with field outreach across nearby rural communities.</p>
          </div>
          {[["left-[22%] top-[58%]", "Office"], ["left-[52%] top-[48%]", "Programs"], ["right-[18%] top-[62%]", "Outreach"]].map(([pos, label], index) => (
            <motion.div
              className={`absolute ${pos} hidden place-items-center md:grid`}
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <span className="absolute h-14 w-14 rounded-full bg-av-orange/20" />
              <span className="relative rounded-full border-4 border-av-ivory bg-av-orange px-4 py-2 text-xs font-black">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
