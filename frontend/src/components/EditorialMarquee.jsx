import Marquee from "react-fast-marquee";

const items = [
  "Luxury Living",
  "Timeless Design",
  "Bespoke Interiors",
  "Turnkey Craft",
  "WallStory",
];

const EditorialMarquee = () => {
  return (
    <section
      data-testid="marquee-section"
      className="border-y border-white/10 py-6 md:py-7 bg-[#0A0A0A] select-none"
    >
      <Marquee speed={34} gradient={false} autoFill>
        {items.map((t, i) => (
          <div key={i} className="flex items-center">
            <span className="font-serif italic text-[var(--ivory)] text-3xl md:text-5xl px-7 md:px-10 font-light">
              {t}
            </span>
            <span className="text-[var(--gold)] text-2xl md:text-3xl">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default EditorialMarquee;
