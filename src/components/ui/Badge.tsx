import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent";
  size?: "sm" | "md";
};

export function Badge({
  children,
  variant = "default",
  size = "md",
}: BadgeProps) {
  const baseClass = "inline-flex items-center rounded-full font-medium";

  const variantClass = {
    default: "border border-white/10 bg-white/5 text-slate-200",
    accent: "bg-cyan-400/10 text-cyan-300",
  };

  const sizeClass = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
  };

  return (
    <span className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]}`}>
      {children}
    </span>
  );
}