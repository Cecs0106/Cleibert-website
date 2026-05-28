import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Study {
  index: string;
  name: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  metric: string;
  tags: string[];
}

const studies: Study[] = [
  {
    index: "01",
    name: "Aion Wellness",
    role: "SaaS Multi-tenant · Co-founder",
    challenge: "Digitalización operativa completa de gimnasios eliminando registros manuales.",
    solution: "Sistema modular en Vue.js con gestión multi-moneda y control de accesos por semáforo dinámico.",
    impact: "Reducción del 30% en la morosidad mediante control de accesos automatizado.",
    metric: "-30%",
    tags: ["Vue.js", "SaaS", "Multi-tenant"],
  },
  {
    index: "02",
    name: "Imperium Business",
    role: "Corporate Site & Event Platform",
    challenge: "Plataforma integral para evento corporativo en Miami con alto volumen transaccional.",
    solution: "Arquitectura web optimizada con integración automatizada de Stripe y WooPayments.",
    impact: "100% de ventas automatizadas y control de acceso mediante códigos QR.",
    metric: "100%",
    tags: ["Stripe", "WooPayments", "QR Access"],
  },
  {
    index: "03",
    name: "Next Wrld",
    role: "Agency Platform · Co-founder",
    challenge: "Landing page institucional de alta conversión para una agencia digital emergente.",
    solution: "Desarrollo en React con maquetación avanzada HTML5/CSS3 y entrega optimizada con IA.",
    impact: "Sitio institucional listo para escalar a producto, con tiempos de carga sub-segundo.",
    metric: "<1s",
    tags: ["React", "Performance", "AI-Assisted"],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-12 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8 mb-16 flex-wrap">
          <div>
            <div className="font-mono text-xs text-primary mb-3">/ 02 — SELECTED WORK</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-3xl">
              Casos de estudio con <span className="text-primary">métricas reales</span>.
            </h2>
          </div>
          <div className="text-sm text-muted-foreground font-mono">2023 — 2026</div>
        </div>

        <div className="space-y-6">
          {studies.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid md:grid-cols-[100px_1fr_auto] gap-6 md:gap-12 items-start p-6 md:p-10 rounded-2xl border border-border bg-card glow-border hover:border-primary/40 transition-colors"
            >
              <div className="font-mono text-xs text-muted-foreground">
                <div className="text-primary">{s.index}</div>
                <div className="mt-2">{s.role}</div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { label: "Challenge", value: s.challenge },
                    { label: "Solution", value: s.solution },
                    { label: "Impact", value: s.impact },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">{b.label}</div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{b.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col items-end gap-4 justify-between md:justify-start">
                <div className="font-display text-4xl md:text-6xl font-bold text-primary tabular-nums">
                  {s.metric}
                </div>
                <ArrowUpRight className="size-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}