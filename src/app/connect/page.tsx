import type { Metadata } from "next";
import Link from "next/link";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { MinistryCard } from "@/components/MinistryCard";
import { ImageTextSection } from "@/components/ImageTextSection";

export const metadata: Metadata = {
  title: "Connect",
};

const MINISTRIES = [
  {
    title: "Connect Groups",
    image: IMG.connectGroups,
    href: "/connect-groups",
    description:
      "At C3 Toronto, Connect Groups play a vital role in creating community, growing our faith, and connecting people to God.",
  },
  {
    title: "Teams",
    image: IMG.teams,
    href: "/teams",
    description:
      "Use your unique gifts and talents to build His church by serving as Jesus did.",
  },
  {
    title: "Prayer",
    image: IMG.prayer,
    href: "/prayer",
    description:
      "Join us every Tuesday (men) and Thursday (church-wide) at 6:00 AM as we pray for our church and city.",
  },
  {
    title: "Sundays",
    image: IMG.sundays,
    href: "/sundays",
    description:
      "From our time in worship to our robust kids program and encouraging Sunday message.",
  },
  {
    title: "Men",
    image: IMG.mensMinistry,
    href: "/men",
    description:
      "Our aim is to unify men as we grow together in Christ and discover how to live as kings.",
  },
  {
    title: "Women",
    image: IMG.womensMinistry,
    href: "/women",
    description:
      "We see the women of this House joined together through community, set on a mission.",
  },
] as const;

export default function ConnectPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">
            Discovering God Together
          </h1>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-3xl mx-auto mb-[var(--space-xl)]">
            Connecting with others is more than just a social experience;
            it&apos;s a spiritual journey that sharpens us, helps us grow, and
            allows us to feel God&apos;s love profoundly. Taking the first step
            can be tough, but it&apos;s so worth it!
          </p>
          <Link href="/forms/lets-connect" className="btn btn-primary btn-lg">
            Let&apos;s Connect
          </Link>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Get Involved"
            title="Find Your Place"
          />
          <div className="grid-3">
            {MINISTRIES.map((ministry) => (
              <MinistryCard key={ministry.title} {...ministry} />
            ))}
          </div>
        </div>
      </section>

      {/* Internship */}
      <ImageTextSection
        image={IMG.internship}
        imageAlt="C3 Toronto Internship"
        eyebrow="Next Steps"
        title="Internship"
        description="Are you looking to expand your faith? Do you want to identify your role in building God's church in ministry or the marketplace? Our internship may be your next step."
        actionLabel="Learn More"
        actionUrl="/internship"
      />

      {/* C3 Youth */}
      <ImageTextSection
        image={IMG.youth}
        imageAlt="C3 Youth"
        eyebrow="Students"
        title="C3 Youth"
        description="Through fun activities, meaningful discussions, and inspiring messages, we're here to support you on your spiritual journey. Come as you are and be part of something amazing!"
        reversed
      />

      {/* Youth Location Links */}
      <section className="section-sm border-t border-white/5">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            <a
              href="https://c3toronto.churchcenter.com/registrations/events/c3-youth-downtown"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Downtown
            </a>
            <a
              href="https://c3toronto.churchcenter.com/registrations/events/c3-youth-midtown"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Midtown
            </a>
            <a
              href="https://c3toronto.churchcenter.com/registrations/events/c3-youth-hamilton"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Hamilton
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-sm)]">
            Stay Connected
          </span>
          <h2 className="text-[var(--c3-black)] mb-[var(--space-md)]">
            Weekly Newsletter
          </h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)] max-w-2xl mx-auto mb-[var(--space-xl)]">
            Want to stay up-to-date with everything that&apos;s going on at
            church? Check out our weekly newsletter and get updates straight to
            your inbox.
          </p>
          <a
            href="https://mailchi.mp/c3toronto.com/subscribe-to-the-weekly-dose"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-yellow"
          >
            Subscribe
          </a>
        </div>
      </section>
    </>
  );
}
