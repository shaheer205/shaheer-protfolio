import { useInView } from "@/hooks/useInView";
import { Code2, Sparkles, Zap } from "lucide-react";

export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Python",
      desc: "Modular, tested, production-ready code that scales from script to system.",
    },
    {
      icon: Zap,
      title: "Automation First",
      desc: "I turn repetitive workflows into reliable bots that save hours every day.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      desc: "Integrating LLMs, agents and intelligent decision layers into real apps.",
    },
  ];

  return (
    <section id="about" className="section">
      <div ref={ref} className={inView ? "animate-fade-in-up" : "opacity-0"}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-mono text-sm text-primary">// about me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              Engineering ideas into <span className="text-gradient">working software</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              I'm <span className="text-foreground font-semibold">Shaheer</span> — a
              Python developer obsessed with automation, AI, and building tools
              that make people's lives easier. From smart trading bots that
              analyze market structure, to scrapers, AI chatbots, and full web
              apps — I love shipping things that actually work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work with clients on Fiverr and beyond, delivering polished,
              maintainable solutions with clear communication and zero-fluff
              execution.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="glass rounded-2xl p-6 hover-lift group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                    <h.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">
                      {h.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
