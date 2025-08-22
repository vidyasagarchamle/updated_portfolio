"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  ArrowUpRight,
  Bookmark,
  Lightbulb,
  Target,
  BarChart3,
  Users,
  Zap,
  Eye,
  Layers,
  MessageCircle,
  LineChart,
  FileDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ColorVariant = "primary" | "blue" | "green" | "orange" | "pink";

const caseStudies = [
  {
    id: 1,
    title: "Just Dance Now",
    subtitle: "4-Part Case Study",
    description:
      "Comprehensive analysis of DAU optimization, payer conversion, KPI-driven product optimization, and cross-functional collaboration.",
    parts: [
      "DAU Optimization",
      "Payer Conversion",
      "KPI Driven Product Optimization",
      "Cross-Functional & External Collaboration",
    ],
    pdfPath: "/case-studies/just-dance-now.pdf",
    icon: <Zap className="h-5 w-5" />,
    size: "medium",
    color: "primary" as ColorVariant,
  },
  {
    id: 2,
    title: "BitClass",
    subtitle: "User Activation",
    description:
      "Designing user journey to activate new users through improved onboarding and engagement.",
    pdfPath: "/case-studies/bitclass.pdf",
    icon: <Users className="h-5 w-5" />,
    size: "medium",
    color: "blue" as ColorVariant,
  },
  {
    id: 3,
    title: "inshorts",
    subtitle: "Feed Optimization",
    description:
      "Improving news feed through content personalization, UI enhancements, and engagement metrics.",
    pdfPath: "/case-studies/inshorts.pdf",
    icon: <Bookmark className="h-5 w-5" />,
    size: "medium",
    color: "pink" as ColorVariant,
  },
  {
    id: 4,
    title: "Jupiter",
    subtitle: "Gamification",
    description:
      "Implementing game mechanics to enhance user engagement and retention.",
    pdfPath: "/case-studies/jupiter.pdf",
    icon: <Target className="h-5 w-5" />,
    size: "medium",
    color: "orange" as ColorVariant,
  },
  {
    id: 5,
    title: "Dunzo",
    subtitle: "Increasing AOV",
    description:
      "Strategies to increase Average Order Value through product and UX improvements.",
    pdfPath: "/case-studies/dunzo.pdf",
    icon: <BarChart3 className="h-5 w-5" />,
    size: "medium",
    color: "green" as ColorVariant,
  },
  {
    id: 6,
    title: "Fampay",
    subtitle: "Product Strategy",
    description:
      "Shifting household transaction patterns from parent-driven to kid-driven activities.",
    pdfPath: "/case-studies/fampay.pdf",
    icon: <Lightbulb className="h-5 w-5" />,
    size: "medium",
    color: "primary" as ColorVariant,
  },
  {
    id: 7,
    title: "Slack",
    subtitle: "Save for Later Feature",
    description:
      "Improving user education and adoption of the Save for Later feature through better UX and onboarding.",
    pdfPath: "/case-studies/slack.pdf",
    icon: <MessageCircle className="h-5 w-5" />,
    size: "medium",
    color: "blue" as ColorVariant,
  },
  {
    id: 8,
    title: "SaaSfras",
    subtitle: "Revenue Strategy",
    description:
      "Growth strategy to optimize revenue streams and enhance customer lifetime value.",
    pdfPath: "/case-studies/saasfras.pdf",
    icon: <LineChart className="h-5 w-5" />,
    size: "medium",
    color: "pink" as ColorVariant,
  },
];

const colorVariants: Record<ColorVariant, string> = {
  primary:
    "from-blue-500/20 to-blue-500/0 hover:from-blue-500/30 hover:to-blue-500/10 border-blue-500/20 hover:border-blue-500/30",
  blue: "from-blue-500/20 to-blue-500/0 hover:from-blue-500/30 hover:to-blue-500/10 border-blue-500/20 hover:border-blue-500/30",
  green:
    "from-green-500/20 to-green-500/0 hover:from-green-500/30 hover:to-green-500/10 border-green-500/20 hover:border-green-500/30",
  orange:
    "from-orange-500/20 to-orange-500/0 hover:from-orange-500/30 hover:to-orange-500/10 border-orange-500/20 hover:border-orange-500/30",
  pink: "from-pink-500/20 to-pink-500/0 hover:from-pink-500/30 hover:to-pink-500/10 border-pink-500/20 hover:border-pink-500/30",
};

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-16 md:py-20 relative"
    >

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <div className="mb-2 text-sm text-primary/60 font-medium uppercase tracking-wider">
            Case Studies
          </div>
          <h2 className="text-4xl font-bold md:text-5xl text-balance mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent">
              Solving
            </span>{" "}
            Product Challenges
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            In-depth analyses of product problems and my approach to solving
            them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => {
            // Add subtle variety with slightly different heights
            const randomHeight =
              index % 3 === 0 ? "min-h-[16rem]" : "min-h-[15rem]";
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                style={{ display: "block" }}
              >
                <Link
                  href={study.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "h-full w-full relative flex flex-col justify-between bg-gradient-to-b rounded-3xl p-6 border overflow-hidden transition-all duration-300 group",
                    colorVariants[study.color],
                    randomHeight,
                    "hover:shadow-lg hover:-translate-y-0.5",
                  )}
                >
                  {/* Card content */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={cn(
                          "rounded-full w-10 h-10 flex items-center justify-center",
                          study.color === "primary"
                            ? "bg-blue-500/20"
                            : study.color === "blue"
                              ? "bg-blue-500/20"
                              : study.color === "green"
                                ? "bg-green-500/20"
                                : study.color === "orange"
                                  ? "bg-orange-500/20"
                                  : "bg-pink-500/20",
                        )}
                      >
                        {study.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <FileDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
                        <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-1">{study.title}</h3>
                    <p className="text-sm text-foreground/70 font-medium mb-3">
                      {study.subtitle}
                    </p>
                    <p className="text-sm text-foreground/60 line-clamp-3">
                      {study.description}
                    </p>
                  </div>

                  {/* Subtle badge for Just Dance Now */}
                  {study.id === 1 && (
                    <div className="mt-2 flex">
                      <span className="text-xs bg-background/20 backdrop-blur-sm rounded-full px-2.5 py-0.5 border border-white/5 text-foreground/70">
                        4-part series
                      </span>
                    </div>
                  )}

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
