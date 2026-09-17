"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "./ui/Logo";
import { nav, waHref } from "@/lib/site";
import { IconMenu, IconClose, IconWhatsApp } from "./ui/Icons";
import { scrollToSection, lockScroll } from "./SmoothScroll";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 420 && y > last && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    lockScroll(open);
    return () => lockScroll(false);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToSection(href), open ? 420 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: hidden ? 0 : 0.1 }}
        className={`fixed inset-x-0 top-0 z-[120] transition-colors duration-500 ${
          scrolled
            ? "glass border-b border-white/[0.06]"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollToSection("#top")}
              aria-label="Ir para o topo"
              data-cursor="topo"
              className="shrink-0"
            >
              <Logo compact={scrolled} />
            </button>

            {/* Localização ao lado da marca, separada por um traço vertical. */}
            <span
              aria-hidden
              className="h-6 w-px shrink-0 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent sm:h-7"
            />
            <span className="whitespace-nowrap text-[0.54rem] font-light uppercase leading-none tracking-[0.22em] text-gold-300/80 sm:text-[0.58rem] sm:tracking-[0.26em]">
              Águas Claras
            </span>
          </div>

          <nav className="hidden items-center gap-1 xl:flex">
            {nav.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                data-cursor="true"
                className="group relative px-3.5 py-2 text-[0.72rem] font-light uppercase tracking-[0.16em] text-mist transition-colors hover:text-bone"
              >
                {n.label}
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-gold-400/80 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="falar"
              className="group relative hidden overflow-hidden rounded-full border border-gold-400/40 px-5 py-2.5 text-[0.68rem] font-light uppercase tracking-[0.2em] text-gold-200 transition-colors duration-500 hover:text-ink-950 sm:inline-flex sm:items-center sm:gap-2"
            >
              <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-gold-300 to-gold-500 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
              <IconWhatsApp className="relative h-3.5 w-3.5" />
              <span className="relative">WhatsApp</span>
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone transition-colors hover:border-gold-400/50 hover:text-gold-200 xl:hidden"
            >
              {open ? (
                <IconClose className="h-5 w-5" />
              ) : (
                <IconMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <motion.div
          className="h-px origin-left bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500"
          style={{ scaleX: progress }}
        />
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] bg-ink-950/97 backdrop-blur-xl xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="noise absolute inset-0" />
            {/* h-full + flex-col + my-auto no filho: centraliza quando cabe e
                rola sem cortar o topo quando a tela é baixa. */}
            <div className="flex h-full flex-col overflow-y-auto px-7 pb-6 pt-[calc(var(--header-h)_+_24px)] sm:pb-10">
              <div className="my-auto w-full">
                {nav.map((n, i) => (
                  <motion.button
                    key={n.href}
                    onClick={() => go(n.href)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.6,
                      ease: EASE,
                    }}
                    className="group flex w-full items-center gap-3 border-b border-white/[0.07] py-4 text-left sm:py-5"
                  >
                    <span className="h-1 w-1 shrink-0 rotate-45 bg-gold-400/60 transition-all duration-400 group-hover:scale-150 group-hover:bg-gold-300" />
                    <span className="font-display text-2xl font-extralight tracking-wide text-bone transition-colors group-hover:text-gold-200">
                      {n.label}
                    </span>
                  </motion.button>
                ))}

                <motion.a
                  href={waHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
                  className="mt-6 flex w-full items-center justify-center gap-2.5 sm:mt-9 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink-950"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  Falar com um consultor
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
