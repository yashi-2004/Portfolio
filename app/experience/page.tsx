import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TimelineItem } from "@/components/TimelineItem";
import { Reveal } from "@/components/Reveal";
import { FlaskConical, Award } from "lucide-react";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience — Yashi Srivastava",
  description: "Research internship and hands-on deep learning experience.",
};

export default function ExperiencePage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Where I've worked"
        title="Experience"
        description="Working with data, one problem at a time."
      />

      <section className="mx-auto mt-14 max-w-2xl px-6">
        {experience.map((exp, i) => (
          <TimelineItem
            key={exp.role}
            title={exp.role}
            subtitle={`${exp.org} · ${exp.supervisor}`}
            duration={exp.duration}
            icon={<FlaskConical size={15} className="text-lavender-dark" />}
            isLast={i === experience.length - 1}
          >
            <ul className="list-inside list-disc space-y-1.5">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {exp.hasCertificate && (
              <Reveal className="mt-4 inline-flex items-center gap-2 rounded-full bg-babyblue/30 px-3 py-1.5 text-xs font-medium text-ink dark:bg-babyblue/10 dark:text-cream">
                <Award size={13} /> Certificate of completion available
              </Reveal>
            )}
          </TimelineItem>
        ))}
      </section>
    </div>
  );
}
