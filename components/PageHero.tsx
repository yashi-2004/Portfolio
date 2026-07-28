"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-6 pt-16 text-center md:pt-24"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-ink/70 dark:text-cream/70">{description}</p>
      )}
      {children}
    </motion.div>
  );
}
