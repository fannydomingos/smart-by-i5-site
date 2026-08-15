"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, GoldLine } from "../ui/Reveal";
import { IconSofa, IconTrend, IconCheck, IconArrow } from "../ui/Icons";
import { waHref } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const panels = [
  {
    id: "morar",
    icon: IconSofa,
    kicker: "Para quem mora",
    title: "Serviços hoteleiros e menos preocupação.",
    img: "/img/cowork.jpg",
    alt: "Lounge e cowork do SMART by i5",
    items: [
      "Segurança monitorada 24h",
      "Planta que oferece mais para o seu dia a dia",
      "Arquitetura com design e lazer panorâmico",
      "Serviços pay per use sob demanda",
      "Suporte para limpeza e pequenos reparos",
    ],
    cta: "Quero morar no SMART",
  },
  {
    id: "investir",
    icon: IconTrend,
    kicker: "Para quem investe",
    title: "Um produto desenhado para performance.",
    img: "/img/invest-building.jpg",
    alt: "Fachada do SMART by i5 ao anoitecer",
    items: [
      "Locação das unidades sem preocupações",
      "Airbnb, Booking e principais plataformas",
      "Gestão profissional (manutenção e enxoval)",
      "Relatórios de prestação de contas com transparência",
      "Bairro com alta valorização",
    ],
    cta: "Quero investir no SMART",
  },
];

export default function InvestirMorar() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section
      id="investir"
      className="relative overflow-hidden bg-ink-950 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            10
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Dois olhares
          </span>
        </div>

        <Reveal>
          <h2 className="max-w-3xl font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
            Investir ou morar?{" "}
            <span className="text-gold-grad font-light">
              Aqui você consegue os dois.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-mist">
            Uma proposta pensada para quem mora e para quem investe. Dois
            olhares, uma mesma inteligência.
          </p>
        </Reveal>

        {/* Split panels */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {panels.map((p) => {
            const isHover = hover === p.id;
            const isDim = hover !== null && !isHover;
            return (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                animate={{
                  flexGrow: isHover ? 1.55 : isDim ? 0.75 : 1,
                }}
                transition={{ duration: 0.85, ease: EASE }}
                className="group relative flex-1 overflow-hidden rounded-2xl card-hair"
              >
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-all duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] ${
                    isHover ? "scale-105 opacity-75" : "scale-100 opacity-50"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/72 to-ink-950/35" />

                <div className="relative flex h-full min-h-[520px] flex-col justify-end p-7 sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-ink-950/50 text-gold-300 backdrop-blur-sm">
                    <p.icon className="h-5 w-5" />
                  </span>

                  <span className="mt-6 text-[0.6rem] font-light uppercase tracking-[0.3em] text-gold-200">
                    {p.kicker}
                  </span>

                  <h3 className="mt-3 max-w-sm font-display text-[1.4rem] font-extralight leading-snug text-bone sm:text-[1.8rem]">
                    {p.title}
                  </h3>

                  <motion.ul
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    className="mt-6 space-y-2.5"
                  >
                    {p.items.map((it, i) => (
                      <motion.li
                        key={it}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.6 }}
                        className="flex items-start gap-3 text-[0.82rem] font-light text-mist"
                      >
                        <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                        {it}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <a
                    href={waHref(
                      `Olá! Vim pelo site do SMART by i5. ${p.cta}. Pode me enviar mais informações?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="whatsapp"
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-gold-400/40 px-5 py-3 text-[0.66rem] font-light uppercase tracking-[0.18em] text-gold-200 transition-all duration-500 hover:border-gold-300 hover:bg-gold-400/10"
                  >
                    {p.cta}
                    <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
