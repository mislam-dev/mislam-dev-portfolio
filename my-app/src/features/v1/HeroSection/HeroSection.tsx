import { CustomParticles } from "@/components/Particles";
import { ArrowDown } from "lucide-react";
import { BasicInfo } from "./BasicInfo";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("experience");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <CustomParticles />
      <div className="container mx-auto px-4 md:px-6 overflow-hidden ">
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <BasicInfo />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <button
            onClick={scrollToAbout}
            className="flex items-center justify-center p-2 rounded-full bg-muted text-primary hover:bg-muted/80 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
