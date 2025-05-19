"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"

// Default animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Hook for scroll-triggered animations
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return { ref, controls, isInView }
}

// Component for scroll reveal animations
interface RevealProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  duration?: number
  as?: React.ElementType
}

export function Reveal({ 
  children, 
  variants = fadeIn, 
  className = "",
  delay = 0,
  duration = 0.5,
  as = motion.div 
}: RevealProps) {
  const { ref, controls, isInView } = useScrollReveal()
  const Component = as

  // Customize the animation if delay or duration are provided
  const customVariants = delay || duration !== 0.5 
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delay,
            duration
          }
        }
      }
    : variants

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      className={className}
    >
      {children}
    </Component>
  )
}

// Component for staggered children animations
interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  childVariants?: Variants
  staggerDelay?: number
}

export function StaggerReveal({ 
  children, 
  className = "",
  childVariants = fadeIn,
  staggerDelay = 0.1
}: StaggerRevealProps) {
  const { ref, controls, isInView } = useScrollReveal()

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={parentVariants}
      className={className}
    >
      {React.Children.map(children, child => (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Observer hook to track scroll position for parallax effects
export function useParallax() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return scrollY
}

// Hook to create a scrolling parallax effect
export function useScrollParallax(factor: number = 0.2) {
  const scrollY = useParallax()
  return -scrollY * factor
} 