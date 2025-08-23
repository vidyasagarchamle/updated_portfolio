"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Copy, Mail, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Case Studies", path: "#case-studies" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },

];

export function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("/");
  const [lastActiveSection, setLastActiveSection] = React.useState("/");
  const inTransitionRef = React.useRef(false);
  const transitionTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [copied, setCopied] = React.useState(false);

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    const email = "vidyasagar.chamle@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Could not copy email: ", err);
      });
  };

  // Handle scroll events for navbar styling and active section tracking
  React.useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled to add background blur
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems
        .filter((item) => item.path.startsWith("#"))
        .map((item) => ({
          id: item.path.substring(1),
          path: item.path,
        }));

      // Find all sections in view with their positions
      const visibleSections = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          // Consider a section "in view" if its top is near the top of the viewport
          // or if it fills most of the viewport
          const visibilityScore =
            // Higher score the closer the top of section is to the top of viewport
            Math.max(0, 1 - Math.abs(rect.top) / 300) +
            // Higher score the more the section fills the viewport
            (rect.bottom > 0 && rect.top < window.innerHeight
              ? Math.min(1, rect.height / window.innerHeight)
              : 0);

          return {
            path: section.path,
            score: visibilityScore,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height,
          };
        })
        .filter(Boolean)
        .sort((a, b) => b!.score - a!.score);

      // Get the most visible section
      const mostVisibleSection = visibleSections[0];

      if (mostVisibleSection) {
        // If a section is clearly visible, set it as active
        if (mostVisibleSection.score > 0.3) {
          // Threshold for considering a section visible enough
          setLastActiveSection(mostVisibleSection.path);
          setActiveSection(mostVisibleSection.path);
          inTransitionRef.current = false;

          if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = null;
          }
        }
        // If we're not in a transition but no section is clearly visible
        else if (
          !inTransitionRef.current &&
          mostVisibleSection.score < 0.3 &&
          activeSection !== "/"
        ) {
          inTransitionRef.current = true;

          // Keep the previous active section during transition
          // but set a timeout to revert to home if we stay in this state
          if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current);
          }

          transitionTimeoutRef.current = setTimeout(() => {
            // If we're still in transition after timeout, then we might be at the top
            if (window.scrollY < 100) {
              setActiveSection("/");
            }
            inTransitionRef.current = false;
          }, 1000);
        }
        // If we've scrolled to the very top
        else if (window.scrollY < 50) {
          setActiveSection("/");
        }
      } else if (window.scrollY < 50) {
        // If no section is visible and we're at the top
        setActiveSection("/");
      } else if (!inTransitionRef.current) {
        // In between sections but not at the top, maintain the last active section
        setActiveSection(lastActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [activeSection, lastActiveSection]);

  // Control body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 z-50 w-full border-b theme-transition",
        isScrolled
          ? "border-border/40 bg-background/90 backdrop-blur-xl shadow-md"
          : "border-transparent bg-transparent",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8 md:gap-12">
          <Link
            href="/"
            className="group flex items-center gap-3 transition-all"
          >
            <div className="relative flex h-10 w-10 items-center justify-center logo-icon">
              <div className="logo-icon-glow animate-pulse"></div>
              <div className="logo-icon-bg"></div>
              <div className="logo-icon-text spinning-border">VC</div>
              <motion.div
                className="absolute inset-0 rounded-lg border border-primary/20"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(156, 39, 176, 0)",
                    "0 0 10px rgba(156, 39, 176, 0.3)",
                    "0 0 0 rgba(156, 39, 176, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">
                Vidyasagar Chamle
              </span>
              <span className="text-xs text-muted-foreground">
                Product Manager
              </span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                href={item.path}
                active={
                  item.path === "/"
                    ? pathname === "/" && activeSection === "/"
                    : activeSection === item.path
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyEmailToClipboard}
                  className="relative h-9 w-9 overflow-hidden rounded-full border bg-background hover:bg-muted shadow-sm"
                >
                  <span className="sr-only">Copy email</span>
                  {copied ? (
                    <Check className="h-[1.2rem] w-[1.2rem] text-green-500" />
                  ) : (
                    <Mail className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background bg-primary/5"></span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? "Email copied!" : "Copy email address"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <ThemeToggle />

          <button
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border p-2 text-foreground transition-colors md:hidden",
              isScrolled
                ? "border-border bg-background/50 hover:bg-muted"
                : "border-transparent hover:bg-background/50",
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col bg-background/98 backdrop-blur-md md:hidden">
          <div className="container flex-1 overflow-y-auto py-8">
            <motion.nav
              className="flex flex-col gap-2"
              initial="closed"
              animate="open"
              variants={{
                closed: {},
                open: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    closed: { opacity: 0, x: -20 },
                    open: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "flex items-center rounded-lg px-4 py-4 text-lg font-medium transition-colors",
                      activeSection === item.path
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="mt-auto"></div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors rounded-md animated-underline",
        active
          ? "text-primary bg-primary/5"
          : "text-foreground/80 hover:text-foreground hover:bg-muted/50",
      )}
    >
      {children}
      {active && (
        <motion.span
          className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-1/2 rounded-full bg-primary"
          layoutId="navbar-indicator"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
    </Link>
  );
}
