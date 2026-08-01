import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealLines, FadeUp } from "./Reveal";

const services = [
  {
    id: "residential",
    name: "Residential Interiors",
    desc: "Homes composed around the rhythm of everyday life — from intimate apartments to sprawling private villas.",
  },
  {
    id: "commercial",
    name: "Commercial Spaces",
    desc: "Offices, retail and hospitality environments that translate a brand into spatial experience.",
  },
  {
    id: "modular",
    name: "Modular Kitchens",
    desc: "Engineered, ergonomic and quietly beautiful — kitchens built for both the chef and the guest.",
  },
  {
    id: "turnkey",
    name: "Turnkey Projects",
    desc: "A single accountable hand from first sketch to final styling. We deliver spaces ready to be lived in.",
  },
  {
    id: "planning",
    name: "Space Planning",
    desc: "The invisible discipline. We choreograph flow, proportion and light before aesthetics ever begin.",
  },
  {
    id: "visualization",
    name: "3D Visualization",
    desc: "Photoreal walkthroughs that let you inhabit your space long before construction begins.",
  },
];

const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-[#0A0A0A] py-28 md:py-40 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <FadeUp>
              <p className="overline mb-6">What We Do</p>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <RevealLines
              className="font-serif font-light text-[var(--ivory)] text-4xl md:text-6xl h-display"
              lines={["A complete", "interior practice."]}
            />
          </div>
        </div>

        <div data-testid="services-list" className="flex flex-col">
          {services.map((s, i) => (
            <FadeUp key={s.id} delay={i * 0.04}>
              <div
                data-testid={`service-item-${s.id}`}
                onMouseEnter={() => setActive(s.id)}
                onMouseLeave={() => setActive(null)}
                className="group border-t border-white/10 last:border-b py-8 md:py-10 cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline">
                  <span className="md:col-span-1 text-[0.75rem] tracking-[0.2em] text-[#5a5a5a] group-hover:text-[var(--gold)] transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <h3 className="md:col-span-6 font-serif text-3xl md:text-5xl font-light text-[#8a8a8a] group-hover:text-[var(--gold)] transition-colors duration-500">
                    {s.name}
                  </h3>
                  <div className="md:col-span-5 overflow-hidden">
                    <AnimatePresence>
                      {active === s.id && (
                        <motion.p
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="text-[#9a968c] text-sm md:text-base leading-relaxed font-light"
                        >
                          {s.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
