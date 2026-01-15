import { PersonStanding, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

export const achievements: {
  id: string | number;
  title: string;
  description: string;
  icon: React.ReactNode | string;
  year: string;
}[] = [
  {
    id: v4(),
    title: "Problem solving",
    description: "Solved 200+ coding problems across LeetCode and HackerRank.",
    year: "2023",
    icon: (
      <div className="w-full h-12">
        <Image
          alt=""
          src={
            "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          }
          className="w-full h-full object-cover"
          height={100}
          width={100}
        />
      </div>
    ),
  },
  {
    id: v4(),
    title: "Community Leader",
    description:
      "Founded and managed the JPI Coders Club, fostering knowledge-sharing among 300+ students.",
    icon: <Users className="h-12 w-12 text-primary" />,
    year: "2025",
  },
  {
    id: v4(),
    title: "Certifications",
    description:
      "Earned multiple industry-recognized certifications in CSE fundamentals, React, JavaScript, Redux etc.",
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    year: "2025",
  },

  {
    id: v4(),
    title: "Club Initiater",
    description:
      "Led the initiative to establish a department computer club, including drafting the constitution",
    icon: <PersonStanding className="h-12 w-12 text-primary" />,
    year: "2025",
  },
];
