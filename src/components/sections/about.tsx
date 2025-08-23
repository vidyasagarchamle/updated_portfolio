"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-10 md:py-16 relative">

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label with minimal animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-2 text-sm text-primary/60 font-medium uppercase tracking-wider"
          >
            About Me
          </motion.div>

          {/* Clean heading with gradient text */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 text-4xl font-bold md:text-5xl text-balance"
          >
            Builder &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent">
              Not Manager
            </span>
          </motion.h2>

          {/* Simplified content with better spacing */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              Hello, I'm Vidyasagar - a curious Product Manager who loves building rather than just managing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              Right now, I'm working on two exciting product lines. At ZAVIS, We are working on AI voice agents that are transforming customer experiences across the UAE & GCC, helping businesses deliver seamless, human-like interactions at scale. Alongside that, at Webhash, I'm contributing to a decentralized future of the web by working on tools that ensure websites remain permanent, censorship-free, and always accessible.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              My sweet spot? Navigating messy, technical challenges and turning them into intuitive, useful products. Whether prototyping new flows at midnight, writing specs, or bouncing ideas off engineers, I bring a hacker's drive and a designer's empathy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              Outside work? I lose track of time reading philosophy books, bingeing Nolan films, or jotting down product ideas fueled by strong coffee and deeper questions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80 font-medium"
            >
              Let's talk AI, Web3, or building things that leave a mark.
            </motion.p>

            {/* Ultra-minimal social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-6 pt-8"
            >
              <Link
                href="https://github.com/vidyasagarchamle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted/50 text-foreground/70 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/vidyasagarchamle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted/50 text-foreground/70 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:vidyasagar.chamle@gmail.com"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted/50 text-foreground/70 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
