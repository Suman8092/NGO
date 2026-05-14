import logo from "../assets/demo1-logo.png";
import heroVideo from "../assets/hero-video.mp4";

export const brand = {
  name: "AnukalpVriksha Foundation",
  logo,
  heroVideo,
  email: "anukalpvriksha.org@gmail.com",
  phone: "+91 89791 97402",
  partnerPhone: "+91 96346 18953",
  address: "Iradatnagar, Saiyan Road, Agra, Uttar Pradesh 283112",
  registration: "CIN: U88900UP2024NPL202111"
};

export const images = {
  hero: "https://static.wixstatic.com/media/d52d63_8c5647fb4010474a85fe7a29b9144e2b~mv2.jpg",
  classroom: "https://static.wixstatic.com/media/d52d63_b58b6d3fc15b4915929409e6e4ce5748~mv2.webp",
  creative: "https://static.wixstatic.com/media/d52d63_026d6886f9114b74b91f591d82cd675e~mv2.jpg",
  mentorship: "https://static.wixstatic.com/media/d52d63_532462015e05461aa49d469700af201d~mv2.jpeg",
  skills: "https://static.wixstatic.com/media/d52d63_08c0db828408496eb005ae2462281db4~mv2.webp",
  sustainability: "https://static.wixstatic.com/media/d52d63_761bd693e842473cb191de319114a577~mv2.jpeg",
  volunteer: "https://static.wixstatic.com/media/d52d63_15122a9f938949aa8b22cdbbc2394417~mv2.jpg",
  mentorPortrait: "https://static.wixstatic.com/media/d52d63_abfa93a6c450404ab1b45aa341b7420c~mv2.png",
  community: "https://static.wixstatic.com/media/d52d63_fa63e992e6084ab7b009c4c9ed91d319~mv2.jpg",
  technical: "https://static.wixstatic.com/media/d52d63_c7ba5342398c4f1b8d6ef3beb35779fb~mv2.png"
};

export const navGroups = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", to: "/about-us" },
      { label: "Volunteers", to: "/volunteers" }
    ]
  },
  {
    label: "What We Do",
    children: [{ label: "Stories", to: "/stories" }]
  },
  { label: "Event", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  {
    label: "Contact",
    children: [
      { label: "Contact Us", to: "/contact-us" },
      { label: "Become a Volunteer", to: "/become-volunteer" }
    ]
  }
];

export const stats = [
  { value: 40000, suffix: "+", label: "beneficiaries envisioned by 2035" },
  { value: 8000, suffix: "+", label: "students targeted through learning access" },
  { value: 20, suffix: "", label: "schools and technology centers planned" },
  { value: 6, suffix: "", label: "core rural transformation pathways" }
];

export const pathways = [
  {
    title: "Free Coaching",
    tag: "Education",
    image: images.classroom,
    text: "Structured learning support for young rural students preparing for better school opportunities."
  },
  {
    title: "Career Guidance",
    tag: "Mentorship",
    image: images.mentorship,
    text: "Scholarship awareness, exam pathways, and mentor-led confidence building."
  },
  {
    title: "Skill Development",
    tag: "Skills",
    image: images.skills,
    text: "Digital literacy, vocational readiness, employability, and entrepreneurship support."
  },
  {
    title: "Sustainable Villages",
    tag: "Community",
    image: images.sustainability,
    text: "Farmer awareness, sanitation, healthcare, local livelihood, and community participation."
  }
];

export const socialLinks = [
  { label: "Website", short: "av", href: "https://www.anukalpvriksha.org/" },
  { label: "Instagram", short: "ig", href: "https://www.instagram.com/anukalpvriksha?utm_source=qr&igsh=cWt4cHo5ODdibmZn" },
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/company/102994741/" },
  { label: "Email", short: "em", href: `mailto:${brand.email}` }
];
