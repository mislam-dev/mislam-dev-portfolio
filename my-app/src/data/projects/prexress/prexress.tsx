import { v4 } from "uuid";
import { Project } from "../types";
import cover_image from "./images/cover.png";

export const prexress_project: Project = {
  id: v4(),
  title: "Prexress",
  short_descriptions:
    "A lightweight, modular backend framework built on top of Express.js.",
  tags: ["Node.js", "Express", "TypeScript", "Prisma", "OOP"],
  descriptions:
    "Prexress is designed to eliminate boilerplate in Express.js applications. It provides high-level abstractions for routing, controllers, and services, promoting a standardized OOP-based architecture for rapid and scalable API development.",
  links: [
    { label: "Source Code", link: "https://github.com/mislam-dev/prexress" },
    {
      label: "CLI Docs",
      link: "https://www.npmjs.com/package/@prexress/cli",
    },
  ],
  images: {
    cover: cover_image,
    showcases: ["/images/prexress-arch.png", "/images/prexress-cli.png"],
  },
};
