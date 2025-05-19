"use client";

import Link from "next/link";
import { MainNav } from "@/components/main-nav";

export default function NotFound() {
  return (
    <>
      <div className="bg-background min-h-screen flex flex-col">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <div className="container max-w-4xl mx-auto px-4 py-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                404
              </span>
            </h1>
            
            <p className="mt-4 text-xl md:text-2xl text-foreground/80">
              Page not found
            </p>
            
            <p className="mt-2 text-foreground/60">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="mt-8">
              <Link
                href="/"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 