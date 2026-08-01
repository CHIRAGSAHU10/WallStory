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
      className="border-y border-white/10 py-8 md:py-10 bg-[#0A0A0A] select-none"
    >
      <Marquee speed={38} gradient={false} autoFill>
        {items.map((t, i) => (
          <div key={i} className="flex items-center">
            <span className="font-serif italic text-[var(--ivory)] text-4xl md:text-6xl px-8 md:px-12 font-light">
              {t}
            </span>
            <span className="text-[var(--gold)] text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default EditorialMarquee;
