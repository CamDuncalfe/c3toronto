import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Men",
};

const mensGroups = [
  { name: "Midweek Connection", day: "Wed", time: "6 PM", location: "Downtown" },
  { name: "Footy & Fellowship", day: "Thu", time: "7 PM", location: "Midtown" },
  { name: "Marketplace Men", day: "Thu", time: "6 PM", location: "Downtown" },
  { name: "Men who Cook with the Good Book", day: "Tue", time: "6:30 PM", location: "Downtown" },
  { name: "Sacred Serve\u2014Spikeball Group", day: "Tue", time: "6:30 PM", location: "Downtown" },
  { name: "Boys and the Bible", day: "Wed", time: "7 PM", location: "Downtown" },
  { name: "Brothers of the North", day: "Thu", time: "7 PM", location: "Midtown" },
  { name: "Disc Golf Bros", day: "Tue", time: "7 PM", location: "Midtown" },
  { name: "Men of Midtown 2.0", day: "Tue", time: "6:30 PM", location: "Midtown" },
  { name: "Hamilton Park Pals", day: "Thu", time: "7 PM", location: "Hamilton" },
  { name: "Boys\u2019 Bible Binge", day: "Wed", time: "7 PM", location: "Downtown" },
];

export default function MenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.mensMinistry}
          alt="C3 Toronto Men's Ministry"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/50 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white mb-[var(--space-lg)] animate-fade-in">
            Men
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
            Our aim is to unify men as we grow together in Christ and discover
            how to live as kings, looking towards the one true King.
          </p>
        </div>
      </section>

      {/* Connect Groups */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Community"
            title="Men's Connect Groups"
          />
          <div className="grid-3">
            {mensGroups.map((group) => (
              <article key={group.name} className="card">
                <div className="card-body">
                  <h3 className="text-[var(--text-lg)] font-bold text-white mb-[var(--space-md)]">
                    {group.name}
                  </h3>
                  <div className="flex flex-col gap-[var(--space-xs)]">
                    <span className="inline-flex items-center gap-2 text-[var(--text-sm)] text-[var(--c3-gray-400)]">
                      <Clock size={14} className="shrink-0" />
                      {group.day} {group.time}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[var(--text-sm)] text-[var(--c3-gray-400)]">
                      <MapPin size={14} className="shrink-0" />
                      {group.location}
                    </span>
                  </div>
                  <span className="tag mt-[var(--space-md)]">
                    {group.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
