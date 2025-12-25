import { CustomParticles } from "@/components/Particles";
import ArrowDownBottom from "./ArrowDownBottom";
import { BasicInfo } from "./BasicInfo";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <CustomParticles />
      <div className="container mx-auto px-4 md:px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <BasicInfo />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ArrowDownBottom />
        </div>
      </div>
    </section>
  );
};
