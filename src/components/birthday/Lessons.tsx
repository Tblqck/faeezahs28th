import { lessons } from "@/data/content";
import { Reveal } from "./Reveal";

export function Lessons() {
  return (
    <section className="bg-espresso py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">What You've Taught Me</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-center text-ivory">
            Lessons in <span className="italic text-gold-light">loving</span>
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
        </Reveal>

        <ol className="mt-14 space-y-12">
          {lessons.map((l, i) => (
            <Reveal key={l.heading} delay={i * 0.1}>
              <li className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start">
                <span className="font-serif text-4xl sm:text-5xl text-gold/70 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-ivory leading-snug">
                    {l.heading}
                  </h3>
                  <p className="mt-2 text-sm text-mutedink">{l.sub}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
