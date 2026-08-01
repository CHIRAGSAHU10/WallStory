import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import "@/App.css";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { LOGO } from "@/lib/assets";

const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1900;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      data-testid="preloader"
      className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col items-center justify-center"
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.img
        src={LOGO}
        alt="WallStory Interiors"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-20 md:h-28 w-auto object-contain"
      />
      <div className="absolute bottom-10 right-10 font-serif text-[var(--gold)] text-6xl md:text-8xl font-light tabular-nums">
        {count}
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--gold)]" style={{ width: `${count}%` }} />
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App grain-overlay bg-[#0A0A0A] min-h-screen">
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#141414",
            border: "1px solid rgba(197,160,89,0.3)",
            color: "#F4F0E6",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
      <AnimatePresence>
        {loading && <Preloader key="pre" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <EditorialMarquee />
        <Services />
        <Projects />
        <About />
        <Manifesto />
        <Contact />
      </main>
    </div>
  );
}

export default App;
