import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { profile } from "@/data/profile";

/* ─────────────────────────────────────────────
 * Footer — Site footer with social links
 * ZENUBIT branding and copyright. Minimal
 * design with hover interactions.
 * ───────────────────────────────────────────── */

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-secondary">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left — Branding */}
            <div>
              <p className="font-display text-2xl font-bold text-text-primary tracking-tight">
                JCO<span className="text-accent">.</span>
              </p>
              <p className="text-text-secondary text-sm mt-1">
                {profile.title} — {profile.subtitle}
              </p>
            </div>

            {/* Right — Social links */}
            <div className="flex items-center gap-3">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-surface-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                    aria-label={social.name}
                    id={`footer-social-${social.name.toLowerCase()}`}
                  >
                    {Icon && <Icon className="text-base" />}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-text-secondary text-xs">
              &copy; {year} Jose Carlos Ortiz. Todos los derechos reservados.
            </p>
            <p className="text-text-secondary text-xs">
              Construido con{" "}
              <span className="text-accent/60">ZENUBIT</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};
