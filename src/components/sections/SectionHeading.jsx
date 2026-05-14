export default function SectionHeading({ kicker, title, text, align = "between", className = "" }) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto max-w-4xl text-center" : "grid gap-5 lg:grid-cols-[minmax(0,680px)_minmax(260px,420px)] lg:items-end lg:justify-between"} ${className}`}>
      <div>
        {kicker && <p className="kicker mb-4">{kicker}</p>}
        <h2 className="section-title text-av-night">{title}</h2>
      </div>
      {text && <p className={`${isCenter ? "mx-auto mt-6" : ""} body-lead max-w-xl text-av-bark/75`}>{text}</p>}
    </div>
  );
}
