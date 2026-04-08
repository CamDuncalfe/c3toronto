import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/constants";
import { SocialIcon } from "@/components/SocialIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ImageTextSection } from "@/components/ImageTextSection";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.heroAllIn}
          alt="C3 Toronto worship gathering"
          fill
          className="object-cover"
          sizes="100vw"
          preload={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/60 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white animate-fade-in lowercase">about us</h1>
        </div>
      </section>

      {/* Connecting People to God */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
              Our Heart
            </span>
            <h2 className="mb-[var(--space-lg)]">Connecting People to God</h2>
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)]">
              At C3, we&apos;re all about Jesus, which means we&apos;re all
              about loving others. What better way to share Jesus&apos; love
              than helping people find their place in God&apos;s big story? So
              whether you&apos;re encountering the gospel for the first time,
              recommitting your life to Jesus, or taking the next step in your
              established faith journey, our message is simple: Whatever your
              path, Jesus wants to be the author and perfecter of it. Join us as
              we discover and pursue God in everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <VideoEmbed videoId="H1ujIxdQi00" title="About C3 Toronto" />
          </div>
        </div>
      </section>

      {/* Mission Declaration */}
      <section className="section">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
              Our Mission
            </span>
            <h2 className="mb-[var(--space-lg)]">We&apos;re on a Mission</h2>
            <p className="text-[var(--text-xl)] text-[var(--c3-gray-200)] font-medium leading-relaxed">
              We&apos;re on a mission to lead people to follow Jesus as Lord,
              making disciples who advance His Kingdom through the local church.
            </p>
          </div>
        </div>
      </section>

      {/* There's a place for you here */}
      <ImageTextSection
        image={IMG.connectGroups}
        imageAlt="C3 Toronto community gathering"
        eyebrow="Community"
        title="There's a Place for You Here"
        description="The good news is that no matter what you've gone through or what questions you might still have, there's a place for you here and a family that wants to walk with you. Through Jesus as our example, you'll be met with love, grace, and forgiveness — just as God has shown us."
        actionLabel="Get Connected"
        actionUrl="/connect"
        reversed
      />

      {/* Our Pastors */}
      <section className="section border-t border-white/5">
        <div className="container">
          <SectionHeading eyebrow="Leadership" title="Our Pastors" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-3xl)] items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-[4/3]">
              <Image
                src={IMG.pastors}
                alt="Pastors Sam and Jess Picken"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Bio */}
            <div>
              <h3 className="text-[var(--text-3xl)] mb-[var(--space-sm)]">
                Sam &amp; Jess Picken
              </h3>
              <span className="block text-[var(--text-sm)] text-[var(--c3-yellow)] font-semibold uppercase tracking-[0.1em] mb-[var(--space-lg)]">
                Lead Pastors
              </span>
              <p className="text-[var(--text-base)] text-[var(--c3-gray-300)] leading-relaxed">
                Sam and his wife Jess are the lead pastors of C3 Toronto with
                three dynamic locations across the Greater Toronto Area. They
                are C3 Canada&apos;s Regional Directors and serve on the C3
                Global Executive Team. Sam completed his Doctoral Degree in
                Ministry as well as his Master&apos;s Degree in Ministerial
                Leadership at Southeastern University. Sam and Jess reside in
                the west end of Toronto with their three kids. They lead with a
                strong emphasis on discipleship and developing leaders.
              </p>
              <div className="flex items-center gap-[var(--space-lg)] mt-[var(--space-xl)]">
                <a
                  href="https://www.instagram.com/sampicken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold text-[var(--c3-gray-300)] hover:text-[var(--c3-yellow)] transition-colors"
                >
                  <SocialIcon name="instagram" size={16} />
                  @sampicken
                </a>
                <a
                  href="https://www.instagram.com/jesspicken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold text-[var(--c3-gray-300)] hover:text-[var(--c3-yellow)] transition-colors"
                >
                  <SocialIcon name="instagram" size={16} />
                  @jesspicken
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C3 Global */}
      <ImageTextSection
        image={IMG.c3Global}
        imageAlt="Pastors Phil and Chris Pringle, founders of C3 Church Global"
        eyebrow="C3 Global"
        title="A Global Movement"
        description="C3 Toronto is part of an international movement of churches called C3 Church Global. This movement was started by Pastors Phil and Chris Pringle in Sydney, Australia, in 1980. Our community is a global family, and our members can walk into any of our C3 Churches worldwide and know they're home. We are united with Christ in His vision; therefore, our mission is to save the lost, make disciples, and build His church. With close to 500 churches in 64 countries, God's love and power stretches globally."
      />
    </>
  );
}
