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
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
        {label}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
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
