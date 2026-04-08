import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Vision Builders 2025",
};

const BUILDING_SPECS = [
  { label: "Building Size", value: "36,000 sq ft" },
  { label: "Ceiling Height", value: "18' high clear ceiling" },
  { label: "Capacity", value: "Up to 600" },
  { label: "Zoning", value: "Mixed-use" },
  { label: "Transit", value: "Near planned Hamilton LRT" },
] as const;

export default function VisionBuildersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
            Vision Builders 2025
          </span>
          <h1 className="text-white mb-[var(--space-lg)]">
            We Brought It Home!
          </h1>
          <p className="text-[var(--text-xl)] text-[var(--c3-gray-200)] max-w-3xl mx-auto mb-[var(--space-xl)]">
            Through the faithfulness and generosity of our church family, we
            have secured a permanent facility for C3 Hamilton at{" "}
            <strong className="text-white">276 Kenilworth Ave, Hamilton</strong>
            .
          </p>
        </div>
      </section>

      {/* Campaign Results */}
      <section className="section border-t border-white/5">
        <div className="container text-center">
          <SectionHeading
            eyebrow="The Campaign"
            title="What God Has Done"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-2xl)]">
              <div className="card">
                <div className="card-body text-center">
                  <span className="block text-[var(--text-4xl)] font-bold text-[var(--c3-yellow)] mb-[var(--space-sm)]">
                    $710,000
                  </span>
                  <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
                    Raised by our generous church family through the Vision
                    Builders campaign.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <span className="block text-[var(--text-4xl)] font-bold text-[var(--c3-yellow)] mb-[var(--space-sm)]">
                    25%
                  </span>
                  <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
                    The seller agreed to donate back 25% of the purchase price
                    at closing. Only God!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Specs */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container">
          <SectionHeading
            eyebrow="The Building"
            title="276 Kenilworth Ave, Hamilton"
            description="A permanent home for C3 Hamilton with room to grow and serve our community for years to come."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)] max-w-4xl mx-auto">
            {BUILDING_SPECS.map((spec) => (
              <div
                key={spec.label}
                className="bg-white rounded-[var(--radius-lg)] p-[var(--space-xl)] text-center shadow-sm"
              >
                <span className="block text-[var(--text-lg)] font-bold text-[var(--c3-black)] mb-[var(--space-xs)]">
                  {spec.value}
                </span>
                <span className="text-[var(--text-sm)] text-[var(--c3-gray-500)]">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Image */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto relative rounded-[var(--radius-xl)] overflow-hidden aspect-video">
            <Image
              src={IMG.visionBuildersAltars}
              alt="Vision Builders — C3 Hamilton facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section border-t border-white/5">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-[var(--space-lg)]">The Best Is Yet to Come</h2>
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
              This building represents more than four walls and a roof. It
              represents a permanent place where lives will be changed, families
              will be strengthened, and a city will be impacted by the love of
              Jesus. Thank you for being part of this incredible journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
