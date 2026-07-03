import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import finalVideo from "@/data/video_2026-07-03_10-33-39.mp4";
import { Reveal } from "./Reveal";

export function FinalSurprise() {
  const [revealed, setRevealed] = useState(false);
  return (
    <section className="bg-espresso py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">One Last Thing</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-ivory">
            You Made It to the <span className="italic text-gold-light">End.</span>
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
          <p className="text-mutedink">There is one more thing waiting for you.</p>
        </Reveal>

        <div className="mt-10 min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.button
                key="btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setRevealed(true)}
                className="bg-gold text-white px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-gold-light hover:text-espresso transition-colors"
              >
                One Last Thing...
              </motion.button>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="relative bg-black/80 border border-gold/40 rounded-xl overflow-hidden shadow-2xl shadow-espresso/40" style={{ width: "100%", maxWidth: 520 }}>
                  <video
                    src={finalVideo}
                    controls
                    playsInline
                    preload="metadata"
                    className="block w-full h-full"
                    style={{ aspectRatio: "16 / 9", backgroundColor: "#0f0a05" }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="mt-4 font-serif italic text-gold-light">
                  Your personal video message from him.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-16 font-serif italic text-mutedink text-sm">
          With all my love — always.
        </p>
      </div>
    </section>
  );
}
