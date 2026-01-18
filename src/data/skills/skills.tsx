import Image from "next/image";
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
        <Image
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
        <Image
          src={`https://skillicons.dev/icons?i=ts`}
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
    name: "JavaScript",
    icon: (
      <>
        <Image
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
        <Image
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
    name: "Node.js",
    icon: (
      <>
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
    name: "Microservices",
    icon: (
      <>
        <Image
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
        <Image
          src={`https://go-skill-icons.vercel.app/api/icons?i=swagger`}
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
        <Image
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
    name: "GitHub Actions",
    icon: (
      <>
        <Image
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
    name: "Railway.com",
    icon: (
      <>
        <Image
          src={`https://go-skill-icons.vercel.app/api/icons?i=railway`}
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
