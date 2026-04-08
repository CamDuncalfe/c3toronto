import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { LocationCard } from "@/components/LocationCard";

export const metadata: Metadata = {
  title: "I'm New",
};

export default function ImNewPage() {
  return (
    <>
      {/* Hero / Welcome */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">Welcome to C3</h1>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-3xl mx-auto mb-[var(--space-xl)]">
            Whether this is your first time checking out C3 or you&apos;ve been
            around for a while and are looking for your next step, we&apos;re so
            glad you&apos;re here. We believe in the power of community and
            genuine connection, and we&apos;d love to help you find your place.
          </p>
          <Link href="/forms/lets-connect" className="btn btn-primary btn-lg">
            Get Help Connecting
          </Link>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Your First Visit"
            title="What to Expect"
            description="When you walk through our doors, you can expect a warm welcome, uplifting worship, an encouraging message, and a great kids program. Come as you are — there's no dress code and no pressure. Just come ready to experience community."
          />
          <div className="grid-3">
            <div className="card">
              <div className="card-body text-center">
                <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-sm)]">
                  Worship
                </h3>
                <p className="text-[var(--text-sm)] text-[var(--c3-gray-300)]">
                  Our services start with a time of live worship. It&apos;s
                  engaging, uplifting, and a great way to connect with God and
                  each other.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-sm)]">
                  Message
                </h3>
                <p className="text-[var(--text-sm)] text-[var(--c3-gray-300)]">
                  Our pastors deliver practical, Bible-based messages that are
                  relevant to everyday life. You&apos;ll leave encouraged and
                  equipped.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body text-center">
                <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-sm)]">
                  Community
                </h3>
                <p className="text-[var(--text-sm)] text-[var(--c3-gray-300)]">
                  After the service, hang around for a coffee and a
                  conversation. Our community is friendly and welcoming — we
                  can&apos;t wait to meet you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Find Us"
            title="Our Locations"
            description="We meet across three locations in the Greater Toronto Area and Hamilton. Pick the one closest to you and plan your visit."
          />
          <div className="grid-3">
            {LOCATIONS.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Sign-Up Forms */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-sm)]">
            Let Us Know You&apos;re Coming
          </span>
          <h2 className="text-[var(--c3-black)] mb-[var(--space-md)]">
            Sign Up for a Location
          </h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)] max-w-2xl mx-auto mb-[var(--space-xl)]">
            Fill out a quick form so we can welcome you personally and help you
            get connected right away.
          </p>
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            <a
              href="https://c3toronto.churchcenter.com/people/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow"
            >
              Downtown
            </a>
            <a
              href="https://c3toronto.churchcenter.com/people/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow"
            >
              Midtown
            </a>
            <a
              href="https://c3toronto.churchcenter.com/people/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow"
            >
              Hamilton
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
