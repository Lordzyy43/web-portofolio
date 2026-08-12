import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Web & Mobile Developer Portfolio",
  description:
    "A personal portfolio with featured web and mobile case studies, design-focused UI, and reusable Next.js components.",
  openGraph: {
    title: "Muriddkuu | Web & Mobile Developer",
    description:
      "Personal portfolio with featured projects, skills, and case studies.",
    url: "/",
  },
  twitter: {
    title: "Muriddkuu | Web & Mobile Developer",
    description:
      "Personal portfolio with featured projects, skills, and case studies.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
