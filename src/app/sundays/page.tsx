import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { LOCATIONS, IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { LocationCard } from "@/components/LocationCard";
import { ImageTextSection } from "@/components/ImageTextSection";

export const metadata: Metadata = {
  title: "Sundays",
};

export default function SundaysPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.heroAllIn}
          alt="C3 Toronto Sunday service"
          fill
          className="object-cover"
          sizes="100vw"
          preload={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/60 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white animate-fade-in lowercase">sundays</h1>
        </div>
      </section>

      {/* Come Join Us */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
              Every Week
            </span>
            <h2 className="mb-[var(--space-lg)]">Come Join Us on Sunday</h2>
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
              From our time in worship to our robust kids program and
              encouraging Sunday message, we&apos;re so excited to see you in
              person at one of our locations. If you are tuning in online this
              week, we encourage you to get up on your feet to worship and grab
              a notebook as you lean into the sermon. Let&apos;s go!
            </p>
          </div>
        </div>
      </section>

      {/* Sunday Playback */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-[var(--text-sm)] font-semibold uppercase tracking-[0.1em] text-[var(--c3-gray-400)] mb-[var(--space-lg)]">
              Ps Sam Picken &mdash; April 13, 2026
            </p>
            <VideoEmbed videoId="coltpMv9LyA" title="Sunday Playback" />
          </div>
        </div>
      </section>

      {/* Our Locations */}
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

      {/* Church Online */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-md)]">
            Church Online
          </span>
          <h2 className="text-[var(--c3-black)] mb-[var(--space-md)]">
            Tune In From Wherever You Are!
          </h2>
          <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)] max-w-2xl mx-auto mb-[var(--space-xl)]">
            Can&apos;t make it in person? Join us online every Sunday. Worship
            with us from the comfort of your home.
          </p>
          <a
            href="https://live.c3toronto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-yellow"
          >
            Join Sundays At 10 AM
          </a>
        </div>
      </section>

      {/* C3 Kids */}
      <ImageTextSection
        image={IMG.youth}
        imageAlt="C3 Kids program"
        eyebrow="C3 Kids"
        title="C3 Kids"
        description="We want to see every child develop their own relationship with Jesus and love the journey along the way."
        actionLabel="Learn More"
        actionUrl="/c3-kids"
      />

      {/* C3 Youth */}
      <section className="section border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-3xl)] items-center">
            {/* Image */}
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-[4/3]">
              <Image
                src={IMG.youth}
                alt="C3 Youth gathering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Content */}
            <div>
              <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
                C3 Youth
              </span>
              <h2 className="mb-[var(--space-lg)]">C3 Youth</h2>
              <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] mb-[var(--space-xl)]">
                Through fun activities, meaningful discussions, and inspiring
                messages, we&apos;re here to support you on your spiritual
                journey. Come as you are and be part of something amazing!
              </p>
              <div className="flex flex-col gap-[var(--space-sm)]">
                <span className="text-[var(--text-sm)] font-semibold text-[var(--c3-gray-400)] uppercase tracking-[0.1em]">
                  Register for Youth
                </span>
                <div className="flex flex-wrap gap-[var(--space-md)]">
                  <a
                    href="https://c3toronto.churchcenter.com/registrations/events/c3-youth-downtown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Downtown
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://c3toronto.churchcenter.com/registrations/events/c3-youth-midtown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Midtown
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://c3toronto.churchcenter.com/registrations/events/c3-youth-hamilton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Hamilton
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baptisms */}
      <ImageTextSection
        image={IMG.baptism}
        imageAlt="Baptism at C3 Toronto"
        eyebrow="Baptism"
        title="Baptisms"
        description="Baptism is an outward testimony of the inward change in your life. It declares your faith, shares in Christ's burial and resurrection, symbolizes death to your old life, and announces your new life in Christ and commitment to the local church!"
        reversed
      />
    </>
  );
}
