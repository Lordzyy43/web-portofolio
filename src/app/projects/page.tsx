import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web, mobile, and academic projects with a focus on process, architecture, and design decisions.",
  openGraph: {
    title: "Projects | Muriddkuu",
    description:
      "Selected web, mobile, and academic projects with a focus on process, architecture, and design decisions.",
    url: "/projects",
  },
  twitter: {
    title: "Projects | Muriddkuu",
    description:
      "Selected web, mobile, and academic projects with a focus on process, architecture, and design decisions.",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen pt-28 text-white">
      <section className="py-16">
        <Container>
          <SectionTitle
            label="Projects"
            title="Selected work, not just screenshots."
            description="Each project here includes the context, challenge, and approach behind the build, so it reads more like a case study than a gallery."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
