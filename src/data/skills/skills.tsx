import { v4 } from "uuid";

export interface Skill {
  id: number | string;
  name: string;
  icon: React.ReactNode;
}

// --- Individual Category Objects ---

export const frontendSkills: Skill[] = [
  {
    id: v4(),
    name: "JavaScript",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=js`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "TypeScript",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=ts`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "HTML",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=html`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "CSS",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=css`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "React",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=react`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Next.js",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=next`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Tailwind",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=tailwind`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "React Router",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=reactrouter`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Hook Form",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=git`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Zod",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=html`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "ShadCN",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=mongodb`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Redux",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=redux`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Zustand",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=zustand`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "React Query",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=reactquery`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "API",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=api`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
];

export const backendSkills: Skill[] = [
  {
    id: v4(),
    name: "Node.js",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=nodejs`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "ExpressJs",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=express`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "NestJs",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=nest`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Python",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=python`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Fastapi",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=fastapi`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "REST API",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=api`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "TypeORM",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=typeorm`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Prisma",
    icon: (
      <>
        <img
          src={`https://skillicons.dev/icons?i=prisma`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Mongoose",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=mongoose`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Drizzle",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=drizzle`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "RabbitMQ",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=rabbitmq`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Authentication",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=authenticator`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Authorization",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=authenticator`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "JWT",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=jwt`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Zod",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=api`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
];

export const databaseSkills: Skill[] = [
  {
    id: v4(),
    name: "Database Design",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=pint`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Database Management",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=rollupjs`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "(No)SQL",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=mysql`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "MongoDB",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=mongodb`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "PostgreSQL",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=postgresql`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Redis",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=redis`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "MySQL",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=mysql`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Firebase",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=firebase`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Supabase",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=supabase`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Appwrite",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=appwrite`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
];

export const toolSkills: Skill[] = [
  {
    id: v4(),
    name: "Git",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=git`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Docker",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=docker`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "CI/CD",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=githubactions`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Nginx",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=nginx`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "VPS",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=cloudflare`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Postman",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=postman`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Linux",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=linux`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Figma",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=figma`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Microservices",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=apigateway`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
  {
    id: v4(),
    name: "Swagger",
    icon: (
      <>
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=swagger`}
          width="48"
          height="48"
          alt="HTML5"
        />
      </>
    ),
  },
];

// --- Combined Object (Useful for looping in UI) ---

export const allSkills = {
  frontend: frontendSkills,
  backend: backendSkills,
  database: databaseSkills,
  tools: toolSkills,
};
