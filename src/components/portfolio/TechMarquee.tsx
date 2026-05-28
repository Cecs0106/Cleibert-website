import { motion } from "framer-motion";

const items = [
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "React",
  "Node",
  "HTML5",
  "CSS3",
  "Tailwind",
  "WordPress",
  "WooCommerce",
  "Stripe",
  "WooPayments",
  "Figma",
  "Git",
  "Vite",
  "GSAP",
];

export function TechMarquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Technologies" className="py-12 border-y border-border bg-surface overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-muted-foreground/40 hover:text-primary transition-colors"
            >
              {t} <span className="text-primary">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}