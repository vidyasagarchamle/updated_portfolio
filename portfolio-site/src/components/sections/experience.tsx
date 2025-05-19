"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Award,
} from "lucide-react";

// Company experiences data with proper company names and roles
const experiences = [
  {
    id: 1,
    company: "Bit Billionaire by League Sports Co.",
    position: "Associate Product Manager",
    period: "Oct 2024 – Mar 2025",
    location: "Remote (Dubai)",
    color: "from-violet-500 to-purple-700",
    bgGradient: "bg-gradient-to-br from-violet-500/5 to-transparent",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-500",
    summary:
      "A Telegram-based Web3 mini-game that introduced casual players to crypto gaming through simple, viral mechanics.",
    achievements: [
      "Shaped core gameplay loops and in-game economy focused on retention and engagement",
      "Collaborated across design and engineering to launch fast, iterative feature releases",
      "Designed onboarding flows that abstracted Web3 complexity for non-crypto-native users",
    ],
  },
  {
    id: 2,
    company: "WBL TMS & Play by League Sports Co.",
    position: "Associate Product Manager",
    period: "Sept 2023 – Sept 2024",
    location: "Remote (Dubai)",
    color: "from-amber-500 to-orange-700",
    bgGradient: "bg-gradient-to-br from-amber-500/5 to-transparent",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-500",
    summary:
      "A SaaS platform for sports tournament organizers, with a companion app to streamline player participation.",
    achievements: [
      "Led a full UX revamp of backend workflows for organizers and support staff",
      "Launched a player-facing app to simplify registration and match tracking",
      "Drove cross-functional execution across product, ops, and engineering teams",
    ],
  },
  {
    id: 3,
    company: "Zone by League Sports Co.",
    position: "Associate Product Manager",
    period: "Oct 2022 – Nov 2023",
    location: "Remote (Dubai)",
    color: "from-blue-500 to-cyan-700",
    bgGradient: "bg-gradient-to-br from-blue-500/5 to-transparent",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-500",
    summary:
      "A GameFi platform built on Algorand offering PvP, fantasy, and hypercasual games with real rewards.",
    achievements: [
      "Developed user flows that balanced fun, accessibility, and blockchain integration",
      "Helped scale game operations and supported launches of new competitive formats",
      "Focused on reducing entry barriers and refining the experience for mobile-first users",
    ],
  },
  {
    id: 4,
    company: "TRRAIN Circle Technologies",
    position: "Product Management Intern",
    period: "June 2022 – Aug 2022",
    location: "Mumbai, India",
    color: "from-emerald-500 to-green-700",
    bgGradient: "bg-gradient-to-br from-emerald-500/5 to-transparent",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-500",
    summary:
      "A mobile learning and engagement app for India's frontline retail workforce.",
    achievements: [
      "Analyzed behavioral patterns using CleverTap to improve user journeys",
      "Proposed UX improvements that simplified onboarding and daily task completion",
      "Contributed to engagement strategies targeting low-activity user segments",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-30"></div>

      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Professional Background
            </div>
            <h2 className="text-4xl font-bold md:text-5xl text-balance mb-5">
              Where I've{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Made Impact
              </span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A showcase of my product management journey across Web3 gaming,
              sports platforms, and retail technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group h-full">
              <div className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: "100%" }}
                >
                  {/* Experience card with subtle gradient background */}
                  <div
                    className={`relative h-full flex flex-col rounded-xl border ${exp.borderColor} ${exp.bgGradient} backdrop-blur-sm p-6 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px] group-hover:border-opacity-50`}
                  >
                    {/* Top section with company and role */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${exp.color} shadow-sm`}
                        >
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <p className="text-foreground/60 font-medium">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-foreground/60 border-foreground/20"
                      >
                        {exp.period}
                      </Badge>
                    </div>

                    <div className="flex items-center text-sm text-foreground/60 mb-4 gap-3">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Summary line */}
                    <div className="mb-4">
                      <p className="text-foreground/90 font-medium">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2 flex-grow">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div
                            className={`h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full ${exp.iconColor} bg-primary/5 mt-0.5`}
                          >
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <p className="text-foreground/80 text-sm">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#skills"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-primary bg-primary/5 hover:bg-primary/10 transition-colors group"
            >
              <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">Explore my full skill set</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
