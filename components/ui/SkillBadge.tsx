/* ─────────────────────────────────────────────
 * SkillBadge — Individual technology tag
 * Styled in globals.css via .skill-badge class.
 * ───────────────────────────────────────────── */

interface SkillBadgeProps {
  label: string;
}

export const SkillBadge = ({ label }: SkillBadgeProps) => {
  return <span className="skill-badge">{label}</span>;
};
