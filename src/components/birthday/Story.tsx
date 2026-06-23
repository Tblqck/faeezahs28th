import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { timeline } from "@/data/content";
import { Reveal } from "./Reveal";

export function Story() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="story" className="bg-parchment py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-center text-espresso">
            The chapters of <span className="italic">us</span>
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
        </Reveal>

        <div className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gold/60" />
          {timeline.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="relative mb-8">
                  <span className="absolute -left-[34px] sm:-left-[50px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-parchment" />
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="text-left w-full group"
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-mutedink">
                      {item.year}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-espresso group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 grid sm:grid-cols-[1fr_auto] gap-6 items-start">
                          <p className="font-serif italic text-lg text-espresso/85 leading-relaxed">
                            {item.body}
                          </p>
                          <div className="w-[280px] max-w-full h-[160px] bg-blush border border-gold/40 flex items-center justify-center text-mutedink text-xs italic">
                            Photo
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
