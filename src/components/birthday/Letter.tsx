import { letter } from "@/data/content";
import { Reveal } from "./Reveal";

export function Letter() {
  return (
    <section id="letter" className="bg-parchment py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">A Love Letter</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-center text-espresso">
            In my own <span className="italic">words</span>
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
        </Reveal>

        <Reveal delay={0.15}>
          <article
            className="relative bg-white border border-gold/40 px-8 sm:px-16 py-14 shadow-[0_30px_80px_-40px_rgba(44,26,14,0.35)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 63px, rgba(176,120,120,0.35) 63px, rgba(176,120,120,0.35) 64px, transparent 64px)",
            }}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-espresso">
              {letter.salutation}
            </p>
            <p className="mt-8 font-serif text-lg sm:text-xl leading-[1.9] text-espresso/90 whitespace-pre-line">
              {letter.body}
            </p>
            <div className="mt-10">
              <p className="font-serif italic text-espresso">{letter.closing}</p>
              <p className="mt-3 font-serif italic text-2xl text-rose">{letter.signature}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
