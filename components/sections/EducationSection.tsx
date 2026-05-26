import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineCard } from "@/components/ui/TimelineCard";

/* ─────────────────────────────────────────────
 * EducationSection — Academic background
 * Uses the same TimelineCard component as
 * Experience for visual consistency.
 * ───────────────────────────────────────────── */

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="Educación"
          subtitle="Formación académica en ingeniería de sistemas y desarrollo de software."
        />

        <div className="relative ml-1">
          {/* Timeline vertical line */}
          <div className="timeline-line" aria-hidden="true" />

          {profile.education.map((edu, i) => (
            <TimelineCard
              key={edu.institution}
              title={edu.institution}
              subtitle={edu.degree}
              period={edu.period}
              description={edu.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
