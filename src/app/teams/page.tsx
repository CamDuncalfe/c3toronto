import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Teams",
};

const sundayTeams = [
  "Maintenance",
  "Hosting",
  "Hospitality",
  "Cafe",
  "Muscle Crew",
  "C3 Kids",
  "Worship",
  "Screens",
  "Lighting",
  "Sound",
  "Service Producing",
  "Capture",
  "Social Media",
  "Live Video",
];

const midWeekTeams = [
  "Events",
  "Copywriting",
  "Film",
  "Design",
  "Web",
  "Love This City",
];

export default function TeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.teams}
          alt="C3 Toronto Teams"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/50 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white mb-[var(--space-lg)] animate-fade-in">
            Teams
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
            Serving on team is the best way to connect and grow with others. Use
            your unique gifts and talents to build His church by serving as Jesus
            did.
          </p>
        </div>
      </section>

      {/* Sunday Teams */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading eyebrow="Sundays" title="Sunday Teams" />
          <div className="grid-4">
            {sundayTeams.map((team) => (
              <div
                key={team}
                className="card text-center py-[var(--space-xl)] px-[var(--space-lg)]"
              >
                <h3 className="text-[var(--text-base)] font-semibold text-white">
                  {team}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Week Teams */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading eyebrow="Mid-Week" title="Mid-Week Teams" />
          <div className="grid-3">
            {midWeekTeams.map((team) => (
              <div
                key={team}
                className="card text-center py-[var(--space-xl)] px-[var(--space-lg)]"
              >
                <h3 className="text-[var(--text-base)] font-semibold text-white">
                  {team}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-white/5">
        <div className="container text-center">
          <a
            href="https://c3toronto.churchcenter.com/people/forms"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Join a Team
          </a>
        </div>
      </section>
    </>
  );
}
