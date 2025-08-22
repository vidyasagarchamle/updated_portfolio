"use client";

import React from "react";
import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />

      {/* Subtle animated gradient background for non-hero sections */}
      <div className="absolute inset-0 bg-gradient-animation opacity-3 dark:opacity-5"></div>

      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern opacity-10"></div>

      {/* Static gradient blobs that span entire viewport */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blue blob top left - more subtle */}
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full radial-blur bg-gradient-to-br from-blue-500/2 to-transparent"
          animate={{
            x: [0, 20, 0],
            y: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium teal blob bottom right - more subtle */}
        <motion.div 
          className="absolute bottom-[-20%] right-[-5%] w-[50%] h-[60%] rounded-full radial-blur bg-gradient-to-tl from-teal-600/2 to-transparent"
          animate={{
            x: [0, -15, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Small blue-teal blob center - more subtle */}
        <motion.div 
          className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full radial-blur bg-gradient-to-bl from-blue-400/2 to-transparent"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />

        {/* Additional blob for mid-page interest - more subtle */}
        <motion.div 
          className="absolute top-[60%] left-[20%] w-[40%] h-[40%] rounded-full radial-blur bg-gradient-to-tr from-teal-500/1 to-transparent"
          animate={{
            x: [0, 25, 0],
            y: [0, -10, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15,
          }}
        />
      </div>

      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
    </div>
  );
}
