// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from "@/lib/lenis"; // Impor mesin scroll premium kita
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muriddkuu | Web & Mobile Developer",
    template: "%s | Muriddkuu",
  },
  description:
    "A personal portfolio that showcases web and mobile case studies, technical skills, and design-led projects.",
  applicationName: "Muriddkuu Portfolio",
  authors: [{ name: "Muriddkuu" }],
  creator: "Muriddkuu",
  publisher: "Muriddkuu",
  keywords: [
    "Muriddkuu",
    "portfolio",
    "web developer",
    "mobile developer",
    "Next.js",
    "Flutter",
    "TypeScript",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Muriddkuu",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Muriddkuu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col overflow-x-hidden bg-background text-foreground selection:bg-white/20 selection:text-white">
        {/* Efek Spotlight Halus */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)]"
        />

        {/* Efek Grid Modern */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        {/* Bungkus seluruh aplikasi dengan Smooth Scroll */}
        <ReactLenis>{children}</ReactLenis>
      </body>
    </html>
  );
}
