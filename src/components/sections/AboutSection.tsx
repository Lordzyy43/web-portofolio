import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle
          label="About Me"
          title="I like building products that feel intentional, not generic."
          description={profile.about}
        />
      </Container>
    </section>
  );
}
