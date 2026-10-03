"use client";

import { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";
import { Github, ExternalLink, Info, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail / Mockup Container */}
        <div className="relative h-48 w-full bg-muted overflow-hidden border-b border-border/50">
          <ProjectPreview projectId={project.id} />

          {/* Status Badge */}
          {project.statusBadge && (
            <div className="absolute top-3 left-3 z-20">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-900/90 text-cyan-400 border border-slate-700/80 shadow-md backdrop-blur-md">
                {project.statusBadge}
              </span>
            </div>
          )}

          {/* Quick Action Info Overlay Button */}
          <button
            onClick={() => onSelect(project)}
            className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 z-20 shadow-md"
            aria-label={`View details for ${project.title}`}
            title="View Details"
          >
            <Info className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Content Details */}
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-muted/80 text-[11px] font-medium text-foreground/80 border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md bg-muted/40 text-[10px] text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-border/40 text-xs">
        <button
          onClick={() => onSelect(project)}
          className="text-primary font-semibold hover:underline inline-flex items-center gap-1 group/btn"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repo for ${project.title}`}
              className="p-2 rounded-lg border border-border bg-muted/50 hover:bg-muted text-foreground transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          ) : null}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="p-2 rounded-lg border border-border bg-muted/50 hover:bg-muted text-foreground transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
