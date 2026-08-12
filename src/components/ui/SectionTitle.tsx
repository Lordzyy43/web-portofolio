type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  label,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-10 bg-cyan-300/60" aria-hidden="true" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
          {label}
        </p>
      </div>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 leading-8 text-slate-300 ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
