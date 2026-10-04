"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
  Sparkles,
  Layers,
  Database,
  Cpu,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"code" | "terminal">("code");

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary/15 dark:bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-500/10 dark:bg-sky-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy, Badges & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
          >
            {/* Status Badge (FR-H1) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{siteConfig.status}</span>
            </div>

            {/* H1 Heading (FR-H2) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Building modern{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">
                digital experiences
              </span>{" "}
              with code.
            </h1>

            {/* Supporting Text (FR-H3) */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              I&apos;m <span className="text-foreground font-semibold">Danish Ali</span>, a Software
              Engineering student and MERN Stack Developer focused on building modern, responsive,
              and scalable web applications.
            </p>

            {/* CTAs (FR-H4) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-95 transition-all shadow-md shadow-primary/20 group focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/15 text-primary font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </Link>

              <a
                href={siteConfig.resumePath}
                download="Danish-Ali-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card/80 hover:bg-muted text-foreground font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-primary"
                title="Download PDF directly"
              >
                <Download className="w-4 h-4 text-muted-foreground" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Let's Connect Social Links (FR-H5) */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/60 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Let&apos;s Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Send Email"
                  className="p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Custom Developer Hero Visual (FR-H6, FR-H7, FR-H8) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Tech Badges (FR-H6) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-5 -left-4 z-20 px-3 py-1.5 rounded-xl border border-border bg-card/90 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-medium text-foreground"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next.js 15 & React</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-2 z-20 px-3 py-1.5 rounded-xl border border-border bg-card/90 backdrop-blur-md shadow-lg flex items-center gap-2 text-xs font-medium text-foreground"
            >
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>MongoDB & Node.js</span>
            </motion.div>

            {/* Code Editor Window Card */}
            <div className="w-full rounded-2xl border border-border bg-[#0b1120] text-slate-200 shadow-2xl overflow-hidden">
              {/* Window Header / Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#070b14] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                      activeTab === "code"
                        ? "bg-slate-800 text-cyan-400 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                      activeTab === "terminal"
                        ? "bg-slate-800 text-cyan-400 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    terminal.sh
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[290px]">
                {activeTab === "code" ? (
                  <div className="space-y-1">
                    <p className="text-slate-500">// Danish Ali — Engineering Profile</p>
                    <p>
                      <span className="text-pink-400">const</span>{" "}
                      <span className="text-yellow-300">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{" "}
                      <span className="text-emerald-400">&quot;Danish Ali&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-emerald-400">&quot;Software Engineer &amp; MERN Dev&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">education:</span>{" "}
                      <span className="text-emerald-400">&quot;BS Software Engineering (GCUF)&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">training:</span>{" "}
                      <span className="text-emerald-400">&quot;Saylani Mass IT Training (SMIT)&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">location:</span>{" "}
                      <span className="text-emerald-400">&quot;Faisalabad, Pakistan&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">status:</span>{" "}
                      <span className="text-cyan-400">&quot;Available for Opportunities&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">coreStack:</span> [
                      <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;TypeScript&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;MongoDB&quot;</span>],
                    </p>
                    <p>&#125;;</p>
                  </div>
                ) : (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-500"># Interactive developer session</p>
                    <p>
                      <span className="text-emerald-400">$</span> whoami
                    </p>
                    <p className="text-cyan-300 pl-3">danish-ali &lt;Software Engineer&gt;</p>

                    <p>
                      <span className="text-emerald-400">$</span> stack --summary
                    </p>
                    <p className="text-slate-300 pl-3">MERN Stack | Next.js 15 | TypeScript | Tailwind CSS</p>

                    <p>
                      <span className="text-emerald-400">$</span> status
                    </p>
                    <p className="text-amber-300 pl-3 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      building scalable web applications...
                    </p>

                    <p className="pt-2">
                      <span className="text-emerald-400">$</span> ready-for-collaboration?
                    </p>
                    <p className="text-emerald-300 pl-3 font-semibold">true (Let&apos;s build together)</p>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-[#070b14] border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-cyan-400" /> UTF-8
                  </span>
                  <span>TypeScript 5.7</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
