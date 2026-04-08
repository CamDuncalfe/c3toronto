import Image from "next/image";
import Link from "next/link";

interface MinistryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function MinistryCard({
  title,
  description,
  image,
  href,
}: MinistryCardProps) {
  return (
    <Link href={href} className="card group block">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={375}
          className="card-image group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="card-body">
        <h3 className="text-[var(--text-lg)] font-bold mb-[var(--space-xs)]">
          {title}
        </h3>
        <p className="text-[var(--text-sm)] text-[var(--c3-gray-400)] line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
