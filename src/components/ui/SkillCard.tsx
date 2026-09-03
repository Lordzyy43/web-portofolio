"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/types/skill";
import { FloatingDock } from "@/components/ui/FloatingDock";

// Impor dari Lucide untuk Kategori Utama, Konsep Abstrak & Terminal (VS Code fallback)
import {
  Code2,
  Smartphone,
  Database,
  PenTool,
  Cpu,
  Network,
  MonitorSmartphone,
  LayoutTemplate,
  Box,
  Terminal, // Ditambahkan untuk mengganti SiVisualstudiocode yang error
} from "lucide-react";

// Impor Logo Asli dari Simple Icons (react-icons/si)
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss, // FIX: Menggunakan nama yang benar (SiCss3, bukan SiCss)
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

type SkillCardProps = {
  skillCategory: SkillCategory;
  index?: number;
};

// Fungsi ikon untuk Kategori Utama (Kiri Atas)
function getCategoryIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("front") || t.includes("web"))
    return <Code2 className="h-6 w-6" />;
  if (t.includes("mobile") || t.includes("app"))
    return <Smartphone className="h-6 w-6" />;
  if (t.includes("back") || t.includes("data"))
    return <Database className="h-6 w-6" />;
  if (t.includes("design") || t.includes("ui"))
    return <PenTool className="h-6 w-6" />;
  return <Cpu className="h-6 w-6" />;
}

// FIX 1: Perpaduan Logo Asli (Brands) dan Ikon Konsep (Lucide)
function getTechIcon(itemName: string) {
  const name = itemName.toLowerCase();

  // Frontend (Brands)
  if (name.includes("react")) return <SiReact className="h-full w-full" />;
  if (name.includes("next")) return <SiNextdotjs className="h-full w-full" />;
  if (name.includes("html")) return <SiHtml5 className="h-full w-full" />;
  if (name.includes("css") && !name.includes("tailwind"))
    return <SiCss className="h-full w-full" />;
  if (name.includes("javascript"))
    return <SiJavascript className="h-full w-full" />;
  if (name.includes("typescript"))
    return <SiTypescript className="h-full w-full" />;

  // Mobile (Brands & Concepts)
  if (name.includes("flutter")) return <SiFlutter className="h-full w-full" />;
  if (name.includes("dart")) return <SiDart className="h-full w-full" />;
  if (name.includes("provider")) return <Network className="h-full w-full" />;

  // UI & Styling
  if (name.includes("tailwind"))
    return <SiTailwindcss className="h-full w-full" />;
  if (name.includes("responsive"))
    return <MonitorSmartphone className="h-full w-full" />;
  if (name.includes("component"))
    return <LayoutTemplate className="h-full w-full" />;

  // Tools & Workflow (Brands & Lucide Fallback)
  if (name.includes("github")) return <SiGithub className="h-full w-full" />;
  if (name.includes("git")) return <SiGit className="h-full w-full" />;
  if (name.includes("vercel")) return <SiVercel className="h-full w-full" />;
  // Menggunakan Terminal agar aman dari error versi react-icons
  if (name.includes("vs code") || name.includes("vscode"))
    return <Terminal className="h-full w-full" />;

  // Fallback
  return <Box className="h-full w-full" />;
}

export function SkillCard({ skillCategory }: SkillCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const dockItems = skillCategory.items.map((item) => ({
    title: item,
    icon: getTechIcon(item),
  }));

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-zinc-800/60 bg-zinc-900/30 p-8 transition-all duration-500 hover:border-zinc-700/80 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-amber-900/10"
    >
      {/* Background Inner Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/5 to-amber-500/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      <div>
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-zinc-400 shadow-inner transition-all duration-300 group-hover:bg-zinc-800 group-hover:text-amber-300 group-hover:scale-110">
          {getCategoryIcon(skillCategory.title)}
        </div>

        <h3 className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {skillCategory.title}
          </span>
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 md:text-base">
          {skillCategory.description}
        </p>
      </div>

      {/* FIX 2: Layout Center & Wrap (Formasi Piramida/Grid) */}
      <div className="relative z-10 mt-auto flex w-full items-center justify-center pt-8">
        <FloatingDock
          items={dockItems}
          /* 
            Super Evolve: 
            - max-w-[240px]: Memaksa baris putus setelah 4 ikon.
            - flex-wrap & justify-center: Membuat ikon yang turun ke bawah berada di tengah persis.
            - gap-y-4: Memberi jarak vertikal agar baris atas dan bawah tidak berdempetan.
            - !bg-transparent: Menghilangkan "mangkok" bawaan dari komponen aslinya.
          */
          desktopClassName="mx-auto h-auto w-fit max-w-[240px] flex-wrap justify-center gap-y-4 !bg-transparent !border-none !shadow-none !px-0 !pb-0"
          mobileClassName="mx-auto w-fit flex-wrap justify-center gap-y-4 !bg-transparent !border-none !shadow-none !px-0 !pb-0"
        />
      </div>
    </motion.article>
  );
}
