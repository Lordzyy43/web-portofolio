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
  role?: string;
  summary: string;
  description: string;
  tech: string[];
  context?: string;
  challenge?: string;
  approach?: string;
  impact?: string;
  highlights?: string[];
  links?: {
    label: string;
    url: string;
    target?: "_blank" | "_self";
  }[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};
