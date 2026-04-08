import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Connect Groups",
};

export default function ConnectGroupsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.connectGroups}
          alt="C3 Toronto Connect Groups"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/50 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white mb-[var(--space-lg)] animate-fade-in">
            Connect Groups
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] mb-[var(--space-xl)]">
            At C3 Toronto, Connect Groups play a vital role in creating
            community, growing our faith, and connecting people to God.
          </p>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] mb-[var(--space-2xl)]">
            Groups operate on semester cycles: Fall (September&ndash;November),
            Winter (February&ndash;April), Summer (June&ndash;July).
          </p>
          <a
            href="https://c3toronto.churchcenter.com/groups"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Find a Group
          </a>
        </div>
      </section>
    </>
  );
}
