import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Projects | Muriddkuu",
  description:
    "A collection of projects built with web and mobile technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-28 text-white">
      <section className="py-16">
        <Container>
          <SectionTitle
            label="Projects"
            title="All projects."
            description="Explore my selected web, mobile, and academic projects. Each project represents my learning journey, technical growth, and problem-solving process."
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
