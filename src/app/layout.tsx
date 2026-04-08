import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "C3 Church Toronto",
    template: "%s | C3 Church Toronto",
  },
  description:
    "C3 Church Toronto — real people pursuing God. Join us Sundays across our Downtown, Midtown, and Hamilton locations.",
  metadataBase: new URL("https://c3toronto.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "C3 Church Toronto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
