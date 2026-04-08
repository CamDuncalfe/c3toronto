import Image from "next/image";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { LocationCard } from "@/components/LocationCard";

export const metadata = {
  title: "Prayer",
};

const prayerLocations = [
  {
    name: "Downtown",
    address: "12 Pauline Ave, Toronto",
    times: "Every Thursday, 6:00 - 7:00 AM",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/66a7079e13cc6e67d4fa8c05_Pauline%20Ext.jpeg",
    mapUrl: "https://www.google.com/maps/dir//12+Pauline+Ave,+Toronto,+ON",
  },
  {
    name: "Midtown",
    address: "25 Wanless Ave, Toronto",
    times: "Every Thursday, 6:00 - 7:00 AM",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/66a707906e82ebbeef3d0864_IMG_4659.jpg",
    mapUrl: "https://www.google.com/maps/dir//25+Wanless+Ave,+Toronto,+ON",
  },
  {
    name: "Hamilton",
    address: "601 Burlington St E Unit A, Hamilton",
    times: "Every Thursday, 6:00 - 7:00 AM",
    image:
      "https://cdn.prod.website-files.com/6450591b16d7622484e46a09/66a708645af757122e10a718_Ham%20ext.jpg",
    mapUrl:
      "https://www.google.com/maps/dir//601+Burlington+St+E,+Hamilton,+ON",
  },
];

export default function PrayerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.prayer}
          alt="C3 Toronto Prayer"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/50 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white mb-[var(--space-lg)] animate-fade-in">
            Weekly Prayer
          </h1>
        </div>
      </section>

      {/* Info */}
      <section className="section">
        <div className="container text-center max-w-3xl mx-auto">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
            Every Thursday from 6:00 &ndash; 7:00 AM
          </span>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
            At C3, we see prayer as the engine room of the church. We encourage
            everyone to experience and prioritize prayer in their lives. Join us
            on Thursdays to strengthen your prayer muscles.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Locations"
            title="Join Us at Any Location"
          />
          <div className="grid-3">
            {prayerLocations.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
