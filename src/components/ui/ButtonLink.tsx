import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Menggabungkan props bawaan Next.js Link dengan custom props kita
interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  target?: "_blank" | "_self";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  target = "_self",
  className,
  ...props
}: ButtonLinkProps) {
  // Ditambahkan efek ring untuk aksesibilitas (saat tombol difokuskan pakai keyboard)
  const baseClass =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  const variantClass = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:scale-105 active:scale-95",
    outline:
      "border border-slate-600 bg-transparent text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 active:scale-95",
  };

  // Menambahkan opsi ukuran agar bisa dipakai di berbagai tempat (Hero vs Card)
  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Deteksi otomatis jika href dimulai dengan "http" (link luar)
  const isExternal = target === "_blank" || href.startsWith("http");
  const resolvedTarget = isExternal ? "_blank" : target;

  return (
    <Link
      href={href}
      target={resolvedTarget}
      rel={resolvedTarget === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        baseClass,
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
