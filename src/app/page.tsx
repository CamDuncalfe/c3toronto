import Image from "next/image";
import Link from "next/link";
import { EVENTS, LOCATIONS, IMG } from "@/lib/constants";
import { EventCard } from "@/components/EventCard";
import { LocationCard } from "@/components/LocationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ImageTextSection } from "@/components/ImageTextSection";

export default function HomePage() {
  const featuredEvents = EVENTS.filter(
    (e) => !("recurring" in e) && "image" in e
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.heroAllIn}
          alt="C3 Toronto worship"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/50 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white mb-[var(--space-lg)] animate-fade-in lowercase">
            real people
            <br />
            pursuing god
          </h1>
          <p className="text-[var(--text-xl)] text-[var(--c3-gray-200)] mb-[var(--space-2xl)] max-w-2xl mx-auto animate-fade-in-up delay-200">
            Join us at C3 Church Toronto as we discover and pursue God in
            everyday life.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
            <Link href="/connect" className="btn btn-primary btn-lg">
              Get Connected
            </Link>
            <Link href="/coming-up" className="btn btn-outline btn-lg">
              C3 Conference 2026
            </Link>
          </div>
        </div>
      </section>

      {/* Sunday Info */}
      <section className="section">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-sm)]">
            Every Week
          </span>
          <h2 className="mb-[var(--space-md)]">Join Us on Sunday</h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] max-w-2xl mx-auto mb-[var(--space-2xl)]">
            From our time in worship to our robust kids program and encouraging
            Sunday message, we&apos;re so excited to see you in person at one of
            our locations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-[var(--space-3xl)]">
            <a
              href="https://live.c3toronto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Join Church Online
            </a>
            <Link href="/sundays" className="btn btn-primary">
              Join in Person
            </Link>
          </div>

          {/* Latest Message */}
          <div className="max-w-4xl mx-auto">
            <VideoEmbed videoId="coltpMv9LyA" title="Latest Sunday Message" />
          </div>
        </div>
      </section>

      {/* Coming Up */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="What's Happening"
            title="Coming Up at C3"
          />
          <div className="grid-3">
            {featuredEvents.slice(0, 6).map((event) => (
              <EventCard key={event.slug} {...event} />
            ))}
          </div>
          <div className="text-center mt-[var(--space-3xl)]">
            <Link href="/coming-up" className="btn btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <ImageTextSection
        image={IMG.aboutCommunity}
        imageAlt="C3 Toronto community"
        eyebrow="Our Heart"
        title="Connecting People to God"
        description="At C3, we're all about Jesus, which means we're all about loving others. What better way to share Jesus' love than helping people find their place in God's big story? Whether you're encountering the gospel for the first time, recommitting your life to Jesus, or taking the next step in your established faith journey, our message is simple: Whatever your path, Jesus wants to be the author and perfecter of it."
        actionLabel="Learn More"
        actionUrl="/about"
      />

      {/* Locations */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading
            eyebrow="Sundays"
            title="Our Locations"
            description="Three locations across the Greater Toronto Area and Hamilton. Find the one nearest you."
          />
          <div className="grid-3">
            {LOCATIONS.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Prayer */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-sm)]">
            Thursday Mornings
          </span>
          <h2 className="text-[var(--c3-black)] mb-[var(--space-md)]">
            Weekly Prayer
          </h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)] max-w-2xl mx-auto mb-[var(--space-xl)]">
            Join us every Thursday at 6:00 AM as we pray together for our church
            and our cities. All locations.
          </p>
          <Link href="/prayer" className="btn btn-yellow">
            Learn More
          </Link>
        </div>
      </section>

      {/* About Video */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Story"
            title="We're on a Mission"
            description="To lead people to follow Jesus as Lord, making disciples who advance His Kingdom through the local church."
          />
          <div className="max-w-4xl mx-auto">
            <VideoEmbed videoId="H1ujIxdQi00" title="About C3 Toronto" />
          </div>
        </div>
      </section>

      {/* There's a Place for You */}
      <ImageTextSection
        image={IMG.connectGroups}
        imageAlt="C3 Connect Group"
        eyebrow="Community"
        title="There's a Place for You Here"
        description="The good news is that no matter what you've gone through or what questions you might still have, there's a place for you here and a family that wants to walk with you. Through Jesus as our example, you'll be met with love, grace, and forgiveness — just as God has shown us."
        actionLabel="Get Connected"
        actionUrl="/connect"
        reversed
      />
    </>
  );
}
