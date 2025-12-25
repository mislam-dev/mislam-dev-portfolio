import { v4 } from "uuid";
import { Project } from "../types";
import coverImg from "./images/tams.png";
// taskEnterprise.ts
export const taskEnterprise: Project = {
  id: v4(),
  title: "Task Management Enterprise",
  short_descriptions:
    "Enterprise-level task management following Clean Architecture and DDD.",
  tags: ["React", "ExpressJs", "Drizzle", "DDD", "Turborepo"],
  descriptions:
    "A robust monorepo application built with Turborepo. It demonstrates the implementation of Domain-Driven Design (DDD) and Clean Architecture in a TypeScript ecosystem, ensuring the business logic remains decoupled from external frameworks.",
  links: [
    {
      label: "Source Code",
      link: "https://github.com/mislam-dev/task-management-enterprise",
    },
  ],
  images: {
    cover: coverImg,
    showcases: ["/images/task-ent-dashboard.png"],
  },
};
