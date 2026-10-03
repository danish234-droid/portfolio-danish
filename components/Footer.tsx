"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Github, Linkedin, Mail, ArrowUp, Phone, MessageSquare } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12 text-muted-foreground relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-border/60">
          {/* Brand Info (FR-F1) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <Link
              href="#home"
              className="text-lg font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-mono text-xs font-semibold">
                DA
              </span>
              <span>Danish Ali</span>
            </Link>
            <p className="text-xs text-muted-foreground">{siteConfig.role}</p>
          </div>

          {/* Quick Nav Links (FR-F2) */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#journey" className="hover:text-primary transition-colors">
              Journey
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links & Back to Top (FR-F2) */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email Danish Ali"
              className="p-2 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl border border-primary/20 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright (FR-F3) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/80">
          <p>© 2026 Danish Ali. Built with Next.js &amp; TypeScript.</p>
          <p className="text-[11px]">Designed &amp; engineered for performance, accessibility &amp; precision.</p>
        </div>
      </div>
    </footer>
  );
}
