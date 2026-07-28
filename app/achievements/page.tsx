import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TimelineItem } from "@/components/TimelineItem";
import { Trophy, Users } from "lucide-react";
import { achievements, leadership } from "@/lib/data";

export const metadata: Metadata = {
  title: "Highlights — Yashi Srivastava",
  description: "Scholarships, cohorts, and community leadership in computing.",
};

export default function AchievementsPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Recognition & Impact"
        title="Highlights"
        description="Scholarships, selective cohorts, and technical community leadership."
      />

      {/* Achievements Section */}
      <section className="mx-auto mt-14 max-w-5xl px-6">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Recognition
          </p>
          <h2 className="font-display text-2xl font-semibold">Scholarships & Cohorts</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="glass flex flex-col rounded-xl2 p-6 shadow-soft">
              <Trophy size={20} className="text-blush-dark" />
              <h3 className="mt-3 font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-1 text-xs font-medium text-lavender-dark">{item.org}{item.year ? ` · ${item.year}` : ""}</p>
              <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="mx-auto mt-20 max-w-2xl px-6">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Community
          </p>
          <h2 className="font-display text-2xl font-semibold">Leadership Roles</h2>
        </Reveal>
        <div>
          {leadership.map((role, i) => (
            <TimelineItem
              key={role.title}
              title={role.title}
              duration={role.duration}
              icon={<Users size={15} className="text-lavender-dark" />}
              isLast={i === leadership.length - 1}
            >
              {role.description}
            </TimelineItem>
          ))}
        </div>
      </section>
    </div>
  );
}
