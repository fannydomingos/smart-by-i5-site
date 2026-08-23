"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* Reveal — fade + slide on enter viewport                             */
/* ------------------------------------------------------------------ */

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 34 },
  down: { x: 0, y: -34 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  direction = "up",
  className,
  amount = 0.3,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
  once?: boolean;
}) {
  const o = offset[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger container + item                                            */
/* ------------------------------------------------------------------ */

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Stagger({
  children,
  className,
  amount = 0.25,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SplitWords — word-by-word masked reveal for headlines               */
/* ------------------------------------------------------------------ */

export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
  as: Tag = "span",
  highlight = [],
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  /** indexes (0-based) of words that get the gold treatment */
  highlight?: number[];
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag] as typeof motion.span;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.16em] -mb-[0.16em]"
          aria-hidden
        >
          <motion.span
            className={`inline-block ${
              highlight.includes(i) ? "text-gold-grad" : ""
            } ${wordClassName ?? ""}`}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 1, ease: EASE },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ */
/* Line — animated hairline that draws itself                          */
/* ------------------------------------------------------------------ */

export function GoldLine({
  className = "",
  delay = 0,
  origin = "left",
}: {
  className?: string;
  delay?: number;
  origin?: "left" | "center";
}) {
  return (
    <motion.span
      className={`block h-px bg-gradient-to-r from-gold-400/70 via-gold-400/40 to-transparent ${className}`}
      style={{ transformOrigin: origin }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* ImgNote — legenda obrigatória sob imagens de divulgação            */
/* ------------------------------------------------------------------ */

export function ImgNote({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.6rem] font-light leading-relaxed text-muted/75 ${className}`}
    >
      {children ?? "Imagem ilustrativa."}
    </p>
  );
}
