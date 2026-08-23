"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Stagger, StaggerItem, GoldLine, ImgNote } from "../ui/Reveal";
import { IconGrill, IconSpa, IconView } from "../ui/Icons";

const features = [
  {
    icon: IconGrill,
    t: "Churrasqueira",
    d: "Para receber bem e transformar o fim de semana em encontro.",
  },
  {
    icon: IconSpa,
    t: "SPA aquecido",
    d: "Relaxante, privativo e pronto para renovar as energias.",
  },
  {
    icon: IconView,
    t: "Vista panorâmica",
    d: "Um lote grande de esquina que valoriza a vista todos os dias.",
  },
];

export default function Lazer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const overlay = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.55, 0.85]);

  return (
    <section id="lazer" className="relative">
      {/* Full-bleed parallax hero */}
      <div ref={ref} className="relative h-[85svh] min-h-[520px] overflow-hidden">
        <motion.div className="absolute -inset-y-[18%] inset-x-0" style={{ y }}>
          <Image
            src="/img/rooftop.jpg"
            alt="Lazer panorâmico privativo com pergolado, SPA e churrasqueira"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/60"
          style={{ opacity: overlay }}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-ink-950/75 via-ink-950/15 to-transparent" />
        <div className="noise absolute inset-0" />

        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
              06
            </span>
            <GoldLine className="w-16" />
            <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-mist">
              Lazer
            </span>
          </div>

          <Reveal>
            <h2 className="max-w-2xl font-display text-[2.2rem] font-extralight leading-[1.02] tracking-[-0.02em] text-bone sm:text-[3.6rem] lg:text-[4.4rem]">
              Lazer panorâmico
              <br />
              <span className="text-gold-grad font-light">privativo.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-mist">
              2 unidades com churrasqueira, SPA e vista panorâmica — a
              privacidade que você merece para receber bem.
            </p>
          </Reveal>

          <ImgNote className="mt-5 text-mist/60">Imagem ilustrativa.</ImgNote>
        </div>
      </div>

      {/* Feature strip */}
      <div className="relative bg-ink-950 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] sm:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.t}>
                <div className="group relative h-full overflow-hidden bg-ink-900/60 p-8 transition-colors duration-700 hover:bg-ink-800/70">
                  <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-400/[0.06] blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/25 text-gold-300 transition-all duration-500 group-hover:border-gold-400/70 group-hover:bg-gold-400/10">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-6 font-display text-lg font-light text-bone">
                    {f.t}
                  </h3>
                  <p className="relative mt-2 text-[0.82rem] font-light leading-relaxed text-muted">
                    {f.d}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
