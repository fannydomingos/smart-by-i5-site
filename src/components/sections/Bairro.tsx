"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Stagger, StaggerItem, GoldLine } from "../ui/Reveal";
import {
  IconNature,
  IconUrban,
  IconMobility,
  IconConvenience,
} from "../ui/Icons";

const pillars = [
  {
    icon: IconNature,
    title: "Natureza",
    text: "Áreas verdes que inspiram e promovem bem-estar todos os dias.",
  },
  {
    icon: IconUrban,
    title: "Urbanidade",
    text: "Tudo o que você precisa a poucos passos. Bairro 100% caminhável.",
  },
  {
    icon: IconMobility,
    title: "Mobilidade",
    text: "Metrô, EPTG, EPCT e Pistão. Conexões rápidas para chegar mais longe.",
  },
  {
    icon: IconConvenience,
    title: "Conveniência",
    text: "Serviços, comércio e parques que facilitam o dia a dia.",
  },
];

export default function Bairro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.02, 1.12]);

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 px-0 lg:grid-cols-[42%_58%]">
        {/* Text side */}
        <div className="order-2 flex flex-col justify-center px-5 py-20 sm:px-8 lg:order-1 lg:py-32 lg:pr-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
              02
            </span>
            <GoldLine className="w-16" />
            <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
              O endereço
            </span>
          </div>

          <Reveal>
            <h2 className="font-display text-[2.4rem] font-extralight leading-[1.04] tracking-[-0.02em] text-bone sm:text-[3.4rem]">
              Águas
              <br />
              <span className="text-gold-grad font-light">Claras</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg font-light text-gold-200/90">
              O bairro mais dinâmico do DF.
            </p>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-mist">
              Um endereço que conecta o ritmo da cidade à qualidade de vida.
              Perto do que importa, com mobilidade, serviços, áreas verdes e
              conveniência no dia a dia.
            </p>
          </Reveal>

          <Stagger className="mt-10 space-y-px" amount={0.2}>
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex items-start gap-5 border-b border-white/[0.07] py-5 transition-colors duration-500 hover:border-gold-400/30">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/25 text-gold-300 transition-all duration-500 group-hover:border-gold-400/70 group-hover:bg-gold-400/10">
                    <p.icon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-light tracking-wide text-bone">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[0.82rem] font-light leading-relaxed text-muted">
                      {p.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Image side */}
        <div
          ref={ref}
          className="relative order-1 min-h-[52vh] overflow-hidden lg:order-2 lg:min-h-full"
        >
          <motion.div className="absolute -inset-y-[14%] inset-x-0" style={{ y, scale }}>
            <Image
              src="/img/aguas-claras.jpg"
              alt="Vista aérea de Águas Claras ao entardecer"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-transparent to-transparent lg:from-ink-900 lg:via-ink-900/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />

          <Reveal
            direction="up"
            className="absolute bottom-8 right-6 max-w-xs text-right sm:bottom-12 sm:right-10"
          >
            <p className="font-display text-xl font-extralight leading-snug text-bone sm:text-2xl">
              Viver bem é
              <br />
              <span className="text-gold-200">ter tudo ao seu alcance.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
