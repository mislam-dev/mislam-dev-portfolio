export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string; // Optional: can be a Lucide icon or image URL
};

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Developer",
    company: "PINN AI",
    duration: "Sep 2025 - Nov 2025",
    location: "Remote",
    description: [
      "Develop and Integrated robust and scalable applications with modern technologies like NodeJs etc.",
      "Built a complete CI/CD pipeline with GitHub Actions, which eliminates manual deployment time.",
      "Configured Nginx reverse proxy for multiple domains and APIs with balanced configurations.",
    ],
    skills: ["Node.js", "GitHub Actions", "Supabase", "Nginx", "CI/CD"],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=PA",
  },
  {
    id: "2",
    role: "Fullstack Web Developer",
    company: "DK AI Labs",
    duration: "Apr 2023 - Dec 2024",
    location: "Remote",
    description: [
      "Build more than 5 backend systems to support the frontend via APIs",
      "Migrated and upgraded an edtech learning platform from legacy technology to modern technology. This resulted in a 20% increase in user engagement",
      "Built authentication systems, including OAuth and Social logins. This enabled secure access and personalized features.",
      "Integrated third-party APIs and services, including SMTP, OAuth",
      "Deployed to cloud via CI/CD with Docker and Docker Hub and maintained all of these systems, make sure 99.9% uptime.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "ExpressJs",
      "NestJs",
      "PostgreSQL",
      "Docker",
      "Cloud",
      "GitHub Actions",
      "OAuth",
      "SMTP",
      "Nginx",
      "CI/CD",
    ],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DK",
  },
  {
    id: "3",
    role: "Fullstack Web Developer",
    company: "Freelance Marketplace",
    duration: "Sep 2021 - Apr 2023",
    location: "Remote",
    description: [
      "Designed and developed more than several applications using JavaScript, TypeScript, NodeJS, ExpressJS, PostgreSQL, Docker, Cloud etc.",
      "Collaborated with international clients to deliver custom solutions tailored to specific business requirements.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "ExpressJs",
      "PostgreSQL",
      "Docker",
      "Cloud",
    ],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FM",
  },
];
