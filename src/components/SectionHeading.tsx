import type React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[0.8fr_2fr] md:gap-12">
      <div
        className={[
          "text-[10px] font-semibold tracking-[0.18em]",
          dark ? "text-white/40" : "text-gray-400",
        ].join(" ")}
      >
        {eyebrow}
      </div>

      <div>
        <h2
          className={[
            "text-4xl leading-[0.98] tracking-[-0.07em] sm:text-5xl md:text-6xl",
            dark ? "text-white" : "text-gray-950",
          ].join(" ")}
        >
          {title}
        </h2>

        {description && (
          <p
            className={[
              "mt-6 max-w-2xl text-sm leading-7 sm:text-base",
              dark ? "text-white/60" : "text-gray-500",
            ].join(" ")}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
