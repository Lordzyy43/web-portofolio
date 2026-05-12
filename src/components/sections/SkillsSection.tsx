import { skillCategories } from "@/data/skills";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { SkillCard } from "@/components/ui/SkillCard";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionTitle
          label="Skills"
          title="Technologies I'm learning and using."
          description="A collection of technologies and tools I use to build web and mobile applications."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillCategories.map((skillCategory) => (
            <SkillCard
              key={skillCategory.title}
              skillCategory={skillCategory}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
