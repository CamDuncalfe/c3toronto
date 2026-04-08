import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Women",
};

interface ConnectGroup {
  name: string;
  day: string;
  time: string;
  location: string;
  tag?: string;
}

const CONNECT_GROUPS: ConnectGroup[] = [
  { name: "On Wednesdays we read the Bible", day: "Wed", time: "6 PM", location: "Downtown" },
  { name: "Purpose Driven Women", day: "Sat", time: "10:30 AM", location: "Downtown" },
  { name: "Backyard Bonfire Hangs", day: "Tue", time: "6:30 PM", location: "Downtown" },
  { name: "Nature Hangs", day: "Sat", time: "5 PM", location: "Downtown" },
  { name: "Morning Marketplace with Gem & Ash", day: "Wed", time: "7 AM", location: "Downtown" },
  { name: "Ladies Post-Prayer Connect", day: "Thu", time: "7 AM", location: "Downtown" },
  { name: "EmpowHER Wednesdays", day: "Wed", time: "7 PM", location: "Downtown" },
  { name: "Entrepreneurs & Creatives in love with Jesus", day: "Mon", time: "6 PM", location: "Downtown" },
  { name: "Babes with Bibles", day: "Tue", time: "6:30 PM", location: "Hamilton" },
  { name: "Moms + Tots", day: "Thu", time: "10 AM", location: "Downtown", tag: "Child friendly" },
  { name: "Dividing Ephesians", day: "Tue", time: "7 PM", location: "Midtown" },
  { name: "Girl Dinner + Jesus", day: "Tue", time: "7 PM", location: "Downtown" },
  { name: "Chill Wednesdays in Midtown", day: "Wed", time: "7 PM", location: "Midtown" },
  { name: "Purpose-Driven Women of Midtown", day: "Wed", time: "6:30 PM", location: "Midtown" },
  { name: "Faithful Outdoor Perks", day: "Tue", time: "7:30 PM", location: "Hamilton" },
  { name: "Geary gals", day: "Tue", time: "7 PM", location: "Downtown" },
  { name: "Alpha Women's Connect", day: "Fri", time: "6:30 PM", location: "Hamilton" },
];

export default function WomenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.womensMinistry}
          alt="C3 Toronto Women's Ministry"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/60 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white animate-fade-in lowercase">women</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-xl)] text-[var(--c3-gray-200)] font-medium leading-relaxed">
              We see the women of this House joined together through community,
              set on a mission to encounter God and help others, talking about
              real things in an unfiltered way pointing women back to Jesus.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Groups */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Community"
            title="Women's Connect Groups"
            description="Find your people. Every group is an opportunity to build real friendships and grow together in faith."
          />
          <div className="grid-3">
            {CONNECT_GROUPS.map((group) => (
              <article key={group.name} className="card">
                <div className="card-body">
                  <h3 className="text-[var(--text-lg)] font-bold mb-[var(--space-sm)]">
                    {group.name}
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--c3-gray-400)] mb-[var(--space-xs)]">
                    {group.day} &middot; {group.time}
                  </p>
                  <div className="flex flex-wrap items-center gap-[var(--space-sm)]">
                    <span className="tag">{group.location}</span>
                    {group.tag && (
                      <span className="tag bg-[var(--c3-yellow)]/15 text-[var(--c3-yellow)]">
                        {group.tag}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
