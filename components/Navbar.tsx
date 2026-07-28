"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/achievements", label: "Highlights" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 md:px-6">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 shadow-soft dark:shadow-soft-dark md:px-6">
        {/* Left: Logo */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="relative group inline-flex items-center font-display text-lg font-semibold transition-transform duration-300 hover:scale-[1.02] pr-5">
            <span className="text-gradient inline-block">Yashi</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-blush-dark opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-0.5 group-hover:animate-sparkle">
              <Sparkles size={13} />
            </span>
          </Link>
        </div>

        {/* Middle: Links (Mathematically Centered) */}
        <div className="hidden items-center justify-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-lavender/20 dark:hover:bg-lavender-dark/15",
                pathname === link.href
                  ? "bg-blush/30 text-ink dark:bg-blush-dark/20 dark:text-cream"
                  : "text-ink/70 dark:text-cream/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Controls */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-lavender/40 dark:border-charcoal-border lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl p-4 shadow-soft lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-lavender/20",
                  pathname === link.href
                    ? "bg-blush/30 text-ink dark:bg-blush-dark/20 dark:text-cream"
                    : "text-ink/70 dark:text-cream/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
