import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import {
  ArrowLeft,
  ExternalLink,
  Target,
  AlertCircle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

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
      {/* Ambient Glow Latar Belakang */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="absolute inset-0 rounded-full bg-zinc-600/20 blur-[150px]" />
      </div>

      <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        <Container>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
            {/* Kolom Kiri: Detail Utama */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="accent"
                  size="sm"
                  className="bg-amber-400/10 text-amber-400 border-amber-400/20"
                >
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

              {/* Tipografi Silver Cinematic */}
              <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                <span className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
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
                        className="group rounded-full bg-zinc-200 px-6 text-zinc-950 transition-all hover:scale-105 hover:bg-zinc-100"
                      >
                        {link.label}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </ButtonLink>
                    ))
                  ) : (
                    <>
                      {project.liveUrl && (
                        <ButtonLink
                          href={project.liveUrl}
                          target="_blank"
                          className="group rounded-full bg-zinc-200 px-6 text-zinc-950 transition-all hover:scale-105 hover:bg-zinc-100"
                        >
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </ButtonLink>
                      )}
                      {project.githubUrl && (
                        <ButtonLink
                          href={project.githubUrl}
                          target="_blank"
                          variant="outline"
                          className="rounded-full border-zinc-700 px-6 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
                        >
                          <GithubIcon className="mr-2 h-4 w-4" />
                          View GitHub
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

              <article className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-8 shadow-2xl backdrop-blur-md">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Project Snapshot
                </h3>

                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-zinc-800/60 pb-4">
                    <dt className="text-zinc-400">Role</dt>
                    <dd className="text-right font-medium text-zinc-100">
                      {project.role ?? "Product design and development"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-zinc-800/60 pb-4">
                    <dt className="text-zinc-400">Category</dt>
                    <dd className="text-right font-medium text-zinc-100">
                      {project.category}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-zinc-800/60 pb-4">
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
                <article className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-8 shadow-2xl backdrop-blur-md">
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

      {/* Bagian Bawah: Asymmetrical Bento Grid */}
      <section className="mt-20 pt-16 border-t border-zinc-900/80">
        <Container>
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-zinc-100">Case Study</h2>
            <p className="text-zinc-400">The thinking behind the pixels.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            {[
              {
                title: "Context",
                span: "md:col-span-12 lg:col-span-7", // Lebar
                icon: <Target className="h-5 w-5" />,
                desc:
                  project.context ??
                  "This project was shaped to solve a practical product problem and keep the experience focused on the user journey.",
              },
              {
                title: "Challenge",
                span: "md:col-span-12 lg:col-span-5", // Kompak
                icon: <AlertCircle className="h-5 w-5" />,
                desc:
                  project.challenge ??
                  "The main challenge was keeping the interface clear while still supporting the full flow end to end.",
              },
              {
                title: "Approach",
                span: "md:col-span-12 lg:col-span-5", // Kompak
                icon: <Lightbulb className="h-5 w-5" />,
                desc:
                  project.approach ??
                  "I used reusable components, thoughtful hierarchy, and simple interaction patterns to keep the experience scalable.",
              },
              {
                title: "Impact",
                span: "md:col-span-12 lg:col-span-7", // Lebar
                icon: <TrendingUp className="h-5 w-5" />,
                desc:
                  project.impact ??
                  "The project improved my understanding of product structure, visual clarity, and building for real usage instead of just demos.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-zinc-900/30 p-8 transition-all hover:border-zinc-700/80 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-amber-900/10 ${card.span}`}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-800/0 via-zinc-800/5 to-amber-500/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div>
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/80 text-zinc-200 transition-colors group-hover:bg-zinc-800 group-hover:text-amber-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors md:text-base">
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
