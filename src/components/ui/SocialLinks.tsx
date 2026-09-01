import { profile } from "@/data/profile";

type SocialLinksProps = {
  align?: "left" | "center";
};

const socialLabels = {
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
};

export function SocialLinks({ align = "left" }: SocialLinksProps) {
  const isCenter = align === "center";

  const visibleSocials = Object.entries(profile.socials).filter(([, url]) => {
    return typeof url === "string" && url.trim().length > 0;
  });

  return (
    <div
      className={`flex flex-wrap gap-3 ${
        isCenter ? "justify-center" : "justify-start"
      }`}
    >
      {visibleSocials.map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          {socialLabels[key as keyof typeof socialLabels]}
        </a>
      ))}
    </div>
  );
}
