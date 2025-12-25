// import { AboutSection } from "./AboutSection";
import { default as AchievementsSection } from "./AchievementsSection";
import { default as CertificationsSection } from "./CertificationsSection";
import { ContactSection } from "./ContactSection";
import { default as EducationSection } from "./EducationSection";
import { default as ExperienceSection } from "./ExperienceSection";
import { default as Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { default as Navbar } from "./Navbar";
import { default as ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillSection";
import { ThemeProvider } from "./ThemeProvider";

export const Version1 = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <AchievementsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Version1;
