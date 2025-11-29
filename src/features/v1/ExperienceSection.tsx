import { experiences } from "@/data/projects";
import { CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experiences</h2>

        <div className="mt-12 relative">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative md:pl-12"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="hidden md:block absolute -left-1.5 top-1 w-3 h-3 bg-primary rounded-full" />

                <div className="bg-muted rounded-xl p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-0">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <span className="text-primary font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg mb-4">{exp.company}</h4>

                  <div className="space-y-2">
                    {exp.achievements.map((acv, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="min-w-5 w-5 h-5 text-primary mr-2 mt-1" />
                        <p>{acv}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
