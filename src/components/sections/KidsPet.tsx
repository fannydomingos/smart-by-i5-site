"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Reveal, GoldLine, ImgNote } from "../ui/Reveal";

const espacos = [
  {
    t: "Espaço kids",
    d: "Um ambiente para brincar, descobrir e viver novas aventuras.",
  },
  {
    t: "Espaço pet",
    d: "Um lugar pensado para seu companheiro se movimentar e se divertir.",
  },
];

export default function KidsPet() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            07
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Espaços kids e pet
          </span>
        </div>

        {/* Foto à esquerda, texto à direita — sem camada escura sobre a foto. */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal direction="left" amount={0.2}>
            <div
              ref={ref}
              className="relative aspect-[1665/944] overflow-hidden rounded-2xl card-hair"
            >
              <Image
                src="/img/kids-pet.jpg"
                alt="Espaço kids e pet do SMARTER by i5 stay"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
            <ImgNote className="mt-3">Imagem meramente ilustrativa</ImgNote>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
                Espaços para
                <br />
                <span className="text-gold-grad font-light">
                  toda a família.
                </span>
              </h2>
            </Reveal>

            <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-white/[0.07]">
              {espacos.map((e, i) => (
                <motion.div
                  key={e.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group bg-ink-900/50 px-7 py-7 transition-colors duration-500 hover:bg-ink-800/60"
                >
                  <h3 className="font-display text-lg font-light text-bone">
                    {e.t}
                  </h3>
                  <p className="mt-2 text-[0.85rem] font-light leading-relaxed text-muted">
                    {e.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
