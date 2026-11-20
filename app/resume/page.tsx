import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { ResumeViewer } from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Danish Ali - Full-Stack Software Engineer & BS SE Student",
  description:
    "Professional software engineering resume of Danish Ali. BS Software Engineering student and Full-Stack Software Engineer experienced in Next.js, Express, PostgreSQL, Prisma, React, TypeScript, and Node.js.",
  openGraph: {
    title: "Danish Ali - Full-Stack Software Engineer Resume",
    description:
      "Explore the professional experience, featured projects, technical skill matrix, and education of Danish Ali.",
    type: "profile",
  },
};

export default function ResumePage() {
  return <ResumeViewer projects={projects} siteConfig={siteConfig} />;
}
