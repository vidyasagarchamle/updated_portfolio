"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we can safely show the theme toggle
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return <div className="h-9 w-9" />
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="relative h-9 w-9 overflow-hidden rounded-full border bg-background hover:bg-muted shadow-sm"
          >
            <span className="sr-only">Toggle theme</span>
            <Sun 
              className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
            />
            <Moon 
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'
              }}
              transition={{ duration: 0.5 }}
            />
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background bg-primary/5"></span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {theme === "dark" ? "light" : "dark"} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 