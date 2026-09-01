import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { ArrowLeft, ExternalLink } from "lucide-react"; // <- Github dihapus dari sini

// Komponen kustom SVG untuk GitHub (Aman dari error versi library)
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

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
    <main className="relative min-h-screen pt-28 pb-16">
      <section>
        <Container>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
            {/* Kolom Kiri: Detail Utama */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent" size="sm">
                  {project.category}
                </Badge>
                <Badge size="sm">{project.status}</Badge>
                {project.featured && (
                  <Badge variant="accent" size="sm">
                    Featured
                  </Badge>
                )}
                <Badge size="sm">{project.year}</Badge>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-50 md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-medium text-zinc-300">
                {project.summary}
              </p>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
                <p>{project.description}</p>
                {project.context && <p>{project.context}</p>}
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Badge
                    key={item}
                    variant="default"
                    className="bg-zinc-800/50 border-zinc-700/50 text-zinc-300"
                    size="sm"
                  >
                    {item}
                  </Badge>
                ))}
              </div>

              {(projectLinks.length > 0 ||
                project.githubUrl ||
                project.liveUrl) && (
                <div className="mt-10 flex flex-wrap gap-4">
                  {projectLinks.length > 0 ? (
                    projectLinks.map((link) => (
                      <ButtonLink
                        key={link.url}
                        href={link.url}
                        target={link.target ?? "_blank"}
                        variant="outline"
                      >
                        {link.label}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </ButtonLink>
                    ))
                  ) : (
                    <>
                      {project.githubUrl && (
                        <ButtonLink
                          href={project.githubUrl}
                          target="_blank"
                          variant="outline"
                        >
                          {/* Menggunakan komponen GithubIcon kustom di sini */}
                          <GithubIcon className="mr-2 h-4 w-4" />
                          View GitHub
                        </ButtonLink>
                      )}
                      {project.liveUrl && (
                        <ButtonLink href={project.liveUrl} target="_blank">
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </ButtonLink>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Kolom Kanan: Visual & Snapshot */}
            <aside className="space-y-8">
              <ProjectVisual project={project} size="lg" />

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-2xl backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Project Snapshot
                </h3>

                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-zinc-800 pb-4">
                    <dt className="text-zinc-400">Role</dt>
                    <dd className="text-right font-medium text-zinc-100">
                      {project.role ?? "Product design and development"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-zinc-800 pb-4">
                    <dt className="text-zinc-400">Category</dt>
                    <dd className="text-right font-medium text-zinc-100">
                      {project.category}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-zinc-800 pb-4">
                    <dt className="text-zinc-400">Status</dt>
                    <dd className="text-right font-medium text-zinc-100">
                      {project.status}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Year</dt>
                    <dd className="text-right font-medium text-zinc-100">
                      {project.year}
                    </dd>
                  </div>
                </dl>
              </article>

              {highlights.length > 0 && (
                <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-2xl backdrop-blur-md">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Highlights
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-300">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-zinc-800/60 bg-zinc-800/20 px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {/* Bagian Bawah: Bento Grid untuk Studi Kasus */}
      <section className="mt-12 py-12 border-t border-zinc-900">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Context",
                desc:
                  project.context ??
                  "This project was shaped to solve a practical product problem and keep the experience focused on the user journey.",
              },
              {
                title: "Challenge",
                desc:
                  project.challenge ??
                  "The main challenge was keeping the interface clear while still supporting the full flow end to end.",
              },
              {
                title: "Approach",
                desc:
                  project.approach ??
                  "I used reusable components, thoughtful hierarchy, and simple interaction patterns to keep the experience scalable.",
              },
              {
                title: "Impact",
                desc:
                  project.impact ??
                  "The project improved my understanding of product structure, visual clarity, and building for real usage instead of just demos.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 transition-colors hover:bg-zinc-900/60"
              >
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-100">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
