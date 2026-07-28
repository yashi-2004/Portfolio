import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RibbonDivider } from "@/components/RibbonDivider";
import { 
  Terminal, 
  Database, 
  BrainCircuit, 
  Binary, 
  LineChart, 
  BarChart, 
  FileText,
  FileCode
} from "lucide-react";

export const metadata: Metadata = {
  title: "Craft — Yashi Srivastava",
  description: "The tools, technologies, and frameworks I rely on to turn ideas into software.",
};

// Unified brand logo renderer
function TechLogo({ name }: { name: string }) {
  const size = "h-7 w-7";
  switch (name.toLowerCase()) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <path fill="#3776AB" d="M12 2A4.9 4.9 0 0 0 7.1 6.9v2.5H12V10h6.8c1.3 0 2.2-1 2.2-2.5V5A3 3 0 0 0 18 2h-6zm-3.5 2.5a.7.7 0 1 1 0 1.5a.7.7 0 0 1 0-1.5z"/>
          <path fill="#FFD343" d="M12 22a4.9 4.9 0 0 0 4.9-4.9v-2.5H12V14H5.2c-1.3 0-2.2 1-2.2 2.5V19a3 3 0 0 0 3 3h6zm3.5-2.5a.7.7 0 1 1 0-1.5a.7.7 0 0 1 0-1.5z"/>
        </svg>
      );
    case "c++":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <path fill="#00599C" d="M12 2L2 6.5V12.7c0 5.7 4.2 10 10 11.3c5.8-1.3 10-5.6 10-11.3V6.5L12 2zm1 14.5h-2v-3.5H8.5v-2H11V8.5h2V11h2.5v2H13v3.5z"/>
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <rect x="0" y="0" width="24" height="24" fill="#f7df1e" rx="3"/>
          <text x="13" y="18" fill="#000000" fontSize="10" fontWeight="900" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <rect x="0" y="0" width="24" height="24" fill="#3178c6" rx="3"/>
          <text x="13" y="18" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={size}>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "next.js":
      return (
        <svg viewBox="0 0 180 180" className={`${size} text-ink dark:text-cream`} fill="currentColor">
          <path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm27.818 135.539L83.99 87.21l-.093 48.328H71.5V53.644h12.398l33.828 48.328.093-48.328h12.399v81.895h-12.399z" />
        </svg>
      );
    case "tailwind css":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <path fill="#38bdf8" d="M12.005 18.125c-2.758 0-4.254-1.4-4.487-4.2.378.077.726.12 1.04.12 1.954 0 3.022-1.163 4.488-2.85 1.463-1.687 2.925-2.7 5.485-2.7 2.758 0 4.254 1.4 4.487 4.2-.378-.077-.726-.12-1.04-.12-1.954 0-3.022 1.163-4.488 2.85-1.463 1.687-2.925 2.7-5.485 2.7zm-6.52-2.7c-2.758 0-4.254-1.4-4.487-4.2.378.077.726.12 1.04.12 1.954 0 3.022-1.163 4.488-2.85C7.99 6.808 9.45 5.8 12.012 5.8c2.758 0 4.254 1.4 4.487 4.2-.378-.077-.726-.12-1.04-.12-1.954 0-3.022 1.163-4.488 2.85-1.463 1.687-2.925 2.7-5.485 2.7z" />
        </svg>
      );
    case "pytorch":
      return (
        <svg viewBox="0 0 24 24" className={size} fill="#EE4C2C">
          <path d="M12 1.5C12 1.5 8 6 8 9.5a4 4 0 0 0 8 0c0-3.5-4-8-4-8zm-2 15h4v6h-4v-6z"/>
        </svg>
      );
    case "scikit-learn":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <path fill="#F89938" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm2 14.5a2.5 2.5 0 1 1-2.5-2.5a2.5 2.5 0 0 1 2.5 2.5z"/>
        </svg>
      );
    case "sql":
      return <Database className={`${size} text-lavender-dark`} strokeWidth={1.5} />;
    case "git":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <path fill="#f05032" d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.9 3.4l2.8 2.8c.6-.2 1.3-.1 1.8.4.5.5.6 1.3.3 1.9l2.9 2.9c.6-.3 1.4-.2 1.9.3.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.2-.3-1.8L12.9 9.6c-.2.6-.9 1.1-1.7 1.1-.9 0-1.6-.6-1.8-1.5L6.6 12c.3.6.2 1.3-.3 1.8-.7.7-1.8.7-2.5 0s-.7-1.8 0-2.5c.5-.5 1.2-.6 1.8-.3L8.4 8.2c-.3-.2-.5-.6-.5-1.1 0-.6.3-1.1.8-1.4L6 .9C5.6.5 4.9.5 4.5.9L.7 4.7c-.4.4-.4 1.1 0 1.5l10.2 10.2c.4.4 1.1.4 1.5 0l10.9-10.9c.4-.4.4-1.1 0-1.6z"/>
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={`${size} text-ink dark:text-cream`} fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case "framer motion":
      return (
        <svg viewBox="0 0 24 24" className={`${size} text-ink dark:text-cream`} fill="currentColor">
          <path d="M12 0L24 12H12L0 24V12h12L24 0H12z"/>
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className={`${size} text-ink dark:text-cream`} fill="currentColor">
          <path d="M12 2L2 22h20L12 2z"/>
        </svg>
      );
    case "tensorflow":
      return (
        <svg viewBox="0 0 24 24" className={size} fill="#FF6F00">
          <path d="M12 0L1 6.3v11.4L12 24l11-6.3V6.3L12 0zm0 3.3l8 4.6v9.2l-8 4.6-8-4.6V7.9l8-4.6z"/>
        </svg>
      );
    case "keras":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <rect x="0" y="0" width="24" height="24" fill="#D00000" rx="3"/>
          <text x="14" y="19" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">K</text>
        </svg>
      );
    case "numpy":
      return <Binary className={`${size} text-babyblue-dark`} strokeWidth={1.5} />;
    case "pandas":
      return <LineChart className={`${size} text-lavender-dark`} strokeWidth={1.5} />;
    case "opencv":
      return <BrainCircuit className={`${size} text-blush-dark`} strokeWidth={1.5} />;
    case "tableau":
      return <BarChart className={`${size} text-babyblue-dark`} strokeWidth={1.5} />;
    case "linux":
      return <Terminal className={`${size} text-ink dark:text-cream`} strokeWidth={1.5} />;
    case "vs code":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <path fill="#007ACC" d="M23.9 6.5l-2.4-1.9c-.3-.2-.7-.2-1 0L12 11.2l-4.5-3.6c-.3-.2-.7-.2-1 0L.1 11.1c-.2.2-.2.5 0 .7l4.5 3.6-4.5 3.6c-.2.2-.2.5 0 .7l6.4 5.1c.3.2.7.2 1 0l4.5-3.6 8.5 6.7c.3.2.7.2 1 0l2.4-1.9c.2-.2.2-.5 0-.7L18.8 12l5.1-4.8c.2-.2.2-.5 0-.7zM16 12L8.5 6.1l1.5-1.2L18.5 12 10 17.1l-1.5-1.2L16 12z"/>
        </svg>
      );
    case "jupyter notebook":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <circle cx="12" cy="12" r="6" fill="none" stroke="#F37626" strokeWidth="2"/>
          <ellipse cx="12" cy="12" rx="9" ry="2" fill="none" stroke="#F37626" strokeWidth="1.5" transform="rotate(30, 12, 12)"/>
        </svg>
      );
    case "google colab":
      return (
        <svg viewBox="0 0 24 24" className={size}>
          <path fill="#F9AB00" d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5s-5-2.2-5-5zm5-7c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7z"/>
        </svg>
      );
    case "latex":
      return <FileText className={`${size} text-lavender-dark`} strokeWidth={1.5} />;
    default:
      return <FileCode className={size} strokeWidth={1.5} />;
  }
}

