import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Yashi Srivastava",
  description: "Get in touch for research, engineering roles, or a chat about AI.",
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Let's talk"
        title="Contact"
        description="Open to research collaborations, AI/ML engineering roles, and interesting conversations."
      />

      <section className="mx-auto mt-14 px-6">
        <ContactForm />
      </section>

      <section className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-4 px-6">
        <Reveal>
          <Link
            href={profile.links.github}
            target="_blank"
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft hover:shadow-lg"
          >
            <Github size={15} /> GitHub
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <Link
            href={profile.links.linkedin}
            target="_blank"
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft hover:shadow-lg"
          >
            <Linkedin size={15} /> LinkedIn
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href={profile.links.leetcode}
            target="_blank"
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft hover:shadow-lg"
          >
            <Code2 size={15} /> LeetCode
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={`mailto:${profile.email}`}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-soft hover:shadow-lg"
          >
            <Mail size={15} /> {profile.email}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
