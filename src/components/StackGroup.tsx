export default function StackGroup({
  title,
  description,
  items,
  emphasis = false,
}: {
  title: string;
  description: string;
  items: string[];
  emphasis?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border p-7 sm:p-8",
        emphasis ?
          "border-gray-950 bg-gray-950 text-white"
        : "border-gray-200 bg-gray-50",
      ].join(" ")}
    >
      <span
        className={[
          "text-[10px] font-semibold tracking-[0.16em]",
          emphasis ? "text-white/40" : "text-gray-400",
        ].join(" ")}
      >
        {title}
      </span>

      <p
        className={[
          "mt-5 text-xs leading-6",
          emphasis ? "text-white/50" : "text-gray-500",
        ].join(" ")}
      >
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={[
              "rounded-full px-3 py-2 text-[10px]",
              emphasis ?
                "bg-white/10 text-white/70"
              : "bg-white text-gray-600 shadow-sm",
            ].join(" ")}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
