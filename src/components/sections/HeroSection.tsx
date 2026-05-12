import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-20">
      <Container className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
          {profile.role}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {profile.headline}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#projects">View Projects</ButtonLink>

          <ButtonLink href="#contact" variant="outline">
            Contact Me
          </ButtonLink>
        </div>

        <div className="mt-8">
          <SocialLinks align="center" />
        </div>
      </Container>
    </section>
  );
}
