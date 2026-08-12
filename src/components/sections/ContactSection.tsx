import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <SectionTitle
            label="Contact"
            title="If the work feels right, let's talk."
            description="Reach out for collaboration, portfolio feedback, project discussion, or anything creative and practical."
            align="center"
          />

          <div className="mt-8 flex justify-center">
            <ButtonLink href={`mailto:${profile.email}`}>Send Email</ButtonLink>
          </div>

          <div className="mt-6">
            <SocialLinks align="center" />
          </div>
        </div>
      </Container>
    </section>
  );
}
