import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import { TextReveal } from "./TextReveal";
import { MagneticButton } from "./MagneticButton";
import portrait from "@/assets/cleibert.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-mesh animate-mesh pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur text-xs font-mono text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary shadow-glow" />
            Available for select engagements · 2026
          </motion.div>

          <TextReveal
            text="Code that scales."
            as="h1"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance"
          />
          <TextReveal
            text="Systems that run."
            as="h1"
            delay={0.3}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance text-primary"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Desarrollador Web y Co-fundador especializado en convertir flujos operativos complejos en arquitecturas de software fluidas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact" variant="primary">
              Start a project <ArrowUpRight className="size-4" />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              View work
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 flex items-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/Cecs0106", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/cleibertcastillo", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/cleibertecs", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="size-5" />
              </a>
            ))}
            <a
              href="https://x.com/Cecs0106"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold"
            >
              X
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-primary-glow/30 blur-2xl opacity-60" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border shadow-soft">
            <img
              src={portrait}
              alt="Cleibert Castillo, Frontend Engineer and Co-founder"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs font-mono">
              <div className="text-foreground/90">
                <div className="font-bold">Cleibert Castillo</div>
                <div className="text-muted-foreground">Frontend · Co-founder</div>
              </div>
              <div className="text-primary">02° N</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 left-6 md:left-12 text-xs font-mono text-muted-foreground max-w-xs leading-relaxed border-l border-primary pl-3"
      >
        "La única vez que el éxito precede al trabajo es en el diccionario."
      </motion.p>
    </section>
  );
}