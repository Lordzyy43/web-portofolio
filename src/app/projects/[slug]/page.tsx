import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Project Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-28 text-white">
      <section className="py-16">
        <Container>
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>

              <Badge size="sm">{project.status}</Badge>

              {project.featured ? (
                <Badge variant="accent" size="sm">
                  Featured
                </Badge>
              ) : null}

              <Badge size="sm">{project.year}</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg font-medium text-cyan-300">
              {project.summary}
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Badge key={item} variant="accent" size="sm">
                  {item}
                </Badge>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {project.githubUrl ? (
                <ButtonLink
                  href={project.githubUrl}
                  target="_blank"
                  variant="outline"
                >
                  View GitHub
                </ButtonLink>
              ) : null}

              {project.liveUrl ? (
                <ButtonLink href={project.liveUrl} target="_blank">
                  Live Demo
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold text-white">Overview</h2>
              <p className="mt-4 leading-7 text-slate-300">
                This project focuses on building a practical digital product
                while applying clean structure, reusable components, and modern
                development workflow.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold text-white">Problem</h2>
              <p className="mt-4 leading-7 text-slate-300">
                The challenge was to transform an idea into a usable interface
                with clear navigation, readable content, and scalable project
                structure.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold text-white">Solution</h2>
              <p className="mt-4 leading-7 text-slate-300">
                The solution was built using modular components, typed data,
                reusable UI patterns, and responsive layouts.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
