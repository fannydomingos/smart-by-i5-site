"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconWhatsApp } from "./ui/Icons";
import { waHref } from "@/lib/site";

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = window.setTimeout(() => setExpanded(true), 900);
    const t2 = window.setTimeout(() => setExpanded(false), 5200);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          data-cursor="whatsapp"
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          className="group fixed bottom-5 right-5 z-[130] flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] py-3.5 pl-4 pr-4 shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)] sm:bottom-8 sm:right-8"
        >
          <span className="absolute inset-0 rounded-full ring-1 ring-white/25" />
          <span className="pointer-events-none absolute -inset-2 rounded-full border border-[#25D366]/40 animate-pulse-ring" />
          <IconWhatsApp className="relative h-6 w-6 shrink-0 text-white" />
          <motion.span
            className="relative overflow-hidden whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white"
            initial={false}
            animate={{
              width: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
              marginRight: expanded ? 4 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Fale conosco
          </motion.span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
