import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineCard } from "@/components/ui/TimelineCard";

/* ─────────────────────────────────────────────
 * Experience — Work experience timeline
 * Renders Qualiver and ISAGEN entries with
 * vertical timeline, glassmorphism cards,
 * and technology tags.
 * ───────────────────────────────────────────── */

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="Experiencia"
          subtitle="Construyendo soluciones automatizadas para retos empresariales del mundo real."
        />

        <div className="relative ml-1">
          {/* Timeline vertical line */}
          <div className="timeline-line" aria-hidden="true" />

          {profile.experience.map((exp, i) => (
            <TimelineCard
              key={exp.company}
              title={exp.company}
              subtitle={exp.role}
              period={exp.period}
              description={exp.description}
              tags={exp.technologies}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
