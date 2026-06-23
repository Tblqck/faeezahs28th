import { promises } from "@/data/content";
import { Reveal } from "./Reveal";

export function Promises() {
  return (
    <section id="promises" className="bg-ivory py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">Promises for the Future</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-center text-espresso">
            My <span className="italic">vows</span>, again
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
        </Reveal>

        <div
          className="mt-14 grid bg-gold/30"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
          }}
        >
          {promises.map((p, i) => (
            <Reveal key={p} delay={(i % 4) * 0.05}>
              <div className="bg-ivory p-8 h-full">
                <span className="font-serif text-2xl text-gold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-serif text-xl text-espresso leading-snug">{p}.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
