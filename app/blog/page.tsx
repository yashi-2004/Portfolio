import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Yashi Srivastava",
  description: "Notes on machine learning, research, and everything in between.",
};

export default function BlogPage() {
  return (
    <div className="pb-24">
      <PageHero eyebrow="Coming soon" title="Blog" description="Notes on models, papers, and things I learn the hard way." />
      <section className="mx-auto mt-14 max-w-md px-6 text-center">
        <Reveal className="glass rounded-xl2 p-10 shadow-soft">
          <PenLine size={28} className="mx-auto text-lavender-dark" />
          <p className="mt-4 text-sm text-ink/70 dark:text-cream/70">
            First post is brewing. Check back soon, or reach out if you&apos;d like a preview.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
