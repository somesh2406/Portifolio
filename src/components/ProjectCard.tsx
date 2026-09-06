import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  number,
  category,
  title,
  description,
  tags,
  featured = false,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}) {
  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl border transition-all duration-500",
        featured ?
          "border-gray-900 bg-gray-950 text-white"
        : "border-gray-200 bg-white text-gray-950 hover:-translate-y-1 hover:shadow-xl",
      ].join(" ")}
    >
      <div className="flex items-start justify-between p-6 sm:p-8">
        <span
          className={[
            "text-[10px] font-semibold tracking-[0.16em]",
            featured ? "text-white/40" : "text-gray-400",
          ].join(" ")}
        >
          {number} / {category}
        </span>

        <ArrowUpRight
          size={18}
          className={[
            "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
            featured ? "text-white/50" : "text-gray-400",
          ].join(" ")}
        />
      </div>

      <div className="px-6 pb-8 sm:px-8 sm:pb-10">
        <h3
          className={[
            "max-w-xl text-3xl tracking-[-0.06em] sm:text-4xl",
            featured ? "text-white" : "text-gray-950",
          ].join(" ")}
        >
          {title}
        </h3>

        <p
          className={[
            "mt-5 max-w-xl text-sm leading-7",
            featured ? "text-white/55" : "text-gray-500",
          ].join(" ")}
        >
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={[
                "rounded-full px-3 py-1.5 text-[10px] tracking-wide",
                featured ?
                  "bg-white/10 text-white/60"
                : "bg-gray-100 text-gray-500",
              ].join(" ")}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={[
          "h-1 w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100",
          featured ? "bg-white" : "bg-gray-950",
        ].join(" ")}
      />
    </article>
  );
}
