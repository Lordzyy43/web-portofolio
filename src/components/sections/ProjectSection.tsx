import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            label="Projects"
            title="Selected projects."
            description="A collection of projects that represent my learning journey, technical growth, and ability to build real-world digital products."
          />

          <div className="shrink-0">
            <ButtonLink href="/projects" variant="outline">
              View All Projects
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
