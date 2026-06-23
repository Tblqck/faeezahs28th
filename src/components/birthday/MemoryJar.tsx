import { useState } from "react";
import { motion } from "motion/react";
import { memoryNotes } from "@/data/content";
import { Reveal } from "./Reveal";

function Tile({ index, note }: { index: number; note: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="relative aspect-square w-full"
      style={{ perspective: 800 }}
    >
      <motion.div
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 bg-parchment border border-gold/40 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className="text-gold">
            <rect x="0.5" y="0.5" width="21" height="15" stroke="currentColor" />
            <path d="M1 1L11 9L21 1" stroke="currentColor" fill="none" />
          </svg>
          <span className="mt-2 font-serif text-sm text-mutedink">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div
          className="absolute inset-0 bg-espresso p-3 flex items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="font-serif italic text-gold-light text-[11px] sm:text-xs leading-snug">
            {note}
          </span>
        </div>
      </motion.div>
    </button>
  );
}

export function MemoryJar() {
  return (
    <section className="bg-ivory py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">Memory Jar</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-center text-espresso">
            Twenty-eight little <span className="italic">notes</span>
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
          <p className="text-center text-mutedink text-sm">Open one whenever you need a smile.</p>
        </Reveal>

        <div
          className="mt-14 grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))" }}
        >
          {memoryNotes.map((n, i) => (
            <Tile key={i} index={i} note={n} />
          ))}
        </div>
      </div>
    </section>
  );
}
