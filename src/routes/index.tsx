import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { BentoStack } from "@/components/portfolio/BentoStack";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cleibert Castillo — High-Performance Frontend Engineer" },
      { name: "description", content: "Frontend engineer y co-fundador. Construyo arquitecturas de software fluidas para empresas que escalan." },
      { property: "og:title", content: "Cleibert Castillo — Frontend Engineer & Co-founder" },
      { property: "og:description", content: "Code that scales. Systems that run. Vue.js, React, Stripe, WooPayments." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <BentoStack />
        <TechMarquee />
        <CaseStudies />
        <About />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
