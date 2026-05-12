import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Mobile Development",
    description: "Creating mobile applications with modern UI and clean flow.",
    items: ["Flutter", "Dart", "Provider"],
  },
  {
    title: "Styling & UI",
    description: "Designing clean layouts and reusable visual components.",
    items: ["Tailwind CSS", "Responsive Design", "UI Components"],
  },
  {
    title: "Tools & Workflow",
    description: "Managing code, project structure, and deployment workflow.",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];