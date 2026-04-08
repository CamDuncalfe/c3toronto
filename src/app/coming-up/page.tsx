import type { Metadata } from "next";
import { EVENTS } from "@/lib/constants";
import { EventCard } from "@/components/EventCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Coming Up",
};

const recurringEvents = EVENTS.filter(
  (e) => "recurring" in e && e.recurring
);
const featuredEvents = EVENTS.filter(
  (e) => !("recurring" in e) && "image" in e
);

export default function ComingUpPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="section">
        <div className="container text-center">
          <h1 className="text-white mb-[var(--space-lg)]">Coming Up</h1>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-3xl mx-auto">
            Like every family, so many things are always happening on the go. To
            ensure you stay in the know, check back here early and often to see
            what events and initiatives are coming up.
          </p>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Every Week"
            title="Recurring Events"
          />
          <div className="grid-3">
            {recurringEvents.map((event) => (
              <article key={event.slug} className="card">
                <div className="card-body">
                  <span className="tag mb-[var(--space-sm)]">{event.date}</span>
                  <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-sm)]">
                    {event.title}
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--c3-gray-400)] mb-[var(--space-xs)]">
                    {event.time} &middot; {event.location}
                  </p>
                  <p className="text-[var(--text-sm)] text-[var(--c3-gray-300)]">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="What's Happening"
            title="Featured Events"
          />
          <div className="grid-3">
            {featuredEvents.map((event) => (
              <EventCard key={event.slug} {...event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
