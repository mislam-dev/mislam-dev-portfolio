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
    icon: (
      <span className="bg-white block rounded-full">
        <Image src={devDoTwoIcon} alt="dev.to" />
      </span>
    ),
    label: "Dev.to",
  },
  {
    href: "https://www.youtube.com/@mislam-dev",
    icon: <Image src={youtubeIcon} alt="" />,
    label: "Youtube",
  },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1TgS30G-ksd2Wq0lmVD8wZT6r8D4k4Ish/view?usp=sharing";
