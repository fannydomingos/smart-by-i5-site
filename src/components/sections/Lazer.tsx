"use client";

import Image from "next/image";
import { useRef } from "react";
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
    d: "Um novo ponto de vista para aproveitar todos os dias.",
  },
];

export default function Lazer() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="lazer" className="relative bg-ink-950 pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            06
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Lazer
          </span>
        </div>

        {/* Título e texto acima da foto: o PDF pede a fotografia em primeiro
            plano, sem camada escura e sem texto por cima. */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="font-display text-[2.2rem] font-extralight leading-[1.02] tracking-[-0.02em] text-bone sm:text-[3.2rem]">
              Lazer panorâmico
              <br />
              <span className="text-gold-grad font-light">privativo.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-sm font-light leading-relaxed text-mist">
              2 unidades com churrasqueira, SPA e vista panorâmica. A
              privacidade que você merece para receber bem.
            </p>
          </Reveal>
        </div>

        <Reveal amount={0.15}>
          {/* Foto inteira, na proporção original: a altura fixa de antes
              cortava a imagem, principalmente no celular. */}
          <div
            ref={ref}
            className="mt-10 overflow-hidden rounded-2xl card-hair"
          >
            <Image
              src="/img/rooftop.jpg"
              alt="Lazer panorâmico privativo com pergolado, SPA e churrasqueira"
              width={1600}
              height={900}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
          <ImgNote className="mt-3">Imagem meramente ilustrativa</ImgNote>
        </Reveal>
      </div>

      <div className="h-12 sm:h-16" />

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
