import Image from "next/image";
import devDoTwoIcon from "./dev-to.png";
import githubIcon from "./github.png";
import gmailIcon from "./gmail.png";
import hackerRankIcon from "./hackerrank.png";
import leetCodeIcon from "./leetcode.png";
import linkedinIcon from "./linkedin.png";
import youtubeIcon from "./youtube.png";

type SocialLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/mislam-dev",
    icon: (
      <span className="bg-white block rounded-full">
        <Image src={githubIcon} alt="github" />
      </span>
    ),
    label: "Github",
  },
  {
    href: "https://linkedin.com/in/mislam-dev",
    icon: <Image src={linkedinIcon} alt="" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:mmislam027@gmail.com",
    icon: <Image src={gmailIcon} alt="" />,
    label: "Email",
  },
  {
    href: "https://leetcode.com/u/mislamdev",
    icon: <Image src={leetCodeIcon} alt="" />,
    label: "LeetCode",
  },
  {
    href: "https://www.hackerrank.com/profile/codemonkmi",
    icon: <Image src={hackerRankIcon} alt="" />,
    label: "HackerRank",
  },
  {
    href: "https://dev.to/mislam-dev",
    icon: <Image src={devDoTwoIcon} alt="" />,
    label: "Dev.to",
  },
  {
    href: "https://www.youtube.com/@mislam-dev",
    icon: <Image src={youtubeIcon} alt="" />,
    label: "Youtube",
  },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1hXcSO96vja1D9Alv38FR6EwSRATwFG3X/view?usp=sharing";
