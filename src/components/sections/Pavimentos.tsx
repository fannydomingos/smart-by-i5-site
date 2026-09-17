"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, GoldLine, ImgNote } from "../ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * O zoom de cada aba é próprio, não um valor único para todos.
 *
 * A moldura tem proporção 1400x1568 — a mesma da imagem — então a janela
 * visível no zoom Z fica com 1400/Z de largura. Cada valor aqui respeita a
 * largura da sua laje na imagem, senão a laje aparece cortada nas laterais:
 *
 *     pav. tipo    281 px  ->  cabe até 4,98   (usando 1,85)
 *     1º pav.      963 px  ->  cabe até 1,45   (usando 1,36)
 *     térreo       991 px  ->  cabe até 1,41   (usando 1,33)
 *
 * tx e ty levam o centro da laje ao centro da moldura:
 *     t = -scale * (centro - 0,5) * 100
 * O tx importa por causa do pavimento tipo, que nesta arte fica recuado à
 * direita (centro em 0,680 da largura) — sem ele a laje sairia da janela.
 */
const floors = [
  {
    id: "geral",
    label: "Visão geral",
    title: "Um empreendimento bem planejado",
    text: "Cada espaço do SMARTER foi organizado para oferecer conforto, praticidade e privacidade em todos os momentos.",
    scale: 1,
    tx: 0,
    ty: 0,
  },
  {
    id: "tipo",
    label: "Pav. tipo",
    title: "Pavimentos 2 ao 8",
    text: "Unidades inteligentes para o seu ritmo — finais 1 a 7 em cada pavimento.",
    scale: 1.85,
    tx: -33.3,
    ty: 46.3,
  },
  {
    id: "primeiro",
    label: "1º pavimento",
    title: "Lazer e bem-estar",
    text: "Lazer panorâmico com SPA, churrasqueira e brinquedoteca, além das unidades 101 a 107.",
    scale: 1.36,
    tx: 1.1,
    ty: 1,
  },
  {
    id: "terreo",
    label: "Térreo",
    title: "Chegada e conveniência",
    text: "Garagens, recepção com acesso em 2 etapas e unidades garden.",
    scale: 1.33,
    tx: 0.5,
    ty: -34.6,
  },
];

export default function Pavimentos() {
  const [active, setActive] = useState(0);
  const f = floors[active];

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            08
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Pavimentos
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          {/* Interactive isometric */}
          <Reveal amount={0.15}>
            <div className="relative overflow-hidden rounded-2xl card-hair bg-ink-900">
              <div className="relative aspect-[1400/1568] w-full overflow-hidden bg-[#000513]">
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: f.scale, x: `${f.tx}%`, y: `${f.ty}%` }}
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  {/* O sufixo -v5 no nome não é enfeite: a URL do otimizador de
                      imagem do Next é /_next/image?url=<caminho>, ou seja, a
                      chave do cache é o caminho. Trocando só o conteúdo do
                      arquivo, navegador e CDN continuam servindo a versão
                      antiga. Mudar o nome é o que invalida o cache. */}
                  <Image
                    src="/img/pavimentos-v5.jpg"
                    alt="Vista isométrica dos pavimentos do SMARTER by i5 stay"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-2 gap-px border-t border-white/[0.07] bg-white/[0.05] sm:grid-cols-4">
                {floors.map((fl, i) => (
                  <button
                    key={fl.id}
                    onClick={() => setActive(i)}
                    data-cursor="true"
                    className={`relative bg-ink-950 px-4 py-4 text-[0.64rem] font-light uppercase tracking-[0.16em] transition-colors duration-500 ${
                      i === active
                        ? "text-gold-200"
                        : "text-muted hover:text-mist"
                    }`}
                  >
                    {fl.label}
                    {i === active && (
                      <motion.span
                        layoutId="floor-underline"
                        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <ImgNote className="mt-3">Imagem ilustrativa.</ImgNote>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[2.8rem]">
                Um empreendimento
                <br />
                <span className="text-gold-grad font-light">bem planejado.</span>
              </h2>
            </Reveal>

            <div className="mt-8 min-h-[150px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <span className="text-[0.6rem] font-light uppercase tracking-[0.28em] text-gold-300">
                    {f.label}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-light text-bone">
                    {f.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.86rem] font-light leading-relaxed text-mist">
                    {f.text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 space-y-px overflow-hidden rounded-xl border border-white/[0.07]">
              {[
                ["Lote", "Grande, de esquina — valoriza a vista"],
                ["Acessos", "Entradas separadas de pedestres e veículos"],
                ["Fachada", "Elementos verticais e horizontais com LED"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline gap-4 bg-ink-900/50 px-5 py-4"
                >
                  <span className="w-20 shrink-0 text-[0.6rem] font-light uppercase tracking-[0.2em] text-gold-300">
                    {k}
                  </span>
                  <span className="text-[0.8rem] font-light text-mist">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
