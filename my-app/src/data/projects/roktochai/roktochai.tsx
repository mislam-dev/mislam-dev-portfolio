import { v4 } from "uuid";
import { Project } from "../types";

// roktoChai.ts
export const roktoChai: Project = {
  id: v4(),
  title: "RoktoChai",
  short_descriptions:
    "A social-good platform connecting blood donors with those in need.",
  tags: ["React", "Node.js", "Express", "Prisma", "MongoDB"],
  descriptions:
    "RoktoChai is a life-saving application featuring real-time notification systems and donor tracking. It helps bridge the gap between emergency blood requirements and available donors through an intuitive map-based interface.",
  links: [
    { label: "Source Code", link: "https://github.com/mislam-dev/roktochai" },
  ],
  images: {
    cover: "/images/roktochai-cover.png",
    showcases: [
      "/images/roktochai-map.png",
      "/images/roktochai-donor-list.png",
    ],
  },
};
