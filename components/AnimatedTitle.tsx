"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function AnimatedTitle({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative block h-[1.2em] w-full overflow-hidden mt-1">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient absolute top-0 left-0 right-0 text-center font-display text-2xl font-semibold sm:text-3xl md:text-4xl tracking-tight"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
