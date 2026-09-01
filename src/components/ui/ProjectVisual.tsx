import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  project: Project;
  size?: "sm" | "lg";
};

// Menyederhanakan preset warna menjadi nuansa cinematic (Zinc, Amber, Blue, Emerald yang sangat pudar)
const presets: Record<string, { glow: string; accent: string }> = {
  "revora-platform": {
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]",
    accent: "text-blue-200",
  },
  "website-booking-lapangan": {
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.1),transparent_50%)]",
    accent: "text-emerald-200",
  },
  "e-learning": {
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(217,119,6,0.1),transparent_50%)]",
    accent: "text-amber-200",
  },
};

export function ProjectVisual({ project, size = "sm" }: ProjectVisualProps) {
  const isLarge = size === "lg";

  // Ambil preset warna atau gunakan default silver/zinc glow
  const theme = presets[project.slug] ?? {
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(161,161,170,0.08),transparent_50%)]",
    accent: "text-zinc-200",
  };

  return (
    <div
      className={cn(
        "group/visual relative flex w-full flex-col justify-between overflow-hidden bg-zinc-950/80",
        isLarge ? "min-h-[400px] p-8 md:p-10" : "min-h-[280px] p-6",
      )}
    >
      {/* Cinematic Glow Background */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 transition-opacity duration-700 group-hover/visual:opacity-70",
          theme.glow,
        )}
      />

      {/* Noise/Texture overlay halus */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
      />

      {/* Teks di dalam Visual */}
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-md">
            <h4
              className={cn(
                "font-bold tracking-tight",
                theme.accent,
                isLarge ? "text-3xl md:text-5xl" : "text-2xl",
              )}
            >
              {project.title}
            </h4>
            {isLarge && (
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.summary}
              </p>
            )}
          </div>

          {/* Metrik Data */}
          <div className="flex shrink-0 flex-col gap-4 text-right">
            <div>
              <div className="text-xl font-bold text-white md:text-2xl">
                {project.year}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Year
              </div>
            </div>
          </div>
        </div>

        {/* Data Blocks (Glassmorphism) */}
        <div
          className={cn(
            "grid gap-3",
            isLarge ? "sm:grid-cols-3" : "grid-cols-2",
          )}
        >
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md transition-colors group-hover/visual:bg-white/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Context
            </p>
            <p className="mt-1.5 text-xs font-medium leading-relaxed text-zinc-300 line-clamp-3">
              {project.context ?? project.summary}
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md transition-colors group-hover/visual:bg-white/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Approach
            </p>
            <p className="mt-1.5 text-xs font-medium leading-relaxed text-zinc-300 line-clamp-3">
              {project.approach ?? project.description}
            </p>
          </div>
          {isLarge && (
            <div className="hidden rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md transition-colors group-hover/visual:bg-white/10 sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Impact
              </p>
              <p className="mt-1.5 text-xs font-medium leading-relaxed text-zinc-300 line-clamp-3">
                {project.impact ??
                  "Delivered a scalable, user-centric solution."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
