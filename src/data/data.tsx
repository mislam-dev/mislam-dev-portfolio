import { PersonStanding, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

export interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  links: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: v4(),
    title: "prexress",
    description:
      "A lightweight, modular framework built on Express.js, providing additional abstractions for rapid API development with standardized patterns.",
    image: "/placeholder.svg",
    technologies: ["Node.js", "Express", "TypeScript", "Prisma", "OPP"],
    githubLink: "https://github.com/mislam-dev/prexress",
    links: [
      {
        label: "Source Code",
        value: "https://github.com/mislam-dev/prexress",
      },
      {
        label: "CLI Docs",
        value: "https://www.npmjs.com/package/@prexress/cli",
      },
    ],
  },
  {
    id: v4(),
    title: "Task Enterprise",
    description:
      "An enterprise level typeScript application built with Turborepo, featuring a clean architecture pattern and domain-driven design.",
    image: "/placeholder.svg",
    technologies: ["React", "ExpressJs", "Drizzle", "Domain Driven Design"],
    githubLink: "https://github.com/mislam-dev/todo-app-enterprise",
    links: [
      {
        label: "Source Code",
        value: "https://github.com/mislam-dev/todo-app-enterprise",
      },
    ],
  },
  {
    id: v4(),
    title: "Real AI",
    description:
      "A functional web application built with Server-Side Rendering (SSR) and Static Site Generation (SSG). I developed this site from a Figma design as the company’s landing page, showcasing their database and services.",
    image: "/placeholder.svg",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Strapi",
      "Firebase",
    ],
    githubLink: "https://www.realai.eu/",
    links: [
      {
        label: "Live Preview",
        value: "https://www.realai.eu/",
      },
    ],
  },
  {
    id: v4(),
    title: "EarthScan",
    description:
      "Built an interactive landing page from Figma to production using Next.js. Implemented animations and SSR/SSG for enhanced UX and SEO optimization",
    image: "/placeholder.svg",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Strapi", "Axios"],
    githubLink: "https://earthscan.io/",
    links: [
      {
        label: "Live Preview",
        value: "https://www.earthscan.io/",
      },
    ],
  },

  {
    id: v4(),
    title: "RoktoChai",
    description:
      "A blood donation platform connecting donors with recipients in emergency situations. Features real-time notifications, donor tracking, and appointment scheduling.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Express", "Prisma", "MongoDB"],
    githubLink: "https://github.com/mislam-dev/roktochai",
    links: [
      {
        label: "Live Preview",
        value: "https://github.com/mislam-dev/roktochai",
      },
    ],
  },
  {
    id: v4(),
    title: "Department Orchestrator",
    description:
      "A comprehensive department management system for educational institutions, handling course allocations, faculty scheduling, and resource management.",
    image: "/placeholder.svg",
    technologies: [
      "Next.js",
      "ExpressJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    githubLink: "https://github.com/mislam-dev/department-orchestrator",
    links: [
      {
        label: "Live Preview",
        value: "https://github.com/mislam-dev/department-orchestrator",
      },
    ],
  },
];

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "PINN AI",
    position: "Software Developer",
    period: "September 2025 - Nov 2025",
    description:
      "Develop and Integrated robust and scalable applications with modern technologies like React NodeJs etc",
    achievements: [
      "Built a complete CI/CD pipeline with GitHub Actions, which eliminates manual deployment time.",
      "Integrated Supabase authentication and authorization, ensuring secure user management.",
      "Configured Nginx reverse proxy for multiple domains and APIs with balanced configurations",
    ],
  },
  {
    id: 2,
    company: "DK AI Labs",
    position: "Software Developer",
    period: "Feb 2025 - Aug 2025",
    description:
      "Develop and Integrated robust and scalable applications with modern technologies like React NodeJs etc",
    achievements: [
      "Designed and developed a cloud service platform akin to AWS, with TypeScript, ReactJs, and TailwindCSS.",
      "Built a Visual Flow App with React Flow, which enabled users to construct logical data pipelines with dynamic nodes with flexible connecting wires.",
      "Implemented On-Browser AI with Hugging Face by integrating WebGPU to run LLM models directly in the browser",
      "Developed a Custom Rich  WYSIWYG Text Editor to support blog and article management system. This editor helps to write articles more easily and reduces more than 50% time. ",
    ],
  },
  {
    id: 3,
    company: "DK AI Labs",
    position: "Fullstack Web Developer",
    period: "Apr 2023 - Dec 2024",
    description:
      "Develop and Integrated robust and scalable web applications with modern technologies like React NodeJs etc",
    achievements: [
      "Developed and deployed 5+ production-grade software using Next.js, Strapi, Tailwind CSS, and Shadcn UI, delivering high-performance, responsive, and SEO-friendly platforms.",
      "Converted complex Figma designs into pixel-perfect UIs with animation and optimized rendering strategies for performance and SEO (e.g., Earthscan.io).",
      "Engineered custom CMS workflows using Strapi and Ghost CMS, including dynamic content management for blogs, case studies, and infinite scroll implementations both frontend and backend.",
      "Built and integrated authentication systems using Firebase (Auth + Role-Based Access) and OAuth (Google, GitHub, LinkedIn), enabling secure access and personalized features.",
      "Integrated external APIs and services, including SMTP for contact forms, AI APIs for generative responses, and WordPress API to unify learning content and blog systems across platforms (e.g., LiveAi.eu).",
    ],
  },
  {
    id: 4,
    company: "Freelance Market place",
    position: "Fullstack Web Developer",
    period: "Sep 2021 - Apr 2023",
    description:
      "Develop and Integrated robust and scalable web applications with modern technologies like React NodeJs etc",
    achievements: [
      "Designed and developed more than several frontend, backend and fullstack applications using HTML, CSS,  JavaScript, TypeScript, ReactJs, NodeJS, ExpressJS etc.",
    ],
  },
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Diploma In Engr. in Computer Science",
    institution: "Jashore Polytechnic Institute",
    period: "2022 - 2026",
    description: "Specialized in Software Engineering and Web Technologies",
  },
  {
    id: 2,
    degree: "Higher Secondary School",
    institution: "Under Jashore Board",
    period: "2019-2022",
    description: "Completed with a grade with A",
  },
];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

