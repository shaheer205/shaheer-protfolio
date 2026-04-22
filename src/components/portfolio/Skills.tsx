import { useInView } from "@/hooks/useInView";

const CATEGORIES = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 78 },
      { name: "TypeScript", level: 70 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Selenium / Playwright", level: 92 },
      { name: "FastAPI / Flask", level: 88 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "Git & CI/CD", level: 80 },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "AI / LLM Integrations", level: 85 },
      { name: "Web Scraping", level: 93 },
      { name: "Trading / Algo Systems", level: 82 },
      { name: "REST & WebSocket APIs", level: 87 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="text-center mb-16">
        <span className="font-mono text-sm text-primary">// skills</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Tools of the <span className="text-gradient">trade</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          A focused stack chosen for speed, reliability, and shipping production-grade software.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, ci) => (
          <div key={cat.title} className="glass rounded-2xl p-6 hover-lift">
            <h3 className="font-display text-xl font-semibold mb-6 text-gradient">
              {cat.title}
            </h3>
            <div className="space-y-5">
              {cat.skills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={ci * 100 + i * 80} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
