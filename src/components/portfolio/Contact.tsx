import { useState } from "react";
import { Github, Linkedin, Mail, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message ready! Opening your email client…");
      window.location.href = `mailto:hello@shaheer.dev?subject=Project inquiry from ${encodeURIComponent(
        form.name,
      )}&body=${encodeURIComponent(form.message + "\n\n— " + form.name + " (" + form.email + ")")}`;
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="text-center mb-16">
        <span className="font-mono text-sm text-primary">// contact</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Let's build <span className="text-gradient">something</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Have a project in mind? I'm open to freelance work, collaborations,
          and internships.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          <a
            href="mailto:shaheershaikh868@gmail.com"
            className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift group"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-mono">Email</div>
              <div className="font-medium">Mail</div>
            </div>
          </a>

          <a
            href="https://www.fiverr.com/sellers/design_world11/edit"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift group"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
              Fi
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground font-mono">Fiverr</div>
              <div className="font-medium">fiverr.com/shaheer</div>
            </div>
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="https://github.com/shaheer205"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift group"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
              <Github size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground font-mono">GitHub</div>
              <div className="font-medium">github.com/shaheer</div>
            </div>
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-shaheer-308538372/"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift group"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
              <Linkedin size={20} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground font-mono">LinkedIn</div>
              <div className="font-medium">linkedin.com/in/shaheer</div>
            </div>
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project…"
              className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {sending ? "Sending…" : (<>Send message <Send size={16} /></>)}
          </button>
        </form>
      </div>
    </section>
  );
};
