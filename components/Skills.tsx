"use client";

import { skills, skillCategories, Skill } from "@/data/skills";
import {
  Code2,
  Palette,
  FileCode,
  FileJson,
  Atom,
  Layers,
  Wind,
  Boxes,
  FormInput,
  ShieldCheck,
  Server,
  Cpu,
  Database,
  Network,
  GitBranch,
  Github,
  Terminal,
  Send,
  Cloud,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

// Helper icon resolver
function getSkillIcon(iconName: string) {
  switch (iconName) {
    case "Code2":
      return <Code2 className="w-5 h-5" />;
    case "Palette":
      return <Palette className="w-5 h-5" />;
    case "FileCode":
      return <FileCode className="w-5 h-5" />;
    case "FileJson":
      return <FileJson className="w-5 h-5" />;
    case "Atom":
      return <Atom className="w-5 h-5" />;
    case "Layers":
      return <Layers className="w-5 h-5" />;
    case "Wind":
      return <Wind className="w-5 h-5" />;
    case "Boxes":
      return <Boxes className="w-5 h-5" />;
    case "FormInput":
      return <FormInput className="w-5 h-5" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5" />;
    case "Server":
      return <Server className="w-5 h-5" />;
    case "Cpu":
      return <Cpu className="w-5 h-5" />;
    case "Database":
      return <Database className="w-5 h-5" />;
    case "Network":
      return <Network className="w-5 h-5" />;
    case "GitBranch":
      return <GitBranch className="w-5 h-5" />;
    case "Github":
      return <Github className="w-5 h-5" />;
    case "Terminal":
      return <Terminal className="w-5 h-5" />;
    case "Send":
      return <Send className="w-5 h-5" />;
    case "Cloud":
      return <Cloud className="w-5 h-5" />;
    default:
      return <Code2 className="w-5 h-5" />;
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Skills &amp; Tech Stack
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3 mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Core technologies and tools I work with to build responsive, robust, and scalable web solutions.
          </p>
        </div>

        {/* Categories Grid (FR-T1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const categorySkills = skills.filter((s) => s.category === category);
            const isBackend = category === "Backend";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-5">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <span>{category}</span>
                    </h3>
                    {isBackend ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <Clock className="w-3 h-3" />
                        In-Progress / Expanding
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <CheckCircle className="w-3 h-3" />
                        Production Ready
                      </span>
                    )}
                  </div>

                  {/* Skills Tag Cards (FR-T2) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {categorySkills.map((skill: Skill) => (
                      <div
                        key={skill.name}
                        tabIndex={0}
                        className="p-3 rounded-xl border border-border/70 bg-muted/40 hover:bg-muted hover:border-primary/30 text-foreground transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 group cursor-default focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className="text-xs font-semibold leading-tight">{skill.name}</span>
                        {skill.status === "Learning" && (
                          <span className="text-[10px] text-amber-400/90 font-mono">Learning</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {isBackend && (
                  <p className="mt-4 pt-3 border-t border-border/40 text-xs text-muted-foreground italic">
                    * Actively expanding backend skills with deep focus on REST APIs, Express middlewares, and MongoDB schemas.
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
