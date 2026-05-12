import type { SkillCategory } from "@/types/skill";
import { Badge } from "@/components/ui/Badge";

type SkillCardProps = {
  skillCategory: SkillCategory;
};

export function SkillCard({ skillCategory }: SkillCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60">
      <h3 className="text-xl font-bold text-white">{skillCategory.title}</h3>

      <p className="mt-3 leading-7 text-slate-300">
        {skillCategory.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skillCategory.items.map((item) => (
          <Badge key={item} variant="accent" size="sm">
            {item}
          </Badge>
        ))}
      </div>
    </article>
  );
}
