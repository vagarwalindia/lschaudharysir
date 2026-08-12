import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

// Body typeface — Inter, loaded via next/font for zero layout shift + self-hosting
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display/heading typeface — Oswald gives the condensed, field-manual/military feel
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// ---- SEO metadata (title, description, Open Graph, Twitter) ----
export const metadata: Metadata = {
  metadataBase: new URL("https://www.vetventures.com"),
  title: {
    default: "VetVentures | From Battlefield to Basecamp — Leadership Through Adventure",
    template: "%s | VetVentures",
  },
  description:
    "VetVentures runs corporate events, leadership bootcamps, and trekking camps led by an Army veteran founder. Build discipline, resilience, and real teams — outdoors.",
  keywords: [
    "corporate team building",
    "leadership bootcamp",
    "trekking camp India",
    "army veteran entrepreneur",
    "outdoor leadership training",
    "adventure corporate events",
  ],
  authors: [{ name: "VetVentures" }],
  openGraph: {
    title: "VetVentures | From Battlefield to Basecamp",
    description:
      "Corporate events, leadership bootcamps, and trekking camps led by an Army veteran founder. Join the community.",
    url: "https://www.vetventures.com",
    siteName: "VetVentures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VetVentures — From Battlefield to Basecamp",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetVentures | From Battlefield to Basecamp",
    description:
      "Corporate events, leadership bootcamps, and trekking camps led by an Army veteran founder.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the dark-mode class is applied client-side
    // before paint (see the inline script below), which legitimately differs
    // from the server-rendered markup for a single frame.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint to avoid a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('vetventures-theme');
                  var theme = stored ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
