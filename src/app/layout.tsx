import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_METADATA, BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? (BASE_PATH ? "https://shshmichael020-alt.github.io" : "https://michael-shah-portfolio.pages.dev")
      : "http://localhost:3000"
  ),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  authors: [{ name: SITE_METADATA.author }],
  keywords: [
    "Michael Shah",
    "Computer Science",
    "Cybersecurity",
    "Systems",
    "Software Engineering",
    "Jain University",
    "FET",
    "AI",
    "Experimental Technology",
  ],
  icons: {
    icon: `${BASE_PATH}/icon.svg`,
    shortcut: `${BASE_PATH}/icon.svg`,
    apple: `${BASE_PATH}/icon.svg`,
  },
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${BASE_PATH}/assets/poster.jpg`,
        width: 1280,
        height: 720,
        alt: "Michael Shah Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [`${BASE_PATH}/assets/poster.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-canvas text-text-primary antialiased font-sans min-h-screen selection:bg-accent-cyan selection:text-black">
        {/* Celluloid Film Grain Texture per DESIGN.md */}
        <div
          className="fixed inset-0 pointer-events-none z-50 film-grain opacity-20"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
