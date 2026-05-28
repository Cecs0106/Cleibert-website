import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

export function TextReveal({ text, className = "", delay = 0, as = "h1" }: Props) {
  const words = text.split(" ");
  const Wrapper = motion[as] as typeof motion.h1;
  return (
    <Wrapper
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}