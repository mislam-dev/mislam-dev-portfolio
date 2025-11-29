import { resumeUrl, SOCIAL_LINKS } from "@/data/links";
import { Button } from "../../../../components/ui/button";

export const BasicInfo = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-8 text-center">
      <div className="space-y-3">
        <h2
          className="text-xl sm:text-2xl font-medium text-primary animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Hello, I'm
        </h2>
        <h1 className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Monirul Islam
        </h1>
        <h3
          className="text-xl sm:text-2xl text-muted-foreground animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Software Engineer
        </h3>
      </div>

      <p
        className="text-lg text-muted-foreground w-3/4 mx-auto  animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        I am front-end focused full-stack developer with more than 3 years of
        experience in building performant, scalable, and user centric web
        applications. Proficient in React, Next.js, TypeScript, Node.js, and
        Express. Experienced in shipping production-ready apps with
        authentication systems, CI/CD automation, and microservice integrations.
        Additionally, I have solved 190+ problems across LeetCode, HackerRank,
        Codeforces, and similar platforms.
      </p>

      <div
        className="flex flex-wrap gap-4 animate-fade-in justify-center"
        style={{ animationDelay: "1s" }}
      >
        <a href="#contact">
          <Button className="px-6">Contact Me</Button>
        </a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="px-6">
            Resume
          </Button>
        </a>
      </div>

      <div
        className="flex items-center space-x-4 animate-fade-in justify-center"
        style={{ animationDelay: "1.2s" }}
      >
        {SOCIAL_LINKS.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
            key={Math.random()}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
