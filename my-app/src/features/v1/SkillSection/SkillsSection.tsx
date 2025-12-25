import { Skill, skills } from "@/data/data";
import {
  backendSkills,
  databaseSkills,
  frontendSkills,
  toolSkills,
} from "@/data/skills";
import { Code, Database, Layout, Palette, Server, Wrench } from "lucide-react";

export const SkillsSection = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  const categories = Object.keys(skillsByCategory).slice(0, 4); // limit to 4 cards

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <Layout className="h-6 w-6" />;
      case "backend":
        return <Server className="h-6 w-6" />;
      case "database":
        return <Database className="h-6 w-6" />;
      case "programming languages":
        return <Code className="h-6 w-6" />;
      case "design":
        return <Palette className="h-6 w-6" />;
      default:
        return <Wrench className="h-6 w-6" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold capitalize  w-full text-center">
                Frontend
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 justify-evenly">
              {frontendSkills.map((skill) => (
                <div
                  className="w-24 flex flex-col items-center "
                  key={skill.id}
                >
                  {skill.icon}
                  <br />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold capitalize w-full text-center">
                Backend
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 justify-evenly">
              {backendSkills.map((skill) => (
                <div
                  className="w-24 flex flex-col items-center "
                  key={skill.id}
                >
                  {skill.icon}
                  <br />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold capitalize w-full text-center">
                Database
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 justify-evenly">
              {databaseSkills.map((skill) => (
                <div
                  className="w-24 flex flex-col items-center "
                  key={skill.id}
                >
                  {skill.icon}
                  <br />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold capitalize w-full text-center">
                Tools
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 justify-evenly">
              {toolSkills.map((skill) => (
                <div
                  className="w-24 flex flex-col items-center "
                  key={skill.id}
                >
                  {skill.icon}
                  <br />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
