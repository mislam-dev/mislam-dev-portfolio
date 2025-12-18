import { v4 } from "uuid";
import { Project } from "../types";
import cover from "./images/eartscan.io.png";

// earthScan.ts
export const earthScan: Project = {
  id: v4(),
  title: "EarthScan",
  short_descriptions:
    "Interactive and animated landing page focused on environmental data.",
  tags: ["TypeScript", "Next.js", "Tailwind CSS", "Strapi", "Axios"],
  descriptions:
    "An interactive web platform that brings complex data to life. Implemented complex CSS animations and optimized the site for production using Next.js features, focusing on a seamless user experience and accessibility.",
  links: [{ label: "Live Preview", link: "https://earthscan.io/" }],
  images: {
    cover: cover,
    showcases: ["/images/earthscan-map.png"],
  },
};
