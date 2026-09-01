"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SkillCard } from "@/components/ui/SkillCard";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-36">
      {/* 
        Ambient Glow Lintas Section:
        Cahaya halus yang mengikat section ini dengan background utamamu.
      */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="absolute inset-0 rounded-full bg-zinc-600/20 blur-[150px]" />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="flex flex-col"
        >
          {/* Header Section dengan Tipografi Silver */}
          <motion.div variants={headerVariants} className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                The stack I rely on to
              </span>{" "}
              <br className="hidden md:block" />
              <span className="text-zinc-600">build scalable products.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              A carefully selected set of tools for web and mobile development.
              Focused on developer experience, performance, and long-term
              maintainability.
            </p>
          </motion.div>

          {/* 
            Asymmetrical Bento Grid:
            Alih-alih grid-cols-2 kaku, kita gunakan grid 12 kolom untuk meracik ukuran berbeda.
          */}
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            {skillCategories.map((skillCategory, index) => {
              // Logika Asimetris: Mengatur lebar kartu berdasarkan urutan index
              // Misal: Kartu 1 (lebar 7), Kartu 2 (lebar 5), Kartu 3 (lebar 5), Kartu 4 (lebar 7)
              const isWide = index === 0 || index === 3;

              return (
                <div
                  key={skillCategory.title}
                  className={cn(
                    "md:col-span-6", // Fallback
                    isWide ? "lg:col-span-7" : "lg:col-span-5",
                  )}
                >
                  <SkillCard skillCategory={skillCategory} index={index} />
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
