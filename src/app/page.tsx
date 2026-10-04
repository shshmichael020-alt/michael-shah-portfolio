import Header from "@/components/Header";
import CinematicHero from "@/components/CinematicHero";
import SelectedWork from "@/components/SelectedWork";
import LabSection from "@/components/LabSection";
import SkillsSection from "@/components/SkillsSection";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#090a0d" }}
      className="relative min-h-screen bg-[#090a0d] text-text-primary flex flex-col selection:bg-accent-cyan selection:text-black"
    >
      <Header />
      <main id="main-content" className="flex-1 w-full">
        <CinematicHero />
        <SelectedWork />
        <LabSection />
        <SkillsSection />
        <JourneySection />
        <AboutSection />
      </main>
      <ContactSection />
    </div>
  );
}