export const certifications: Certification[] = [
  {
    id: 2,
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "March, 2025",
    credentialLink: "https://www.hackerrank.com/certificates/617e2b1f74fb",
  },
  {
    id: 3,
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "March, 2025",
    credentialLink: "https://www.hackerrank.com/certificates/d2e571b01a02",
  },
  {
    id: 4,
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "March, 2025",
    credentialLink: "https://www.hackerrank.com/certificates/9ea89219dff1",
  },
  {
    id: 1,
    title: "Think in a Redux way",
    issuer: "Learn With Sumit",
    date: "Sep 2022",
    credentialLink:
      "https://drive.google.com/file/d/1bNRD2GVFJfhDTSPgf9ieBFUijgrEHdWy/view",
  },
];

export interface Skill {
  id: number | string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Tools"
    | "Programming Languages"
    | "Design";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const skills: Skill[] = [
  // Frontend
  { id: v4(), name: "JavaScript", category: "Frontend", level: "Expert" },
  { id: v4(), name: "TypeScript", category: "Frontend", level: "Expert" },
  { id: v4(), name: "React", category: "Frontend", level: "Expert" },
  { id: v4(), name: "Next.js", category: "Frontend", level: "Advanced" },
  { id: v4(), name: "Tailwind CSS", category: "Frontend", level: "Expert" },
  {
    id: v4(),
    name: "React Hook Form",
    category: "Frontend",
    level: "Advanced",
  },
  { id: v4(), name: "Zod", category: "Frontend", level: "Advanced" },
  { id: v4(), name: "Redux", category: "Frontend", level: "Expert" },
  { id: v4(), name: "Zustand", category: "Frontend", level: "Advanced" },
  { id: v4(), name: "React Query", category: "Frontend", level: "Advanced" },

  // Backend
  { id: v4(), name: "Node.js", category: "Backend", level: "Advanced" },
  { id: v4(), name: "ExpressJs", category: "Backend", level: "Advanced" },
  { id: v4(), name: "NestJs", category: "Backend", level: "Advanced" },
  { id: v4(), name: "REST API", category: "Backend", level: "Advanced" },
  { id: v4(), name: "Prisma", category: "Backend", level: "Intermediate" },
  { id: v4(), name: "Mongoose", category: "Backend", level: "Intermediate" },
  { id: v4(), name: "Drizzle", category: "Backend", level: "Intermediate" },
  {
    id: v4(),
    name: "Authentication",
    category: "Backend",
    level: "Intermediate",
  },
  {
    id: v4(),
    name: "Authorization",
    category: "Backend",
    level: "Intermediate",
  },
  { id: v4(), name: "JWT", category: "Backend", level: "Intermediate" },
  { id: v4(), name: "Zod", category: "Backend", level: "Intermediate" },
  {
    id: v4(),
    name: "Express Validator",
    category: "Backend",
    level: "Intermediate",
  },

  // Datv4()ase
  {
    id: v4(),
    name: "Database Design",
    category: "Database",
    level: "Intermediate",
  },
  {
    id: v4(),
    name: "Database Management",
    category: "Database",
    level: "Intermediate",
  },
  { id: v4(), name: "SQL", category: "Database", level: "Advanced" },
  { id: v4(), name: "NoSQL", category: "Database", level: "Advanced" },
  { id: v4(), name: "MongoDB", category: "Database", level: "Advanced" },
  { id: v4(), name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { id: v4(), name: "MySQL", category: "Database", level: "Intermediate" },
  { id: v4(), name: "Firebase", category: "Database", level: "Intermediate" },

  // Toov4()
  { id: v4(), name: "Git", category: "Tools", level: "Advanced" },
  { id: v4(), name: "Docker", category: "Tools", level: "Intermediate" },
  { id: v4(), name: "CI/CD", category: "Tools", level: "Intermediate" },
  { id: v4(), name: "VPS", category: "Tools", level: "Intermediate" },

  { id: v4(), name: "Figma", category: "Tools", level: "Intermediate" },
  { id: v4(), name: "Microservices", category: "Tools", level: "Intermediate" },
  {
    id: v4(),
    name: "Event Driven Architecture",
    category: "Tools",
    level: "Intermediate",
  },
];

// Sample achievements - in a real app, this would come from data/projects
export const achievements: {
  id: string | number;
  title: string;
  description: string;
  icon: React.ReactNode | string;
  year: string;
}[] = [
  {
    id: 1,
    title: "Problem solving",
    description: "Solved 200+ coding problems across LeetCode and HackerRank.",
    year: "2023",
    icon: (
      <div className="w-full h-12">
        <Image
          alt=""
          src={
            "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          }
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Certifications",
    description:
      "Earned multiple industry-recognized certifications in CSE fundamentals, React, JavaScript, Redux etc.",
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    year: "2025",
  },
  {
    id: 3,
    title: "Youtuber",
    description:
      "Manage a tech-focused YouTube channel sharing practical tips, tricks, and tutorials.",
    icon: (
      <div className="w-full h-12">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
          }
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    ),
    year: "2025",
  },
  {
    id: 4,
    title: "Community Leader",
    description:
      "Founded and managed the JPI Coders Club, fostering knowledge-sharing among 300+ students.",
    icon: <Users className="h-12 w-12 text-primary" />,
    year: "2025",
  },
  {
    id: 2,
    title: "Club Initiater",
    description:
      "Leading the initiative to establish a department authorized computer club, including drafting the constitution and co-ordinating with faculty for approval.",
    icon: <PersonStanding className="h-12 w-12 text-primary" />,
    year: "2025",
  },
];

/*
Solved 200+ coding problems across LeetCode and HackerRank.
Earned multiple industry-recognized certifications in CSE fundamentals, React, JavaScript, Redux etc.
Manage a tech-focused YouTube channel sharing practical tips, tricks, and tutorials.
Founded and managed the JPI Coders Club, fostering knowledge-sharing among 300+ students.
Leading the initiative to establish a department authorized computer club, including drafting the constitution and co-ordinating with faculty for approval.



*/
