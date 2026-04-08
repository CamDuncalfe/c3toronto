import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Let's Connect",
};

export default function LetsConnectPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">
            Let&apos;s Connect
          </h1>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-3xl mx-auto mb-[var(--space-xl)]">
            Looking for community? We got you! We know that genuine connection
            can be hard to find. Whether you&apos;re new to C3 or looking to get
            more involved, we&apos;d love to help you take your next step.
          </p>
        </div>
      </section>

      {/* Location Sign-Up Forms */}
      <section className="section border-t border-white/5">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
            Choose Your Location
          </span>
          <h2 className="mb-[var(--space-md)]">Sign Up at Your Location</h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-2xl mx-auto mb-[var(--space-2xl)]">
            Select your preferred location below and fill out a quick form so
            our team can reach out and help you get connected.
          </p>
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            <a
              href="https://c3toronto.churchcenter.com/people/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Downtown
            </a>
            <a
              href="https://c3toronto.churchcenter.com/people/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Midtown
            </a>
            <a
              href="https://c3toronto.churchcenter.com/people/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Hamilton
            </a>
          </div>
        </div>
      </section>

      {/* Other Ways to Connect */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-sm)]">
            More Ways
          </span>
          <h2 className="text-[var(--c3-black)] mb-[var(--space-md)]">
            Other Ways to Get Involved
          </h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)] max-w-2xl mx-auto mb-[var(--space-xl)]">
            Beyond signing up, there are plenty of ways to plug in and find your
            place at C3.
          </p>
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            <Link href="/connect-groups" className="btn btn-yellow">
              Connect Groups
            </Link>
            <Link href="/teams" className="btn btn-yellow">
              Serve on a Team
            </Link>
            <Link href="/sundays" className="btn btn-yellow">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
