"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ScrollObserverContextType {
  scrollY: number;
  scrollDirection: "up" | "down";
  sections: Map<string, DOMRect>;
  registerSection: (id: string, rect: DOMRect) => void;
  currentSection: string | null;
}

const ScrollObserverContext = createContext<ScrollObserverContextType>({
  scrollY: 0,
  scrollDirection: "down",
  sections: new Map(),
  registerSection: () => {},
  currentSection: null,
});

export function useScrollObserver() {
  return useContext(ScrollObserverContext);
}

interface ScrollObserverProviderProps {
  children: React.ReactNode;
}

export function ScrollObserverProvider({
  children,
}: ScrollObserverProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [sections, setSections] = useState<Map<string, DOMRect>>(new Map());
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const registerSection = (id: string, rect: DOMRect) => {
    setSections((prev) => {
      const newMap = new Map(prev);
      newMap.set(id, rect);
      return newMap;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      // Determine current section in view
      let currentSectionId: string | null = null;
      let closestDistance = Infinity;

      sections.forEach((rect, id) => {
        const sectionTop = rect.top + currentScrollY;
        const sectionMiddle = sectionTop + rect.height / 2;
        const distanceFromViewportMiddle = Math.abs(
          currentScrollY + window.innerHeight / 2 - sectionMiddle,
        );

        if (distanceFromViewportMiddle < closestDistance) {
          closestDistance = distanceFromViewportMiddle;
          currentSectionId = id;
        }
      });

      if (currentSectionId !== currentSection) {
        setCurrentSection(currentSectionId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lastScrollY, sections, currentSection]);

  return (
    <ScrollObserverContext.Provider
      value={{
        scrollY,
        scrollDirection,
        sections,
        registerSection,
        currentSection,
      }}
    >
      {children}
    </ScrollObserverContext.Provider>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
