"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Reveal, GoldLine } from "../ui/Reveal";
import { IconAward, IconTrophy, IconChart, IconUser } from "../ui/Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

const companies = [
  {
    id: "incorp",
    name: "i5 incorp",
    claim: "Viver bem é uma escolha inteligente.",
    tags: ["19 anos de inovação", "+2.000 aptos em participações", "Plantas jamais vistas"],
    text: "A inteligência muda tudo. Não nascemos para repetir o óbvio, mas para pensar diferente. Revisitamos cada metro quadrado para provar que viver bem não é ter mais espaço, é ter mais inteligência. Projetos compactos, modernos e bem localizados. Porque o endereço muda tudo.",
    img: "/img/nasce-building.jpg",
  },
  {
    id: "imob",
    name: "i5 imob",
    claim: "Comprar um imóvel é uma decisão de vida.",
    tags: ["+ justo, sem intermediários", "+ inteligente, informação digital", "+ humano, tratamento VIP"],
    text: "Chega de imobiliárias todas iguais. Chega de corretores despreparados, pressa e discurso vazio. Aqui existe processo, inteligência e atendimento de verdade. Menos intermediários. Mais clareza. Mais eficiência para oferecer uma condição de pagamento única. Você no centro de tudo.",
    img: "/img/facade-dusk.jpg",
  },
  {
    id: "hotel",
    name: "i5 hotel",
    claim: "Onde tecnologia, conforto e inteligência se encontram.",
    tags: ["Melhor avaliado da região", "+ inovador", "10 anos"],
    text: "Nosso hotel não nasceu para ser apenas mais um. Nasceu para redefinir o padrão. Moderno, sofisticado e avaliado como o melhor hotel de toda a região, ele foi pensado para quem valoriza conforto, design, tecnologia e atendimento premium — sem excessos, sem desperdícios, com muita inteligência.",
    img: "/img/hotel-i5.jpg",
  },
  {
    id: "stay",
    name: "i5 stay",
    claim: "Moradia por assinatura, sem complicação.",
    tags: ["Sem fiador", "Gestão profissional", "Alta rentabilidade"],
    text: "Solução completa para administração de imóveis de curta, média e longa permanência. Cuidamos de todo o processo: comercialização nas principais plataformas, gestão de reservas, limpeza, manutenção, financeiro e relacionamento com o hóspede ou morador. Para quem é proprietário, é liberdade — com o imóvel operando no máximo potencial.",
    img: "/img/rooftop.jpg",
  },
  {
    id: "cowork",
    name: "i5 cowork",
    claim: "Um novo padrão de trabalhar.",
    tags: ["24 horas", "Salas de reunião e auditório", "Serviço de hotel"],
    text: "O único com funcionamento pleno 24 horas, que une a estrutura completa de um coworking com a sofisticação, o serviço e o cuidado de um hotel de alto padrão. No coração de Águas Claras: salas de reunião elegantes, auditório completo, espaços de refeição, lounges e espaço café.",
    img: "/img/cowork.jpg",
  },
];

function Counter({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: IconAward, value: 19, suffix: "", label: "anos de inovação" },
  { icon: IconChart, value: 2000, prefix: "+", label: "aptos em participações" },
  { icon: IconTrophy, value: 10, suffix: "", label: "anos de hospitalidade" },
  { icon: IconUser, value: 1, prefix: "#", label: "hotel melhor avaliado" },
];

export default function Grupo() {
  const [active, setActive] = useState(0);
  const c = companies[active];

  return (
    <section
      id="grupo"
      className="relative overflow-hidden bg-ink-900 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-display text-[0.6rem] tracking-[0.3em] text-gold-400">
            11
          </span>
          <GoldLine className="w-16" />
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-muted">
            Quem constrói
          </span>
        </div>

        <Reveal>
          <h2 className="max-w-3xl font-display text-[2rem] font-extralight leading-[1.06] tracking-[-0.02em] text-bone sm:text-[3rem]">
            Grupo i5:{" "}
            <span className="text-gold-grad font-light">
              a inteligência que nos diferencia.
            </span>
          </h2>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: EASE }}
              className="group bg-ink-950/60 px-6 py-8 transition-colors duration-500 hover:bg-ink-800/60"
            >
              <s.icon className="h-5 w-5 text-gold-400/80" />
              <div className="mt-5 font-display text-[2.2rem] font-extralight leading-none text-bone">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2.5 text-[0.68rem] font-light uppercase tracking-[0.16em] text-muted">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company explorer */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_46%] lg:gap-14">
          <div>
            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {companies.map((co, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={co.id}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    data-cursor="true"
                    className="group block w-full py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`h-1.5 w-1.5 rotate-45 transition-all duration-500 ${
                          isActive ? "bg-gold-300 scale-125" : "bg-white/20"
                        }`}
                      />
                      <span
                        className={`font-display text-[1.3rem] font-extralight tracking-wide transition-colors duration-400 sm:text-[1.7rem] ${
                          isActive ? "text-bone" : "text-muted group-hover:text-mist"
                        }`}
                      >
                        {co.name}
                      </span>
                      <span
                        className={`ml-auto text-[0.62rem] font-light uppercase tracking-[0.2em] transition-all duration-500 ${
                          isActive
                            ? "text-gold-200 opacity-100"
                            : "text-muted opacity-0 group-hover:opacity-60"
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pt-4">
                        <p className="text-[0.9rem] font-light text-gold-200/90">
                          {c.id === co.id ? co.claim : co.claim}
                        </p>
                        <p className="mt-3 max-w-lg text-[0.82rem] font-light leading-relaxed text-muted">
                          {co.text}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {co.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-gold-400/20 bg-gold-400/[0.05] px-3 py-1.5 text-[0.62rem] font-light tracking-wide text-gold-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl card-hair lg:sticky lg:top-28 lg:aspect-auto lg:h-[560px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={c.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <AnimatePresence mode="wait">
                <motion.p
                  key={c.id + "-cap"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-lg font-extralight text-bone"
                >
                  {c.name}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Gestão i5 stay highlight */}
        <Reveal>
          <div className="mt-14 grid gap-6 rounded-2xl card-hair bg-ink-950/60 p-8 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h3 className="font-display text-[1.5rem] font-extralight leading-snug text-bone sm:text-[2rem]">
                Gestão i5 Stay: já nasce com{" "}
                <span className="text-gold-grad font-light">
                  experiência de 10 anos.
                </span>
              </h3>
              <p className="mt-4 max-w-lg text-[0.85rem] font-light leading-relaxed text-mist">
                Quem opera hospitalidade de verdade sabe como cuidar de cada
                detalhe. Essa experiência agora inspira o SMART, unindo conforto,
                gestão e credibilidade em um novo produto imobiliário.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.07]">
              {[
                "10 anos de experiência com hospedagem",
                "Hotel melhor avaliado de Águas Claras",
                "Excelência em operação e atendimento",
                "Confiança para morar, investir e rentabilizar",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-ink-900/60 px-5 py-5 text-[0.74rem] font-light leading-relaxed text-mist"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
