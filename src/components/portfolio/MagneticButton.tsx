import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
}

export function MagneticButton({ children, href, onClick, variant = "primary", className = "", ariaLabel }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });
  const tx = useTransform(sx, (v) => v);
  const ty = useTransform(sy, (v) => v);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary-glow shadow-glow"
      : "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: tx, y: ty }}
      className="inline-block"
    >
      <span className={`${base} ${styles} ${className}`}>{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}