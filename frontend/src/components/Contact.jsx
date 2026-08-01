import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { RevealLines, FadeUp } from "./Reveal";
import { CONTACT } from "../lib/assets";

const services = [
  "Residential Interiors",
  "Commercial Spaces",
  "Modular Kitchens",
  "Turnkey Project",
  "Space Planning",
  "3D Visualization",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please share your name and email so we can reach you.");
      return;
    }
    setLoading(true);
    // Display-only demo: simulate a graceful send
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Thank you, " + form.name.split(" ")[0] + ". We will be in touch shortly.");
    }, 1100);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0A0A0A] pt-16 md:pt-24 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
          {/* Left — invitation + info */}
          <div className="md:col-span-5">
            <FadeUp>
              <p className="overline mb-8">Let's Begin</p>
            </FadeUp>
            <RevealLines
              className="font-serif font-light text-[var(--ivory)] text-5xl md:text-7xl h-display mb-10"
              lines={["Tell us", "your story."]}
            />
            <FadeUp delay={0.1}>
              <p className="text-[#9a968c] text-base leading-relaxed font-light max-w-md mb-12">
                Every great interior starts with a conversation. Share a little
                about your space and vision — we design for a limited number of
                clients each year.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="space-y-5">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  data-testid="contact-phone"
                  className="flex items-center gap-4 text-[#c9c5ba] hover:text-[var(--gold)] transition-colors duration-400 group"
                >
                  <Phone size={18} className="text-[var(--gold)]" />
                  <span className="link-underline text-lg">{CONTACT.phone}</span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  data-testid="contact-email"
                  className="flex items-center gap-4 text-[#c9c5ba] hover:text-[var(--gold)] transition-colors duration-400"
                >
                  <Mail size={18} className="text-[var(--gold)]" />
                  <span className="link-underline text-lg">{CONTACT.email}</span>
                </a>
                <div className="flex items-center gap-4 text-[#c9c5ba]">
                  <MapPin size={18} className="text-[var(--gold)]" />
                  <span className="text-lg">{CONTACT.city}</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            <FadeUp>
              {sent ? (
                <div
                  data-testid="contact-success"
                  className="border border-[var(--gold)]/30 p-10 md:p-14 h-full flex flex-col justify-center"
                >
                  <p className="font-serif text-4xl md:text-5xl text-[var(--ivory)] font-light mb-4">
                    Message received.
                  </p>
                  <p className="text-[#9a968c] font-light leading-relaxed">
                    Thank you for reaching out to WallStory Interiors. A member of
                    our studio will respond within one business day.
                  </p>
                  <button
                    data-testid="contact-reset"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", service: "", message: "" });
                    }}
                    className="mt-8 self-start text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] link-underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  data-testid="contact-form"
                  onSubmit={submit}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="overline block mb-4">Your Name</label>
                      <input
                        data-testid="contact-input-name"
                        className="field-line pb-3 text-lg"
                        placeholder="Full name"
                        value={form.name}
                        onChange={update("name")}
                      />
                    </div>
                    <div>
                      <label className="overline block mb-4">Email</label>
                      <input
                        data-testid="contact-input-email"
                        type="email"
                        className="field-line pb-3 text-lg"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={update("email")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="overline block mb-4">Interested In</label>
                    <div className="flex flex-wrap gap-3">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          data-testid={`contact-service-${s.replace(/\s+/g, "-").toLowerCase()}`}
                          onClick={() => setForm((f) => ({ ...f, service: s }))}
                          className={`text-[0.72rem] tracking-[0.12em] uppercase px-4 py-2.5 border transition-all duration-400 ${
                            form.service === s
                              ? "border-[var(--gold)] text-[#0A0A0A] bg-[var(--gold)]"
                              : "border-white/15 text-[#c9c5ba] hover:border-[var(--gold)]/60"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="overline block mb-4">Your Vision</label>
                    <textarea
                      data-testid="contact-input-message"
                      rows={3}
                      className="field-line pb-3 text-lg resize-none"
                      placeholder="Tell us about your space..."
                      value={form.message}
                      onChange={update("message")}
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="contact-submit"
                    disabled={loading}
                    className="group flex items-center gap-3 bg-[var(--gold)] text-[#0A0A0A] px-8 py-4 text-[0.78rem] tracking-[0.2em] uppercase font-medium hover:bg-[var(--gold-hover)] transition-colors duration-400 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Enquiry"}
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-400"
                    />
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>

        {/* Massive footer wordmark */}
        <div className="mt-28 md:mt-40 border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[0.72rem] tracking-[0.18em] uppercase text-[#8a8a8a]">
              <span>© {new Date().getFullYear()} WallStory Interiors</span>
              <span>Complete Interior Solution</span>
              <span>{CONTACT.city}</span>
            </div>
            <div className="flex gap-6 text-[0.72rem] tracking-[0.18em] uppercase text-[#8a8a8a]">
              <span className="link-underline cursor-pointer hover:text-[var(--gold)]">Instagram</span>
              <span className="link-underline cursor-pointer hover:text-[var(--gold)]">Pinterest</span>
              <span className="link-underline cursor-pointer hover:text-[var(--gold)]">LinkedIn</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light text-[var(--ivory)] text-[19vw] leading-[0.8] text-center whitespace-nowrap select-none pb-4"
        >
          WallStory
        </motion.h2>
      </div>
    </section>
  );
};

export default Contact;
