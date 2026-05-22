// app/page.tsx

import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import About from "@/sections/about";
import TechStack from "@/components/ui/tech-stack";
import Experience from "@/sections/experience";
import Projects from "@/sections/projects";
import Contact from "@/sections/contact";
import Footer from "@/components/ui/footer";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <ScrollProgress />
      <Navbar />

      <Hero />

      <About />

      <TechStack />

      <Experience />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
