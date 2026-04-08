import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Internship",
};

const growthAreas = [
  "Establishing prayer habits",
  "Clarifying vocational direction",
  "Building relationships",
  "Identifying next steps",
  "Developing communication skills",
  "Creating transformative community experiences",
];

export default function InternshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.internship}
          alt="C3 Toronto Internship"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/50 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white mb-[var(--space-lg)] animate-fade-in">
            C3 Toronto Internship
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
            An intensive five-month leadership development program designed to
            offer an immersive discipleship experience combining classroom
            instruction with practical ministry engagement.
          </p>
        </div>
      </section>

      {/* Weekly Structure */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="What to Expect"
            title="Weekly Structure"
          />
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <div className="card-body">
                <h3 className="text-[var(--text-xl)] font-bold mb-[var(--space-md)] text-white">
                  Wednesdays
                </h3>
                <p className="text-[var(--text-base)] text-[var(--c3-gray-300)]">
                  Morning prayer, bible study, and teaching sessions. Afternoon
                  ministry work with staff mentors. Lunch and leadership
                  discussions included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Commitments */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Beyond Wednesdays"
            title="Additional Commitments"
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] text-center">
              Mid-week connect group participation, Thursday 6 AM prayer
              sessions, Sunday availability required, approximately 10
              additional hours weekly.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Areas */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading eyebrow="Growth" title="Areas of Development" />
          <div className="grid-3">
            {growthAreas.map((area) => (
              <div
                key={area}
                className="card text-center py-[var(--space-xl)] px-[var(--space-lg)]"
              >
                <p className="text-[var(--text-base)] font-semibold text-white">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="section border-t border-white/5">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] mb-[var(--space-2xl)]">
            Applications are now closed for the Winter semester but will be open
            again in July for the Summer semester.
          </p>
          <a
            href="https://c3toronto.churchcenter.com/people/forms"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Apply
          </a>
        </div>
      </section>
    </>
  );
}
