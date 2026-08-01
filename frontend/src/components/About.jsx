import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealLines, FadeUp } from "./Reveal";
import { VIDEOS } from "../lib/assets";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[#0A0A0A] py-14 md:py-20 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Founder video */}
          <div ref={ref} className="md:col-span-6">
            <div className="relative overflow-hidden aspect-[4/5] max-w-md mx-auto md:mx-0">
              <motion.div style={{ scale, y }} className="absolute inset-0 will-change-transform">
                <video
                  className="w-full h-full object-cover"
                  src={VIDEOS.founder}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-serif text-2xl text-[var(--ivory)] font-light">
                  The Founder
                </p>
                <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--gold)] mt-1">
                  WallStory Interiors
                </p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-6">
            <FadeUp>
              <p className="overline mb-8">The Visionary</p>
            </FadeUp>
            <RevealLines
              className="font-serif font-light text-[var(--ivory)] text-4xl md:text-6xl h-display mb-8"
              lines={["A practice built", "on quiet obsession."]}
            />
            <FadeUp delay={0.1}>
              <div className="space-y-6 text-[#9a968c] text-base md:text-lg leading-relaxed font-light max-w-xl">
                <p>
                  WallStory Interiors began with a single conviction — that a
                  space should tell the story of the people who live in it. From
                  a studio in Raipur, we have grown into a complete interior
                  practice, yet the obsession remains unchanged.
                </p>
                <p>
                  We stay small, deliberately. Every project passes through the
                  founder's hand, from the first mood to the final placed object,
                  so that nothing arbitrary ever survives.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-10">
                {[
                  { n: "120+", l: "Spaces Delivered" },
                  { n: "10", l: "Years of Craft" },
                  { n: "100%", l: "Turnkey Care" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-serif text-4xl md:text-5xl text-[var(--gold)] font-light">
                      {s.n}
                    </p>
                    <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[#8a8a8a] mt-2">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
