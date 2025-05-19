"use client";

import { MainNav } from "@/components/main-nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { CaseStudies } from "@/components/sections/case-studies";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Blog } from "@/components/sections/blog";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  // More subtle animations for a minimalist aesthetic
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smoother motion
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MainNav />
      <main className="flex-1">
        <Hero />

        {/* Section container with reduced spacing */}
        <div className="space-y-4 md:space-y-8 py-6 md:py-10">
          {/* About section */}
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <About />
            </motion.div>
          </div>

          {/* Experience section */}
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <Experience />
            </motion.div>
          </div>

          {/* Case Studies section */}
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <CaseStudies />
            </motion.div>
          </div>

          {/* Projects section */}
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <Projects />
            </motion.div>
          </div>

          {/* Skills section */}
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <Skills />
            </motion.div>
          </div>

          {/* Blog section */}
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <Blog />
            </motion.div>
          </div>
        </div>
      </main>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
