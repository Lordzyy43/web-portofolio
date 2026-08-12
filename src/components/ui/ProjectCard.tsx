import Link from "next/link";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";

type ProjectCardProps = {
  project: Project;
};

function getStatusClass(status: Project["status"]) {
  if (status === "Completed") {
    return "bg-emerald-400/10 text-emerald-200";
  }

  if (status === "In Progress") {
    return "bg-amber-400/10 text-amber-200";
  }

  return "bg-slate-400/10 text-slate-200";
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/[0.07]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          {project.category}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
            project.status,
          )}`}
        >
          {project.status}
        </span>

        {project.featured ? (
          <span className="rounded-full bg-fuchsia-400/10 px-3 py-1 text-xs font-medium text-fuchsia-200">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-400">{project.year}</p>

        <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-cyan-200">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-cyan-200">
          {project.summary}
        </p>

        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <Badge key={item} variant="accent" size="sm">
            {item}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-300 transition hover:text-cyan-200"
          >
            GitHub
          </a>
        ) : null}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-300 transition hover:text-cyan-200"
          >
            Live Demo
          </a>
        ) : null}

        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-semibold text-slate-300 transition hover:text-cyan-200"
        >
          View Case Study
        </Link>
      </div>
    </article>
  );
}
