// components/Navigation.tsx

"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Define props for the Navigation component
interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-xl border-b border-white/10 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Left items: Mobile Hamburger + Logo */}
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            className="flex flex-col justify-center items-center w-6 h-5 gap-[5px] lg:hidden"
            onClick={() => window.dispatchEvent(new Event('openSidebarIndex'))}
            aria-label="Open Index Menu"
          >
            <span className="w-full h-[2px] bg-foreground rounded-full transition-colors" />
            <span className="w-full h-[2px] bg-foreground rounded-full transition-colors" />
            <span className="w-full h-[2px] bg-foreground rounded-full transition-colors" />
          </button>

        {/* Logo — nuvois. */}
        <button
          onClick={() => scrollToSection("home")}
          className="group focus:outline-none flex items-baseline hover:opacity-80 transition-opacity"
          aria-label="Go to home screen"
        >
          <span
            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-foreground/80'}`}
          >
            NUVOIS
          </span>
          <span className="text-3xl font-bold text-primary transition-colors duration-300 ml-0.5">
            .
          </span>
        </button>
        </div>

        {/* Center dot indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <div
            className="w-2 h-2 rounded-full transition-colors duration-300 bg-foreground/30"
          />
        </div>

        {/* Right side: Say hello! button and Theme Toggle */}
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <button
            onClick={onContactClick}
            className="group relative text-sm font-semibold tracking-wide transition-all duration-300 text-primary hover:text-primary-foreground hover:bg-primary px-5 py-2 rounded-full overflow-hidden border border-primary/20 hover:border-primary shadow-sm hover:shadow-md"
          >
            <span className="relative z-10 transition-colors duration-300">Say hello!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
