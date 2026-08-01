import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LOGO, CONTACT } from "../lib/assets";

const LINKS = [
  { label: "What We Do", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-testid="nav-bar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <img
            src={LOGO}
            alt="WallStory Interiors"
            className="h-11 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          />
        </button>

        <div className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="link-underline text-[0.8rem] tracking-[0.15em] uppercase text-[#c9c5ba] hover:text-[var(--ivory)] transition-colors duration-300"
            >
              {l.label}
            </button>
          ))}
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            data-testid="nav-cta"
            className="text-[0.75rem] tracking-[0.2em] uppercase border border-[var(--gold)]/50 text-[var(--gold)] px-5 py-2.5 hover:bg-[var(--gold)] hover:text-[#0A0A0A] transition-all duration-500"
          >
            Enquire
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[var(--ivory)]"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="text-left font-serif text-3xl text-[var(--ivory)]"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="mt-2 text-[0.8rem] tracking-[0.2em] uppercase text-[var(--gold)]"
              >
                {CONTACT.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
