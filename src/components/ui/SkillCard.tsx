"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/types/skill";
import { Code2, Smartphone, Database, PenTool, Cpu } from "lucide-react";

type SkillCardProps = {
  skillCategory: SkillCategory;
  index?: number;
};

// Fungsi cerdas untuk menentukan ikon berdasarkan judul kategori
function getIconForCategory(title: string) {
  const t = title.toLowerCase();
  if (t.includes("front") || t.includes("web"))
    return <Code2 className="h-6 w-6" />;
  if (t.includes("mobile") || t.includes("app") || t.includes("flutter"))
    return <Smartphone className="h-6 w-6" />;
  if (t.includes("back") || t.includes("data") || t.includes("api"))
    return <Database className="h-6 w-6" />;
  if (t.includes("design") || t.includes("ui"))
    return <PenTool className="h-6 w-6" />;
  return <Cpu className="h-6 w-6" />;
}

export function SkillCard({ skillCategory, index = 0 }: SkillCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-800/60 bg-zinc-900/30 p-8 transition-all duration-500 hover:border-zinc-700/80 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-amber-900/10"
    >
      {/* 
        Sleek Inner Glow: 
        Bersinar dari pojok kiri atas ke kanan bawah saat di-hover 
      */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-800/0 via-zinc-800/5 to-amber-500/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div>
        {/* Ikon Kategori Beranimasi Halus */}
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800/80 text-zinc-400 shadow-inner transition-all duration-300 group-hover:bg-zinc-800 group-hover:text-amber-300 group-hover:scale-110">
          {getIconForCategory(skillCategory.title)}
        </div>

        {/* Tipografi Silver untuk Judul */}
        <h3 className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {skillCategory.title}
          </span>
        </h3>

        {/* Deskripsi dipertajam kontrasnya (zinc-400 ke zinc-300 saat hover) */}
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 md:text-base">
          {skillCategory.description}
        </p>
      </div>

      {/* Floating Badges */}
      <div className="mt-10 flex flex-wrap gap-2.5">
        {skillCategory.items.map((item, i) => (
          <span
            key={item}
            // Delay halus pada hover untuk masing-masing badge berdasarkan urutannya
            style={{ transitionDelay: `${i * 30}ms` }}
            className="inline-flex items-center rounded-xl border border-zinc-800/80 bg-zinc-950/50 px-3.5 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-300 group-hover:border-zinc-700 group-hover:bg-zinc-900 group-hover:text-zinc-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
