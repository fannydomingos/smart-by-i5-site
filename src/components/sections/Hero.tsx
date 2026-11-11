"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SplitWords, ImgNote } from "../ui/Reveal";
import { waHref, site } from "@/lib/site";
import { IconArrow, IconArrowDown, IconPin } from "../ui/Icons";
import { scrollToSection } from "../SmoothScroll";

const EASE = [0.16, 1, 0.3, 1] as const;

const marquee = [
  "natureza",
  "mobilidade",
  "urbanidade",
  "conveniência",
  "inteligência",
];

const stats = [
  { k: "Sinal", v: "facilitado" },
  { k: "Plantas", v: "inteligentes" },
  { k: "Gestão", v: "i5 stay" },
  { k: "Grupo i5", v: "19 anos" },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink-950">
      {/*
        A foto da capa entra INTEIRA: largura total na proporção original,
        sem corte, sem zoom e sem camada escura. Por isso não há altura fixa
        nem parallax aqui — qualquer um dos dois voltaria a cortar a imagem.

        No desktop o título ocupa o céu, à direita, sobre a foto. No celular
        a foto, inteira, é baixa demais para comportar texto por cima: a capa
        então ocupa a tela toda, com a foto centrada e o título logo abaixo
        dela, de modo que a primeira tela já mostre a capa inteira.
      */}
      <div className="relative flex min-h-[100svh] flex-col justify-center pt-[var(--header-h)] lg:block lg:min-h-0 lg:pt-0">
        {/* No celular a capa precisa de altura, então o quadro é vertical
            e a foto preenche. No desktop o quadro tem a proporção exata da
            imagem, ou seja, ela aparece inteira. */}
        <div className="relative aspect-[4/5] w-full sm:aspect-[3/2] lg:aspect-[2000/1131]">
          <Image
            src="/img/hero-fachada-v2.jpg"
            alt="Fachada do SMARTER by i5 stay em Águas Claras ao anoitecer"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-[12%_center] lg:object-center"
          />
        </div>

        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 pb-8 pt-7 sm:px-8 lg:absolute lg:inset-0 lg:h-full lg:flex-none lg:pb-8 lg:pt-[calc(var(--header-h)_+_32px)]">
          {/* Bloco de título no lado direito, como na referência. */}
          <div className="my-auto lg:my-0 lg:ml-auto lg:w-[58%] lg:max-w-[760px]">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.9, ease: EASE }}
              className="block text-[0.6rem] font-light uppercase tracking-[0.34em] text-bone [text-shadow:0_1px_2px_rgba(4,7,13,0.7),0_2px_18px_rgba(4,7,13,0.9)] sm:text-[0.68rem]"
            >
              SMARTER em Águas Claras
            </motion.span>

            <h1 className="mt-5 font-display text-[2.4rem] font-extralight leading-[1.08] tracking-[-0.02em] text-bone [text-shadow:0_1px_2px_rgba(4,7,13,0.6),0_3px_16px_rgba(4,7,13,0.75)] sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.9rem]">
              <SplitWords
                text="Inteligência para viver."
                delay={1.5}
                className="block"
                highlight={[2]}
                highlightClassName="text-gold-200"
              />
              <SplitWords
                text="Conforto para ficar."
                delay={1.85}
                className="block"
                highlight={[2]}
                highlightClassName="text-gold-200"
              />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.9, ease: EASE }}
            className="mt-auto flex items-center gap-2.5 pt-10 drop-shadow-[0_2px_14px_rgba(4,7,13,0.95)]"
          >
            <IconPin className="h-3.5 w-3.5 text-gold-300" />
            <span className="text-[0.68rem] font-light tracking-[0.1em] text-bone [text-shadow:0_1px_2px_rgba(4,7,13,0.75),0_2px_16px_rgba(4,7,13,0.9)]">
              {site.addressProject}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Nota fora da foto, alinhada à direita — exatamente como no PDF. */}
      <div className="mx-auto max-w-[1400px] px-5 pt-3 text-right sm:px-8">
        <ImgNote>Imagem meramente ilustrativa</ImgNote>
      </div>

      {/* Bloco de apresentação */}
      <div className="relative mx-auto max-w-[1400px] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <div>
            <h2 className="max-w-[18ch] font-display text-[1.9rem] font-extralight leading-[1.14] tracking-[-0.02em] text-bone sm:text-[2.4rem]">
              Uma nova forma de viver em Águas Claras.
            </h2>
            <p className="mt-6 max-w-xl text-[0.95rem] font-light leading-relaxed text-mist">
              Apartamentos inteligentes, design contemporâneo e espaços pensados
              para o seu ritmo, sua rotina e suas escolhas.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="conversar"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-200 to-gold-500 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-950 shadow-[0_20px_45px_-18px_rgba(207,165,104,0.85)]"
            >
              <span className="absolute inset-0 translate-y-full bg-bone transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
              <span className="relative">Quero visitar o decorado</span>
              <IconArrow className="relative h-3.5 w-3.5 -rotate-45 transition-transform duration-500 group-hover:translate-x-0.5" />
            </a>

            <button
              onClick={() => scrollToSection("#projeto")}
              data-cursor="explorar"
              className="group inline-flex items-center gap-3 text-[0.72rem] font-light uppercase tracking-[0.18em] text-mist transition-colors duration-500 hover:text-gold-200"
            >
              Conhecer o projeto
              <IconArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-1" />
            </button>
          </div>
        </div>

        {/* Quatro destaques, separados só por um fio — sem caixas. */}
        <div className="mt-14 border-t border-white/[0.1] pt-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.k}>
                <div className="text-[0.58rem] font-light uppercase tracking-[0.26em] text-gold-400/90">
                  {s.k}
                </div>
                <div className="mt-2 font-display text-xl font-extralight text-gold-200 sm:text-2xl">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-white/[0.07] py-3.5">
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
