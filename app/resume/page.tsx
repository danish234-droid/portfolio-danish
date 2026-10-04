import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { ResumeViewer } from "@/components/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume | Danish Ali - Software Engineer & MERN Stack Developer",
  description:
    "Professional software engineering resume of Danish Ali. BS Software Engineering student & MERN Stack developer experienced in Next.js, React, TypeScript, Node.js, and MongoDB.",
  openGraph: {
    title: "Danish Ali - Software Engineer & Developer Resume",
    description:
      "Explore the professional experience, featured projects, technical skill matrix, and education of Danish Ali.",
    type: "profile",
  },
};

export default function ResumePage() {
  return <ResumeViewer projects={projects} siteConfig={siteConfig} />;
}
