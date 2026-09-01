"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import {
  Mail,
  MessageSquareDashed,
  Sparkles,
  Coffee,
  Send,
} from "lucide-react";

export function ContactSection() {
  // Animasi melayang tanpa henti untuk ikon-ikon background
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 6 + i * 2, // Durasi berbeda tiap ikon agar tidak seragam
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] items-center overflow-hidden py-24 md:py-32"
    >
      {/* AMBIENT BACKGROUND GLOW (Pusat Cahaya) */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center opacity-50">
        <div className="h-[25rem] w-[40rem] rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      {/* 
        ABSOLUTE FLOATING ICONS (Efek Bokeh / 3D Depth)
        Ikon disebar di berbagai sudut dengan ukuran, rotasi, blur, dan opacity yang berbeda
      */}
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-7xl overflow-hidden">
        <motion.div
          custom={1}
          variants={floatingVariants}
          animate="animate"
          className="absolute left-[5%] top-[20%] text-zinc-700/40 blur-[2px] md:left-[15%]"
        >
          <MessageSquareDashed className="h-16 w-16 -rotate-12" />
        </motion.div>

        <motion.div
          custom={2}
          variants={floatingVariants}
          animate="animate"
          className="absolute right-[10%] top-[30%] text-amber-500/20 blur-[4px] md:right-[20%]"
        >
          <Sparkles className="h-24 w-24 rotate-12" />
        </motion.div>

        <motion.div
          custom={3}
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-[20%] left-[10%] text-zinc-600/30 blur-[1px] md:left-[25%]"
        >
          <Coffee className="h-12 w-12 rotate-6" />
        </motion.div>

        <motion.div
          custom={4}
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-[25%] right-[5%] text-zinc-700/50 blur-[3px] md:right-[15%]"
        >
          <Send className="h-20 w-20 -rotate-45" />
        </motion.div>
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center">
        {/* Main Content (Tanpa Card) */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionTitle
            label="Get In Touch"
            title="If the work feels right, let's talk."
            description="Reach out for collaboration, portfolio feedback, project discussion, or anything creative and practical."
            align="center"
          />

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 flex flex-col items-center gap-8"
          >
            <ButtonLink
              href={`mailto:${profile.email}`}
              className="group relative overflow-hidden rounded-full bg-zinc-100 px-10 py-5 text-lg font-bold text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-white hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            >
              {/* Kilatan cahaya animasi di dalam tombol (Premium Touch) */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <span className="relative flex items-center">
                <Mail className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                Send an Email
              </span>
            </ButtonLink>

            <div className="mt-4 flex flex-col items-center gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-zinc-800" />
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Or connect with me
                </span>
                <span className="h-px w-12 bg-zinc-800" />
              </div>

              <SocialLinks align="center" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
