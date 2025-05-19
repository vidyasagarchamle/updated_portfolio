"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "AI Agents on Blockchain: Pioneering a New Economic Frontier",
    description:
      "How sovereign AI agents functioning on blockchain networks could revolutionize digital economies and create new value paradigms.",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    tags: ["Web3", "AI", "Blockchain", "Future Tech"],
    url: "https://medium.com/@vidyasagar.chamle/ai-agents-on-blockchain-pioneering-a-new-economic-frontier-ac12b737c439",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*q1BCyzsLpmF8aY58-WUG-A.jpeg",
  },
  {
    id: 2,
    title:
      "Uncovering First Principles: My Insights Into Understanding Core Consumer Behavior",
    description:
      "A framework for breaking down consumer behaviors to their fundamental drivers, focusing on first-principles thinking.",
    date: "Jun 16, 2023",
    readTime: "4 min read",
    tags: ["Product Management", "First Principles", "Consumer Behavior"],
    url: "https://medium.com/@vidyasagar.chamle/uncovering-first-principles-my-insights-into-understanding-core-consumer-behavior-876f5a5ba593",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*GVBF0zLikpU7qPpf0Qw01A.jpeg",
  },
  {
    id: 3,
    title: 'Charlie Munger: "The World is Driven by Envy, Not Greed"',
    description:
      "Reflecting on Munger's insights about envy as a stronger motivator than greed, and its implications for product design.",
    date: "Jun 16, 2023",
    readTime: "3 min read",
    tags: ["Psychology", "Product Strategy", "Human Behavior"],
    url: "https://medium.com/@vidyasagar.chamle/charlie-munger-the-world-is-driven-by-envy-not-greed-81cfda2e7822",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Tq_NVRU3FxaWPIe09j6mRw.jpeg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Blog() {
  return (
    <section
      id="blog"
      className="py-16 md:py-24 bg-background dark:bg-black/10 overflow-hidden relative"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-animation opacity-5 dark:opacity-10"></div>
      <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern opacity-20"></div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <div className="mb-2 text-sm text-primary/60 dark:text-primary/70 font-medium uppercase tracking-wider">
            Blog
          </div>
          <h2 className="text-4xl font-bold md:text-5xl text-balance mb-4">
            Recent{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent dark:from-purple-300 dark:to-purple-500">
              Articles
            </span>
          </h2>
          <p className="text-foreground/70 dark:text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Thoughts on product management, blockchain, AI, and the future of
            technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            maxWidth: "72rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{
                height: "100%",
              }}
            >
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] bg-card dark:bg-card/80 backdrop-blur-sm overflow-hidden border border-border/30 dark:border-border/20 rounded-xl">
                <CardHeader className="pb-2 pt-5">
                  <div className="flex items-center justify-between text-sm text-muted-foreground dark:text-muted-foreground/80 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary/70" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary/70" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors mb-1">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline decoration-primary/30 underline-offset-4"
                    >
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full px-3 py-1 bg-muted/60 dark:bg-muted/40 text-foreground/80 dark:text-foreground/70 text-xs font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 pb-5 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full justify-between font-medium text-primary dark:text-primary/90 hover:bg-primary/5 dark:hover:bg-primary/10 border-primary/10 dark:border-primary/20 hover:border-primary/30 rounded-lg"
                    asChild
                  >
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read on Medium
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6 py-6 gap-2 font-medium border-primary/20 hover:border-primary/40 hover:bg-primary/5 dark:border-primary/30 dark:hover:border-primary/60 dark:hover:bg-primary/10 shadow-sm hover:shadow transition-all"
            asChild
          >
            <a
              href="https://medium.com/@vidyasagar.chamle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span>View All Articles on Medium</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
