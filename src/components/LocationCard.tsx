import Image from "next/image";
import { MapPin, Clock, ExternalLink } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  times: string;
  image: string;
  mapUrl: string;
}

export function LocationCard({
  name,
  address,
  times,
  image,
  mapUrl,
}: LocationCardProps) {
  return (
    <article className="card group">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={`C3 Toronto ${name}`}
          width={600}
          height={375}
          className="card-image group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-[var(--space-lg)] left-[var(--space-lg)] text-[var(--text-2xl)] font-bold">
          {name}
        </h3>
      </div>
      <div className="card-body flex flex-col gap-[var(--space-sm)]">
        <div className="flex items-center gap-2 text-[var(--text-sm)] text-[var(--c3-gray-300)]">
          <MapPin size={14} className="shrink-0 text-[var(--c3-gray-400)]" />
          {address}
        </div>
        <div className="flex items-center gap-2 text-[var(--text-sm)] text-[var(--c3-gray-300)]">
          <Clock size={14} className="shrink-0 text-[var(--c3-gray-400)]" />
          {times}
        </div>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-[var(--space-sm)] text-[var(--text-sm)] font-semibold text-[var(--c3-yellow)] hover:text-white transition-colors"
        >
          Get Directions
          <ExternalLink size={13} />
        </a>
      </div>
    </article>
  );
}
