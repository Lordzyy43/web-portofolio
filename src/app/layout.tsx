import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col overflow-x-hidden bg-[#050816] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_28%),linear-gradient(180deg,_rgba(5,8,22,0.92),_rgba(5,8,22,1))]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)] opacity-35"
        />
        {children}
      </body>
    </html>
  );
}
