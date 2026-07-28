"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEggs() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    console.log(
      "%c✨ Hi, curious developer!",
      "font-size: 16px; font-weight: bold; color: #C9B6E4;"
    );
    console.log(
      "%cThanks for peeking under the hood. Let's build something together → yashisrivastava2510@gmail.com",
      "color: #F3C6D0;"
    );

    let position = 0;
    const handler = (e: KeyboardEvent) => {
      position = e.key === KONAMI[position] ? position + 1 : 0;
      if (position === KONAMI.length) {
        setShowConfetti(true);
        position = 0;
        setTimeout(() => setShowConfetti(false), 3000);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const sparkles = Array.from({ length: 24 });

  return (
    <AnimatePresence>
      {showConfetti && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {sparkles.map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl"
              style={{ left: `${Math.random() * 100}%`, top: "-5%" }}
              initial={{ y: -40, opacity: 0, rotate: 0 }}
              animate={{
                y: "110vh",
                opacity: [0, 1, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 2.4 + Math.random(), ease: "easeIn" }}
            >
              {["✨", "💖", "🩵", "💜"][i % 4]}
            </motion.span>
          ))}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-3 font-display text-lg text-gradient shadow-soft"
          >
            You found the Konami code! ✨
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
