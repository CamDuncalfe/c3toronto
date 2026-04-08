import type { Metadata } from "next";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Worship",
};

const youtubeLink = SOCIAL_LINKS.find((l) => l.icon === "youtube");
const podcastLink = SOCIAL_LINKS.find((l) => l.icon === "podcast");

export default function WorshipPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">Worship</h1>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-3xl mx-auto mb-[var(--space-xl)]">
            Worship at C3 Toronto is about more than music — it&apos;s about
            creating an atmosphere where people can encounter God. Our worship
            team leads with passion and authenticity, pointing every heart toward
            Jesus.
          </p>
        </div>
      </section>

      {/* Listen & Watch */}
      <section className="section border-t border-white/5">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
            Listen &amp; Watch
          </span>
          <h2 className="mb-[var(--space-md)]">Take It With You</h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-2xl mx-auto mb-[var(--space-2xl)]">
            Can&apos;t make it in person? Catch our worship and messages online.
            Subscribe to stay connected throughout the week.
          </p>
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            {youtubeLink && (
              <a
                href={youtubeLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                YouTube
              </a>
            )}
            {podcastLink && (
              <a
                href={podcastLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Apple Podcasts
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-sm)]">
            Every Sunday
          </span>
          <h2 className="text-[var(--c3-black)] mb-[var(--space-md)]">
            Experience It Live
          </h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)] max-w-2xl mx-auto mb-[var(--space-xl)]">
            There&apos;s nothing like worshipping together in person. Join us at
            one of our three locations this Sunday.
          </p>
          <a href="/sundays" className="btn btn-yellow">
            Plan Your Visit
          </a>
        </div>
      </section>
    </>
  );
}
