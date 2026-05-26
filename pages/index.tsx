import Head from "next/head";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { EducationSection } from "@/components/sections/EducationSection";
import { Footer } from "@/components/sections/Footer";

/* ─────────────────────────────────────────────
 * Home — Portfolio single-page layout
 * Sections stack vertically with smooth scroll
 * navigation via the fixed Navbar.
 * ───────────────────────────────────────────── */

const Home = () => {
  return (
    <>
      <Head>
        <title>Jose Carlos Ortiz — Desarrollador Power Platform &amp; RPA</title>
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Skills />
        <EducationSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
