import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  target?: "_blank" | "_self";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  target = "_self",
}: ButtonLinkProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition";

  const variantClass = {
    primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    outline:
      "border border-slate-600 text-slate-200 hover:border-cyan-400 hover:text-cyan-300",
  };

  const isExternal = target === "_blank";

  return (
    <a
      href={href}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${baseClass} ${variantClass[variant]}`}
    >
      {children}
    </a>
  );
}
