import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";

type ProjectCardProps = {
  project: Project;
};

function getStatusClass(status: Project["status"]) {
  if (status === "Completed") {
    return "bg-emerald-400/10 text-emerald-300";
  }

  if (status === "In Progress") {
    return "bg-yellow-400/10 text-yellow-300";
  }

  return "bg-slate-400/10 text-slate-300";
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/[0.07]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
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
          <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-300">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-400">{project.year}</p>

        <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-cyan-300">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-cyan-300">
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
            className="text-sm font-semibold text-slate-300 hover:text-cyan-300"
          >
            GitHub
          </a>
        ) : null}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-300 hover:text-cyan-300"
          >
            Live Demo
          </a>
        ) : null}

        <a
          href={`/projects/${project.slug}`}
          className="text-sm font-semibold text-slate-300 hover:text-cyan-300"
        >
          View Case Study
        </a>
      </div>
    </article>
  );
}
