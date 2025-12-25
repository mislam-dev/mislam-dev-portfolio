import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// 1. Configure Fonts using next/font (Optimized & Zero Layout Shift)
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// 2. Configure Metadata (Replaces <head> meta tags)
export const metadata: Metadata = {
  title: "Monirul Islam",
  description:
    "I’m a full-stack developer with 4+ years of experience delivering high-performance, user-focused web applications. On the frontend, I specialize in React.js, Next.js, Tailwind CSS, and TypeScript.",
  authors: [{ name: "Monirul Islam" }],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Monirul Islam",
    description: "A passionate software engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
