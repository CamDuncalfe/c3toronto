import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-[var(--space-3xl)]",
        align === "center" && "text-center max-w-3xl mx-auto"
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] mb-[var(--space-md)]",
            light ? "text-[var(--c3-gray-500)]" : "text-[var(--c3-yellow)]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          light ? "text-[var(--c3-black)]" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-[var(--space-lg)] text-[var(--text-lg)]",
            light ? "text-[var(--c3-gray-500)]" : "text-[var(--c3-gray-300)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
