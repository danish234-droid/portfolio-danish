"use client";

import { useState, useMemo } from "react";
import { projects, projectFilterCategories, ProjectCategory, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Sparkles, FolderGit2, SearchX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) =>
      p.categories.includes(selectedCategory as any)
    );
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 bg-card/30 border-y border-border/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3 mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Real projects showcasing full-stack workflows, complex state management, Kanban boards, and modern frontend design.
          </p>
        </div>

        {/* Category Filters (FR-P4, FR-P5) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilterCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isSelected}
                className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 font-semibold"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid (FR-P1, FR-P5) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Handler */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center flex flex-col items-center justify-center border border-dashed border-border rounded-2xl p-8 bg-card/40">
            <SearchX className="w-10 h-10 text-muted-foreground mb-3" />
            <h4 className="text-base font-bold text-foreground">No projects found in this category</h4>
            <p className="text-xs text-muted-foreground mt-1 mb-4">
              Try switching to &quot;All&quot; or another technology filter.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Project Detail Modal (FR-P3) */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
