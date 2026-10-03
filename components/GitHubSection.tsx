"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { fetchGitHubData, GitHubProfile, GitHubRepo, fallbackProfile, fallbackRepos } from "@/lib/github";
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  FolderGit2,
  Sparkles,
  Users,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

export function GitHubSection() {
  const [profile, setProfile] = useState<GitHubProfile>(fallbackProfile);
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchGitHubData();
        setProfile(data.profile);
        setRepos(data.repos);
        setIsLive(data.isLive);
      } catch {
        // Keeps fallback data
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Source &amp; Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Building in Public
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mt-3 mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            My development activity, public code repositories, and continuous open-source learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col gap-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">danish234-droid</h3>
                <p className="text-xs text-primary font-medium">GitHub Developer Profile</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Actively pushing commits, building MERN projects, and collaborating on modern web architectures.
            </p>

            {/* Profile Statistics (FR-GH2, FR-GH3) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-muted/60 border border-border/50 text-center">
                <span className="text-xl font-bold text-foreground block">
                  {loading ? "..." : profile.public_repos}
                </span>
                <span className="text-[11px] text-muted-foreground">Public Repos</span>
              </div>
              <div className="p-3 rounded-xl bg-muted/60 border border-border/50 text-center">
                <span className="text-xl font-bold text-foreground block">
                  {loading ? "..." : profile.followers}
                </span>
                <span className="text-[11px] text-muted-foreground">Followers</span>
              </div>
            </div>

            {/* Profile Link Button */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Live API indicator notice */}
            <div className="text-[10px] text-muted-foreground text-center flex items-center justify-center gap-1.5 pt-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  isLive ? "bg-emerald-400 animate-pulse" : "bg-cyan-400"
                }`}
              />
              <span>{isLive ? "Live data from GitHub API" : "Synced developer profile"}</span>
            </div>
          </motion.div>

          {/* Activity Matrix & Featured Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {/* Contribution Visual (FR-GH5: aria-hidden decorative visual) */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <h4 className="text-sm font-bold text-foreground">Contribution &amp; Commit Visual</h4>
                </div>
                <span className="text-[11px] text-muted-foreground font-mono">2025 — 2026</span>
              </div>

              {/* Visual Contribution Heatmap Grid (aria-hidden per FR-GH5) */}
              <div aria-hidden="true" className="overflow-x-auto pb-2">
                <div className="grid grid-rows-7 grid-flow-col gap-1.5 w-max min-w-full">
                  {Array.from({ length: 140 }).map((_, i) => {
                    // Aesthetic pseudo-heatmap distribution
                    const level = (i * 7 + 3) % 5;
                    const bgClass =
                      level === 4
                        ? "bg-cyan-400 dark:bg-cyan-400"
                        : level === 3
                        ? "bg-cyan-500/75 dark:bg-cyan-500/60"
                        : level === 2
                        ? "bg-cyan-600/45 dark:bg-cyan-600/35"
                        : level === 1
                        ? "bg-cyan-800/25 dark:bg-cyan-900/30"
                        : "bg-muted/60 dark:bg-muted/30";

                    return (
                      <div
                        key={i}
                        className={`w-3.5 h-3.5 rounded-sm ${bgClass} transition-colors hover:scale-125 duration-150`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-3 pt-3 border-t border-border/40">
                <span>Visual developer activity overview</span>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-muted/40" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-900/30" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600/40" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Featured Public Repositories (FR-GH2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.slice(0, 4).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-foreground font-bold text-sm group-hover:text-primary transition-colors truncate">
                        <FolderGit2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="truncate">{repo.name}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                      {repo.description || "Public software engineering repository and code implementation."}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/40">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-[11px] font-medium">{repo.language || "TypeScript"}</span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3 h-3 text-primary" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
