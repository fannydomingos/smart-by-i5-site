"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { GoldLine } from "../ui/Reveal";

const PARAGRAPH =
  "Mudar de endereço não significa apenas trocar de CEP. É abrir espaço para uma nova rotina, para novos encontros e para experiências que elevam o seu dia a dia. Porque quando você escolhe bem onde morar, está conquistando um novo padrão de vida.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.2"],
  });

  const words = PARAGRAPH.split(" ");

  return (
    <section
      id="projeto"
      className="relative overflow-hidden bg-ink-950 py-24 sm:py-36"
    >
      {/* soft gold aura */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(207,165,104,0.10), transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            01
          </span>
          <GoldLine className="w-24" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            O manifesto
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-[2rem] font-extralight leading-[1.08] tracking-[-0.02em] text-bone sm:text-[3.2rem] lg:text-[4rem]"
        >
          O endereço
          <br />
          <span className="text-gold-grad font-light">muda tudo.</span>
        </motion.h2>

        <div
          ref={ref}
          className="ml-auto mt-14 max-w-2xl text-[1.05rem] font-light leading-[1.75] text-bone sm:text-[1.35rem]"
        >
          <p className="flex flex-wrap">
            {words.map((w, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {w}
                </Word>
              );
            })}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="ml-auto mt-10 flex max-w-2xl items-center gap-4"
        >
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-display text-sm font-light tracking-[0.2em] text-gold-300">
            Um novo padrão de vida.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
