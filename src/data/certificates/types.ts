import { StaticImageData } from "next/image";

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  category: string;
  description: string;
  imageUrl: StaticImageData;
  credentialUrl: string;
  tags: string[];
  status: "active" | "expired" | "processing";
};
