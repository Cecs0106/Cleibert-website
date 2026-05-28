import { motion } from "framer-motion";

const facts = [
  { k: "Years shipping", v: "5+" },
  { k: "Companies co-founded", v: "2" },
  { k: "Stack focus", v: "Vue · React" },
  { k: "Time zone", v: "GMT-4" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div>
          <div className="font-mono text-xs text-primary mb-3">/ 03 — PROFILE</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Engineering meets <span className="text-primary">ownership</span>.
          </h2>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed text-foreground/85 text-balance"
          >
            Combino la disciplina de un <span className="text-primary">frontend engineer</span> con la visión de un co-fundador.
            Esa intersección me permite diseñar software que no solo se ve impecable, sino que impacta directamente en la
            eficiencia operativa y la rentabilidad de cada negocio para el que construyo. Cada componente, cada flujo y cada
            integración existen para mover una métrica concreta.
          </motion.p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
            {facts.map((f, i) => (
              <motion.div
                key={f.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="font-display text-3xl font-bold tracking-tight text-primary">{f.v}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">{f.k}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}