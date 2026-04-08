import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

interface ImageTextSectionProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionUrl?: string;
  reversed?: boolean;
  light?: boolean;
}

export function ImageTextSection({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  actionLabel,
  actionUrl,
  reversed = false,
  light = false,
}: ImageTextSectionProps) {
  return (
    <section
      className={clsx("section", light && "bg-[var(--c3-gray-100)]")}
    >
      <div className="container">
        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-3xl)] items-center",
            reversed && "lg:[direction:rtl] lg:*:[direction:ltr]"
          )}
        >
          {/* Image */}
          <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-[4/3]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            {eyebrow && (
              <span
                className={clsx(
                  "block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] mb-[var(--space-md)]",
                  light
                    ? "text-[var(--c3-gray-500)]"
                    : "text-[var(--c3-yellow)]"
                )}
              >
                {eyebrow}
              </span>
            )}
            <h2
              className={clsx(
                "mb-[var(--space-lg)]",
                light ? "text-[var(--c3-black)]" : "text-white"
              )}
            >
              {title}
            </h2>
            <p
              className={clsx(
                "text-[var(--text-lg)]",
                light ? "text-[var(--c3-gray-500)]" : "text-[var(--c3-gray-300)]"
              )}
            >
              {description}
            </p>
            {actionLabel && actionUrl && (
              <div className="mt-[var(--space-xl)]">
                <Link
                  href={actionUrl}
                  className={clsx(
                    "btn",
                    light ? "btn-yellow" : "btn-primary"
                  )}
                >
                  {actionLabel}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
