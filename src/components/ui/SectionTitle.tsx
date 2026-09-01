"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string; // Menambahkan className prop agar lebih fleksibel dari luar
};

export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {/* 
        Badge Label: Disamakan persis dengan badge di Hero dan About
        menggantikan garis lurus lama agar lebih modern.
      */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-300 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        {label}
      </div>

      {/* 
        Headline: Menggunakan tipografi Silver/Metalik 
        agar tidak bentrok dengan background putih murni.
      */}
      <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
        <span className="bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {/* Deskripsi */}
      {description ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed text-zinc-400 md:text-lg",
            isCenter ? "max-w-2xl" : "max-w-3xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
