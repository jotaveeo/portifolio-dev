import React, { useEffect } from "react";
import "./App.css";

// Layout & Sections
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  // Inject fonts
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Bree+Serif&family=Bungee&family=Permanent+Marker&family=Righteous&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Unbounded:wght@200..900&display=swap";
    document.head.appendChild(fontLink);
    
    return () => {
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground scan-lines overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
