import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "C3 Toronto",
    template: "%s | C3 Church Toronto",
  },
  description:
    "We exist to connect people to God. Faith is our means. Hope is our message. Love is our motivation.",
  metadataBase: new URL("https://c3toronto.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "C3 Church Toronto",
    images: [
      "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/652963a774c6370c081215da_c3to%20open%20graph.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/653a81556c5c0a6a08d1a092_favicon-32.png",
    apple:
      "https://cdn.prod.website-files.com/644dc19729bd36f5c52be3e0/653a815a949468a4941ac415_favicon-256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-site="644dc19729bd36f5c52be3e0">
      <head>
        {/* Webflow CSS */}
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        {/* Splide carousel CSS */}
        <link href="/css/splide.min.css" rel="stylesheet" type="text/css" />
        {/* Typekit / Adobe Fonts — must load before first paint */}
        <Script
          src="https://use.typekit.net/bup7jcg.js"
          strategy="beforeInteractive"
        />
        <Script id="typekit-load" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>
      </head>
      <body>
        {children}

        {/*
          jQuery, Webflow JS, and Splide are loaded by WebflowPage component
          in the correct order AFTER it sets data-wf-page on <html>.
          Only third-party widgets that don't depend on page content go here.
        */}

        {/* Podium chat widget */}
        <Script
          src="https://connect.podium.com/widget.js#ORG_TOKEN=cbc6b61f-d1b1-4150-8151-c8eb697d6eab"
          strategy="lazyOnload"
        />

        {/* Mailchimp */}
        <Script
          id="mcjs"
          strategy="lazyOnload"
          src="https://chimpstatic.com/mcjs-connected/js/users/c5341f95cd0411a15e172aa3d/ae65cf4d42237fd5fed4e19ae.js"
        />

        {/* Giving widget */}
        <Script
          id="giving-widget"
          strategy="lazyOnload"
          src="https://give.c3toronto.com/v1/widgets.js"
        />
      </body>
    </html>
  );
}
