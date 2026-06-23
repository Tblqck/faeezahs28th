import { Reveal } from "./Reveal";

export function Hero() {
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
          <div className="mt-12 flex justify-center">
            <div className="w-[220px] h-[220px] rounded-full bg-parchment border-2 border-gold flex items-center justify-center text-mutedink font-serif italic text-sm">
              Your Photo Here
            </div>
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
