import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "@/data/profile";

/* ─────────────────────────────────────────────
 * Hero — Full-viewport opening section
 * Large name typography, title with emerald
 * accent, bio, and social CTAs. No photo.
 * ───────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

/** Map social name to icon component */
const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="hero-gradient" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 w-full py-32 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-emerald-400 font-medium text-sm tracking-wide uppercase mb-4"
          >
            {profile.subtitle}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-zinc-50"
          >
            {profile.firstName}
            <br />
            <span className="text-zinc-400">{profile.lastName}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="mt-5 text-xl md:text-2xl font-display font-medium text-zinc-300"
          >
            <span className="text-emerald-400">{profile.title.split("&")[0]}&</span>
            {profile.title.split("&")[1]}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-zinc-400 leading-relaxed max-w-xl text-base md:text-[1.05rem]"
          >
            {profile.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  id={`hero-cta-${social.name.toLowerCase()}`}
                >
                  {Icon && <Icon className="text-base" />}
                  {social.name}
                </Link>
              );
            })}

            <Link
              href={`mailto:${profile.email}`}
              className="social-btn"
              id="hero-cta-email"
            >
              Contáctame
            </Link>
          </motion.div>

          {/* Location */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-zinc-500 text-sm"
          >
            {profile.location}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-zinc-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-zinc-500" />
        </div>
      </motion.div>
    </section>
  );
};
