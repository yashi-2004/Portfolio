"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function TimelineItem({
  title,
  subtitle,
  duration,
  children,
  isLast = false,
  icon,
}: {
  title: string;
  subtitle?: string;
  duration?: string;
  children?: ReactNode;
  isLast?: boolean;
  icon?: ReactNode;
}) {
  return (
    <div className="relative flex gap-5 pb-10">
      {!isLast && (
        <span className="absolute left-[15px] top-9 h-full w-px bg-gradient-to-b from-lavender/60 to-transparent dark:from-lavender-dark/40" />
      )}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full shadow-soft"
      >
        {icon}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        className="glass w-full rounded-2xl p-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          {duration && (
            <span className="rounded-full bg-lavender/20 px-3 py-1 text-xs font-medium text-ink/70 dark:bg-lavender-dark/15 dark:text-cream/70">
              {duration}
            </span>
          )}
        </div>
        {subtitle && <p className="mt-1 text-sm text-blush-dark">{subtitle}</p>}
        {children && <div className="mt-3 text-sm text-ink/75 dark:text-cream/75">{children}</div>}
      </motion.div>
    </div>
  );
}
