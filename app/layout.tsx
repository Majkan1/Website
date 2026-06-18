import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://mikolajmichalak.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mikołaj Michalak — Full-Stack Developer",
  description:
    "Full-Stack developer working in the Next.js / TypeScript stack — Prisma, PostgreSQL, Supabase, auth, testing and CI. Computer Science student, open to remote roles worldwide.",
  keywords: [
    "Mikołaj Michalak",
    "Full-Stack Developer",
    "Front-End Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Supabase",
    "Portfolio",
    "Remote",
    "Poland",
  ],
  authors: [{ name: "Mikołaj Michalak", url: "https://github.com/Majkan1" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mikołaj Michalak",
    title: "Mikołaj Michalak — Full-Stack Developer",
    description:
      "Full-stack web apps with Next.js, TypeScript, Prisma and PostgreSQL. See my live projects and download my CV.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikołaj Michalak — Full-Stack Developer",
    description:
      "Full-stack web apps with Next.js, TypeScript, Prisma and PostgreSQL.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
