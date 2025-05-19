"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Brain,
  Code,
  Database,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  PenTool,
  SearchCheck,
  Users2,
  Cpu,
  Bot,
  Compass,
  Globe,
  Wrench,
  Zap,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type SkillCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "product",
    name: "Product Management",
    icon: <Compass className="h-5 w-5" />,
    color: "from-blue-500/20 to-blue-500/5",
    description:
      "Strategy, discovery, and execution across end-to-end product lifecycle.",
    skills: [
      "Product Strategy",
      "Roadmapping & Prioritization (RICE, MoSCoW)",
      "User Research & Journey Mapping",
      "Wireframing & Prototyping",
      "Go-to-Market Planning",
      "A/B Testing & Experiments",
      "Sprint Planning & Agile Execution",
      "Product Analytics & Insight Loops",
      "PRDs & User Stories",
      "Stakeholder Communication",
    ],
  },
  {
    id: "web3",
    name: "Web3 & Blockchain",
    icon: <Globe className="h-5 w-5" />,
    color: "from-purple-500/20 to-purple-500/5",
    description:
      "Designing, scaling, and managing Web3-native products and economies.",
    skills: [
      "Wallet UX (embedded, non-custodial, social)",
      "Token Economy Design (sinks, rewards, earn-loops)",
      "Chain Experience: Algorand, Ethereum, Base, Optimism",
      "Web3 UX & Onboarding Flows",
      "DApp Usability Patterns",
      "Smart Contract Familiarity (ERC standards, safe interactions)",
      "Tools: ThirdWeb, Alchemy, QuickNode",
      "Growth Mechanics: Airdrops, Quests, Points Systems",
      "Community Engagement (Discord, Telegram, Farcaster)",
    ],
  },
  {
    id: "ai",
    name: "AI & Automation",
    icon: <Bot className="h-5 w-5" />,
    color: "from-green-500/20 to-green-500/5",
    description:
      "Leveraging AI tools, workflows, and agents to ship smarter products faster.",
    skills: [
      "Cursor (AI pair programming & product doc generation)",
      "Windsurf (AI-powered structured writing & brainstorming)",
      "OpenAI API / ChatGPT Pro",
      "LangChain (basic prompt chain logic)",
      "ElevenLabs (voice generation)",
      "AI Use Cases: moderation, onboarding agents, smart forms",
      "Prompt Design & Testing",
      "Automation Tools: n8n, Make.com, Zapier",
      "LLM UX Patterns (fail-safes, tone tuning, fallback flows)",
    ],
  },
  {
    id: "data",
    name: "Data & Analytics",
    icon: <BarChart className="h-5 w-5" />,
    color: "from-orange-500/20 to-orange-500/5",
    description: "Behavioral analysis and insight-led decision making.",
    skills: [
      "Product Analytics: Mixpanel, Amplitude, GA4",
      "Event Tracking Design",
      "Funnel & Retention Analysis",
      "SQL (Joins, Filters, Aggregations – beginner level)",
      "Cohort Analysis & Segmentation",
      "A/B Test Setup & Learning",
      "User Feedback Analysis (structured + community data)",
    ],
  },
  {
    id: "tools",
    name: "Tools & Software",
    icon: <PenTool className="h-5 w-5" />,
    color: "from-yellow-500/20 to-yellow-500/5",
    description:
      "Daily stack for PM workflows, design, analytics, and async ops.",
    skills: [
      "Figma / FigJam",
      "Notion & Confluence",
      "JIRA / Trello / Linear",
      "Mixpanel / Amplitude / CleverTap",
      "Discord / Telegram / Slack",
      "Framer / Webflow",
      "Loom, Miro, Google Workspace",
      "Cursor (AI for building docs/code)",
      "Windsurf (AI for structure-first ideation)",
    ],
  },
  {
    id: "leadership",
    name: "Leadership & Collaboration",
    icon: <Brain className="h-5 w-5" />,
    color: "from-cyan-500/20 to-cyan-500/5",
    description: "Soft skills that power cross-functional impact and clarity.",
    skills: [
      "Fast, MVP-First Execution",
      "Cross-Team Communication",
      "Remote Collaboration Culture",
      "Decision-Making with Limited Data",
      "Team Alignment & Rituals",
      "User-Centric Thinking",
      "Rapid Prototyping & Feedback Loops",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-animation opacity-5"></div>
      <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern opacity-20"></div>

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
            marginBottom: "2rem",
          }}
        >
          <div className="mb-1 text-sm text-primary/60 font-medium uppercase tracking-wider">
            Skills
          </div>
          <h2 className="text-3xl font-bold md:text-4xl text-balance mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Skillset
            </span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto text-sm md:text-base">
            My expertise spans product management, web3, AI, and technical
            skills that help me build exceptional products.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="product" className="w-full">
            <div className="overflow-x-auto pb-2 no-scrollbar">
              <TabsList className="mb-4 h-auto flex justify-start bg-transparent whitespace-nowrap w-max mx-auto">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-1.5 text-sm rounded-full border border-border/50 px-3 py-1.5 data-[state=active]:bg-primary/10 data-[state=active]:border-primary/30 data-[state=active]:text-primary transition-all duration-200 hover:bg-background/80"
                  >
                    <div className="p-1 rounded-full bg-background/70 border border-border/20 shadow-sm">
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="animate-in fade-in-50 duration-300"
              >
                <Card className="border border-border/40 bg-background/50 dark:bg-background/20 backdrop-blur-sm overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30 dark:opacity-20`}
                  ></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                  <CardContent className="p-4 md:p-6 relative z-10">
                    <div className="mb-4 md:mb-5 flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <div className="inline-flex items-center justify-center p-2 rounded-full bg-background/80 dark:bg-background/30 border border-border/30 shadow-sm">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-medium">
                            {category.name}
                          </h3>
                          <p className="text-sm text-muted-foreground dark:text-foreground/70">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2.5 bg-background/80 dark:bg-background/10 rounded-lg border border-border/30 dark:border-border/20 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full bg-primary/70`}
                          ></div>
                          <span className="text-foreground/90 dark:text-foreground/80 text-sm">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
