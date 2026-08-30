"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem, GoldLine, ImgNote } from "../ui/Reveal";
import {
  IconQuestion,
  IconBroom,
  IconWifi,
  IconGear,
  IconShield,
  IconLounger,
  IconConcierge,
  IconCheck,
} from "../ui/Icons";

const faq = [
  {
    icon: IconBroom,
    q: "Precisa limpar o apartamento?",
    a: "Serviço de limpeza sob demanda. Você agenda, a gente resolve — e paga só pelo que usar.",
  },
  {
    icon: IconWifi,
    q: "A internet não funciona?",
    a: "Internet de alta velocidade no condomínio, com suporte técnico à disposição.",
  },
  {
    icon: IconGear,
    q: "O vaso entupiu?",
    a: "Suporte para manutenção e pequenos reparos, sem você precisar procurar um profissional",
  },
  {
    icon: IconConcierge,
    q: "Quem instala meu ar-condicionado novo?",
    a: "Time de serviços pay per use pronto para instalar, montar e resolver a sua rotina.",
  },
];

const condo = [
  { icon: IconLounger, t: "Lazer panorâmico" },
  { icon: IconShield, t: "Segurança monitorada" },
  { icon: IconWifi, t: "Internet de alta velocidade" },
  { icon: IconCheck, t: "Normas rigorosas de convivência" },
];

export default function Servicos() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-ink-950 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            05
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Serviços
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="max-w-xl font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
                Que tal viver com a{" "}
                <span className="text-gold-grad font-light">
                  comodidade de um hotel?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-mist">
                Serviços pay per use sob demanda, operados por quem tem 10 anos
                de experiência em hospitalidade. Menos preocupação, mais tempo
                para o que importa.
              </p>
            </Reveal>

            {/* Accordion */}
            <div className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {faq.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      data-cursor="true"
                      className="group flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isOpen
                            ? "border-gold-400/70 bg-gold-400/12 text-gold-200"
                            : "border-white/10 text-muted group-hover:border-gold-400/40 group-hover:text-gold-300"
                        }`}
                      >
                        <f.icon className="h-[18px] w-[18px]" />
                      </span>
                      <span
                        className={`flex-1 font-display text-[1.05rem] font-light transition-colors duration-400 sm:text-[1.2rem] ${
                          isOpen ? "text-bone" : "text-mist"
                        }`}
                      >
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-gold-300"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </motion.span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-14 pr-6 text-[0.85rem] font-light leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold-400/25 bg-gold-400/[0.05] px-5 py-2.5">
                <IconQuestion className="h-4 w-4 text-gold-300" />
                <span className="text-[0.7rem] font-light uppercase tracking-[0.16em] text-gold-200">
                  Serviços pay per use sob demanda
                </span>
              </div>
            </Reveal>
          </div>

          {/* Image + condo list */}
          <div className="flex flex-col gap-6">
            <Reveal direction="left" amount={0.2}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl card-hair">
                <Image
                  src="/img/rooftop-woman.jpg"
                  alt="Moradora aproveitando o lazer panorâmico do SMARTER by i5 stay"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="font-display text-lg font-extralight leading-snug text-bone">
                    Viver com mais tempo
                    <br />
                    <span className="text-gold-200">para o que importa.</span>
                  </p>
                </div>
              </div>

              <ImgNote className="mt-3">Imagem ilustrativa.</ImgNote>
            </Reveal>

            <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07]">
              {condo.map((c) => (
                <StaggerItem key={c.t}>
                  <div className="group flex h-full items-center gap-3 bg-ink-900/60 px-4 py-5 transition-colors duration-500 hover:bg-ink-800/70">
                    <c.icon className="h-4 w-4 shrink-0 text-gold-300" />
                    <span className="text-[0.72rem] font-light leading-tight text-mist">
                      {c.t}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
