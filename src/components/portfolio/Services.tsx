import { Bot, Brain, Code, Globe, Plug, Workflow } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const SERVICES = [
  {
    icon: Workflow,
    title: "Python Automation",
    desc: "Custom scripts and tools that eliminate repetitive work and save hours weekly.",
  },
  {
    icon: Bot,
    title: "Bots Development",
    desc: "Trading bots, Telegram bots, Discord bots — built reliable and ready to deploy.",
  },
  {
    icon: Globe,
    title: "Web Scraping",
    desc: "Robust scrapers with proxy rotation, captcha handling, and clean structured exports.",
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Connect your stack — Stripe, Telegram, OpenAI, Twilio, custom REST & WebSocket APIs.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "LLM-powered chatbots, agents, and intelligent automations tailored to your data.",
  },
  {
    icon: Code,
    title: "Custom Tools",
    desc: "Internal dashboards, CLIs, and bespoke Python apps — built around your workflow.",
  },
];

const ServiceCard = ({ s, i }: { s: typeof SERVICES[number]; i: number }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 hover-lift group ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${i * 80}ms` }}
    >
      <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
        <s.icon size={22} />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
    </div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="section">
      <div className="text-center mb-16">
        <span className="font-mono text-sm text-primary">// services</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          What I <span className="text-gradient">offer</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Freelance services tailored for founders, agencies, and businesses
          that need real Python firepower.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} s={s} i={i} />
        ))}
      </div>
    </section>
  );
};
