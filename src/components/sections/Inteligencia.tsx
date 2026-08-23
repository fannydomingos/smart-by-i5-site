"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Stagger, StaggerItem, GoldLine, ImgNote } from "../ui/Reveal";
import {
  IconBox,
  IconPhone,
  IconShield,
  IconLounger,
  IconWifi,
  IconGear,
  IconBulb,
  IconAutomation,
  IconPin,
  IconPlan,
} from "../ui/Icons";

const items = [
  { icon: IconBox, t: "Armários inteligentes", d: "Comodidade para entregas e delivery." },
  { icon: IconPhone, t: "Serviços pay per use", d: "Sob demanda, quando você precisar." },
  { icon: IconShield, t: "Segurança monitorada", d: "Acesso à entrada em 2 etapas." },
  { icon: IconLounger, t: "Lazer panorâmico", d: "SPA, churrasqueira e vista." },
  { icon: IconWifi, t: "Internet de alta velocidade", d: "Conectividade em todo o condomínio." },
  { icon: IconGear, t: "Suporte de manutenção", d: "Rotina resolvida sem dor de cabeça." },
];

const smart = [
  { icon: IconBulb, t: "Iluminação inteligente", d: "Mais eficiência, segurança e economia nas áreas comuns." },
  { icon: IconAutomation, t: "Automação predial", d: "Tecnologia que otimiza recursos e simplifica a gestão." },
  { icon: IconPin, t: "Localização estratégica", d: "Conectado ao que importa, perto de tudo que você precisa." },
  { icon: IconPlan, t: "Plantas inteligentes", d: "Ambientes bem distribuídos para o máximo de conforto." },
];

export default function Inteligencia() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            07
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Tecnologia
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Image */}
          <Reveal amount={0.15}>
            <div
              ref={ref}
              className="relative aspect-square overflow-hidden rounded-2xl card-hair lg:sticky lg:top-28"
            >
              <motion.div className="absolute -inset-y-[16%] inset-x-0" style={{ y }}>
                <Image
                  src="/img/delivery.jpg"
                  alt="Armários inteligentes de delivery e ferramentaria do SMARTER by i5 stay"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/60 px-3.5 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-shimmer rounded-full bg-gold-300" />
                  <span className="text-[0.6rem] font-light uppercase tracking-[0.22em] text-bone">
                    Delivery · Ferramentaria
                  </span>
                </span>
              </div>
            </div>

            <ImgNote className="mt-3">Imagem ilustrativa.</ImgNote>
          </Reveal>

          {/* Copy + grid */}
          <div>
            <Reveal>
              <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
                Inteligência
                <br />
                <span className="text-gold-grad font-light">que simplifica.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-mist">
                Tecnologia e praticidade no dia a dia. Ambientes conectados para
                uma rotina mais segura, eficiente e sem complicações.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] sm:grid-cols-2">
              {items.map((it) => (
                <StaggerItem key={it.t}>
                  <div className="group h-full bg-ink-950/50 p-6 transition-colors duration-500 hover:bg-ink-800/60">
                    <it.icon className="h-5 w-5 text-gold-300 transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="mt-4 font-display text-[0.95rem] font-light text-bone">
                      {it.t}
                    </h3>
                    <p className="mt-1.5 text-[0.76rem] font-light leading-relaxed text-muted">
                      {it.d}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        {/* A inteligência muda tudo */}
        <div className="relative mt-16 overflow-hidden rounded-2xl card-hair sm:mt-24">
          <Image
            src="/img/skyline.jpg"
            alt="Skyline noturno"
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/55 to-ink-950/85" />

          <div className="relative px-6 py-14 sm:px-12 sm:py-20">
            <Reveal>
              <h3 className="text-center font-display text-[1.8rem] font-extralight tracking-[-0.02em] text-bone sm:text-[2.8rem]">
                A inteligência{" "}
                <span className="text-gold-grad font-light">muda tudo.</span>
              </h3>
            </Reveal>

            <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {smart.map((s) => (
                <StaggerItem key={s.t}>
                  <div className="group h-full rounded-xl border border-gold-400/15 bg-ink-950/50 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:border-gold-400/45 hover:bg-ink-900/70">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/25 text-gold-300 transition-transform duration-500 group-hover:scale-110">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h4 className="mt-5 text-[0.7rem] font-light uppercase tracking-[0.16em] text-bone">
                      {s.t}
                    </h4>
                    <p className="mt-2.5 text-[0.76rem] font-light leading-relaxed text-muted">
                      {s.d}
                    </p>
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
