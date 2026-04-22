import { useInView } from "@/hooks/useInView";

const MILESTONES = [
  {
    year: "2022",
    title: "First Lines of Python",
    desc: "Started learning Python — fell in love with automation and small scripts that solved real problems.",
  },
  {
    year: "2023",
    title: "Web Scraping & Bots",
    desc: "Built my first scrapers and Telegram bots. Started exploring Selenium and async workflows.",
  },
  {
    year: "2024",
    title: "Trading & AI",
    desc: "Dove deep into algorithmic trading (SMC), LLM integrations, and full-stack web with FastAPI + React.",
  },
  {
    year: "2025",
    title: "Freelancing & Clients",
    desc: "Started serving clients on Fiverr — delivering automation, AI tools and bots to a global audience.",
  },
];

const Item = ({
  m,
  i,
}: {
  m: typeof MILESTONES[number];
  i: number;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const left = i % 2 === 0;
  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${i * 120}ms` }}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
        <div className="h-4 w-4 rounded-full bg-gradient-primary glow-primary" />
      </div>

      <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`}>
        <div className="glass rounded-2xl p-6 hover-lift inline-block w-full">
          <div className="font-mono text-sm text-primary mb-2">{m.year}</div>
          <h3 className="font-display text-xl font-bold mb-2">{m.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
        </div>
      </div>
      <div className={left ? "" : "md:order-1"} />
    </div>
  );
};

export const Timeline = () => {
  return (
    <section id="timeline" className="section">
      <div className="text-center mb-16">
        <span className="font-mono text-sm text-primary">// journey</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          The <span className="text-gradient">growth path</span>
        </h2>
      </div>

      <div className="relative space-y-12">
        {/* Line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-40" />
        {MILESTONES.map((m, i) => (
          <Item key={m.year} m={m} i={i} />
        ))}
      </div>
    </section>
  );
};
