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
    default: "Danish Ali | MERN Stack Developer",
    template: "%s | Danish Ali",
  },
  description:
    "Portfolio of Danish Ali, a Software Engineering student and MERN Stack Developer building modern web applications with React, Next.js, TypeScript and Node.js.",
  keywords: [
    "Danish Ali",
    "Software Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
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
    title: "Danish Ali | MERN Stack Developer",
    description:
      "Portfolio of Danish Ali, a Software Engineering student and MERN Stack Developer building modern web applications with React, Next.js, TypeScript and Node.js.",
    siteName: "Danish Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Ali | MERN Stack Developer",
    description:
      "Portfolio of Danish Ali, a Software Engineering student and MERN Stack Developer building modern web applications with React, Next.js, TypeScript and Node.js.",
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
  jobTitle: "Software Engineering Student & MERN Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/danish234-droid",
    "https://linkedin.com/in/danish-ali",
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
