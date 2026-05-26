/* ─────────────────────────────────────────────
 * Profile Data — Single Source of Truth
 * Update content here, components render it.
 * ───────────────────────────────────────────── */

// ── Types ──────────────────────────────────

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Social {
  name: string;
  url: string;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  experience: Experience[];
  education: EducationEntry[];
  skillCategories: SkillCategory[];
  socials: Social[];
  navLinks: { label: string; href: string }[];
}

// ── Data ───────────────────────────────────

export const profile: ProfileData = {
  firstName: "Jose Carlos",
  lastName: "Ortiz",
  title: "Desarrollador Power Platform & RPA",
  subtitle: "Creador de ZENUBIT",
  bio: "Ingeniero de Sistemas de la Universidad de Antioquia, especializado en automatización de procesos y soluciones RPA. Construyo flujos de trabajo digitales eficientes utilizando Power Platform, AppSheet y tecnologías web modernas — transformando operaciones manuales en sistemas automatizados escalables.",
  email: "padilla99j@gmail.com",
  phone: "+57 300 814 4727",
  location: "Medellín, Colombia",

  navLinks: [
    { label: "Inicio", href: "#home" },
    { label: "Experiencia", href: "#experience" },
    { label: "Habilidades", href: "#skills" },
    { label: "Educación", href: "#education" },
  ],

  experience: [
    {
      company: "Qualiver",
      role: "Desarrollador Power Platform",
      period: "Jun 2025 — Presente",
      description:
        "Lidero iniciativas de automatización de procesos utilizando Microsoft Power Platform. Diseño e implemento flujos en Power Automate, soluciones en Power Apps y tableros en Power BI. Desarrollo bots RPA y aplicaciones en AppSheet para digitalizar y optimizar las operaciones empresariales. Aplico técnicas de vibe coding para la creación rápida de prototipos de herramientas internas.",
      technologies: [
        "Power Automate",
        "Power Apps",
        "Power BI",
        "AppSheet",
        "RPA",
        "Vibe Coding",
      ],
    },
    {
      company: "ISAGEN",
      role: "Analista de RPA y Automatización de Procesos",
      period: "Dic 2024 — May 2025",
      description:
        "Desarrollé soluciones de automatización robótica de procesos para operaciones críticas del sector energético. Analicé flujos de trabajo existentes y diseñé alternativas automatizadas que redujeron el tiempo de procesamiento manual. Colaboré con equipos multidisciplinarios para identificar oportunidades de automatización en diferentes departamentos.",
      technologies: [
        "RPA",
        "Automatización de Procesos",
        "Power Platform",
        "Análisis de Datos",
      ],
    },
  ],

  education: [
    {
      institution: "Universidad de Antioquia",
      degree: "Ingeniería de Sistemas",
      period: "Feb 2017 — Nov 2023",
      description:
        "Título profesional en Ingeniería de Sistemas con enfoque en desarrollo de software, bases de datos e infraestructura tecnológica. Sólidos fundamentos en algoritmos, estructuras de datos y prácticas modernas de desarrollo.",
    },
  ],

  skillCategories: [
    {
      name: "Automatización & RPA",
      skills: [
        "Power Automate",
        "Power Apps",
        "Power BI",
        "RPA",
        "AppSheet",
        "Vibe Coding",
      ],
    },
    {
      name: "Desarrollo Web",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
      ],
    },
    {
      name: "Datos & Herramientas",
      skills: ["SQL", "Git", "Scrum", "APIs REST"],
    },
  ],

  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joseortizp/",
    },
    {
      name: "GitHub",
      url: "https://github.com/joseop",
    },
  ],
};
