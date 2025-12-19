import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { Education, educations } from "@/data/educations";
import { BookOpen, Calendar, Trophy } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Education</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-1">
          {educations.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="overflow-hidden border-muted/60 transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row ">
        {/* LEFT SECTION: Image */}
        <div className="relative w-full md:w-1/3 lg:w-1/3 bg-muted">
          <img
            src={education.imageUrl}
            alt={education.institute}
            className="h-full w-full object-cover min-h-[200px] md:min-h-full"
          />
          <div className="absolute top-4 left-4 md:hidden">
            <Badge className="bg-primary">{education.timeRange}</Badge>
          </div>
        </div>

        {/* RIGHT SECTION: Details */}
        <div className="flex flex-col p-6 md:p-8 w-full md:w-2/3 lg:w-2/3">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground leading-tight">
                {education.degree}
              </h3>
              <p className="text-lg font-medium text-primary mt-1">
                {education.institute}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground whitespace-nowrap bg-muted/50 px-3 py-1 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              {education.timeRange}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: Info & Achievements */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
                  Result
                </h4>
                <p className="text-foreground font-semibold bg-blue-50 dark:bg-blue-950/30 w-fit px-3 py-1 rounded-md border border-blue-100 dark:border-blue-900">
                  {education.result}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
                  <Trophy className="h-4 w-4 text-yellow-500" /> Achievements
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {education.achievements.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Courses & Description */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" /> Key Courses
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {education.courses.map((c, index) => (
                    <Badge key={index} className="font-normal">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Description
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{education.description}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
