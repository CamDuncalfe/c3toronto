import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Love This City",
};

const SERVING_OPPORTUNITIES = [
  {
    title: "Sip n' Tea",
    description:
      "A community gathering space offering free tea, coffee, and conversation. A simple way to build relationships and show love to our neighbours.",
  },
  {
    title: "Toast & Threads",
    description:
      "Providing warm meals and free clothing to those in need. A practical expression of God's love through food and essential items.",
  },
  {
    title: "Backpack Drive",
    description:
      "Every year we collect and distribute backpacks filled with school supplies to children and families who need extra support heading into the school year.",
  },
  {
    title: "Toy Drive",
    description:
      "During the holiday season we collect toys and gifts for families in our community, making sure every child has something to open on Christmas morning.",
  },
] as const;

const FAQ = [
  {
    question: "How is Love This City funded?",
    answer:
      "We invest a minimum of 10% of what comes into the House to give back to the community through our Love This City initiatives. Every dollar given to C3 Toronto helps fuel outreach in our neighbourhoods.",
  },
  {
    question: "Do you partner with other organizations?",
    answer:
      "Yes! We partner with local shelters, community centres, schools, and other organizations to maximize our impact and meet real needs across the Greater Toronto Area and Hamilton.",
  },
  {
    question: "Can my family serve together?",
    answer:
      "Absolutely. Many of our Love This City initiatives are family-friendly and we encourage families to serve together. It's a powerful way to teach kids about generosity and compassion.",
  },
  {
    question: "How can I get involved or learn more?",
    answer:
      "Reach out to us at lovethiscity@c3toronto.com for information about upcoming volunteer opportunities, partnerships, and ways to give back to the community.",
  },
] as const;

export default function LoveThisCityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.loveThisCity}
          alt="C3 Toronto Love This City outreach"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/60 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white animate-fade-in lowercase">
            love this city
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-xl)] text-[var(--c3-gray-200)] font-medium leading-relaxed mb-[var(--space-xl)]">
              God has designed the church to be the answer to its surrounding
              community. At C3, our heart is to stay connected with our
              communities in order to hear its felt needs, doing all that we can
              to help meet those needs.
            </p>
            <p className="text-[var(--text-lg)] text-[var(--c3-yellow)] font-semibold">
              We invest a minimum of 10% of what comes into the House to give
              back to the community through our Love This City initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <VideoEmbed videoId="PnvKlCZpPUE" title="Love This City" />
          </div>
        </div>
      </section>

      {/* Serving Opportunities */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Get Involved"
            title="Serving Opportunities"
            description="There are many ways to get involved and make a difference in our communities."
          />
          <div className="grid-2">
            {SERVING_OPPORTUNITIES.map((item) => (
              <article key={item.title} className="card">
                <div className="card-body">
                  <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-sm)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--c3-gray-300)]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container">
          <div className="grid-2 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-[var(--text-4xl)] font-bold text-[var(--c3-black)] mb-[var(--space-sm)]">
                $2,594,906
              </p>
              <p className="text-[var(--text-base)] text-[var(--c3-gray-500)] font-medium">
                Given back to community
              </p>
            </div>
            <div>
              <p className="text-[var(--text-4xl)] font-bold text-[var(--c3-black)] mb-[var(--space-sm)]">
                12,000+
              </p>
              <p className="text-[var(--text-base)] text-[var(--c3-gray-500)] font-medium">
                Volunteer hours served
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" />
          <div className="max-w-3xl mx-auto space-y-[var(--space-xl)]">
            {FAQ.map((item) => (
              <div key={item.question}>
                <h3 className="text-[var(--text-lg)] font-bold mb-[var(--space-sm)]">
                  {item.question}
                </h3>
                <p className="text-[var(--text-base)] text-[var(--c3-gray-300)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
