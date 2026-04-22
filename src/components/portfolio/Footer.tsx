import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold text-gradient">
          &lt;Shaheer/&gt;
        </div>

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Shaheer. Built with Python energy & React.
        </p>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/shaheer205", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-shaheer-308538372/", label: "LinkedIn" },
            { Icon: Mail, href: "shaheershaikh868@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
