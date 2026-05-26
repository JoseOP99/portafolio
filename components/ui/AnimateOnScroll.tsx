import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/* ─────────────────────────────────────────────
 * AnimateOnScroll — Scroll-triggered reveal
 * Wraps children in a framer-motion div that
 * fades + slides up when entering the viewport.
 * ───────────────────────────────────────────── */

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts */
  delay?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

export const AnimateOnScroll = ({
  children,
  className,
  delay = 0,
}: AnimateOnScrollProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
