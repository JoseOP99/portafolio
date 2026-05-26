import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";

/* ─────────────────────────────────────────────
 * Skills — Technology proficiency grid
 * Asymmetric layout of skill categories with
 * animated badge reveals. Categories rendered
 * from centralized profile data.
 * ───────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeader
          title="Habilidades"
          subtitle="Tecnologías y herramientas con las que trabajo a diario para ofrecer soluciones de automatización."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {profile.skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className={`glass-card p-6 md:p-8 ${
                catIndex === 0 ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: catIndex * 0.1,
              }}
            >
              <h3 className="font-display text-lg font-semibold text-zinc-200 mb-5">
                {category.name}
              </h3>

              <motion.div
                className="flex flex-wrap gap-2.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill} variants={badgeVariants}>
                    <SkillBadge label={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
