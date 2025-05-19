"use client"

import React, { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  
  return (
    <div ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient background with animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-animation"></div>
        
        {/* Grid pattern - light and dark mode optimized */}
        <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern" />
        
        {/* Animated gradient blobs */}
        <div className="blob-animation">
          <motion.div 
            className="blob"
            style={{ y: y1 }}
          />
          <motion.div 
            className="blob"
            style={{ y: y2 }}
          />
          <motion.div 
            className="blob"
          />
        </div>
        
        {/* Subtle floating gradient blobs instead of particle canvas */}
        <FloatingGradientBlobs />
      </div>

      <motion.div 
        style={{ opacity }}
        className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            {/* Enhanced decorative element with improved 3D effect */}
            <motion.div 
              className="mb-8 inline-flex items-center rounded-full border border-border/40 bg-background/80 px-3 py-1 backdrop-blur-md shadow-sm depth-element"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 10,
                boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.05)",
                z: 30
              }}
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium text-foreground">Product Manager</span>
            </motion.div>

            <motion.h1 
              className="mb-6 text-5xl font-black tracking-tight leading-none md:text-7xl text-3d"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="block mb-2 gradient-text">Vidyasagar Chamle</span>
              <span className="block text-xl md:text-2xl font-medium mt-3 text-foreground">
                Building Products That Matter
              </span>
            </motion.h1>

            <motion.p 
              className="mb-8 max-w-xl text-foreground text-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I turn complex ideas into exceptional products by focusing on user-centered design, data-driven decisions, and strategic vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Enhanced primary button with better 3D effect */}
              <motion.div 
                className="depth-element perspective-500"
                whileHover={{ 
                  z: 20, 
                  rotateX: 5,
                  scale: 1.02
                }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="group relative bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-md px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <a href="https://www.linkedin.com/in/vidyasagarchamle/" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center gap-2 font-medium">
                      Get in Touch
                      <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Enhanced scroll indicator with improved 3D hover effect */}
      <motion.div 
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 depth-element perspective-700 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.0
        }}
        whileHover={{ 
          scale: 1.1, 
          rotateX: 15,
          z: 40
        }}
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            opacity: [1, 0.6, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-primary/10 rounded-full blur-sm animate-pulse"></div>
          <ArrowDown className="h-6 w-6 text-foreground relative" />
        </motion.div>
        <span className="text-sm font-medium text-foreground/90">Scroll to explore</span>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

function FloatingGradientBlobs() {
  const blobRef = useRef<HTMLDivElement>(null)
  
  return (
    <div 
      ref={blobRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Large purple blob top left */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full radial-blur bg-gradient-to-br from-purple-500/5 to-transparent"></div>
      
      {/* Medium purple blob bottom right */}
      <div className="absolute bottom-[-20%] right-[-5%] w-[50%] h-[60%] rounded-full radial-blur bg-gradient-to-tl from-purple-600/5 to-transparent"></div>
      
      {/* Small purple blob center right */}
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full radial-blur bg-gradient-to-bl from-purple-400/5 to-transparent"></div>
    </div>
  )
} 