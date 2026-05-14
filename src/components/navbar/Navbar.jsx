import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { brand, navGroups } from "../../utils/content";

function groupIsActive(group, pathname) {
  if (group.to) return pathname === group.to;
  return group.children?.some((child) => pathname === child.to);
}

function NavItem({ group, pathname }) {
  const [open, setOpen] = useState(false);
  const active = groupIsActive(group, pathname);

  if (!group.children) {
    return (
      <NavLink
        className={({ isActive }) =>
          `nav-underline text-xs font-black uppercase tracking-[.02em] ${isActive ? "is-active text-av-red" : "text-av-night/85 hover:text-av-red"}`
        }
        to={group.to}
      >
        {group.label}
      </NavLink>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`nav-underline inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[.02em] ${active ? "is-active text-av-red" : "text-av-night/85 hover:text-av-red"}`}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {group.label}
        <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-9 z-50 w-56 -translate-x-1/2 rounded-card border border-av-orange/10 bg-av-ivory/95 p-2 shadow-soft backdrop-blur-xl"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
          >
            {group.children.map((child) => (
              <NavLink
                key={child.to}
                className={({ isActive }) =>
                  `block rounded-full px-4 py-3 text-xs font-black transition ${isActive ? "bg-av-orange text-av-ivory" : "text-av-green hover:bg-av-orange/10 hover:text-av-red"}`
                }
                to={child.to}
              >
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const lastScrollY = useRef(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      setScrolled(currentY > 10);
      setNavVisible(currentY < 24 || !scrollingDown);
      lastScrollY.current = Math.max(currentY, 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileGroup(null);
    setNavVisible(true);
    lastScrollY.current = window.scrollY;
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  const left = navGroups.slice(0, 3);
  const right = navGroups.slice(3);

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 md:top-4">
      <motion.nav
        className={`relative mx-auto flex min-h-[58px] w-[calc(100vw-24px)] max-w-[1040px] items-center justify-between gap-3 rounded-full border border-av-orange/15 bg-av-ivory/95 px-4 shadow-soft backdrop-blur-xl transition sm:min-h-[62px] lg:grid lg:w-full lg:grid-cols-[max-content_auto_max-content] lg:justify-center lg:gap-8 lg:px-6 xl:gap-10 ${
          scrolled ? "shadow-green" : ""
        }`}
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: navVisible || mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ pointerEvents: navVisible || mobileOpen ? "auto" : "none" }}
      >
        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          {left.map((group) => (
            <NavItem key={group.label} group={group} pathname={pathname} />
          ))}
        </div>

        <Link className="rounded-full border border-av-orange/20 bg-av-ivory/90 px-2.5 py-1 shadow-soft backdrop-blur-xl lg:mx-auto lg:px-3 lg:py-1.5" to="/" aria-label="AnukalpVriksha home">
          <img className="h-8 w-auto object-contain sm:h-9 lg:h-10" src={brand.logo} alt="AnukalpVriksha Foundation logo" />
        </Link>

        <div className="hidden items-center justify-end gap-4 lg:flex xl:gap-5">
          {right.map((group) => (
            <NavItem key={group.label} group={group} pathname={pathname} />
          ))}
        </div>

        <button
          className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full bg-av-night text-av-ivory shadow-soft lg:hidden"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mx-auto mt-3 max-h-[calc(100svh-92px)] w-[calc(100%-16px)] max-w-[460px] overflow-y-auto rounded-card border border-white/10 bg-av-night p-4 text-av-ivory shadow-green lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navGroups.map((group) =>
              group.children ? (
                <div className="border-b border-white/10 py-1" key={group.label}>
                  <button
                    className={`flex w-full items-center justify-between py-3 text-left font-display text-3xl ${groupIsActive(group, pathname) ? "text-av-amber" : ""}`}
                    type="button"
                    onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
                  >
                    {group.label}
                    <FiChevronDown className={`text-lg transition ${mobileGroup === group.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileGroup === group.label && (
                      <motion.div
                        className="grid gap-2 pb-3 pl-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {group.children.map((child) => (
                          <NavLink
                            className={({ isActive }) =>
                              `rounded-full px-3 py-2 text-sm font-extrabold ${isActive ? "bg-av-orange text-av-ivory" : "text-av-ivory/75"}`
                            }
                            key={child.to}
                            to={child.to}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={group.to}
                  className={({ isActive }) =>
                    `block border-b border-white/10 py-4 font-display text-3xl ${isActive ? "text-av-amber" : ""}`
                  }
                  to={group.to}
                >
                  {group.label}
                </NavLink>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
