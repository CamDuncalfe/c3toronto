import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS, IMG } from "@/lib/constants";
import { SocialIcon } from "./SocialIcon";
import { Mail } from "lucide-react";

const footerSections = [
  {
    title: "Church",
    links: [
      { label: "About", href: "/about" },
      { label: "Sundays", href: "/sundays" },
      { label: "Coming Up", href: "/coming-up" },
      { label: "Stories", href: "/stories" },
      { label: "Giving", href: "/giving" },
      { label: "I'm New", href: "/im-new" },
    ],
  },
  {
    title: "Ministries",
    links: NAV_LINKS.ministries,
  },
  {
    title: "Resources",
    links: [
      { label: "Our Locations", href: "/sundays" },
      { label: "Pastoral Care", href: "/pastoral-care" },
      { label: "Love This City", href: "/love-this-city" },
      { label: "Church Online", href: "https://live.c3toronto.com" },
      { label: "Give Online", href: "https://give.c3toronto.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      {/* CTA Section */}
      <section className="section bg-[var(--c3-black)]">
        <div className="container text-center">
          <h2 className="mb-[var(--space-lg)]">Get Connected</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/forms/lets-connect" className="btn btn-primary">
              Reach out
            </Link>
            <Link href="/sundays" className="btn btn-outline">
              Join on Sunday
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-[var(--c3-black)] border-t border-white/5">
        <div className="container py-[var(--space-4xl)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-3xl)]">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-[var(--space-lg)]">
                <Image
                  src={IMG.logo}
                  alt="C3 Toronto"
                  width={120}
                  height={38}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="text-[var(--text-sm)] text-[var(--c3-gray-400)] mb-[var(--space-xl)] max-w-xs">
                Real people pursuing God across Toronto and Hamilton.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mb-[var(--space-xl)]">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.icon}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--c3-gray-400)] hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <SocialIcon name={link.icon} size={20} />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <a
                href="https://mailchi.mp/c3toronto.com/subscribe-to-the-weekly-dose"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text-sm)] text-[var(--c3-yellow)] hover:text-white transition-colors"
              >
                <Mail size={16} />
                Stay in the Know
              </a>
            </div>

            {/* Link Columns */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h6 className="text-[var(--text-xs)] font-semibold uppercase tracking-widest text-[var(--c3-gray-400)] mb-[var(--space-lg)]">
                  {section.title}
                </h6>
                <ul className="flex flex-col gap-[var(--space-sm)]">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[var(--text-sm)] text-[var(--c3-gray-300)] hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container pb-[var(--space-xl)]">
          <div className="border-t border-white/5 pt-[var(--space-xl)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-xs)] text-[var(--c3-gray-500)]">
              &copy; {new Date().getFullYear()} C3 Church Toronto. All rights
              reserved.
            </p>
            <a
              href="mailto:contact@c3toronto.com"
              className="text-[var(--text-xs)] text-[var(--c3-gray-400)] hover:text-white transition-colors"
            >
              contact@c3toronto.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
