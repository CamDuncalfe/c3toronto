import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  actionLabel?: string;
  actionUrl?: string;
  recurring?: boolean;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  image,
  actionLabel,
  actionUrl,
  recurring,
}: EventCardProps) {
  return (
    <article className="card group">
      {image && (
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={375}
            className="card-image group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="card-body">
        {recurring && (
          <span className="tag mb-[var(--space-sm)]">Recurring</span>
        )}
        <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-sm)]">
          {title}
        </h3>
        <div className="flex flex-col gap-[var(--space-xs)] mb-[var(--space-md)] text-[var(--text-sm)] text-[var(--c3-gray-400)]">
          <span className="inline-flex items-center gap-2">
            <Calendar size={14} className="shrink-0" />
            {date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock size={14} className="shrink-0" />
            {time}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="shrink-0" />
            {location}
          </span>
        </div>
        <p className="text-[var(--text-sm)] text-[var(--c3-gray-300)] line-clamp-3 mb-[var(--space-lg)]">
          {description}
        </p>
        {actionLabel && actionUrl && (
          <Link
            href={actionUrl}
            className="btn btn-primary btn-sm"
            target={actionUrl.startsWith("http") ? "_blank" : undefined}
            rel={
              actionUrl.startsWith("http") ? "noopener noreferrer" : undefined
            }
          >
            {actionLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
