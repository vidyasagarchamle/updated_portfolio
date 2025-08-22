import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ExternalLink, PenTool } from "lucide-react";
import { motion } from "framer-motion";

// SocialLink Component
export function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-foreground transition-all hover:bg-primary/10 hover:text-primary hover:shadow-md"
      aria-label={label}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

// Extremely simplified Footer component for debugging
export function Footer() {
  return (
    <footer className="relative z-20 border-t border-border/40 py-12 bg-background/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <h3 className="font-semibold text-xl text-foreground">
              Let's Build Something Impactful
            </h3>
            <p className="text-muted-foreground">
              Open to new opportunities and collaborations.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <Link
              href="https://github.com/vidyasagarchamle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-foreground/80 dark:text-foreground/90 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vidyasagarchamle/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-foreground/80 dark:text-foreground/90 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://medium.com/@vidyasagarchamle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-foreground/80 dark:text-foreground/90 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              aria-label="Medium Articles"
            >
              <PenTool className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:vidyasagar.chamle@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-foreground/80 dark:text-foreground/90 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <div>© {new Date().getFullYear()} Vidyasagar Chamle</div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            Built with <Heart className="h-3 w-3 text-red-500" /> using Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
