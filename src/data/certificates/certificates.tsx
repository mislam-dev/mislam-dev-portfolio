import fe_img from "./images/fe_dev.png";
import js_basic_img from "./images/js_basic.png";
import js_int_img from "./images/js_intermediate.png";
import redux_img from "./images/LWS-Certificate.jpg";
import node_img from "./images/Node_basic.png";
import phitron_img from "./images/phitron_cse.jpg";
import { Certification } from "./types";

export const certifications: Certification[] = [
  {
    id: "6",
    title: "CS Fundamentals With Phitron",
    issuer: "Phitron",
    issueDate: "Sep 2025",
    category: "Programming",
    description:
      "It covers topics like Data Structures, Algorithms, Problem Solving, Database Management, Object Oriented Programming",
    imageUrl: phitron_img,
    credentialUrl:
      "https://phitron.io/verification?validationNumber=PHBATCH56254371008",
    tags: ["DSA", "Problem Solving", "OOP", "DBMS"],
    status: "active",
  },
  {
    id: "2",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    issueDate: "March, 2025",
    category: "Development",
    description:
      "Comprehensive assessment covering React components, hooks, state management, and performance optimization.",
    imageUrl: fe_img,
    credentialUrl: "https://www.hackerrank.com/certificates/617e2b1f74fb",
    tags: ["React.js", "CSS3", "Frontend Architecture"],
    status: "active",
  },
  {
    id: "3",
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    issueDate: "March, 2025",
    category: "Programming",
    description:
      "Covers fundamental JavaScript concepts including variables, loops, data types, and basic functions.",
    imageUrl: js_basic_img,
    credentialUrl: "https://www.hackerrank.com/certificates/d2e571b01a02",
    tags: ["JavaScript", "ES6", "Problem Solving"],
    status: "active",
  },
  {
    id: "4",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    issueDate: "March, 2025",
    category: "Programming",
    description:
      "Focuses on design patterns, memory management, concurrency, and advanced asynchronous programming.",
    imageUrl: js_int_img,
    credentialUrl: "https://www.hackerrank.com/certificates/9ea89219dff1",
    tags: ["Closures", "Promises", "Design Patterns"],
    status: "active",
  },
  {
    id: "1",
    title: "Think in a Redux way",
    issuer: "Learn With Sumit",
    issueDate: "Sep 2022",
    category: "State Management",
    description:
      "Deep dive into predictable state containers, middleware, and advanced Redux Toolkit patterns.",
    imageUrl: redux_img,
    credentialUrl:
      "https://drive.google.com/file/d/1bNRD2GVFJfhDTSPgf9ieBFUijgrEHdWy/view",
    tags: ["Redux", "Redux Toolkit", "RTK Query"],
    status: "active",
  },
  {
    id: "5",
    title: "Node (Basic)",
    issuer: "HackerRank",
    issueDate: "March, 2025",
    category: "Programming",
    description:
      "It covers topics like Package and Modules Management, Callbacks, Event Loop, Event Emitter, Buffers, Streams and File Systems",
    imageUrl: node_img,
    credentialUrl: "https://www.hackerrank.com/certificates/203dd5fdd6eb",
    tags: ["Nodejs", "Event Loop"],
    status: "active",
  },
];
