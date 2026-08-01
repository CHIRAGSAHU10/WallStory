import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealLinesOnLoad } from "./Reveal";
import { VIDEOS } from "../lib/assets";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // subtle parallax on the video + text as you scroll away
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      <motion.div
        style={{ y: videoY, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          className="w-full h-full object-cover"
          src={VIDEOS.hero}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0A0A0A]"
      />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="overline mb-6"
        >
          WallStory Interiors — Est. Raipur
        </motion.p>

        <RevealLinesOnLoad
          delay={0.4}
          className="h-display font-serif font-light text-[var(--ivory)] text-[15vw] md:text-[10vw] lg:text-[9rem]"
          lines={["Complete", "Interior Solution"]}
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="max-w-md text-[#c9c5ba] text-base md:text-lg font-light leading-relaxed"
          >
            We compose spaces that hold a story — where light, material and
            silence become the architecture of a life well lived.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            data-testid="hero-scroll-cue"
            onClick={() =>
              document
                .getElementById("philosophy")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-4 self-start"
          >
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--gold)]">
              Scroll to explore
            </span>
            <span className="relative h-14 w-[1px] bg-white/20 overflow-hidden">
              <motion.span
                className="absolute top-0 left-0 h-4 w-full bg-[var(--gold)]"
                animate={{ y: [-16, 56] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
