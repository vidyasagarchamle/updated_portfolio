"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;

export function About() {
  return (
    <section id="about" className="py-10 md:py-16 relative overflow-hidden">
      {/* Ultra-subtle background effect */}
      <div className="absolute inset-0 bg-gradient-animation opacity-4"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label with minimal animation */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-2 text-sm text-primary/60 font-medium uppercase tracking-wider"
          >
            About Me
          </MotionDiv>

          {/* Clean heading with gradient text */}
          <MotionH2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 text-4xl font-bold md:text-5xl text-balance"
          >
            Product Manager &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Problem Solver
            </span>
          </MotionH2>

          {/* Simplified content with better spacing */}
          <div className="space-y-7">
            <MotionP
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              Hello, I'm Vidyasagar, a product manager with a curious mind, a
              builder's instinct, and a soft spot for philosophy and cinema.
            </MotionP>

            <MotionP
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              My journey into product began with an obsession for how things
              work, not just in tech, but in people, systems, and stories. Over
              the past few years, I've worked at the intersection of Web3,
              consumer apps, and emerging technologies, bringing clarity to
              chaos and shaping digital experiences that are as thoughtful as
              they are scalable.
            </MotionP>

            <MotionP
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              Whether I'm writing a PRD, jamming with designers, or decoding
              user behavior at 2AM, I bring an obsessive attention to detail and
              a deep desire to solve meaningful problems.
            </MotionP>

            <MotionP
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              Outside of work, you'll find me diving into existential reads,
              rewatching Nolan's films, or chasing the next big idea over
              coffee-fueled midnight notes.
            </MotionP>

            <MotionP
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80 font-medium"
            >
              Let's build something that actually matters.
            </MotionP>

            {/* Ultra-minimal social links */}
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
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
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
