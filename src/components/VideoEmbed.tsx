"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-[var(--radius-lg)] overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative w-full aspect-video rounded-[var(--radius-lg)] overflow-hidden group cursor-pointer"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title || "Video thumbnail"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-[var(--c3-yellow)] transition-colors">
          <Play size={28} className="text-[var(--c3-black)] ml-1" fill="currentColor" />
        </div>
      </div>
    </button>
  );
}
