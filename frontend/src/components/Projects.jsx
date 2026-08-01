import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealLines, FadeUp } from "./Reveal";
import { VIDEOS } from "../lib/assets";

const projects = [
  {
    index: "01",
    title: "The Onyx Residence",
    kind: "Private Residence",
    year: "2024",
    video: VIDEOS.project1,
    desc: "A study in monolithic calm. Deep onyx surfaces, brushed brass and warm oak converge in a home that feels carved from a single, quiet material.",
    tags: ["Full Turnkey", "Bespoke Joinery", "Lighting Design"],
    reverse: false,
  },
  {
    index: "02",
    title: "Aura Commercial Hub",
    kind: "Commercial Interior",
    year: "2024",
    video: VIDEOS.project2,
    desc: "A workspace that breathes. Layered light, sculptural partitions and tactile materiality reframe the corporate environment as a place of ease.",
    tags: ["Space Planning", "Brand Environment", "Turnkey"],
    reverse: true,
  },
];

const ProjectBlock = ({ p }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <div
      ref={ref}
      data-testid={`project-${p.index}`}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center"
    >
      {/* Media */}
      <div
        className={`md:col-span-8 ${
          p.reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="relative overflow-hidden aspect-[16/10] group">
          <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
            <video
              className="w-full h-full object-cover"
              src={p.video}
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
          <span className="absolute top-5 left-5 text-[0.7rem] tracking-[0.25em] uppercase text-[var(--ivory)]/80 bg-black/30 backdrop-blur-md px-3 py-1.5">
            {p.kind}
          </span>
        </div>
      </div>

      {/* Text */}
      <div
        className={`md:col-span-4 ${
          p.reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <FadeUp>
          <span className="font-serif text-6xl md:text-8xl text-white/8 leading-none block mb-4 outline-text">
            {p.index}
          </span>
          <h3 className="font-serif text-4xl md:text-5xl font-light text-[var(--ivory)] leading-tight mb-4">
            {p.title}
          </h3>
          <p className="text-[#9a968c] text-base leading-relaxed font-light mb-8">
            {p.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[0.68rem] tracking-[0.15em] uppercase text-[#c9c5ba] border border-white/15 px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)]">
            {p.year}
          </p>
        </FadeUp>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative bg-[#0A0A0A] py-14 md:py-20 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 md:mb-14">
          <div className="md:col-span-4">
            <FadeUp>
              <p className="overline mb-6">Selected Work</p>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <RevealLines
              className="font-serif font-light text-[var(--ivory)] text-4xl md:text-6xl h-display"
              lines={["Spaces we have", "brought to life."]}
            />
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((p) => (
            <ProjectBlock key={p.index} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