export default function SkillsPage() {
  const coreStack = [
    "Python", "C++", "JavaScript", "TypeScript", 
    "React", "Next.js", "Tailwind CSS", "PyTorch", 
    "Scikit-learn", "SQL", "Git", "GitHub"
  ];

  const aiStack = [
    { name: "PyTorch", desc: "Deep learning models, tensor computation, and research experimentation." },
    { name: "TensorFlow", desc: "Building and deploying machine learning models across platforms." },
    { name: "Scikit-learn", desc: "Classical machine learning algorithms, preprocessing, and model evaluation." },
    { name: "Keras", desc: "High-level API for rapid deep learning prototyping and neural network modeling." },
    { name: "NumPy", desc: "Scientific computing, multi-dimensional arrays, and mathematical operations." },
    { name: "Pandas", desc: "Data manipulation, analysis, and cleaning of structured datasets." },
    { name: "OpenCV", desc: "Real-time computer vision, image processing, and video analysis." },
    { name: "Tableau", desc: "Business intelligence, interactive dashboard creation, and data visualization." },
  ];

  const toolkit = ["Git", "GitHub", "Linux", "VS Code", "Jupyter Notebook", "Google Colab", "LaTeX"];

  const exploring = [
    "LangChain",
    "LangGraph",
    "Model Context Protocol (MCP)",
    "Retrieval-Augmented Generation (RAG)",
    "Agentic AI"
  ];

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Craft"
        title="Toolbox"
        description="The tools, technologies, and frameworks I rely on to turn ideas into software."
      />

      {/* 1. Core Stack Grid */}
      <section className="mx-auto mt-14 max-w-4xl px-6 py-8">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Daily Drivers
          </p>
          <h2 className="font-display text-3xl font-semibold">Core Stack</h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {coreStack.map((tech) => (
            <Reveal key={tech} className="glass flex flex-col items-center justify-center text-center rounded-xl2 p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:scale-[1.03] group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blush-dark to-lavender-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <TechLogo name={tech} />
              <span className="mt-3 text-sm font-semibold text-ink dark:text-cream">{tech}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2. Portfolio Stack (Stand-out Section) */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-lavender/30 bg-gradient-to-br from-white/80 to-lavender/10 p-8 shadow-soft dark:border-charcoal-border dark:from-charcoal-surface/80 dark:to-charcoal-surface/10">
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blush-dark/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 h-36 w-36 rounded-full bg-lavender-dark/10 blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">
              <div className="max-w-md">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
                  Practical Application
                </p>
                <h3 className="font-display text-2xl font-bold text-ink dark:text-cream">Built This Portfolio With</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-cream/70">
                  This portfolio was designed and developed using this stack. A hands-on demonstration of clean typography, semantic layout structure, and performant web micro-animations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:max-w-[320px] justify-start md:justify-end">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"].map((tech) => (
                  <div key={tech} className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm border border-lavender/25 dark:border-charcoal-border hover:shadow-soft hover:scale-105 transition-all duration-300">
                    <TechLogo name={tech} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <RibbonDivider />

      {/* 3. AI & Data Ecosystem */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Data Science
          </p>
          <h2 className="font-display text-3xl font-semibold">Artificial Intelligence & Data</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {aiStack.map((tech) => (
            <Reveal key={tech.name} className="glass flex items-start gap-4 rounded-xl2 p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:scale-[1.02] border border-lavender/10 dark:border-charcoal-border/30">
              <div className="p-3 bg-lavender/20 dark:bg-lavender-dark/10 rounded-xl flex-none">
                <TechLogo name={tech.name} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink dark:text-cream">{tech.name}</h3>
                <p className="mt-1 text-xs text-ink/70 dark:text-cream/70 leading-relaxed">{tech.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Developer Toolkit */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Environments
          </p>
          <h2 className="font-display text-3xl font-semibold">Developer Toolkit</h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {toolkit.map((tech) => (
            <Reveal key={tech} className="glass flex items-center gap-3 rounded-xl2 p-4 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:scale-102 border border-lavender/10 dark:border-charcoal-border/30">
              <TechLogo name={tech} />
              <span className="text-sm font-semibold text-ink/80 dark:text-cream/80">{tech}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <RibbonDivider />

      {/* 5. Currently Exploring */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Reveal className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blush-dark">
            Horizon
          </p>
          <h2 className="font-display text-3xl font-semibold">Currently Exploring</h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-3">
          {exploring.map((tech) => (
            <Reveal key={tech} className="rounded-full border border-dashed border-lavender-dark/30 dark:border-charcoal-border px-5 py-2.5 text-xs font-semibold text-ink/60 dark:text-cream/60 bg-white/20 dark:bg-charcoal-surface/10 hover:border-blush-dark/50 hover:text-blush-dark dark:hover:text-cream transition-colors duration-300 cursor-default">
              {tech}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
