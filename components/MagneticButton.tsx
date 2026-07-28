"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });
  };

  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        target={target}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:shadow-soft dark:hover:shadow-soft-dark",
          variant === "primary"
            ? "bg-ink text-cream dark:bg-cream dark:text-charcoal"
            : "glass text-ink dark:text-cream",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
