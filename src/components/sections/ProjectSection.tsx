"use client";

import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="relative py-24 md:py-36">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            label="Selected Works"
            title="Case studies & builds."
            description="How I think about product structure, visual clarity, and implementation choices across web and mobile."
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <ButtonLink
              href="/projects"
              variant="outline"
              className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              View All Projects
            </ButtonLink>
          </motion.div>
        </div>

        {/* 
          ASYMMETRICAL GRID: 
          Proyek pertama mengambil full width (col-span-2), sisanya half width. 
        */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project, index) => {
            // Proyek pertama di-highlight menjadi besar
            const isHeroProject = index === 0;

            return (
              <div
                key={project.slug}
                className={cn(
                  isHeroProject ? "md:col-span-2" : "md:col-span-1",
                )}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  isLarge={isHeroProject}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
