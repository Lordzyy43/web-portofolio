export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type ProjectCategory =
  | "Web App"
  | "Mobile App"
  | "UI/UX"
  | "Fullstack"
  | "Academic Project";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  year: string;
  summary: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};
