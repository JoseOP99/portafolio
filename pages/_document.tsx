import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* ── Fonts ────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* ── SEO ──────────────────────────────── */}
        <meta
          name="description"
          content="Jose Carlos Ortiz — Desarrollador Power Platform & RPA. Especializado en automatización de procesos, Power Automate, Power Apps y tecnologías web modernas. Creador de ZENUBIT."
        />
        <meta name="author" content="Jose Carlos Ortiz" />
        <meta name="theme-color" content="#0a0a0b" />
        <meta name="color-scheme" content="dark" />

        {/* ── Open Graph ───────────────────────── */}
        <meta
          property="og:title"
          content="Jose Carlos Ortiz — Desarrollador Power Platform & RPA"
        />
        <meta
          property="og:description"
          content="Especializado en automatización de procesos, soluciones RPA y tecnologías web modernas. Creador de ZENUBIT."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
