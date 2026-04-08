import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "C3 Kids",
};

const AGE_GROUPS = [
  { name: "Nursery", ages: "6 - 18 months" },
  { name: "Preschool", ages: "18 months - 3 years" },
  { name: "JK / SK", ages: "Junior & Senior Kindergarten" },
  { name: "Elementary", ages: "Grades 1 - 6" },
] as const;

const WHAT_TO_EXPECT = [
  {
    title: "Registration",
    description:
      "New families must register through location-specific forms before their first visit to ensure a smooth check-in experience.",
  },
  {
    title: "Safety",
    description:
      "Every team member has cleared a vulnerable sector police check and follows Plan to Protect policies to keep your kids safe.",
  },
  {
    title: "Drop Off & Pick Up",
    description:
      "Security code system with check-in 15 minutes before service and check-out within 30 minutes after.",
  },
  {
    title: "Fun Activities",
    description:
      "Age-appropriate programming including Bible-based content, worship, videos, puppets, and games.",
  },
] as const;

const REGISTRATION_LINKS = [
  {
    location: "Downtown",
    href: "https://c3toronto.churchcenter.com/people/forms",
  },
  {
    location: "Midtown",
    href: "https://c3toronto.churchcenter.com/people/forms",
  },
  {
    location: "Hamilton",
    href: "https://c3toronto.churchcenter.com/people/forms",
  },
] as const;

export default function C3KidsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">C3 Kids</h1>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-3xl mx-auto">
            At C3 Kids, our mission is to see every child develop their own
            relationship with Jesus and love the journey along the way.
          </p>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading eyebrow="Programs" title="Age Groups" />
          <div className="grid-4">
            {AGE_GROUPS.map((group) => (
              <article key={group.name} className="card text-center">
                <div className="card-body">
                  <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-xs)]">
                    {group.name}
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--c3-gray-400)]">
                    {group.ages}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading eyebrow="For Parents" title="What to Expect" />
          <div className="grid-2">
            {WHAT_TO_EXPECT.map((item) => (
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

      {/* C3 Kids Lounge */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-md)]">
              For Serving Families
            </span>
            <h2 className="text-[var(--c3-black)] mb-[var(--space-lg)]">
              C3 Kids Lounge
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)]">
              Before/after care for families serving on Sundays with snacks and
              light lunch. A dedicated space so you can serve with peace of mind
              knowing your kids are taken care of.
            </p>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="section">
        <div className="container text-center">
          <SectionHeading
            eyebrow="Get Started"
            title="Register Your Family"
            description="Choose your location to complete the registration form for C3 Kids."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {REGISTRATION_LINKS.map((link) => (
              <a
                key={link.location}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Register — {link.location}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
