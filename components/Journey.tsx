"use client";

import { journeyMilestones, JourneyMilestone } from "@/data/journey";
import {
  GraduationCap,
  CodeXml,
  BookOpen,
  Rocket,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

function getMilestoneIcon(iconName: string) {
  switch (iconName) {
    case "GraduationCap":
      return <GraduationCap className="w-5 h-5 text-primary" />;
    case "CodeXml":
      return <CodeXml className="w-5 h-5 text-primary" />;
    case "BookOpen":
      return <BookOpen className="w-5 h-5 text-primary" />;
    case "Rocket":
      return <Rocket className="w-5 h-5 text-primary" />;
    default:
      return <GraduationCap className="w-5 h-5 text-primary" />;
  }
}

export function Journey() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic &amp; Learning Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            My Journey
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3 mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            A chronological timeline of my software engineering education, bootcamp training, and technical milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border/80 ml-4 sm:ml-32 space-y-12 pb-4">
          {journeyMilestones.map((milestone: JourneyMilestone, index: number) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
                {getMilestoneIcon(milestone.icon)}
              </div>

              {/* Date Badge on Desktop Left */}
              <div className="sm:absolute sm:-left-36 sm:top-2 sm:text-right text-xs font-semibold text-primary sm:w-28 flex items-center sm:justify-end gap-1 mb-2 sm:mb-0">
                <Calendar className="w-3.5 h-3.5 sm:hidden inline-block" />
                <span>{milestone.period}</span>
              </div>

              {/* Card Body */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-muted text-muted-foreground border border-border">
                    {milestone.type}
                  </span>
                </div>

                <h4 className="text-xs font-medium text-primary mb-3">
                  {milestone.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {/* Highlights */}
                {milestone.highlights && milestone.highlights.length > 0 && (
                  <div className="mb-4 space-y-1.5">
                    {milestone.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                  {milestone.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
