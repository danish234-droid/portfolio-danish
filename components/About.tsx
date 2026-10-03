"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { currentlyLearning } from "@/data/skills";
import {
  MapPin,
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  BrainCircuit,
  Laptop,
} from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30 border-y border-border/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3 mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Passionate about writing clean code, solving algorithmic problems, and developing scalable software products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Profile Card (FR-A3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none" />

              {/* Profile Image & Avatar */}
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-md bg-muted flex-shrink-0">
                  <Image
                    src="/images/pic.jpg"
                    alt="Danish Ali - Software Engineering Student & Web Developer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="80px"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{siteConfig.name}</h3>
                  <p className="text-primary text-xs font-medium mt-0.5">{siteConfig.role}</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Profile Meta */}
              <div className="grid grid-cols-2 gap-3 pt-6 text-xs">
                <div className="p-3 rounded-xl bg-muted/60 border border-border/50">
                  <span className="text-muted-foreground block">Degree</span>
                  <span className="font-semibold text-foreground mt-0.5 block">BS Software Eng.</span>
                </div>
                <div className="p-3 rounded-xl bg-muted/60 border border-border/50">
                  <span className="text-muted-foreground block">Bootcamp</span>
                  <span className="font-semibold text-foreground mt-0.5 block">SMIT Web &amp; Mobile</span>
                </div>
                <div className="p-3 rounded-xl bg-muted/60 border border-border/50">
                  <span className="text-muted-foreground block">Focus Area</span>
                  <span className="font-semibold text-foreground mt-0.5 block">MERN + Next.js</span>
                </div>
                <div className="p-3 rounded-xl bg-muted/60 border border-border/50">
                  <span className="text-muted-foreground block">Collaboration</span>
                  <span className="font-semibold text-emerald-500 mt-0.5 block">Open for Projects</span>
                </div>
              </div>
            </div>

            {/* Currently Learning Section (FR-A4) */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-bold text-foreground">Currently Learning &amp; Exploring</h4>
              </div>
              <div className="space-y-2.5">
                {currentlyLearning.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-muted/40 border border-border/40 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="text-foreground font-medium">{item.topic}</span>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.progress}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Philosophy & Academic Journey (FR-A1, FR-A2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-border bg-card p-8 shadow-md">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Engineering student with a builder mindset.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  I am a Software Engineering undergraduate at{" "}
                  <strong className="text-foreground font-semibold">
                    Government College University Faisalabad (GCUF)
                  </strong>{" "}
                  and an active learner in the{" "}
                  <strong className="text-foreground font-semibold">
                    Saylani Mass IT Training (SMIT)
                  </strong>{" "}
                  Web and Mobile Application Development program.
                </p>

                <p>
                  My journey began with hands-on frontend exploration using HTML5, CSS3, and JavaScript, which rapidly expanded into building robust Single Page Applications with{" "}
                  <strong className="text-foreground font-semibold">React, Next.js (App Router), TypeScript, and Tailwind CSS</strong>.
                </p>

                <p>
                  Currently, I am expanding my technical scope into backend engineering with{" "}
                  <strong className="text-foreground font-semibold">Node.js, Express.js, and MongoDB</strong>, focusing on REST API design, authentication architectures, and scalable data models.
                </p>

                <p>
                  I enjoy turning intricate requirements into clean, maintainable software and believe in continuous hands-on project building as the most effective path to mastery.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-border">
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/40 border border-border/40">
                  <Laptop className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-xs text-foreground">Clean Frontend</span>
                  <span className="text-[11px] text-muted-foreground">
                    Modern React &amp; Next.js component structures
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/40 border border-border/40">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-xs text-foreground">Theory + Practice</span>
                  <span className="text-[11px] text-muted-foreground">
                    Combining CS fundamentals with practical MERN development
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/40 border border-border/40">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-xs text-foreground">Growth Driven</span>
                  <span className="text-[11px] text-muted-foreground">
                    Continuous learning and building in public
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
