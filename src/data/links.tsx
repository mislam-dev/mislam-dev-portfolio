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
        <img src={githubIcon} />
      </span>
    ),
    label: "Github",
  },
  {
    href: "https://linkedin.com/in/mislam-dev",
    icon: <img src={linkedinIcon} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:mmislam027@gmail.com",
    icon: <img src={gmailIcon} />,
    label: "Email",
  },
  {
    href: "https://leetcode.com/u/mislamdev",
    icon: <img src={leetCodeIcon} />,
    label: "LeetCode",
  },
  {
    href: "https://www.hackerrank.com/profile/codemonkmi",
    icon: <img src={hackerRankIcon} />,
    label: "HackerRank",
  },
  {
    href: "https://dev.to/mislam-dev",
    icon: <img src={devDoTwoIcon} />,
    label: "Dev.to",
  },
  {
    href: "https://www.youtube.com/@mislam-dev",
    icon: <img src={youtubeIcon} />,
    label: "Youtube",
  },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1hXcSO96vja1D9Alv38FR6EwSRATwFG3X/view?usp=sharing";
