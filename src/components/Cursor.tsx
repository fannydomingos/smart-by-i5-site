"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) setVisible(true);
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%)`;
      }

      const el = (e.target as HTMLElement)?.closest?.(
        "[data-cursor], a, button"
      ) as HTMLElement | null;

      if (el) {
        setActive(true);
        setLabel(el.dataset?.cursor && el.dataset.cursor !== "true" ? el.dataset.cursor : null);
      } else {
        setActive(false);
        setLabel(null);
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      }
      frame = requestAnimationFrame(loop);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-custom-cursor");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[150] hidden [@media(pointer:fine)]:block"
      aria-hidden
      style={{ opacity: visible ? 1 : 0, transition: "opacity .25s" }}
    >
      <div
        ref={dot}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold-200 transition-[width,height,opacity] duration-300"
        style={{ opacity: active ? 0 : 1 }}
      />
      <div
        ref={ring}
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border border-gold-300/60 transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          width: active ? (label ? 84 : 46) : 30,
          height: active ? (label ? 84 : 46) : 30,
          backgroundColor: active
            ? "rgba(207,165,104,0.14)"
            : "rgba(207,165,104,0)",
        }}
      >
        {label && (
          <span className="whitespace-nowrap px-2 text-center font-display text-[0.55rem] font-light uppercase tracking-[0.18em] text-gold-200">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
