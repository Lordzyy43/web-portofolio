import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-center text-sm text-slate-400 md:text-left">
            © 2026 {profile.name}. Built with Next.js and Tailwind CSS.
          </p>

          <SocialLinks align="center" />
        </div>
      </Container>
    </footer>
  );
}
