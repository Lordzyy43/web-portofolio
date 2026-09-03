import type { SkillCategory } from "@/types/skill";
// 1. Impor ikon lucide-react di bagian paling atas
import {
  Code2,
  Smartphone,
  Monitor,
  Database,
  GitBranch,
  PenTool,
} from "lucide-react";

// Data lama kamu (tetap dibiarkan seperti ini)
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

// 2. Tambahkan data baru khusus untuk Floating Dock di bawah sini
export const coreTechnologies = [
  {
    title: "React & Next.js",
    icon: <Monitor className="h-full w-full" />,
    href: "https://nextjs.org/", // Opsional: kamu bisa menambahkan link atau mengosongkannya
  },
  {
    title: "TypeScript",
    icon: <Code2 className="h-full w-full" />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Flutter",
    icon: <Smartphone className="h-full w-full" />,
    href: "https://flutter.dev/",
  },
  {
    title: "Node & SQL",
    icon: <Database className="h-full w-full" />,
  },
  {
    title: "Git & GitHub",
    icon: <GitBranch className="h-full w-full" />,
    href: "https://github.com/",
  },
  {
    title: "UI/UX Design",
    icon: <PenTool className="h-full w-full" />,
    href: "https://www.figma.com/",
  },
];
