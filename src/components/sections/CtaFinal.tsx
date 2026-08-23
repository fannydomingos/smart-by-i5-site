"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplitWords, Reveal } from "../ui/Reveal";
import { waHref } from "@/lib/site";
import { IconWhatsApp, IconCheck } from "../ui/Icons";

const perks = [
  "Sinal facilitado",
  "Condição de pagamento única",
  "Gestão i5 stay",
  "Tour guiado pelo decorado",
];

export default function CtaFinal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-ink-950"
    >
      <motion.div className="absolute -inset-y-[18%] inset-x-0" style={{ y }}>
        <Image
          src="/img/nasce-building.jpg"
          alt="SMARTER by i5 stay — fachada ao anoitecer"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/78 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-transparent to-ink-950/70" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/35 bg-gold-400/[0.07] px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-shimmer rounded-full bg-gold-300" />
              <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-gold-200">
                Lançamento · Sinal facilitado
              </span>
            </span>
          </Reveal>

          <h2 className="mt-8 font-display text-[2.4rem] font-extralight leading-[1.02] tracking-[-0.02em] text-bone sm:text-[4rem] lg:text-[4.8rem]">
            <SplitWords text="Uma nova vida" className="block" />
            <SplitWords
              text="que valoriza seu TEMPO."
              delay={0.15}
              className="block"
              highlight={[3]}
            />
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-[0.95rem] font-light leading-relaxed text-mist">
              Fale agora com um consultor i5 e receba a tabela de valores, as
              plantas disponíveis e agende o seu tour guiado pelo decorado.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waHref(
                  "Olá! Vim pelo site do SMARTER by i5 stay e quero receber a tabela de valores e agendar uma visita ao decorado."
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="whatsapp"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-200 to-gold-500 px-8 py-5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-ink-950 shadow-[0_24px_55px_-20px_rgba(207,165,104,0.9)]"
              >
                <span className="absolute inset-0 translate-y-full bg-bone transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
                <IconWhatsApp className="relative h-5 w-5" />
                <span className="relative">Falar no WhatsApp agora</span>
              </a>

              <span className="text-[0.7rem] font-light tracking-wide text-muted">
                Atendimento 24h · Resposta imediata
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.07, duration: 0.7 }}
                className="flex items-center gap-3 bg-ink-950/70 px-5 py-5 backdrop-blur-md"
              >
                <IconCheck className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                <span className="text-[0.76rem] font-light text-mist">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
