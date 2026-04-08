import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Vision Builders",
};

const VISION_PRIORITIES = [
  "Launch Costs for new GTA location",
  "Permanent Home for C3 Hamilton",
  "Double Down on Geary Mortgage Payments",
  "Studio Fit-out",
  "Launch Costs for C3 Mexico City",
] as const;

const COMMITMENT_STEPS = [
  {
    step: 1,
    title: "Commit to a Plan",
    description:
      "Decide on a financial commitment that stretches your faith and honors God.",
  },
  {
    step: 2,
    title: "Pray for a Vision",
    description:
      "Ask God to give you a vision for what He wants to do through your generosity.",
  },
  {
    step: 3,
    title: "Work the Plan",
    description:
      "Stay faithful to your commitment, trusting God to provide as you step out in faith.",
  },
  {
    step: 4,
    title: "Pray",
    description:
      "Cover the vision in prayer. Believe for the impossible and watch God move.",
  },
] as const;

export default function VisionBuildersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">Vision Builders</h1>
        </div>
      </section>

      {/* Altars */}
      <section className="section border-t border-white/5">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <SectionHeading eyebrow="Faith in Action" title="Altars" />
            <a
              href="https://d1m4i7yi65k.typeform.com/to/onuuiXP8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Make a Commitment
            </a>
          </div>
        </div>
      </section>

      {/* Hamilton Announcement */}
      <section className="section border-t border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Praise Report"
              title="C3 Has Officially Made a Deal"
            />
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] leading-relaxed">
              In March, we came together in Vision Builders to hear the five
              vision priorities of our church for 2025 &mdash; one of them being
              that we were believing in faith to see a permanent home
              established in Hamilton. We are so excited to share that we have
              officially secured our second permanent facility as a church! 276
              Kenilworth Ave in Hamilton has been claimed for the Lord!
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <VideoEmbed videoId="uUj5CZCv0og" title="Vision Builders" />
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="section border-t border-white/5">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-[var(--space-xl)]">
              Grow the Kingdom, Expand the Witness
            </h2>
            <blockquote className="text-[var(--text-xl)] text-[var(--c3-gray-200)] font-medium leading-relaxed italic">
              &ldquo;From him the whole body, joined and held together by every
              supporting ligament, grows and builds itself up in love, as each
              part does its work.&rdquo;
            </blockquote>
            <p className="text-[var(--text-sm)] text-[var(--c3-yellow)] font-semibold uppercase tracking-[0.1em] mt-[var(--space-lg)]">
              Ephesians 4:16
            </p>
          </div>
        </div>
      </section>

      {/* 2025 Goal */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-md)]">
              2025 Vision Builders Goal
            </span>
            <h2 className="text-[var(--c3-black)] mb-[var(--space-2xl)]">
              $3.5 Million
            </h2>
            <div className="space-y-[var(--space-md)]">
              {VISION_PRIORITIES.map((priority, i) => (
                <div
                  key={priority}
                  className="flex items-center gap-[var(--space-md)] text-left max-w-lg mx-auto"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--c3-yellow)] text-[var(--c3-black)] flex items-center justify-center text-[var(--text-sm)] font-bold">
                    {i + 1}
                  </span>
                  <p className="text-[var(--text-base)] text-[var(--c3-gray-500)] font-medium">
                    {priority}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Steps */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Your Journey"
            title="Four Steps of Commitment"
          />
          <div className="grid-2 max-w-4xl mx-auto">
            {COMMITMENT_STEPS.map((item) => (
              <div key={item.step} className="flex gap-[var(--space-lg)]">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--c3-yellow)] text-[var(--c3-yellow)] text-[var(--text-xl)] font-bold">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-xs)] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--c3-gray-300)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Give CTA */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <h2 className="text-[var(--c3-black)] mb-[var(--space-xl)]">
            Ready to Build?
          </h2>
          <a
            href="https://give.c3toronto.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-yellow"
          >
            Give
          </a>
        </div>
      </section>
    </>
  );
}
