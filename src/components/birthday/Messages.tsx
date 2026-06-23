import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { initialMessages } from "@/data/content";
import { Reveal } from "./Reveal";

type Msg = {
  name: string;
  initials: string;
  descriptor: string;
  message: string;
  memory: string;
};

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function Messages() {
  const [messages, setMessages] = useState<Msg[]>(initialMessages);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    relationship: "",
    message: "",
    memory: "",
    descriptor: "",
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setMessages((prev) => [
      ...prev,
      {
        name: form.name,
        initials: initialsOf(form.name) || "♥",
        descriptor: form.descriptor || form.relationship || "Loved",
        message: form.message,
        memory: form.memory,
      },
    ]);
    setForm({ name: "", relationship: "", message: "", memory: "", descriptor: "" });
    setOpen(false);
  };

  return (
    <section className="bg-parchment py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">Birthday Messages</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-center text-espresso">
            Words from those who <span className="italic">love you</span>
          </h2>
          <div className="my-8 mx-auto w-[60px] h-px bg-gold" />
        </Reveal>

        <div
          className="mt-14 grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {messages.map((m, i) => (
            <Reveal key={`${m.name}-${i}`} delay={(i % 4) * 0.06}>
              <article className="bg-ivory border border-gold/30 p-6 h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blush border border-gold/40 flex items-center justify-center font-serif text-espresso">
                    {m.initials}
                  </div>
                  <div>
                    <p className="font-serif text-lg text-espresso leading-none">{m.name}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                      {m.descriptor}
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-serif italic text-espresso/85 leading-relaxed flex-1">
                  "{m.message}"
                </p>
                {m.memory && (
                  <p className="mt-4 text-xs text-rose italic">— {m.memory}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => setOpen(true)}
            className="inline-block border border-gold text-espresso px-8 py-3 text-xs uppercase tracking-[0.3em] hover:bg-gold/10 transition-colors"
          >
            Leave a Message ✦
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso/70 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onSubmit={submit}
              className="bg-ivory border border-gold/40 max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto"
            >
              <h3 className="font-serif text-3xl text-espresso">Leave a message</h3>
              <p className="mt-1 text-sm text-mutedink">For Faeezah, with love.</p>

              <div className="mt-6 space-y-4">
                {([
                  ["name", "Your name", "input"],
                  ["relationship", "Your relationship to her", "input"],
                  ["descriptor", "One word that describes Faeezah", "input"],
                  ["memory", "A favourite memory", "input"],
                  ["message", "Your message", "textarea"],
                ] as const).map(([key, label, kind]) => (
                  <label key={key} className="block">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-mutedink">
                      {label}
                    </span>
                    {kind === "textarea" ? (
                      <textarea
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        rows={4}
                        className="mt-1 w-full bg-parchment border border-gold/30 px-3 py-2 font-serif text-espresso focus:outline-none focus:border-gold"
                      />
                    ) : (
                      <input
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="mt-1 w-full bg-parchment border border-gold/30 px-3 py-2 font-serif text-espresso focus:outline-none focus:border-gold"
                      />
                    )}
                  </label>
                ))}
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2 text-xs uppercase tracking-[0.3em] text-mutedink"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-espresso text-ivory px-6 py-2 text-xs uppercase tracking-[0.3em] border-b-2 border-gold"
                >
                  Send ✦
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
