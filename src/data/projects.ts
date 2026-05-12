import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Aerobook",
    slug: "aerobook",
    category: "Mobile App",
    status: "In Progress",
    featured: true,
    year: "2026",
    summary: "Sports venue booking mobile application.",
    description:
      "Aerobook is a Flutter-based mobile application for booking sports venues. It includes venue listing, search and filter, venue detail, booking flow, and a modern mobile UI designed for an academic project and Play Store internal testing preparation.",
    tech: ["Flutter", "Dart", "Provider", "Android"],
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Web App",
    status: "In Progress",
    featured: true,
    year: "2026",
    summary: "Personal portfolio website built with modern web technologies.",
    description:
      "A personal portfolio website built using Next.js, TypeScript, and Tailwind CSS. This project focuses on clean UI, modular architecture, reusable components, responsive design, and future scalability for blog, project case studies, and contact form integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Student Task Dashboard",
    slug: "student-task-dashboard",
    category: "Web App",
    status: "Planned",
    featured: false,
    year: "2026",
    summary: "Task management dashboard for students.",
    description:
      "A planned web application for managing student tasks, deadlines, categories, and progress status. This project will be used to practice CRUD, authentication, filtering, and dashboard UI.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
];
