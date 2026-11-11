"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { SplitWords, Reveal, ImgNote } from "../ui/Reveal";
import { waHref, site } from "@/lib/site";
import { IconWhatsApp, IconCheck } from "../ui/Icons";

const perks = ["Sinal facilitado", "Gestão i5 stay", "Tour pelo decorado"];

export default function CtaFinal() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-ink-950"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        {/* Foto ao lado do texto, sem camada escura — direção do PDF. */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-16">
          <Reveal direction="left" amount={0.2}>
            {/* Mesma foto e mesma proporção da referência do PDF. */}
            <div className="overflow-hidden rounded-2xl card-hair">
              <Image
                src="/img/g01-fachada-fim-tarde.jpg"
                alt="SMARTER by i5 stay — fachada ao fim da tarde"
                width={1800}
                height={1021}
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="h-auto w-full"
              />
            </div>
            <ImgNote className="mt-3">Imagem meramente ilustrativa</ImgNote>
          </Reveal>

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
              text="que valoriza seu tempo."
              delay={0.15}
              className="block"
              highlight={[3]}
            />
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-[0.95rem] font-light leading-relaxed text-mist">
              Fale com um consultor i5, receba a tabela de valores, conheça as
              plantas disponíveis e agende seu tour guiado pelo decorado.
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
                <span className="relative">Fale com um consultor</span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="text-[0.76rem] font-light tracking-wide text-mist transition-colors hover:text-gold-200"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] sm:grid-cols-3">
            {perks.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.07, duration: 0.7 }}
                className="flex items-center gap-3 bg-ink-900/60 px-5 py-5"
              >
                <IconCheck className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                <span className="text-[0.76rem] font-light text-mist">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
