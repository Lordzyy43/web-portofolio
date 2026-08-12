import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();
  const now = new Date("2026-08-11T00:00:00.000Z");

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/projects", siteUrl).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.85 : 0.7,
    })),
  ];
}
