import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Nav() {
  const { theme, toggle } = useTheme();
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tighter">
          cleibert<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="size-9 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </motion.header>
  );
}