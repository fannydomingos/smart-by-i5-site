"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, GoldLine } from "../ui/Reveal";

/**
 * Galeria do SMARTER — as fotos na ordem do PDF.
 *
 * O PDF pede: fileiras de duas ou três imagens INTEIRAS, título aparecendo
 * uma única vez, tudo visível pela rolagem, sem clique e sem abrir nada.
 * Por isso aqui não há lightbox, filtro, aba ou botão: só fotografia.
 *
 * Cada foto guarda a própria largura e altura e entra na proporção original,
 * sem recorte — é assim que a referência mostra, com alturas diferentes na
 * mesma fileira quando as fotos têm formatos diferentes.
 */
/**
 * `recorte` marca as plantas: o fundo branco delas foi removido, então
 * entram sem moldura, direto sobre o fundo da página.
 */
const fotos: {
  src: string;
  w: number;
  h: number;
  alt: string;
  recorte?: boolean;
}[] = [
  { src: "/img/g01-fachada-fim-tarde.jpg", w: 1800, h: 1021, alt: "Fachada ao fim da tarde" },
  { src: "/img/g02-fachada-noite.jpg", w: 1800, h: 1018, alt: "Fachada à noite" },
  { src: "/img/g03-rooftop-lounge.jpg", w: 1800, h: 1020, alt: "Rooftop lounge" },
  { src: "/img/g04-coworking.jpg", w: 1800, h: 1446, alt: "Coworking" },
  { src: "/img/g05-kids-pet.jpg", w: 1800, h: 1020, alt: "Espaço kids e pet" },
  { src: "/img/g06-rooftop-anoitecer.jpg", w: 1800, h: 1018, alt: "Rooftop ao anoitecer" },
  { src: "/img/g07-detalhes-arquitetura.jpg", w: 1800, h: 1018, alt: "Detalhes da arquitetura" },
  { src: "/img/g08-delivery-ferramentaria.jpg", w: 1800, h: 1800, alt: "Delivery e ferramentaria" },
  { src: "/img/g09-studio-b-v2.jpg", w: 793, h: 611, alt: "Studio B" },
  { src: "/img/g10-fachada-dia.jpg", w: 1800, h: 1021, alt: "Fachada de dia" },
  { src: "/img/g13-torre-perspectiva.jpg", w: 1607, h: 2000, alt: "A torre em perspectiva" },
  { src: "/img/g14-rooftop-fim-tarde.jpg", w: 1800, h: 1020, alt: "Rooftop lounge ao fim da tarde" },
  { src: "/img/g15-kids-pet-noite.jpg", w: 1800, h: 1018, alt: "Espaço kids e pet à noite" },
  { src: "/img/g16-kids-pet-dia.jpg", w: 1800, h: 1020, alt: "Espaço kids e pet de dia" },
  { src: "/img/g17-studio-a.webp", w: 1618, h: 1279, alt: "Studio A", recorte: true },
  { src: "/img/g18-pavimento-tipo.webp", w: 1518, h: 1985, alt: "Pavimento tipo", recorte: true },
  { src: "/img/g19-pavimento-terreo.webp", w: 1784, h: 708, alt: "Pavimento térreo", recorte: true },
  { src: "/img/g20-pavimento-lazer.webp", w: 1751, h: 711, alt: "Pavimento de lazer", recorte: true },
];

/**
 * Monta as fileiras alternando 2 e 3 imagens. Se sobrar uma única foto no
 * fim, ela entra na fileira anterior — assim a última fileira nunca fica
 * com um vão vazio ao lado.
 */
function montarFileiras(itens: typeof fotos) {
  const linhas: (typeof fotos)[] = [];
  let i = 0;
  let tamanho = 2;
  while (i < itens.length) {
    linhas.push(itens.slice(i, i + tamanho));
    i += tamanho;
    tamanho = tamanho === 2 ? 3 : 2;
  }
  const ultima = linhas[linhas.length - 1];
  if (linhas.length > 1 && ultima.length === 1) {
    linhas[linhas.length - 2].push(ultima[0]);
    linhas.pop();
  }
  return linhas;
}

const fileiras = montarFileiras(fotos);

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-ink-950 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            14
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Galeria
          </span>
        </div>

        <Reveal>
          <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
            Galeria do{" "}
            <span className="text-gold-grad font-light">SMARTER.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-sm font-light leading-relaxed text-mist">
            Arquitetura, ambientes e detalhes para conhecer de perto.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8 sm:space-y-10">
          {fileiras.map((fileira, r) => (
            <div
              key={r}
              className={`grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-7 ${
                fileira.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
              }`}
            >
              {fileira.map((f, i) => (
                <motion.figure
                  key={f.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                >
                  <div
                    className={
                      f.recorte ? "" : "overflow-hidden rounded-xl card-hair"
                    }
                  >
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={f.w}
                      height={f.h}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <span className="block text-[0.82rem] font-light text-bone">
                      {f.alt}
                    </span>
                    <span className="mt-1 block text-[0.68rem] font-light text-muted">
                      Imagem meramente ilustrativa
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
