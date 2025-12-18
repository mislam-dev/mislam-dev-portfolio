import { dms_project } from "./dms";
import { earthScan_project } from "./eartscan";
import { prexress_project } from "./prexress";
import { realAi_project } from "./realai";
import { task_management_project } from "./task-management";
import { Project } from "./types";

export const projects: Project[] = [
  prexress_project,
  task_management_project,
  dms_project,
  earthScan_project,
  realAi_project,
];
