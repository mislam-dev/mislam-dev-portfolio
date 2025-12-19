import { Badge } from "@/components/ui/badge";
import { Experience, experiences } from "@/data/experiences";
import { Briefcase, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experiences</h2>

        <div className="flex flex-col gap-10">
          {experiences.map((exp) => (
            <ExperienceCard exp={exp} key={exp.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div
      key={exp.id}
      className="group relative grid grid-cols-1 md:grid-cols-[1fr_6fr] gap-6 md:gap-10"
    >
      {/* Left: Sticky Date/Meta */}
      <div className="flex flex-col md:text-right">
        <span className="text-sm font-bold text-cyan-600 dark:text-cyan-500 uppercase tracking-widest">
          {exp.duration}
        </span>
        <span className="flex items-center md:justify-end gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
          <MapPin className="h-3 w-3" /> {exp.location}
        </span>
      </div>

      {/* Right: Content Card */}
      <div className="relative pl-8 md:pl-0 border-l md:border-l-0 border-slate-200 dark:border-slate-800">
        {/* Timeline Dot (Mobile only border connector) */}
        <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-500 md:hidden shadow-[0_0_10px_rgba(6,182,212,0.3)] dark:shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

        <div className="flex flex-col gap-3 bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {exp.role}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-cyan-700 dark:text-cyan-600" />
                {exp.company}
              </p>
            </div>
            <Badge
              variant="secondary"
              className="bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
            >
              Full-time
            </Badge>
          </div>

          <ul className="mt-4 space-y-2">
            {exp.description.map((point, i) => (
              <li
                key={i}
                className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-600/30 dark:bg-cyan-800 mt-2 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/50">
            {exp.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-[10px] border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-500 font-mono"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
