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
          title="Tools and technologies I keep reaching for."
          description="A practical stack for web and mobile work, with enough flexibility to move from prototypes to polished interfaces."
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
