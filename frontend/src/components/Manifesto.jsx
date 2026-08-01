import { RevealLines, FadeUp } from "./Reveal";

const chapters = [
  {
    no: "01",
    title: "The space shapes the soul",
    body: "Every commission begins with restraint. We read the light, the proportion and the silence of a room before a single line is drawn — because the truest luxury is a space that feels inevitable.",
  },
  {
    no: "02",
    title: "Material as memory",
    body: "Stone, timber, brass and linen are chosen not for trend but for how they age. We design interiors that grow more beautiful with time, carrying the patina of a life lived within them.",
  },
  {
    no: "03",
    title: "Detail is devotion",
    body: "A concealed hinge, a shadow gap, the exact weight of a door. Our craft lives in the millimetres most never notice — the quiet precision that separates the built from the composed.",
  },
];

const Manifesto = () => {
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="relative bg-[#0A0A0A] py-24 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20">
          <div className="md:col-span-4">
            <FadeUp>
              <p className="overline mb-6">The Philosophy</p>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <RevealLines
              className="font-serif font-light text-[var(--ivory)] text-4xl md:text-5xl lg:text-6xl h-display"
              lines={["We do not decorate rooms.", "We compose atmospheres."]}
            />
          </div>
        </div>

        <div className="space-y-0">
          {chapters.map((c, i) => (
            <FadeUp key={c.no} delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 py-10 md:py-14 border-t border-white/10 group">
                <div className="md:col-span-2">
                  <span className="font-serif text-4xl md:text-6xl text-[var(--gold)] font-light">
                    {c.no}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-serif text-2xl md:text-4xl font-light text-[var(--ivory)] leading-tight group-hover:translate-x-2 transition-transform duration-700">
                    {c.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[#9a968c] text-base leading-relaxed font-light max-w-sm">
                    {c.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
