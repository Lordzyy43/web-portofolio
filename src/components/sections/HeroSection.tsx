import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-20">
      <Container className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-5xl rounded-[36px] border border-white/10 bg-white/5 px-6 py-12 text-center shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur md:px-12 md:py-16">
          <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {profile.role} · {profile.location}
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.headline}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            I like building interfaces that feel calm, readable, and useful,
            with enough personality to stand out without feeling noisy.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="#projects">View Projects</ButtonLink>

            <ButtonLink href="#contact" variant="outline">
              Contact Me
            </ButtonLink>
          </div>

          <div className="mt-8">
            <SocialLinks align="center" />
          </div>
        </div>
      </Container>
    </section>
  );
}
