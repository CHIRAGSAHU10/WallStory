import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { RevealLines, FadeUp } from "./Reveal";

const services = [
  {
    id: "residential",
    no: "01",
    name: "Residential Interiors",
    desc: "Homes composed around the rhythm of everyday life — from intimate apartments to sprawling private villas, each detailed by the founder's own hand.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "commercial",
    no: "02",
    name: "Commercial Spaces",
    desc: "Offices, retail and hospitality environments that translate a brand into a spatial experience people quietly remember.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "modular",
    no: "03",
    name: "Modular Kitchens",
    desc: "Engineered, ergonomic and quietly beautiful — kitchens built for both the chef and the guest, down to the last shadow gap.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
];

const Services = () => {
  const [active, setActive] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.5 });
  const springY = useSpring(my, { stiffness: 160, damping: 22, mass: 0.5 });

  const onMove = (e) => {
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-[#0A0A0A] py-14 md:py-20 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-14">
          <div className="md:col-span-4">
            <FadeUp>
              <p className="overline mb-6">What We Do</p>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <RevealLines
              className="font-serif font-light text-[var(--ivory)] text-4xl md:text-5xl lg:text-6xl h-display"
              lines={["A complete", "interior practice."]}
            />
          </div>
        </div>

        <div
          data-testid="services-list"
          className="flex flex-col"
          onMouseMove={onMove}
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s, i) => (
            <FadeUp key={s.id} delay={i * 0.05}>
              <div
                data-testid={`service-item-${s.id}`}
                onMouseEnter={() => setActive(s.id)}
                className="group relative border-t border-white/10 last:border-b py-8 md:py-12 cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-center">
                  <span
                    className={`md:col-span-1 text-[0.8rem] tracking-[0.2em] transition-colors duration-500 ${
                      active === s.id ? "text-[var(--gold)]" : "text-[#5a5a5a]"
                    }`}
                  >
                    {s.no}
                  </span>
                  <h3
                    className={`md:col-span-7 font-serif text-3xl md:text-5xl lg:text-6xl font-light transition-all duration-500 ${
                      active === s.id
                        ? "text-[var(--gold)] md:translate-x-3"
                        : "text-[#7a7a7a]"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <div className="md:col-span-4 overflow-hidden">
                    <motion.p
                      animate={{
                        opacity: active === s.id ? 1 : 0,
                        y: active === s.id ? 0 : 8,
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[#9a968c] text-sm md:text-base leading-relaxed font-light"
                    >
                      {s.desc}
                    </motion.p>
                  </div>
                </div>

                {/* Mobile inline image (cursor-follow is desktop-only) */}
                <div className="md:hidden mt-6 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Floating cursor-follow preview (desktop) — all images stay mounted for zero-lag */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-40 hidden md:block"
        style={{ x: springX, y: springY }}
      >
        {services.map((s) => (
          <motion.div
            key={s.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[20vw] max-w-[320px] aspect-[4/5] overflow-hidden will-change-transform"
            initial={false}
            animate={{
              opacity: active === s.id ? 1 : 0,
              scale: active === s.id ? 1 : 0.9,
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={s.image}
              alt={s.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/30" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
