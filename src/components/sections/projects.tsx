"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Youtube,
  Twitter,
  Play,
  Headphones,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectLink = {
  type: "website" | "github" | "youtube" | "twitter";
  url: string;
  label: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  tags: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Token Trails",
    description:
      "AI-generated podcast series exploring Web3 technologies and blockchain innovations with engaging storytelling.",
    icon: <Headphones className="h-5 w-5" />,
    image: "/images/project-1-placeholder.png",
    tags: ["Web3", "Podcast", "AI", "Blockchain", "Media"],
    links: [
      { type: "website", url: "https://tokentrails.xyz", label: "Visit" },
      {
        type: "youtube",
        url: "https://www.youtube.com/@Token_Trails",
        label: "YouTube",
      },
      {
        type: "twitter",
        url: "https://x.com/tokentrails_xyz",
        label: "Twitter",
      },
    ],
  },
  {
    id: 2,
    title: "DePolls",
    description:
      "A decentralized polling application built on Ethereum for secure, transparent community decision-making.",
    icon: <ExternalLink className="h-5 w-5" />,
    image: "/images/project-1-placeholder.png",
    tags: ["Web3", "DApp", "Ethereum", "Smart Contracts"],
    links: [
      {
        type: "website",
        url: "https://de-polls-base.vercel.app",
        label: "Visit",
      },
      {
        type: "github",
        url: "https://github.com/vidyasagarchamle/DePolls---Base",
        label: "Code",
      },
    ],
  },
  {
    id: 3,
    title: "Modera AI",
    description:
      "AI-powered content moderation API for websites to automatically detect and filter policy violations and inappropriate content.",
    icon: <Play className="h-5 w-5" />,
    image: "/images/project-2-placeholder.png",
    tags: ["AI/ML", "Content Moderation", "API"],
    links: [
      {
        type: "github",
        url: "https://github.com/vidyasagarchamle/Modera_AI",
        label: "Code",
      },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 relative">

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <div className="mb-2 text-sm text-primary/60 dark:text-primary/70 font-medium uppercase tracking-wider">
            Projects
          </div>
          <h2 className="text-4xl font-bold md:text-5xl text-balance mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-teal-500">
              Projects
            </span>
          </h2>
          <p className="text-foreground/70 dark:text-foreground/60 max-w-xl mx-auto">
            Showcasing some of my notable projects and contributions.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                borderRadius: "0.75rem",
                overflow: "hidden",
                border: "1px solid rgba(var(--border), 0.2)",
                backgroundColor: "hsl(var(--background) / 0.5)",
                transition: "all 300ms",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Project header with icon */}
              <div className="p-5 flex items-center justify-between border-b border-border/20 dark:border-border/10">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    {project.icon}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/80 dark:bg-background/20 text-primary group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-5 flex-grow">
                <p className="text-foreground/70 dark:text-foreground/60 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full bg-muted/70 dark:bg-muted/30 text-foreground/70 dark:text-foreground/60 text-xs py-0 px-2"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project links */}
              <div className="p-5 pt-0 mt-auto">
                <div className="flex flex-wrap items-center gap-2">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 transition-colors",
                        link.type === "website"
                          ? "bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30"
                          : link.type === "github"
                            ? "bg-muted text-foreground/70 hover:text-foreground hover:bg-muted/80 dark:bg-muted/20 dark:text-foreground/60 dark:hover:text-foreground/90"
                            : link.type === "youtube"
                              ? "bg-red-500/10 text-red-500 hover:bg-red-500/20 dark:bg-red-500/20 dark:hover:bg-red-500/30"
                              : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 dark:bg-blue-500/20 dark:hover:bg-blue-500/30",
                      )}
                    >
                      {link.type === "website" && (
                        <ArrowUpRight className="h-3 w-3" />
                      )}
                      {link.type === "github" && <Github className="h-3 w-3" />}
                      {link.type === "youtube" && (
                        <Youtube className="h-3 w-3" />
                      )}
                      {link.type === "twitter" && (
                        <Twitter className="h-3 w-3" />
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
