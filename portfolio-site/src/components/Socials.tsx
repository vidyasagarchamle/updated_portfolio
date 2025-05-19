import React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Socials() {
  return (
    <div className="flex items-center gap-4">
      <Link 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80"
      >
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      
      <Link 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      
      <Link 
        href="mailto:your.email@example.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80"
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
} 