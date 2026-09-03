"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Layers, Terminal, RefreshCw, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Kolom Kiri: Judul Sticky */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // FIX: Animasi diputar 1x saja, trigger margin -50px agar pasti muncul
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-28"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                About Me
              </div>

              {/* Headline dengan gradasi Silver & Amber (Bukan Pure White) */}
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:leading-tight">
                <span className="bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  Building for usability,
                </span>{" "}
                <span className="text-zinc-500">
                  structure, and maintainability.
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
                I prioritize functional interfaces, clean components, and
                practical code over unnecessary complexity.
              </p>
            </motion.div>
          </div>

          {/* Kolom Kanan: Story & Bento Grid Asimetris */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              // FIX: Sama seperti di atas, mengatasi bug nyangkut di opacity 0
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-10"
            >
              {/* Paragraf Utama Profile */}
              <motion.div variants={itemVariants}>
                <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-6 text-base leading-relaxed text-zinc-300 backdrop-blur-md md:p-8 md:text-lg md:leading-relaxed">
                  <p>{profile.about}</p>
                </div>
              </motion.div>

              {/* 
                BENTO GRID ASIMETRIS (Ukuran Kartu Berbeda)
              */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                {/* Kartu 1: Card Lebar (Span 7) - Interface & UX */}
                <motion.div
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700/80 hover:bg-zinc-900/70 md:col-span-7"
                >
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/80 text-zinc-200 transition-colors group-hover:bg-zinc-800 group-hover:text-amber-300">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-zinc-100 md:text-lg">
                      Clear Visual Hierarchy
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      Structuring layouts where navigation is straightforward
                      and content is easy to digest without cognitive overload.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Design Systems", "Usability", "Responsive"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-xs font-medium text-zinc-400"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </motion.div>

                {/* Kartu 2: Card Kompak (Span 5) - Code Discipline */}
                <motion.div
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700/80 hover:bg-zinc-900/70 md:col-span-5"
                >
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/80 text-zinc-200 transition-colors group-hover:bg-zinc-800 group-hover:text-amber-300">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-zinc-100 md:text-lg">
                      Clean Codebase
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      Writing structured TypeScript, reusable components, and
                      predictable state logic.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Modular & Tested
                  </div>
                </motion.div>

                {/* Kartu 3: Card Full Width (Span 12) - Workflow & Collaboration */}
                <motion.div
                  variants={itemVariants}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700/80 hover:bg-zinc-900/70 md:col-span-12 md:flex-row md:items-center md:gap-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-800/80 text-zinc-200 transition-colors group-hover:bg-zinc-800 group-hover:text-amber-300">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-100 md:text-lg">
                        Iterative & Practical Process
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        Translating wireframes into functional code step by
                        step, welcoming feedback, and refining performance based
                        on actual usage.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 shrink-0 md:mt-0">
                    <span className="inline-flex items-center rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1.5 text-xs font-medium text-zinc-300">
                      Continuous Improvement
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
