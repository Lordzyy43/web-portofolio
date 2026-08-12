import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
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

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    keywords: [
      project.title,
      project.category,
      project.status,
      "case study",
      "portfolio",
    ],
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      title: `${project.title} Case Study`,
      description: project.summary,
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
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

  const highlights = project.highlights ?? [];
  const projectLinks = project.links ?? [];

  return (
    <main className="relative min-h-screen pt-28 text-white">
      <section className="py-16">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
            <div>
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

              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-4 max-w-2xl text-lg font-medium text-cyan-200 md:text-xl">
                {project.summary}
              </p>

              <p className="mt-6 max-w-3xl leading-8 text-slate-300">
                {project.description}
              </p>

              {project.context ? (
                <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                  {project.context}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Badge key={item} variant="accent" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>

              {projectLinks.length || project.githubUrl || project.liveUrl ? (
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  {projectLinks.length ? (
                    projectLinks.map((link) => (
                      <ButtonLink
                        key={link.url}
                        href={link.url}
                        target={link.target ?? "_blank"}
                        variant="outline"
                      >
                        {link.label}
                      </ButtonLink>
                    ))
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              ) : null}
            </div>

            <aside className="space-y-6">
              <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Project Snapshot
                </p>

                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-slate-400">Role</dt>
                    <dd className="text-right font-medium text-white">
                      {project.role ?? "Product design and development"}
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-slate-400">Category</dt>
                    <dd className="text-right font-medium text-white">
                      {project.category}
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-slate-400">Status</dt>
                    <dd className="text-right font-medium text-white">
                      {project.status}
                    </dd>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-slate-400">Year</dt>
                    <dd className="text-right font-medium text-white">
                      {project.year}
                    </dd>
                  </div>
                </dl>
              </article>

              {highlights.length ? (
                <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    Highlights
                  </p>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Context
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                {project.context ??
                  "This project was shaped to solve a practical product problem and keep the experience focused on the user journey."}
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Challenge
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                {project.challenge ??
                  "The main challenge was keeping the interface clear while still supporting the full flow end to end."}
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Approach
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                {project.approach ??
                  "I used reusable components, thoughtful hierarchy, and simple interaction patterns to keep the experience scalable."}
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Impact
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                {project.impact ??
                  "The project improved my understanding of product structure, visual clarity, and building for real usage instead of just demos."}
              </p>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
