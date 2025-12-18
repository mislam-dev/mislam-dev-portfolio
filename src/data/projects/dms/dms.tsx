import { v4 } from "uuid";
import { Project } from "../types";
import coverImg from "./images/dms.png";
// departmentOrchestrator.ts
export const dms_project: Project = {
  id: v4(),
  title: "Department Management System",
  short_descriptions:
    "DMS — a modular NestJS API for managing a department of an educational institute",
  tags: ["NestJs", "TypeOrm", "PostgreSQL", "Docker"],
  descriptions:
    "Department Management System (DMS) — a modular NestJS API for managing users, courses, schedules, attendance, notices, activities, and reports. The project integrates with Auth0 for authentication and role management, exposes a Swagger/OpenAPI UI, and is designed for containerized deployment.",
  links: [
    {
      label: "Source Code",
      link: "https://github.com/mislam-dev/department-management-system-api",
    },
  ],
  images: {
    cover: coverImg,
    showcases: ["/images/orchestrator-schedule.png"],
  },
};
