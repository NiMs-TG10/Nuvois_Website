// components/Navigation.tsx

"use client";

import { useState, useEffect } from "react";

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
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo — nuvois. */}
        <button
          onClick={() => scrollToSection("home")}
          className="group focus:outline-none"
          aria-label="Go to home screen"
        >
          <span
            className="text-xl font-medium tracking-wide transition-colors duration-300"
            style={{
              color: isScrolled ? '#FFFFFF' : '#EDEDED',
              fontFamily: '"Geist", system-ui, sans-serif',
            }}
          >
            nuvois
          </span>
          <span
            className="text-xl font-medium transition-colors duration-300"
            style={{ color: '#B9975B' }}
          >
            .
          </span>
        </button>

        {/* Center dot indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <div
            className="w-2 h-2 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: isScrolled ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.5)',
            }}
          />
        </div>

        {/* Right side: Say hello! button */}
        <button
          onClick={onContactClick}
          className="group text-sm font-medium transition-all duration-300 hover:opacity-80"
          style={{
            color: '#B9975B',
            fontFamily: '"Geist", system-ui, sans-serif',
            fontStyle: 'italic',
          }}
        >
          Say hello!
        </button>
      </div>
    </nav>
  );
}
