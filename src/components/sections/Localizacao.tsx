"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem, GoldLine, ImgNote } from "../ui/Reveal";
import { IconArrow } from "../ui/Icons";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=QS+5+Rua+310+Lote+12+Aguas+Claras+DF";

/**
 * Os quatro caminhos que a referência lista, em duas colunas.
 * A ordem aqui é a de leitura (esquerda, direita, próxima linha), o que
 * reproduz as duas colunas da referência.
 */
const acessos = [
  "Pistão Sul",
  "Av. Sibipiruna",
  "Vereda da Cruz",
  "Av. Águas Claras",
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
            13
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Localização
          </span>
        </div>

        {/* Composição em duas colunas da referência: texto e acessos à
            esquerda, mapa à direita, com os créditos logo abaixo dele. */}
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[2.8rem]">
                Águas Claras,
                <br />
                <span className="text-gold-grad font-light">
                  seu novo endereço.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md text-sm font-light leading-relaxed text-mist">
                Diferentes caminhos conectam o SMARTER às vias do entorno e
                ampliam as opções para os seus deslocamentos.
              </p>
            </Reveal>

            <p className="mt-10 text-[0.72rem] font-light text-gold-200">
              Acessos em destaque
            </p>

            <Stagger className="mt-5 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {acessos.map((a) => (
                <StaggerItem key={a}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-gold-400/80" />
                    <span className="text-[0.95rem] font-light text-bone">
                      {a}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="abrir mapa"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-gold-400/40 px-6 py-3.5 text-[0.68rem] font-light uppercase tracking-[0.18em] text-gold-200 transition-all duration-500 hover:border-gold-300 hover:bg-gold-400/10"
            >
              Ver no mapa
              <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mapa dos acessos, inteiro e sem camada escura por cima. */}
          <Reveal amount={0.15}>
            <div className="overflow-hidden rounded-2xl card-hair">
              <Image
                src="/img/mapa-acessos-v2.jpg"
                alt="Mapa com os quatro acessos que conectam o SMARTER às vias de Águas Claras"
                width={1515}
                height={1038}
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="h-auto w-full"
              />
            </div>
            {/* O crédito do Google já vem impresso no próprio mapa, então
                aqui fica só a nota de imagem, sem repetir a linha. */}
            <ImgNote className="mt-3 block">
              Imagem meramente ilustrativa
            </ImgNote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
