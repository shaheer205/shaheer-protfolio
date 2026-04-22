import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const PROJECTS = [
  {
    title: "SMC Trading Bot",
    description:
      "Smart Money Concepts bot that detects order blocks, liquidity sweeps and structure shifts — sending real-time signals via Telegram.",
    tags: ["Python", "Pandas", "MT5", "Telegram API"],
    github: "#",
    demo: "#",
    accent: "from-primary to-secondary",
  },
  {
    title: "Web Automation Suite",
    description:
      "Selenium-based automation tool that handles repetitive form-fills, data entry, and multi-account workflows at scale.",
    tags: ["Selenium", "Python", "Async", "CLI"],
    github: "#",
    demo: "#",
    accent: "from-secondary to-accent",
  },
  {
    title: "AI Chatbot",
    description:
      "Custom GPT-powered chatbot with knowledge base ingestion, memory, and a clean web UI for client deployments.",
    tags: ["OpenAI", "FastAPI", "RAG", "React"],
    github: "#",
    demo: "#",
    accent: "from-accent to-primary",
  },
  {
    title: "Daily Routine Web App",
    description:
      "A productivity web app to plan, track and review daily routines — with streaks, analytics and clean glass UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
    accent: "from-primary to-accent",
  },
];

const ProjectCard = ({ p, idx }: { p: typeof PROJECTS[number]; idx: number }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <article
      ref={ref}
      className={`group relative glass rounded-3xl p-7 hover-lift overflow-hidden ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${idx * 120}ms` }}
    >
      {/* Glow accent */}
      <div
        className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-display text-2xl font-bold">{p.title}</h3>
          <div className="flex gap-2 shrink-0">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} GitHub`}
              className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} live demo`}
              className="h-9 w-9 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-mono bg-muted text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="text-center mb-16">
        <span className="font-mono text-sm text-primary">// projects</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Selected <span className="text-gradient">work</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Real projects, real outcomes. Each one solves a concrete problem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} idx={i} />
        ))}
      </div>
    </section>
  );
};
