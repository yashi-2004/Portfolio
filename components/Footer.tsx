import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-lavender/20 py-10 dark:border-charcoal-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <p className="font-display text-lg">
          <span className="text-gradient">{profile.name}</span>
        </p>
        <p className="max-w-md text-sm text-ink/60 dark:text-cream/60">{profile.tagline}</p>
        <div className="flex items-center gap-4">
          <Link href={profile.links.github} target="_blank" aria-label="GitHub" className="text-ink/60 hover:text-blush-dark dark:text-cream/60">
            <Github size={18} />
          </Link>
          <Link href={profile.links.linkedin} target="_blank" aria-label="LinkedIn" className="text-ink/60 hover:text-blush-dark dark:text-cream/60">
            <Linkedin size={18} />
          </Link>
          <Link href={profile.links.leetcode} target="_blank" aria-label="LeetCode" className="text-ink/60 hover:text-blush-dark dark:text-cream/60">
            <Code2 size={18} />
          </Link>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink/60 hover:text-blush-dark dark:text-cream/60">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-ink/40 dark:text-cream/40">
          © {new Date().getFullYear()} {profile.name}. Built with care, cursor glow, and one too many gradients.
        </p>
      </div>
    </footer>
  );
}
