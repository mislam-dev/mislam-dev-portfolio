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
      "Develop and Integrated robust and scalable applications with modern technologies like React NodeJs etc.",
      "Built a complete CI/CD pipeline with GitHub Actions, which eliminates manual deployment time.",
      "Integrated Supabase authentication and authorization, ensuring secure user management.",
      "Configured Nginx reverse proxy for multiple domains and APIs with balanced configurations.",
    ],
    skills: [
      "React",
      "Node.js",
      "GitHub Actions",
      "Supabase",
      "Nginx",
      "CI/CD",
    ],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=PA",
  },
  {
    id: "2",
    role: "Software Developer",
    company: "DK AI Labs",
    duration: "Feb 2025 - Aug 2025",
    location: "Remote",
    description: [
      "Designed and developed a cloud service platform akin to AWS, with TypeScript, ReactJs, and TailwindCSS.",
      "Built a Visual Flow App with React Flow, which enabled users to construct logical data pipelines with dynamic nodes.",
      "Implemented On-Browser AI with Hugging Face by integrating WebGPU to run LLM models directly in the browser.",
      "Developed a Custom Rich WYSIWYG Text Editor to support blog and article management system, reducing writing time by 50%.",
    ],
    skills: [
      "TypeScript",
      "React",
      "React Flow",
      "Hugging Face",
      "WebGPU",
      "TailwindCSS",
    ],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DK",
  },
  {
    id: "3",
    role: "Fullstack Web Developer",
    company: "DK AI Labs",
    duration: "Apr 2023 - Dec 2024",
    location: "Remote",
    description: [
      "Developed and deployed 5+ production-grade software using Next.js, Strapi, Tailwind CSS, and Shadcn UI.",
      "Converted complex Figma designs into pixel-perfect UIs with optimized rendering for performance and SEO (e.g., Earthscan.io).",
      "Engineered custom CMS workflows using Strapi and Ghost CMS with dynamic content and infinite scroll.",
      "Built and integrated authentication systems using Firebase (Auth + Role-Based Access) and OAuth (Google, GitHub, LinkedIn).",
      "Integrated external APIs including SMTP, AI APIs, and WordPress API to unify learning content (e.g., LiveAi.eu).",
    ],
    skills: [
      "Next.js",
      "Strapi",
      "Firebase",
      "Shadcn UI",
      "OAuth",
      "Ghost CMS",
    ],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DK",
  },
  {
    id: "4",
    role: "Fullstack Web Developer",
    company: "Freelance Marketplace",
    duration: "Sep 2021 - Apr 2023",
    location: "Remote",
    description: [
      "Designed and developed more than several frontend, backend and fullstack applications using HTML, CSS, JavaScript, TypeScript, ReactJs, NodeJS, ExpressJS etc.",
      "Collaborated with international clients to deliver custom solutions tailored to specific business requirements.",
      "Focused on responsive design and cross-browser compatibility for all client projects.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FM",
  },
];
