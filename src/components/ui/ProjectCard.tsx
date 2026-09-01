"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  isLarge?: boolean;
};

function getStatusClass(status: Project["status"]) {
  if (status === "Completed")
    return "bg-emerald-500/10 border-emerald-500/20 text-emerald-300";
  if (status === "In Progress")
    return "bg-amber-500/10 border-amber-500/20 text-amber-300";
  return "bg-zinc-500/10 border-zinc-500/20 text-zinc-300";
}

export function ProjectCard({
  project,
  index,
  isLarge = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-zinc-800/60 bg-zinc-900/40 p-3 transition-colors hover:border-zinc-700/80 hover:bg-zinc-900/60"
    >
      {/* Project Visual Area */}
      <div className="relative overflow-hidden rounded-[2rem]">
        <ProjectVisual project={project} size={isLarge ? "lg" : "sm"} />
      </div>

      {/* Konten Text Area */}
      <div
        className={cn(
          "flex flex-1 flex-col justify-between px-4 pb-4 pt-8 md:px-6",
          isLarge && "md:flex-row md:gap-12",
        )}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur-sm">
              {project.category}
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${getStatusClass(project.status)}`}
            >
              {project.status}
            </span>
            {project.featured && (
              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                Featured
              </span>
            )}
          </div>

          <h3 className="mt-5 text-2xl font-bold text-zinc-100 transition-colors group-hover:text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-400">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.slice(0, isLarge ? 5 : 3).map((item) => (
              <span
                key={item}
                className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-400"
              >
                {item}
              </span>
            ))}
            {!isLarge && project.tech.length > 3 && (
              <span className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-1.5 text-xs font-medium text-zinc-500">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div
          className={cn(
            "mt-8 flex flex-wrap items-end gap-4",
            isLarge ? "md:mt-0 md:flex-col md:items-end" : "justify-between",
          )}
        >
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-zinc-400 transition hover:text-zinc-200"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-zinc-400 transition hover:text-zinc-200"
              >
                Live Demo
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-6 py-2.5 text-sm font-bold text-zinc-950 transition-transform hover:scale-105"
          >
            Read Case Study
            <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
