import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MagneticButton } from "@/components/MagneticButton";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Yashi Srivastava",
  description: "View or download my resume.",
};

const RESUME_PATH = "/resume/Resume Yashi Srivastava.pdf";

export default function ResumePage() {
  return (
    <div className="pb-24">
      <PageHero eyebrow="The full picture" title="Resume">
        <div className="mt-6 flex justify-center">
          <MagneticButton href={RESUME_PATH} variant="primary" target="_blank">
            <Download size={15} /> Download PDF
          </MagneticButton>
        </div>
      </PageHero>

      <section className="mx-auto mt-12 max-w-4xl px-6">
        <div className="glass overflow-hidden rounded-xl2 shadow-soft">
          <iframe
            src={RESUME_PATH}
            title="Yashi Srivastava Resume"
            className="h-[80vh] w-full"
            aria-label="Embedded resume PDF viewer"
          />
        </div>
        <p className="mt-3 text-center text-xs text-ink/50 dark:text-cream/50">
          If the preview doesn&apos;t load on your device, use the download button above.
        </p>
      </section>
    </div>
  );
}
