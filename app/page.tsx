import Link from "next/link";
import { ArrowRight, Download, Mail, Github, GraduationCap, Sparkles, Telescope, Target, Heart } from "lucide-react";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { RibbonDivider } from "@/components/RibbonDivider";
import { ProjectCard } from "@/components/ProjectCard";
import { TimelineItem } from "@/components/TimelineItem";
import { profile, projects, education } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-32 pt-32 md:pb-44 md:pt-48">
        <FloatingBlobs />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-[1.15] md:text-6xl flex flex-col items-center gap-4 md:gap-6">
              <span>Hi, I&apos;m <span className="text-gradient">{profile.name.split(" ")[0]}</span></span>
              <AnimatedTitle roles={profile.rotatingRoles} />
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="/projects" variant="primary">
                View Projects <ArrowRight size={15} />
              </MagneticButton>
              <MagneticButton href="/resume" variant="secondary">
                <Download size={15} /> Resume
              </MagneticButton>
              <MagneticButton href="/contact" variant="secondary">
                <Mail size={15} /> Contact
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <RibbonDivider />
        </div>
      </section>

      {/* Bio / About Introduction */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink/80 dark:text-cream/80">{profile.bio}</p>
        </Reveal>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            My Journey
          </p>
          <h2 className="font-display text-3xl font-semibold">Education & Experience</h2>
        </Reveal>
        <TimelineItem
          title="Data Science Intern"
          subtitle="Trigyn Technologies Ltd. — DOITC, Government of Rajasthan · Jaipur, Rajasthan"
          duration="Jun – Aug 2026"
          icon={<Sparkles size={15} className="text-blush-dark" />}
        >
          {/* Data ingestion and validation pipelines in Python, MySQL star-schema optimization, and automated Tableau dashboards. */}
        </TimelineItem>
        <TimelineItem
          title="Research Intern (Deep Learning)"
          subtitle="MNNIT Allahabad · Supervisor: Dr. Joohi Chauhan · Prayagraj, India"
          duration="Jun – Jul 2025"
          icon={<Sparkles size={15} className="text-blush-dark" />}
        >
          {/* Benchmarked PyTorch neural networks (86.5% accuracy, 0.89 ROC-AUC), CNN optimization over 60,000 images, and Federated Learning. */}
        </TimelineItem>
        <TimelineItem
          title={education.institution}
          subtitle={education.degree}
          duration={education.duration}
          icon={<GraduationCap size={15} className="text-lavender-dark" />}
          isLast
        >
          Relevant coursework: {education.coursework.join(", ")}.
        </TimelineItem>
      </section>

      {/* Details Grid: Currently Learning, Goals, Beyond the Keyboard */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Focus & Interests
          </p>
          {/* <h2 className="font-display text-3xl font-semibold">Behind the Scenes</h2> */}
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="glass rounded-xl2 p-6 shadow-soft">
            <div className="mb-3 flex items-center gap-2 text-blush-dark">
              <Telescope size={18} />
              <h3 className="font-display text-lg font-semibold text-ink dark:text-cream">Currently learning</h3>
            </div>
            <ul className="space-y-2 text-sm text-ink/70 dark:text-cream/70">
              {profile.currentlyLearning.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-lavender-dark">•</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="glass rounded-xl2 p-6 shadow-soft">
            <div className="mb-3 flex items-center gap-2 text-blush-dark">
              <Target size={18} />
              <h3 className="font-display text-lg font-semibold text-ink dark:text-cream">Goals</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70">{profile.goals}</p>
          </Reveal>

          <Reveal delay={0.2} className="glass rounded-xl2 p-6 shadow-soft">
            <div className="mb-3 flex items-center gap-2 text-blush-dark">
              <Heart size={18} />
              <h3 className="font-display text-lg font-semibold text-ink dark:text-cream">Beyond the Keyboard</h3>
            </div>
            <ul className="space-y-2 text-sm text-ink/70 dark:text-cream/70">
              {profile.outsideInterests.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-lavender-dark">•</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <RibbonDivider />

      {/* Featured Projects */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Selected Work
          </p>
          <h2 className="font-display text-3xl font-semibold">Featured Project</h2>
        </Reveal>
        <div>
          {projects.slice(0, 1).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <MagneticButton href="/projects" variant="secondary">
            See all projects <ArrowRight size={15} />
          </MagneticButton>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <Reveal>
          <Link
            href={profile.links.github}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-blush-dark dark:text-cream/60"
          >
            <Github size={16} /> Peek at the code behind my projects on GitHub
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
