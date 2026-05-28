import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, ShoppingCart, CreditCard, Cpu } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Cell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={item}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 glow-border transition-colors hover:border-primary/40 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function BentoStack() {
  return (
    <section id="stack" className="relative py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-xs text-primary mb-3">/ 01 — STACK</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
              The toolkit behind <span className="text-primary">production-grade</span> systems.
            </h2>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 auto-rows-[180px] gap-4"
        >
          <Cell className="md:col-span-4 md:row-span-2 flex flex-col justify-between">
            <Code2 className="size-8 text-primary" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-2">CORE</div>
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                JavaScript <span className="text-muted-foreground">ES6+</span>
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Vue.js", "React", "TypeScript"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-mono border border-border group-hover:border-primary/40 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Cell>

          <Cell className="md:col-span-2 flex flex-col justify-between">
            <Layers className="size-6 text-primary" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">FOUNDATION</div>
              <div className="font-display text-2xl font-bold">HTML5 / CSS3</div>
              <div className="text-sm text-muted-foreground mt-1">Maquetación avanzada</div>
            </div>
          </Cell>

          <Cell className="md:col-span-2 flex flex-col justify-between">
            <ShoppingCart className="size-6 text-primary" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">COMMERCE</div>
              <div className="font-display text-2xl font-bold">WordPress · WooCommerce</div>
            </div>
          </Cell>

          <Cell className="md:col-span-3 flex flex-col justify-between">
            <CreditCard className="size-6 text-primary" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">PAYMENTS</div>
              <div className="font-display text-2xl font-bold">
                Stripe <span className="text-muted-foreground">+</span> WooPayments
              </div>
              <div className="text-sm text-muted-foreground mt-1">Integraciones automatizadas multi-moneda</div>
            </div>
          </Cell>

          <Cell className="md:col-span-3 flex flex-col justify-between">
            <Sparkles className="size-6 text-primary" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">UX · AI</div>
              <div className="font-display text-2xl font-bold">Prototipado &amp; optimización IA</div>
              <div className="text-sm text-muted-foreground mt-1">Performance asistido por modelos generativos</div>
            </div>
          </Cell>

          <Cell className="md:col-span-6 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <Cpu className="size-6 text-primary" />
              <div>
                <div className="font-mono text-xs text-muted-foreground">PHILOSOPHY</div>
                <div className="font-display text-xl font-semibold">Ship interfaces engineered for scale, not just for show.</div>
              </div>
            </div>
            <div className="font-mono text-xs text-muted-foreground">v2026.1</div>
          </Cell>
        </motion.div>
      </div>
    </section>
  );
}