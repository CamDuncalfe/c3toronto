import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Stories",
};

const TAGS = [
  "Commitment",
  "Community",
  "Conviction",
  "Identity",
  "Finance",
  "Sacrifice",
  "Relationships",
  "Family",
  "Finances",
  "Faith",
  "Salvation",
  "Miracles",
] as const;

interface Story {
  name: string;
  tags: string[];
  videoId: string;
}

const STORIES: Story[] = [
  { name: "Dayo", tags: ["Conviction", "Commitment"], videoId: "dQw4w9WgXcQ" },
  { name: "Anton & Julia", tags: ["Faith", "Sacrifice"], videoId: "LXb3EKWsInQ" },
  { name: "Justine", tags: ["Conviction", "Faith"], videoId: "9bZkp7q19f0" },
  { name: "Sarah", tags: ["Conviction", "Commitment"], videoId: "kJQP7kiw5Fk" },
  { name: "Megan", tags: ["Faith", "Sacrifice"], videoId: "JGwWNGJdvx8" },
  { name: "Michelle & Cam", tags: ["Family", "Miracles"], videoId: "RgKAFK5djSk" },
  { name: "Brown Family", tags: ["Commitment", "Community"], videoId: "OPf0YbXqDm0" },
  { name: "Brad & Heather", tags: ["Community", "Conviction"], videoId: "fJ9rUzIMcZQ" },
  { name: "Jonathan & Angela", tags: ["Salvation", "Community", "Identity"], videoId: "60ItHLz5WEA" },
];

function StoryCard({ name, tags, videoId }: Story) {
  return (
    <article className="card group">
      <div className="relative overflow-hidden aspect-video bg-[var(--c3-gray-100)]">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`${name}'s story`}
          width={480}
          height={270}
          className="card-image group-hover:scale-105 transition-transform duration-500 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
          <div className="w-14 h-14 rounded-full bg-[var(--c3-yellow)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play size={24} className="text-[var(--c3-black)] ml-1" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3 className="text-[var(--text-lg)] font-bold mb-[var(--space-sm)]">
          {name}
        </h3>
        <div className="flex flex-wrap gap-[var(--space-xs)]">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function StoriesPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">Our Stories</h1>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-3xl mx-auto mb-[var(--space-xl)]">
            Welcome to our library of living testimonies. Within these stories,
            you&apos;ll find real faces, struggles, and triumphs, all bound
            together by the unending love of God.
          </p>
          <a
            href="mailto:contact@c3toronto.com"
            className="btn btn-primary"
          >
            Send Us Yours
          </a>
        </div>
      </section>

      {/* Tag Filters */}
      <section className="section-sm border-t border-white/5">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-[var(--space-sm)]">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className="tag cursor-pointer hover:bg-[var(--c3-yellow)] hover:text-[var(--c3-black)] transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section border-t border-white/5">
        <div className="container">
          <div className="grid-3">
            {STORIES.map((story) => (
              <StoryCard key={story.name} {...story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
