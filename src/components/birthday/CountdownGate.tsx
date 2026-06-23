import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UNLOCK_DATE } from "@/data/content";

function diff(target: number) {
  const now = Date.now();
  const d = Math.max(0, target - now);
  return {
    total: d,
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    minutes: Math.floor((d % 3600000) / 60000),
    seconds: Math.floor((d % 60000) / 1000),
  };
}

export function CountdownGate({ onUnlock }: { onUnlock: () => void }) {
  const target = new Date(UNLOCK_DATE).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const i = setInterval(() => {
      const next = diff(target);
      setT(next);
      if (next.total <= 0) {
        clearInterval(i);
        setTimeout(onUnlock, 600);
      }
    }, 1000);
    return () => clearInterval(i);
  }, [target, onUnlock]);

  const Unit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center min-w-[70px] sm:min-w-[110px]">
      <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-gold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-mutedink">
        {label}
      </span>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        key="gate"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 bg-espresso flex items-center justify-center px-6"
      >
        <div className="max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="font-serif italic text-ivory/85 text-lg sm:text-xl leading-relaxed"
          >
            Dear Faeezah,
            <br />
            This space was created for someone extraordinary.
            <br />
            Your birthday surprise unlocks in...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-12 flex justify-center gap-4 sm:gap-8"
          >
            <Unit value={t.days} label="Days" />
            <Unit value={t.hours} label="Hours" />
            <Unit value={t.minutes} label="Minutes" />
            <Unit value={t.seconds} label="Seconds" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-12 font-serif italic text-sm text-mutedink"
          >
            Patience, Angry Bird ❤️
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
