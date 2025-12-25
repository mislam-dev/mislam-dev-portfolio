import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  short_descriptions: string;
  tags: string[];
  descriptions: string;
  links: {
    link: string;
    label: string;
  }[];
  images: {
    cover: StaticImageData;
    showcases: string[];
  };
}
