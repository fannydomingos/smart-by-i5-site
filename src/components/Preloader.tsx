"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const LETTERS = ["S", "M", "A", "R", "T"];

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";

    let p = 0;
    const tick = window.setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 7);
      setProgress(p);
      if (p >= 100) {
        window.clearInterval(tick);
        window.setTimeout(() => setDone(true), 520);
      }
    }, 170);

    return () => {
      window.clearInterval(tick);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) {
      document.documentElement.style.overflow = "";
      window.scrollTo(0, 0);
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
          exit={{ y: "-100%", transition: { duration: 1.05, ease: EASE } }}
        >
          <div className="noise pointer-events-none absolute inset-0" />

          {/* radial glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 55%, rgba(207,165,104,0.12), transparent 62%)",
            }}
          />

          <div className="relative flex items-end gap-[0.42em]">
            {LETTERS.map((l, i) => (
              <motion.span
                key={l + i}
                className="font-display text-4xl font-extralight tracking-[0.1em] text-bone sm:text-6xl"
                initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.09, ease: EASE }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          <motion.span
            className="relative mt-4 text-[0.6rem] font-light uppercase tracking-[0.5em] text-gold-300/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            by i5
          </motion.span>

          <div className="relative mt-12 h-px w-56 overflow-hidden bg-white/10 sm:w-72">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-500 to-gold-200"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.span
            className="relative mt-4 font-display text-[0.65rem] font-light tracking-[0.3em] text-muted tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {String(Math.round(progress)).padStart(3, "0")}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
