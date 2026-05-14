import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function PrimaryButton({ to, href, children, variant = "dark", className = "", icon = true, ...props }) {
  const base =
    "group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-5 text-sm font-extrabold leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-av-amber";
  const variants = {
    dark: "bg-av-night text-av-ivory hover:bg-av-orange shadow-soft",
    light: "bg-av-ivory text-av-night hover:bg-av-orange hover:text-av-ivory shadow-soft",
    outline: "border border-av-orange/30 text-av-red hover:border-av-orange hover:bg-av-orange hover:text-av-ivory",
    orange: "bg-gradient-to-br from-av-orange to-av-red text-av-ivory shadow-glow"
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && <FiArrowUpRight className="text-lg transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 360, damping: 30 }
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link className={`${base} ${variants[variant]} ${className}`} to={to} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a className={`${base} ${variants[variant]} ${className}`} href={href} {...motionProps} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={`${base} ${variants[variant]} ${className}`} type="button" {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
