import { AnimateOnScroll } from "./AnimateOnScroll";

/* ─────────────────────────────────────────────
 * SectionHeader — Title bar for page sections
 * Renders an accent divider, heading, and
 * optional subtitle with scroll reveal.
 * ───────────────────────────────────────────── */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <AnimateOnScroll className="mb-12 md:mb-16">
      <div className="section-divider" />
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-400 max-w-xl leading-relaxed text-base">
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
};
