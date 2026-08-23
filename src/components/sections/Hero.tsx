"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitWords } from "../ui/Reveal";
import { waHref, site } from "@/lib/site";
import { IconWhatsApp, IconArrowDown, IconPin } from "../ui/Icons";
import { scrollToSection } from "../SmoothScroll";

const EASE = [0.16, 1, 0.3, 1] as const;

const marquee = [
  "natureza",
  "mobilidade",
  "urbanidade",
  "conveniência",
  "inteligência",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink-950"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/img/facade-dusk.jpg"
          alt="Fachada do SMARTER by i5 stay em Águas Claras ao entardecer"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/25 to-transparent" />
      <div className="noise absolute inset-0" />

      {/* Vertical side label */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 1, ease: EASE }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block"
      >
        <span className="block [writing-mode:vertical-rl] text-[0.6rem] font-light uppercase tracking-[0.55em] text-mist/50">
          Águas Claras · DF
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto w-full max-w-[1400px] px-5 pb-14 pt-32 sm:px-8 sm:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.35, duration: 0.9, ease: EASE }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold-400/70" />
          <IconPin className="h-3.5 w-3.5 text-gold-300" />
          <span className="text-[0.62rem] font-light uppercase tracking-[0.32em] text-gold-200">
            QS 5, Rua 310, Lote 12
          </span>
        </motion.div>

        <h1 className="font-display text-[2.6rem] font-extralight leading-[1.02] tracking-[-0.02em] text-bone sm:text-[4.2rem] lg:text-[5.6rem] xl:text-[6.4rem]">
          <SplitWords
            text="Inteligência para viver."
            delay={1.5}
            className="block"
            highlight={[2]}
          />
          <SplitWords
            text="Conforto para ficar."
            delay={1.85}
            className="block"
            highlight={[2]}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 1, ease: EASE }}
          className="mt-7 max-w-lg text-[0.95rem] font-light leading-relaxed text-mist sm:text-base"
        >
          O <strong className="font-normal text-bone">SMARTER</strong> é uma
          nova forma de viver em Águas Claras. Apartamentos inteligentes, design
          contemporâneo e espaços pensados para o seu ritmo, sua rotina e suas
          escolhas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="conversar"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-gold-200 to-gold-500 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-950 shadow-[0_20px_45px_-18px_rgba(207,165,104,0.85)]"
          >
            <span className="absolute inset-0 translate-y-full bg-bone transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
            <IconWhatsApp className="relative h-4 w-4" />
            <span className="relative">Quero visitar o decorado</span>
          </a>

          <button
            onClick={() => scrollToSection("#projeto")}
            data-cursor="explorar"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-[0.72rem] font-light uppercase tracking-[0.18em] text-bone transition-colors duration-500 hover:border-gold-400/60 hover:text-gold-200"
          >
            Conhecer o projeto
            <IconArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-1" />
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 1, ease: EASE }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.05] sm:grid-cols-4"
        >
          {[
            { k: "Sinal", v: "facilitado" },
            { k: "Plantas", v: "inteligentes" },
            { k: "Gestão", v: "i5 stay" },
            { k: "Grupo i5", v: "19 anos" },
          ].map((s) => (
            <div
              key={s.k}
              className="bg-ink-950/70 px-5 py-4 backdrop-blur-md transition-colors duration-500 hover:bg-ink-900/80"
            >
              <div className="text-[0.55rem] font-light uppercase tracking-[0.24em] text-muted">
                {s.k}
              </div>
              <div className="mt-1.5 font-display text-lg font-light text-gold-200">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="relative border-y border-white/[0.07] bg-ink-950/60 py-3.5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {marquee.map((m) => (
                <span key={m + dup} className="flex items-center">
                  <span className="px-8 text-[0.66rem] font-light uppercase tracking-[0.42em] text-mist/70">
                    {m}
                  </span>
                  <span className="h-1 w-1 rotate-45 bg-gold-400/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">{site.description}</span>
    </section>
  );
}
