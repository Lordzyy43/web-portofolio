"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Mengambil data posisi scroll khusus untuk section ini
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Dari paling atas sampai keluar layar
  });

  // Efek Parallax: Background akan bergeser turun dan memudar perlahan saat di-scroll ke bawah
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Dipercepat sedikit dari 0.15
        delayChildren: 0, // Dihilangkan delay awalnya agar langsung jalan
      },
    },
  };

  const itemVariants = {
    // Blur awal dikurangi (12px -> 4px) agar tidak terlihat blank putih saat proses load lambat
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      // Durasi dipersingkat (1.2 -> 0.8) agar website terasa lebih responsif (snappy)
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* PARALLAX BACKGROUND
        Bungkus grid dan ambient light dengan motion.div yang bereaksi terhadap scroll
      */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0"
      >
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* AMBIENT LIGHT (Amber/Perunggu) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-[35rem] w-[55rem] rounded-full bg-amber-600/25 blur-[140px]"
          />
        </div>
      </motion.div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* 
          FIX: viewport={{ once: true }} 
          Agar animasi hero hanya terpicu 1x saat load, mencegah repetisi yang mengganggu.
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ false: true, margin: "-50px" }}
          className="flex w-full max-w-4xl flex-col items-center"
        >
          {/* Badge Status */}
          <motion.div variants={itemVariants}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-300 shadow-2xl backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {profile.role}
            </div>
          </motion.div>

          {/* Headline Utama 
            FIX: text-5xl diubah jadi text-4xl untuk ukuran paling kecil (mobile 390px)
            agar tidak terpotong keluar layar.
          */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-[7.5rem] lg:leading-[1.05]"
          >
            <span className="bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(244,244,245,0.1)]">
              Crafting digital
            </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              experiences.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 md:text-xl"
          >
            I&apos;m{" "}
            <span className="font-bold text-zinc-200">{profile.name}</span>. I
            build web and mobile interfaces that feel calm, readable, and
            fundamentally useful. No clutter, just strong product thinking.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ButtonLink
              href="#projects"
              className="group rounded-full bg-zinc-200 px-8 text-zinc-950 shadow-[0_0_30px_rgba(228,228,231,0.15)] transition-all hover:scale-105 hover:bg-zinc-100"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>

            <ButtonLink
              href="#contact"
              variant="outline"
              className="rounded-full border-zinc-700 px-8 text-zinc-300 backdrop-blur-sm transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            >
              Get in touch
            </ButtonLink>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <SocialLinks align="center" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
