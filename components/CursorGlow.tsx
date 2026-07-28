"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    const handleMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[300px] w-[300px] rounded-full bg-lavender/20 blur-3xl transition-transform duration-300 ease-out dark:bg-lavender-dark/10 md:block"
      aria-hidden
    />
  );
}
