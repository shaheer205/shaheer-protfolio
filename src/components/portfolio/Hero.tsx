import { ArrowRight, Download, Github } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { useTypewriter } from "@/hooks/useTypewriter";

export const Hero = () => {
  const typed = useTypewriter();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <ParticleField />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            Available for freelance & internships
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up">
          Hi, I'm <span className="text-gradient">Shaheer</span>
        </h1>

        <div
          className="font-mono text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 h-10 animate-fade-in-up"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          <span className="text-foreground">I build </span>
          <span className="text-primary caret">{typed}</span>
        </div>

        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          I craft high-performance Python systems — from intelligent trading bots
          and automation pipelines to AI-powered tools that ship real outcomes
          for real clients.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Hire Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass border-gradient text-foreground font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <a
            href="https://github.com/shaheer205"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          {[
            { num: "20+", label: "Projects Built" },
            { num: "3+", label: "Years Coding" },
            { num: "100%", label: "Client Focused" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 md:p-6">
              <div className="font-display text-2xl md:text-4xl font-bold text-gradient">
                {s.num}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};
