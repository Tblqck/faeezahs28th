import { useState } from "react";
import { motion } from "motion/react";
import { reasons } from "@/data/content";
import { Reveal } from "./Reveal";

function Card({ index, reason }: { index: number; reason: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="relative aspect-square w-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-parchment border border-gold/40"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="font-serif text-4xl sm:text-5xl text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[9px] uppercase tracking-[0.3em] text-mutedink">reveal</span>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center bg-espresso p-3 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="font-serif italic text-gold-light text-sm sm:text-base leading-snug">
            {reason}
          </span>
        </div>
      </motion.div>
    </button>
  );
}

export function Reasons() {
  return (
    <section id="reasons" className="bg-ivory py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">28 Reasons</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-center text-espresso">
            All the reasons <span className="italic">I love you</span>
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
          <p className="text-center text-mutedink text-sm">Tap a card to reveal.</p>
        </Reveal>

        <div
          className="mt-14 grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
        >
          {reasons.map((r, i) => (
            <Reveal key={r} delay={(i % 8) * 0.04}>
              <Card index={i} reason={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
