import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Yashi Srivastava",
  description: "Backend architectures, Agentic AI workflows, and scalable systems.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Selected work"
        title="Projects"
        description="An evolving collection of ideas, experiments, and lessons."
      />

      <section className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>
    </div>
  );
}
