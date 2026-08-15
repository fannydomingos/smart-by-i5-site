"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem, GoldLine } from "../ui/Reveal";
import { IconPin, IconMobility, IconConvenience, IconArrow } from "../ui/Icons";
import { site } from "@/lib/site";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=QS+5+Rua+310+Lote+12+Aguas+Claras+DF";

const highlights = [
  {
    icon: IconMobility,
    t: "Acesso rápido",
    d: "EPTG, EPCT e Pistão a poucos minutos.",
  },
  {
    icon: IconPin,
    t: "Bairro 100% caminhável",
    d: "Metrô, comércio e parques a pé.",
  },
  {
    icon: IconConvenience,
    t: "Conveniência absoluta",
    d: "Tudo à mão, no bairro mais dinâmico do DF.",
  },
];

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-ink-950 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            12
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Localização
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
              Águas Claras,
              <br />
              <span className="text-gold-grad font-light">
                o seu novo endereço.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-light leading-relaxed text-mist">
              Viver em um endereço único é dar um passo à frente, é elevar o
              nível da sua vida e colher os frutos de uma escolha que impacta
              positivamente em todas as áreas: pessoal, profissional e familiar.
            </p>
          </Reveal>
        </div>

        {/* Lifestyle strip */}
        <Reveal amount={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-2xl card-hair">
            <Image
              src="/img/lifestyle.jpg"
              alt="Ruas, comércio e mobilidade em Águas Claras"
              width={1440}
              height={430}
              sizes="100vw"
              className="h-[220px] w-full object-cover sm:h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
          </div>
        </Reveal>

        {/* Address card */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal>
            <div className="rounded-2xl card-hair bg-ink-900/60 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 text-gold-300">
                <IconPin className="h-5 w-5" />
              </span>

              <p className="mt-6 text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
                Endereço do empreendimento
              </p>
              <p className="mt-3 font-display text-2xl font-extralight leading-snug text-bone">
                {site.addressProject}
              </p>

              <div className="mt-6 h-px w-full bg-white/[0.08]" />

              <p className="mt-6 text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
                Central de vendas 24h
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                {site.addressSales}
              </p>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="abrir mapa"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-gold-400/40 px-6 py-3.5 text-[0.68rem] font-light uppercase tracking-[0.18em] text-gold-200 transition-all duration-500 hover:border-gold-300 hover:bg-gold-400/10"
              >
                Ver no mapa
                <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Stagger className="space-y-px overflow-hidden rounded-2xl border border-white/[0.07]">
              {highlights.map((h) => (
                <StaggerItem key={h.t}>
                  <div className="group flex items-start gap-5 bg-ink-900/50 px-6 py-6 transition-colors duration-500 hover:bg-ink-800/60">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/25 text-gold-300 transition-all duration-500 group-hover:border-gold-400/70 group-hover:bg-gold-400/10">
                      <h.icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-light text-bone">
                        {h.t}
                      </h3>
                      <p className="mt-1 text-[0.8rem] font-light text-muted">
                        {h.d}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 font-display text-lg font-extralight leading-relaxed text-gold-200"
            >
              Porque quando você escolhe bem onde morar, não está apenas
              comprando um imóvel — está conquistando um estilo de vida.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
