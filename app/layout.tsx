import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipToContent } from "@/components/SkipToContent";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://danishali.dev"),
  title: {
    default: "Danish Ali | Full-Stack Software Engineer",
    template: "%s | Danish Ali",
  },
  description:
    "Portfolio of Danish Ali, a Full-Stack Software Engineer and BS Software Engineering student building modern web applications with Next.js, Express, PostgreSQL, Prisma, React, and TypeScript.",
  keywords: [
    "Danish Ali",
    "Software Engineer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "PostgreSQL",
    "Prisma ORM",
    "Express.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer Pakistan",
    "Faisalabad",
  ],
  authors: [{ name: "Danish Ali", url: siteConfig.github }],
  creator: "Danish Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danishali.dev",
    title: "Danish Ali | Full-Stack Software Engineer",
    description:
      "Portfolio of Danish Ali, a Full-Stack Software Engineer and BS Software Engineering student building modern web applications with Next.js, Express, PostgreSQL, Prisma, React, and TypeScript.",
    siteName: "Danish Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Ali | Full-Stack Software Engineer",
    description:
      "Portfolio of Danish Ali, a Full-Stack Software Engineer and BS Software Engineering student building modern web applications with Next.js, Express, PostgreSQL, Prisma, React, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Danish Ali",
  url: "https://danishali.dev",
  jobTitle: "Full-Stack Software Engineer & BS SE Student",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/danish234-droid",
    "https://www.linkedin.com/in/danish-ali-0462663b5",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          <SkipToContent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
