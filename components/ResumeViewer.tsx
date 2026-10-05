"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Printer,
  Share2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  CheckCircle2,
  Check,
} from "lucide-react";
import type { siteConfig as SiteConfigType } from "@/data/site";
import type { Project } from "@/data/projects";

interface ResumeViewerProps {
  siteConfig: typeof SiteConfigType;
  projects: Project[];
}

export function ResumeViewer({ siteConfig, projects }: ResumeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 py-8 px-4 sm:px-6 lg:px-8 selection:bg-primary/20 selection:text-primary">
      {/* Top Action Header (Hidden in Print Mode) */}
      <div className="max-w-4xl mx-auto mb-8 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
              title="Copy shareable link to resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Link Copied!
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print / Save</span>
            </button>

            <a
              href={siteConfig.resumePath}
              download="Danish-Ali-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-primary text-primary-foreground hover:opacity-95 transition-all shadow-sm shadow-primary/25 cursor-pointer"
              title="Download official PDF copy"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Resume Sheet / Document Container */}
      <main className="max-w-4xl mx-auto bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl print:rounded-none print:border-none print:shadow-none print:p-0 p-8 sm:p-12 transition-all">
        
        {/* RESUME HEADER */}
        <header className="border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
                {siteConfig.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-primary mt-1">
                Software Engineering Student &amp; MERN Stack Developer
              </p>
            </div>

            {/* Quick Badge */}
            <div className="hidden sm:flex flex-col items-end text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Hire &amp; Internships
              </span>
            </div>
          </div>

          {/* Contact & Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-5 text-xs text-slate-600 dark:text-slate-300">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{siteConfig.phone}</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{siteConfig.location}</span>
            </div>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>github.com/danish234-droid</span>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>linkedin.com/in/danish-ali-0462663b5</span>
            </a>

            <a
              href={siteConfig.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Portfolio: danishali.dev</span>
            </a>
          </div>
        </header>

        {/* SECTION 1: PROFESSIONAL SUMMARY */}
        <section className="pt-7 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Professional Summary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
            Motivated Software Engineering undergraduate (GCUF) and active MERN stack practitioner (SMIT) with a solid foundation in computer science principles, data structures, algorithms, and modern full-stack web development. Proficient in building responsive, high-performance web applications using <strong>Next.js 15, React 19, TypeScript, and Tailwind CSS</strong>, with expanding capabilities in <strong>Node.js, Express, MongoDB, and RESTful API architecture</strong>. Strong problem solver committed to writing clean, maintainable code and eager to contribute to high-impact software engineering teams.
          </p>
        </section>

        {/* SECTION 2: TECHNICAL SKILLS */}
        <section className="pt-7 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Technical Skills Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1.5">
                Frontend Development:
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                React 19, Next.js 15 (App Router, Server Components), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Component Driven UI.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1.5">
                State Management &amp; Forms:
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Redux Toolkit, Context API, Formik, Yup Schema Validation, Client-side Caching &amp; Synchronized State.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1.5">
                Backend &amp; Databases (Active Focus):
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Node.js, Express.js, MongoDB, Mongoose, RESTful API Design, JWT Authentication, SQL &amp; Relational Schema Fundamentals.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1.5">
                Tools, Workflow &amp; Fundamentals:
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Git, GitHub, VS Code, Postman, Vercel, Data Structures &amp; Algorithms (DSA), OOP (C++, Java), Agile / Scrum Basics.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED SOFTWARE PROJECTS */}
        <section className="pt-7 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Featured Engineering Projects
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 italic print:hidden">
              All projects include live demos and open-source code
            </span>
          </div>

          <div className="space-y-6">
            {/* Project 1: Workspace Manager */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Workspace Manager — All-in-One Productivity Platform
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    Flagship Project
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <a
                    href="https://workspace-manager-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/danish234-droid/workspace-manager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Source Code</span>
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] font-mono text-primary/90 dark:text-primary">
                Tech Stack: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Redux Toolkit, dnd-kit
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>
                  Architected full-featured workspace application supporting dynamic workspace creation, multi-column drag-and-drop Kanban task pipelines, and interactive calendar scheduling.
                </li>
                <li>
                  Implemented robust global state synchronization with Redux Toolkit for real-time task status updates, tag-based search filters, and persistent dark/light theme preferences.
                </li>
                <li>
                  Engineered modular, reusable component hierarchy ensuring sub-second client-side transitions and zero layout shifts.
                </li>
              </ul>
            </div>

            {/* Project 2: Gaming E-Commerce */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Gaming E-Commerce Store &amp; Checkout Workflow
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    E-Commerce
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <a
                    href="https://ecommerce-ebon-six-27.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/danish234-droid/gaming-ecommerce-store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Source Code</span>
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] font-mono text-primary/90 dark:text-primary">
                Tech Stack: Next.js, React, TypeScript, Redux Toolkit, Tailwind CSS, Framer Motion
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>
                  Engineered responsive online store with dynamic product catalog, category/price filter matrix, and detailed modal views.
                </li>
                <li>
                  Constructed complete client-side cart pipeline with instant price recalculations, quantity management, and animated slide-out checkout drawer.
                </li>
              </ul>
            </div>

            {/* Project 3: ATM Banking Simulator */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    ATM Management System — Financial Simulator
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <a
                    href="https://unbecoming-icicle.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/danish234-droid/atm-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Source Code</span>
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] font-mono text-primary/90 dark:text-primary">
                Tech Stack: TypeScript, Node.js, Inquirer, Chalk
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>
                  Developed banking transaction simulation with PIN-based user authentication, balance validation, overdraw limits, and formatted ledger logs.
                </li>
                <li>
                  Enforced strict TypeScript type safety across transaction entities, error guards, and input parsing layers.
                </li>
              </ul>
            </div>

            {/* Project 4: Artisan Coffee House */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Artisan Coffee House — Responsive Web Presence
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    Web Design
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <a
                    href="https://wrathful-eggnog.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/danish234-droid/coffee-shop-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary inline-flex items-center gap-1 font-medium"
                  >
                    <span>Source Code</span>
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-[11px] font-mono text-primary/90 dark:text-primary">
                Tech Stack: HTML5 Semantic Markup, CSS3 Flexbox/Grid, Vanilla JavaScript (ES6+)
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <li>
                  Constructed fluid, mobile-first web experience with interactive digital menu filtering, scrollspy header, and clean CSS styling.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: EDUCATION & FORMAL TRAINING */}
        <section className="pt-7 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Education &amp; Professional Training
            </h2>
          </div>

          <div className="space-y-5">
            {/* Degree 1: BS SE */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Bachelor of Science in Software Engineering (BS SE)
                </h3>
                <span className="text-xs font-semibold text-primary">2024 — Present</span>
              </div>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Government College University Faisalabad (GCUF) • Faisalabad, Pakistan
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">
                Core coursework in Data Structures &amp; Algorithms (C++/Java), Object-Oriented Programming, Database Management Systems (SQL), Software Design Patterns, and Software Engineering Methodologies.
              </p>
            </div>

            {/* Bootcamp: SMIT */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Web &amp; Mobile Application Development Certification
                </h3>
                <span className="text-xs font-semibold text-primary">2025 — Present</span>
              </div>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Saylani Mass IT Training (SMIT) • Faisalabad, Pakistan
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">
                Intensive industry-aligned software bootcamp covering Advanced JavaScript (ES6+), React.js, Next.js App Router, Redux Toolkit, full-stack REST API development, and production deployments.
              </p>
            </div>

            {/* College: ICS */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Intermediate in Computer Science (ICS)
                </h3>
                <span className="text-xs font-semibold text-slate-500">2022 — 2024</span>
              </div>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Punjab Group of Colleges • Faisalabad, Pakistan
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">
                Studied computer science fundamentals, structured C programming, mathematics, and logic building.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: PROFESSIONAL STRENGTHS & VALUE ADD */}
        <section className="pt-7">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Professional Strengths &amp; Engineering Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong>Type-Safe &amp; Maintainable Code:</strong> High emphasis on strict TypeScript types, readability, and clean architecture patterns.</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong>Performance &amp; Accessibility (a11y):</strong> Focus on fast page load speeds, SEO optimization, and semantic HTML structure.</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong>Rapid Prototyping &amp; Delivery:</strong> Ability to swiftly translate project requirements and Figma designs into working, scalable applications.</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span><strong>Continuous Learning Mindset:</strong> Actively mastering full-stack MERN practices, backend optimization, and AI pair-programming workflows.</span>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Note */}
      <footer className="max-w-4xl mx-auto mt-8 text-center text-xs text-slate-500 dark:text-slate-500 print:hidden">
        <p>
          Designed for Danish Ali • Last updated: 2026 • Available for Software Engineering Roles &amp; Internships
        </p>
      </footer>
    </div>
  );
}
