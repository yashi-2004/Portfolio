"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ExternalLink, Sparkle } from "lucide-react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass group flex flex-col overflow-hidden rounded-xl2 shadow-soft transition-shadow hover:shadow-lg dark:shadow-soft-dark"
    >
      <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-blush/50 via-lavender/50 to-babyblue/50 dark:from-blush-dark/20 dark:via-lavender-dark/20 dark:to-periwinkle/15">
        <Sparkle className="h-8 w-8 text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">{project.problem}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-lavender/20 px-2.5 py-0.5 text-xs font-medium text-ink/70 dark:bg-lavender-dark/15 dark:text-cream/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-3 border-t border-lavender/20 pt-4 text-sm dark:border-charcoal-border">
                <div>
                  <p className="font-semibold text-blush-dark">Solution</p>
                  <p className="mt-1 text-ink/70 dark:text-cream/70">{project.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-blush-dark">Results</p>
                  <ul className="mt-1 list-inside list-disc space-y-0.5 text-ink/70 dark:text-cream/70">
                    {project.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-sm font-medium text-ink/70 hover:text-ink dark:text-cream/70 dark:hover:text-cream"
          >
            {open ? "Show less" : "Show details"}
            <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-lavender/40 hover:bg-lavender/20 dark:border-charcoal-border"
            >
              <Github size={14} />
            </a>
            <span
              aria-label="Demo coming soon"
              title="Demo coming soon"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-lavender/20 text-ink/30 dark:border-charcoal-border dark:text-cream/30"
            >
              <ExternalLink size={14} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
