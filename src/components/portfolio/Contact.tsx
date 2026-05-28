import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-mesh animate-mesh opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="font-mono text-xs text-primary mb-4">/ 04 — CONTACT</div>
        <TextReveal
          text="Let's build something scalable."
          as="h2"
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Conversaciones cortas, propuestas claras. Sin formularios, sin fricción.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="mailto:hello@cleibert.dev" variant="primary">
            Start a conversation <ArrowUpRight className="size-4" />
          </MagneticButton>
          <MagneticButton href="https://linkedin.com/in/cleibertcastillo" variant="ghost">
            Schedule a meeting
          </MagneticButton>
        </motion.div>

        <div className="mt-20 flex items-center justify-center gap-8 text-muted-foreground">
          {[
            { icon: Github, href: "https://github.com/Cecs0106", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/cleibertcastillo", label: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/cleibertecs", label: "Instagram" },
            { icon: Mail, href: "mailto:hello@cleibert.dev", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-primary transition-colors"
            >
              <Icon className="size-5" />
            </a>
          ))}
          <a
            href="https://x.com/Cecs0106"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-sm font-bold hover:text-primary transition-colors"
          >
            X
          </a>
        </div>
      </div>

      <footer className="relative mt-32 pt-8 border-t border-border max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-muted-foreground">
        <div>© 2026 Cleibert Castillo</div>
        <div>Built with intent.</div>
      </footer>
    </section>
  );
}