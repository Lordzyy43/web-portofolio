import type { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Pastikan path ini sesuai dengan struktur folder kamu

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "default" | "accent";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className, // Memungkinkan kita mengirim class tambahan dari luar
  ...props // Menangkap properti lain seperti onClick, id, dll
}: BadgeProps) {
  const baseClass =
    "inline-flex items-center rounded-full font-medium transition-colors";

  const variantClass = {
    default: "border border-white/10 bg-white/5 text-slate-200",
    accent: "bg-cyan-400/10 text-cyan-300",
  };

  const sizeClass = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
  };

  return (
    <span
      className={cn(
        baseClass,
        variantClass[variant],
        sizeClass[size],
        className, // Ditambahkan di akhir agar bisa menimpa (override) class bawaan jika diperlukan
      )}
      {...props}
    >
      {children}
    </span>
  );
}
