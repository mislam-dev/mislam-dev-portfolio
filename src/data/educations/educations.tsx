export type Education = {
  id: string;
  degree: string;
  institute: string;
  timeRange: string;
  result: string;
  description: string;
  imageUrl: string;
  achievements: string[];
  courses: string[];
};

export const educations: Education[] = [
  {
    id: "1",
    degree: "Diploma In Engr. in Computer Science",
    institute: "Jashore Polytechnic Institute",
    timeRange: "2022 - 2026",
    result: "CGPA: 3.65 / 4.00",
    description:
      "Deepening my expertise in software architecture, database management, and modern web frameworks while maintaining a focus on industry-ready technical skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800", // Tech/Code background
    achievements: [
      "Top 5% of the Department",
      "Developed for Department Management System Project",
      "Founded and maintained JPI Coders Club",
    ],
    courses: [
      "Python Programming",
      "Data Structures & Algorithm",
      "Web Development",
      "Database Systems",
      "Microprocessors",
      "Operating System",
    ],
  },
];
