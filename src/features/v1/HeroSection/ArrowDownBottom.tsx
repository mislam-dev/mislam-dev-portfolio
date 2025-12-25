"use client";
import { ArrowDown } from "lucide-react";

const ArrowDownBottom = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("experience");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  return (
    <button
      onClick={scrollToAbout}
      className="flex items-center justify-center p-2 rounded-full bg-muted text-primary hover:bg-muted/80 transition-colors"
    >
      <ArrowDown size={24} />
    </button>
  );
};

export default ArrowDownBottom;
