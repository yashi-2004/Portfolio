import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — Yashi Srivastava",
  description: "A visual look at talks, events, and behind-the-scenes moments.",
};

export default function GalleryPage() {
  return (
    <div className="pb-24">
      <PageHero eyebrow="Coming soon" title="Gallery" description="Talks, events, and behind-the-scenes snapshots." />
      <section className="mx-auto mt-14 grid max-w-3xl gap-4 px-6 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal
            key={i}
            delay={i * 0.1}
            className="glass flex aspect-square items-center justify-center rounded-xl2 shadow-soft"
          >
            <ImageIcon size={22} className="text-lavender-dark/60" />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
