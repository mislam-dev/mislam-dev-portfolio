import { v4 } from "uuid";
import { Project } from "../types";
import coverImg from "./images/realai.png";
// realAi.ts
export const realAi: Project = {
  id: v4(),
  title: "Real AI",
  short_descriptions:
    "Professional landing page for an AI company featuring SSR and SSG.",
  tags: ["TypeScript", "Next.js", "Tailwind CSS", "Strapi", "Firebase"],
  descriptions:
    "A high-performance landing page developed from a Figma design. It leverages Next.js for Server-Side Rendering (SSR) and Static Site Generation (SSG) to ensure optimal SEO and lightning-fast load times for the company's service catalog.",
  links: [{ label: "Live Preview", link: "https://www.realai.eu/" }],
  images: {
    cover: coverImg,
    showcases: ["/images/realai-mobile.png", "/images/realai-desktop.png"],
  },
};
