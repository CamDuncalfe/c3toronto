import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { IMG } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageTextSection } from "@/components/ImageTextSection";

export const metadata: Metadata = {
  title: "Giving",
};

export default function GivingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={IMG.giving}
          alt="C3 Toronto giving and generosity"
          fill
          className="object-cover"
          sizes="100vw"
          preload={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--c3-black)]/60 via-[var(--c3-black)]/30 to-[var(--c3-black)]" />
        <div className="relative z-10 container text-center py-[var(--space-5xl)]">
          <h1 className="text-white animate-fade-in lowercase">giving</h1>
        </div>
      </section>

      {/* An Open Heaven */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
              Generosity
            </span>
            <h2 className="mb-[var(--space-lg)]">
              An Open Heaven Over Your Life
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] mb-[var(--space-2xl)]">
              That&apos;s our prayer: that when you step out in obedience and
              tithe, the floodgates of Heaven open over your life and you
              receive the blessing that God promises to pour out. We&apos;re
              believing not just for open Heaven over some individuals, but over
              our entire church. Tithing is a biblical mandate to return 10% of
              our income back to the House of God (Malachi 3:10). God has called
              us to live a life marked by generosity&mdash;and that generosity
              starts with the tithe. From there, we actively look for ways to
              give above and beyond, in deep gratitude for what Jesus poured out
              for us.
            </p>
            <a
              href="https://give.c3toronto.com/account/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              My Giving Account
            </a>
          </div>
        </div>
      </section>

      {/* Vision Builders */}
      <section className="section bg-[var(--c3-gray-100)]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-gray-500)] mb-[var(--space-md)]">
              Above &amp; Beyond
            </span>
            <h2 className="text-[var(--c3-black)] mb-[var(--space-lg)]">
              We Are Vision Builders
            </h2>
            <p className="text-[var(--text-lg)] text-[var(--c3-gray-500)] mb-[var(--space-xl)]">
              We believe that God has called every single one of us to
              generously sacrifice over and above the tithe in order to see the
              Kingdom resourced and advanced. We invite you to prayerfully
              consider what God has already placed in your hands, and make a
              year-long commitment to collectively stretch and expand the vision
              of C3.
            </p>
            <Link href="/vision-builders" className="btn btn-yellow">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Love This City */}
      <ImageTextSection
        image={IMG.loveThisCity}
        imageAlt="C3 Toronto Love This City outreach"
        eyebrow="Outreach"
        title="Love Your Neighbour; Love This City"
        description="God has designed the church to be the answer to its surrounding community, and our heart is to stay connected with our communities in order to hear its felt needs, doing all that we can to help meet those needs. When we are the active hands and feet of Jesus in our cities, we build bridges that close the gap between the lost and the doors of our church, inviting more people to encounter Jesus."
      />

      {/* Text to Give */}
      <section className="section border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-3xl)] items-center">
            {/* Image */}
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-[4/3]">
              <Image
                src={IMG.textToGive}
                alt="Text to give on your phone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Content */}
            <div>
              <span className="block text-[var(--text-xs)] font-semibold uppercase tracking-[0.15em] text-[var(--c3-yellow)] mb-[var(--space-md)]">
                Text to Give
              </span>
              <h2 className="mb-[var(--space-lg)]">Give By Text</h2>
              <p className="text-[var(--text-lg)] text-[var(--c3-gray-300)] mb-[var(--space-xl)]">
                You can now text{" "}
                <span className="font-bold text-white">647-360-3615</span> to
                give through SMS. For regular tithes and offerings, text{" "}
                <span className="font-semibold text-white">
                  &lsquo;GIVE AMOUNT&rsquo;
                </span>
                . For Vision Builders, text{" "}
                <span className="font-semibold text-white">
                  &lsquo;VB GIVE AMOUNT&rsquo;
                </span>
                .
              </p>
              <div className="flex items-center gap-[var(--space-md)] p-[var(--space-lg)] rounded-[var(--radius-lg)] bg-white/5 border border-white/10">
                <MessageSquare
                  size={24}
                  className="shrink-0 text-[var(--c3-yellow)]"
                />
                <div>
                  <p className="text-[var(--text-sm)] text-[var(--c3-gray-400)] mb-[var(--space-xs)]">
                    Text this number to give
                  </p>
                  <a
                    href="sms:6473603615"
                    className="text-[var(--text-xl)] font-bold text-white hover:text-[var(--c3-yellow)] transition-colors"
                  >
                    647-360-3615
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
