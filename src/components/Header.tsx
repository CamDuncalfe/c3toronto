"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, IMG } from "@/lib/constants";
import { SocialIcon } from "./SocialIcon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--c3-black)]/90 backdrop-blur-md">
      <div className="container flex items-center justify-between h-[4.5rem]">
        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={IMG.logo}
            alt="C3 Toronto"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[var(--space-lg)]">
          {NAV_LINKS.primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--text-sm)] font-medium text-[var(--c3-gray-300)] hover:text-white transition-colors duration-[var(--transition-fast)]"
            >
              {link.label}
            </Link>
          ))}

          {/* Ministries Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMinistriesOpen(!ministriesOpen)}
              onBlur={() => setTimeout(() => setMinistriesOpen(false), 200)}
              className="flex items-center gap-1 text-[var(--text-sm)] font-medium text-[var(--c3-gray-300)] hover:text-white transition-colors"
            >
              Ministries
              <ChevronDown
                size={14}
                className={`transition-transform ${ministriesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {ministriesOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-[var(--c3-black)] border border-white/10 rounded-[var(--radius-lg)] p-2 shadow-[var(--shadow-lg)]">
                {NAV_LINKS.ministries.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-[var(--text-sm)] text-[var(--c3-gray-300)] hover:text-white hover:bg-white/5 rounded-[var(--radius-sm)] transition-colors"
                    onClick={() => setMinistriesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-[var(--space-lg)]">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--c3-gray-400)] hover:text-white transition-colors"
                aria-label={link.label}
              >
                <SocialIcon name={link.icon} size={18} />
              </a>
            ))}
          </div>
          <Link href="/sundays" className="btn btn-primary btn-sm">
            Join on Sunday
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-10 p-2 text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[4.5rem] bg-[var(--c3-black)] z-40 overflow-y-auto">
          <nav className="container py-[var(--space-xl)] flex flex-col gap-1">
            {NAV_LINKS.mobile.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[var(--text-lg)] font-medium text-[var(--c3-gray-300)] hover:text-white border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-[var(--space-xl)] flex flex-col gap-3">
              <Link
                href="/sundays"
                className="btn btn-primary"
                onClick={() => setMobileOpen(false)}
              >
                Join on Sunday
              </Link>
              <Link
                href="/coming-up"
                className="btn btn-outline"
                onClick={() => setMobileOpen(false)}
              >
                Coming Up
              </Link>
            </div>
            <div className="pt-[var(--space-xl)] flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--c3-gray-400)] hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.icon} size={22} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
