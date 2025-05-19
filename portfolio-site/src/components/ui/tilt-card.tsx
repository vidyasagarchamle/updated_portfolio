"use client"

import React, { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltFactor?: number
  glareEnabled?: boolean
  glareColor?: string
  perspective?: number
  scale?: number
  resetDuration?: number
}

export function TiltCard({ 
  children, 
  className,
  tiltFactor = 5,
  glareEnabled = true,
  glareColor = "rgba(255, 255, 255, 0.4)",
  perspective = 1000,
  scale = 1.03,
  resetDuration = 0.5
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  
  // Motion values for X and Y rotation
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  
  // Add spring physics for smoother animation
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })
  
  // Create transform for glare effect
  const glareX = useTransform(rotateX, [-tiltFactor, tiltFactor], ["-50%", "150%"])
  const glareY = useTransform(rotateY, [-tiltFactor, tiltFactor], ["-50%", "150%"])
  
  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    
    // Calculate mouse position relative to card center (in percentage)
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    // Convert to rotation values (limited by tiltFactor)
    const newRotateX = (mouseY / (rect.height / 2)) * -tiltFactor
    const newRotateY = (mouseX / (rect.width / 2)) * tiltFactor
    
    rotateX.set(newRotateX)
    rotateY.set(newRotateY)
  }
  
  // Reset on mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false)
    rotateX.set(0)
    rotateY.set(0)
  }
  
  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden transition-transform", className)}
      style={{
        transformStyle: "preserve-3d",
        perspective,
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: isHovering ? scale : 1,
        transition: `transform ${resetDuration}s ease`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Glare effect */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 70%)`,
            opacity: isHovering ? 1 : 0,
            transition: `opacity ${resetDuration}s ease`
          }}
        />
      )}
    </motion.div>
  )
}

// Wrap a component with the tilt effect
export function withTilt<P extends object>(
  Component: React.ComponentType<P>,
  tiltOptions?: Omit<TiltCardProps, "children" | "className">
) {
  return function WithTiltComponent({ className, ...props }: P & { className?: string }) {
    return (
      <TiltCard className={className} {...tiltOptions}>
        <Component {...props as P} />
      </TiltCard>
    )
  }
} 