"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, GoldLine, ImgNote } from "../ui/Reveal";
import {
  IconTouch,
  IconBed,
  IconKitchen,
  IconCabinet,
  IconDesk,
  IconTable,
  IconDoor,
} from "../ui/Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

type Spot = {
  id: string;
  x: number;
  y: number;
  icon: typeof IconBed;
  title: string;
  text: string;
  meta: string;
  side: "left" | "right";
};

const spots: Spot[] = [
  {
    id: "cama",
    x: 22,
    y: 15,
    icon: IconBed,
    title: "Cama queen",
    text: "Conforto e espaço para o seu descanso, sem abrir mão da circulação do ambiente.",
    meta: "1,58 × 1,98 m",
    side: "right",
  },
  {
    id: "cozinha",
    x: 88,
    y: 17,
    icon: IconKitchen,
    title: "Cozinha completa com 2 bancadas",
    text: "Mais superfície para preparar e aproveitar — uma cozinha completa, de verdade.",
    meta: "2 bancadas",
    side: "left",
  },
  {
    id: "armario",
    x: 30,
    y: 52,
    icon: IconCabinet,
    title: "Armário com função de divisão",
    text: "Integra e organiza os ambientes com inteligência. Um único elemento que guarda e separa.",
    meta: "Divisória inteligente",
    side: "right",
  },
  {
    id: "mesa",
    x: 65,
    y: 42,
    icon: IconTable,
    title: "Mesa para 4 lugares",
    text: "Perfeita para refeições e bons momentos. Recebe sem improviso.",
    meta: "4 lugares",
    side: "left",
  },
  {
    id: "office",
    x: 19,
    y: 79,
    icon: IconDesk,
    title: "Espaço para home office ou apoio",
    text: "Versatilidade para trabalhar, estudar ou criar — com cama de apoio e mesa de escritório.",
    meta: "Solteiro 0,80 × 1,88 m",
    side: "right",
  },
  {
    id: "entrada",
    x: 90,
    y: 60,
    icon: IconDoor,
    title: "Entrada com melhor circulação",
    text: "Acesso prático e fluido para o dia a dia — a entrada pela circulação ganha espaço de poltrona.",
    meta: "Fluxo otimizado",
    side: "left",
  },
];

export default function Planta() {
  const [active, setActive] = useState<string>("cama");
  const current = spots.find((s) => s.id === active) ?? spots[0];

  return (
    <section
      id="planta"
      className="relative overflow-hidden bg-ink-900 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[520px] w-[520px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(207,165,104,0.14), transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            04
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            A planta
          </span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
              Compacto no tamanho,
              <br />
              <span className="text-gold-grad font-light">
                gigante em possibilidades.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-sm font-light leading-relaxed text-mist">
              Mais aproveitamento por metro quadrado. Cada detalhe foi pensado
              para entregar mais conforto, funcionalidade e liberdade.
            </p>
          </Reveal>
        </div>

        {/* Chamada de interação — deixa claro que os pontos são clicáveis */}
        <div className="mt-10 flex items-center gap-3">
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-gold-300/60 animate-pulse-ring" />
            <span className="flex h-full w-full items-center justify-center rounded-full border border-gold-300/80 bg-gold-400/20 text-gold-200">
              <IconTouch className="h-4 w-4" />
            </span>
          </span>
          <p className="text-[0.78rem] font-light leading-snug text-gold-200 sm:text-[0.85rem]">
            <span className="lg:hidden">
              Toque nos pontos dourados da planta para ver cada ambiente.
            </span>
            <span className="hidden lg:inline">
              Passe o mouse ou clique nos pontos dourados da planta para explorar
              cada ambiente.
            </span>
          </p>
        </div>

        {/* Interactive plan */}
        <div className="mt-5 grid gap-6 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
          <Reveal amount={0.15}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl card-hair bg-ink-950 shadow-lift">
                <Image
                  src="/img/planta.jpg"
                  alt="Planta humanizada do apartamento SMARTER by i5 stay"
                  width={790}
                  height={610}
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className="h-auto w-full"
                />

                {/* Hotspots */}
                {spots.map((s, i) => {
                  const isActive = s.id === active;
                  return (
                    <motion.button
                      key={s.id}
                      onClick={() => setActive(s.id)}
                      onMouseEnter={() => setActive(s.id)}
                      aria-label={s.title}
                      data-cursor="true"
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        delay: 0.35 + i * 0.09,
                        duration: 0.7,
                        ease: EASE,
                      }}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${s.x}%`, top: `${s.y}%` }}
                    >
                      <span className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
                        {/* halo pulsante permanente: sinaliza que é clicável */}
                        <span
                          className="absolute inset-0 rounded-full border border-gold-300/70 animate-pulse-ring"
                          style={{ animationDelay: `${i * 0.4}s` }}
                        />
                        <span
                          className={`flex h-full w-full items-center justify-center rounded-full border-2 backdrop-blur-md transition-all duration-500 ${
                            isActive
                              ? "scale-110 border-gold-50 bg-gold-400 text-ink-950 shadow-[0_0_0_7px_rgba(207,165,104,0.20)]"
                              : "border-gold-300/90 bg-ink-950/80 text-gold-200 shadow-[0_0_0_4px_rgba(207,165,104,0.13)] hover:scale-105 hover:bg-gold-400/30"
                          }`}
                        >
                          <s.icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                        </span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <ImgNote className="mt-3">
                Planta humanizada. Apartamento entregue sem mobília. Imagem
                ilustrativa.
              </ImgNote>

              {/* atalhos por nome — só no desktop, onde há espaço lateral */}
              <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
                {spots.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`rounded-full border px-4 py-2.5 text-[0.7rem] font-light tracking-wide transition-all duration-400 ${
                      s.id === active
                        ? "border-gold-400/70 bg-gold-400/12 text-gold-200"
                        : "border-white/10 text-muted hover:border-gold-400/40 hover:text-mist"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.1} direction="left" className="lg:pb-4">
            <div className="flex flex-col justify-between rounded-2xl border-2 border-gold-400/25 bg-ink-950/80 p-6 backdrop-blur-md sm:p-8 lg:sticky lg:top-28 lg:min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/[0.07] text-gold-300">
                    <current.icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-6 font-display text-xl font-light leading-snug text-bone">
                    {current.title}
                  </h3>

                  <p className="mt-3 text-[0.85rem] font-light leading-relaxed text-mist">
                    {current.text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5">
                    <span className="h-1 w-1 rotate-45 bg-gold-400" />
                    <span className="text-[0.62rem] font-light uppercase tracking-[0.18em] text-gold-200">
                      {current.meta}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 hidden border-t border-white/[0.07] pt-5 lg:block">
                <p className="text-[0.72rem] font-light leading-relaxed text-muted">
                  Use os pontos da planta ou os atalhos acima para percorrer
                  cada solução do projeto.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* highlight strip */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] sm:grid-cols-3">
          {[
            { k: "+ ambientes", v: "Sem desperdício de área" },
            { k: "+ conforto", v: "Acabamento superior" },
            { k: "+ espaço", v: "Maior aproveitamento por m²" },
          ].map((s) => (
            <div key={s.k} className="bg-ink-950/60 px-6 py-6">
              <div className="font-display text-lg font-light text-gold-200">
                {s.k}
              </div>
              <div className="mt-1 text-[0.78rem] font-light text-muted">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
