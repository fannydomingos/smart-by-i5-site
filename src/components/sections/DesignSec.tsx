"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Stagger, StaggerItem, GoldLine } from "../ui/Reveal";

const details = [
  {
    n: "01",
    t: "Iluminação arquitetônica",
    d: "Luzes que valorizam os volumes e revelam a beleza da fachada ao anoitecer.",
  },
  {
    n: "02",
    t: "Linhas contemporâneas",
    d: "Traços retos e horizontais que criam ritmo, elegância e sensação de leveza.",
  },
  {
    n: "03",
    t: "Materiais nobres",
    d: "Texturas e acabamentos de alta qualidade que garantem durabilidade e sofisticação.",
  },
  {
    n: "04",
    t: "Presença elegante",
    d: "Um projeto que se destaca pela harmonia entre forma, luz e funcionalidade.",
  },
];

export default function DesignSec() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            09
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Arquitetura
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Image */}
          <Reveal amount={0.15}>
            <div
              ref={ref}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl card-hair"
            >
              <motion.div className="absolute -inset-y-[18%] inset-x-0" style={{ y }}>
                <Image
                  src="/img/facade-portrait.jpg"
                  alt="Fachada contemporânea do SMART by i5 com iluminação arquitetônica"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* Copy */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
                Design e
                <br />
                <span className="text-gold-grad font-light">sofisticação.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-mist">
                A fachada moderna, com design exclusivo, traduz a elegância do
                empreendimento e imprime personalidade ao endereço. Cada detalhe
                foi planejado com materiais de alta qualidade, que elevam o nível
                e garantem um padrão de vida diferenciado.
              </p>
            </Reveal>

            <Stagger className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {details.map((d) => (
                <StaggerItem key={d.n}>
                  <div className="group flex gap-6 py-6 transition-colors duration-500">
                    <span className="font-display text-[0.68rem] tracking-[0.2em] text-gold-400/80 transition-colors duration-500 group-hover:text-gold-300">
                      {d.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[0.72rem] font-light uppercase tracking-[0.18em] text-bone">
                        {d.t}
                      </h3>
                      <p className="mt-2 max-w-md text-[0.82rem] font-light leading-relaxed text-muted">
                        {d.d}
                      </p>
                    </div>
                    <span className="mt-2 h-px w-0 self-start bg-gold-400/60 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-10" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <p className="mt-8 font-display text-lg font-extralight text-gold-200">
                Design moderno, luxo em excelência.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
