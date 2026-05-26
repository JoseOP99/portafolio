import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
 * TimelineCard — Experience / Education entry
 * Renders a glassmorphism card inside a vertical
 * timeline with dot indicator and tech tags.
 * ───────────────────────────────────────────── */

interface TimelineCardProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags?: string[];
  index: number;
}

export const TimelineCard = ({
  title,
  subtitle,
  period,
  description,
  tags,
  index,
}: TimelineCardProps) => {
  return (
    <motion.div
      className="relative pl-8 md:pl-10 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: index * 0.15,
      }}
    >
      {/* Timeline dot */}
      <div className="timeline-dot" />

      {/* Card */}
      <div className="glass-card p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary">
              {title}
            </h3>
            <p className="text-accent font-medium text-sm mt-0.5">
              {subtitle}
            </p>
          </div>
          <span className="tech-tag whitespace-nowrap self-start">
            {period}
          </span>
        </div>

        <p className="text-text-secondary leading-relaxed text-[0.95rem]">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
