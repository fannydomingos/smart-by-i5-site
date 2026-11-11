"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, GoldLine } from "../ui/Reveal";
import { IconPlan, IconConcierge, IconTrend, IconCheck } from "../ui/Icons";

const panels = [
  {
    n: "01",
    icon: IconPlan,
    kicker: "Projeto inteligente",
    title: "Uma planta que entrega muito mais espaço",
    text: "Morar bem é ter inteligência no aproveitamento dos espaços. Cada metro quadrado com propósito e acabamento superior, pensado para quem valoriza sofisticação e conforto.",
    bullets: [
      "+ ambientes, + conforto, + espaço",
      "Maior aproveitamento por m²",
      "Endereço melhor, mais perto de tudo",
    ],
    img: "/img/planta-alta.jpg",
    w: 1944,
    h: 1533,
    inteira: true,
    alt: "Planta humanizada do apartamento SMARTER by i5 stay",
  },
  {
    n: "02",
    icon: IconConcierge,
    kicker: "Comodidade de hotel",
    title: "Serviços hoteleiros à sua disposição",
    text: "Precisa limpar o apartamento? A internet caiu? Quem instala o ar-condicionado novo? No SMARTER, serviços pay per use resolvem a sua rotina sob demanda.",
    bullets: [
      "Serviços pay per use sob demanda",
      "Segurança monitorada e internet de alta velocidade",
      "Normas rigorosas de conduta e convivência",
    ],
    img: "/img/cowork.jpg",
    w: 1600,
    h: 1334,
    alt: "Lounge e cowork do SMARTER by i5 stay",
  },
  {
    n: "03",
    icon: IconTrend,
    kicker: "Investimento rentável",
    title: "Por que vale a pena investir no SMARTER?",
    text: "Um produto desenhado para performance, locação e valorização — com gestão profissional i5 stay, que já nasce com 10 anos de experiência em hospitalidade.",
    bullets: [
      "Alta demanda de locação por temporada",
      "Locação descomplicada, sem fiador",
      "Bairro com alta valorização",
    ],
    img: "/img/g11-fachada-anoitecer.jpg",
    w: 1800,
    h: 1018,
    alt: "Fachada iluminada do SMARTER by i5 stay",
  },
];

export default function Pilares() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // No desktop a seção fixa e a rolagem vertical empurra o trilho.
    // No celular isso não é confiável — a barra do navegador muda a altura
    // da tela e o pin se perde —, então lá a rolagem lateral é por arrasto,
    // com encaixe em cada painel (ver as classes do trilho).
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const el = track.current;
        const sec = section.current;
        if (!el || !sec) return;

        const getDistance = () => el.scrollWidth - window.innerWidth;

        const tween = gsap.to(el, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: () => `+=${getDistance() + window.innerHeight * 0.3}`,
            pin: true,
            scrub: 0.9,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative bg-ink-950 lg:h-[100svh] lg:overflow-hidden"
    >
      {/* Heading (absolute on desktop so it sits over the pinned track) */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 lg:absolute lg:inset-x-0 lg:pt-16">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            03
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Três razões
          </span>
        </div>
        <Reveal>
          <h2 className="max-w-2xl font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[2.9rem]">
            Tudo em{" "}
            <span className="text-gold-grad font-light">um só lugar</span>
          </h2>
        </Reveal>
      </div>

      {/* Track */}
      <div className="snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex lg:h-full lg:items-center lg:overflow-visible lg:pb-0">
        <div
          ref={track}
          className="flex w-max flex-row gap-5 px-5 pt-10 sm:px-8 lg:gap-10 lg:px-[6vw] lg:pt-28"
        >
          {panels.map((p) => (
            <article
              key={p.n}
              className="group relative flex w-[84vw] shrink-0 snap-center flex-col overflow-hidden rounded-2xl card-hair bg-ink-900/70 shadow-lift lg:h-auto lg:w-[78vw] lg:flex-row lg:snap-align-none xl:w-[70vw]"
            >
              {/* Imagem — quadro horizontal, centrado na coluna.
                  Antes a foto preenchia toda a altura do card, que é alto e
                  estreito: imagem horizontal nesse formato perde as laterais.
                  Agora o quadro segue a proporção das fotos (16:10) e a
                  coluna só acomoda esse quadro. */}
              <div className="relative shrink-0 p-4 sm:p-5 lg:flex lg:w-[52%] lg:items-center lg:p-6">
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-ink-950/50"
                  style={{ aspectRatio: `${p.w} / ${p.h}` }}
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 36vw"
                    className={`transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] ${
                      p.inteira
                        ? "object-contain p-2"
                        : "object-cover group-hover:scale-[1.04]"
                    }`}
                  />
                  <span className="absolute left-5 top-4 font-display text-5xl font-extralight text-bone/30 [text-shadow:0_2px_12px_rgba(4,7,13,0.6)] lg:text-6xl">
                    {p.n}
                  </span>
                  <span className="absolute bottom-2.5 right-3.5 text-[0.6rem] font-light tracking-wide text-bone/70 [text-shadow:0_1px_6px_rgba(4,7,13,0.9)]">
                    Imagem meramente ilustrativa
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div className="flex flex-1 flex-col justify-center gap-5 p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/30 text-gold-300">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-gold-200">
                    {p.kicker}
                  </span>
                </div>

                <h3 className="font-display text-[1.5rem] font-extralight leading-tight text-bone sm:text-[2rem]">
                  {p.title}
                </h3>

                <p className="max-w-md text-[0.88rem] font-light leading-relaxed text-mist">
                  {p.text}
                </p>

                <ul className="mt-1 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[0.82rem] font-light text-bone/85"
                    >
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        <span className="h-px w-8 bg-gold-400/50" />
        <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
          role para avançar
        </span>
        <span className="h-px w-8 bg-gold-400/50" />
      </div>
    </section>
  );
}
