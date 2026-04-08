import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastoral Care",
};

export default function PastoralCarePage() {
  return (
    <>
      <section className="section">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white mb-[var(--space-xl)]">Pastoral Care</h1>
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] leading-relaxed mb-[var(--space-3xl)]">
              We all go through seasons when we need extra support and care. C3
              is a family where support and care are readily available through
              your Connect Group or C3 Volunteer Team. Connection during
              difficult times maintains family bonds, and we offer formal
              pastoral support when needed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://c3toronto.churchcenter.com/people/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Request Pastoral Care
              </a>
              <a
                href="https://c3toronto.churchcenter.com/people/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Request Benevolence
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
