import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle
          label="About Me"
          title="Informatics student who loves building digital products."
          description={profile.about}
        />
      </Container>
    </section>
  );
}
