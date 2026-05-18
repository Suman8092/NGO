import footerImage from "../../assets/backdoyou.webp";

export default function FooterImageSection() {
  return (
    <section className="relative overflow-hidden bg-av-night">
      <img
        className="block h-auto w-full object-contain object-bottom"
        src={footerImage}
        alt="Rural children in a classroom"
        loading="lazy"
      />
    </section>
  );
}
