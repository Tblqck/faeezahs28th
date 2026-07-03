import heroImage from "@/data/t2.jpg";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

export function Hero() {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const id = setTimeout(() => setZoomed(false), 1000);
    return () => clearTimeout(id);
  }, [zoomed]);

  return (
    <section
      id="top"
      className="min-h-screen bg-ivory flex items-center justify-center px-6 pt-24 pb-20"
    >
      <div className="max-w-3xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">July 4th, 2026</p>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-espresso">
            Happy 28th Birthday,
            <br />
            <span className="italic">Faeezah</span> ❤
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="my-10 mx-auto w-[60px] h-px bg-gold" />
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-mutedink text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Today we celebrate the incredible woman, wife, best friend, and soon-to-be mother who
            has brought endless joy into my life.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-12 flex justify-center overflow-visible">
            <motion.button
              type="button"
              onClick={() => setZoomed(true)}
              animate={{ scale: zoomed ? 5 : 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] rounded-full border-2 border-gold overflow-hidden shadow-xl shadow-espresso/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              aria-label="Zoom portrait"
            >
              <img
                src={heroImage}
                alt="Faeezah portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-ivory/5" />
            </motion.button>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <a
            href="#story"
            className="mt-14 inline-block bg-espresso text-ivory px-10 py-4 text-xs uppercase tracking-[0.3em] border-b-2 border-gold hover:bg-espresso/90 transition-colors"
          >
            Begin the Journey
          </a>
        </Reveal>
      </div>
    </section>
  );
}
