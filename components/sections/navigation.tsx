// components/Navigation.tsx

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Define props for the Navigation component
interface NavigationProps {
  // NEW PROP: Function to be called when the "Contact Us" button is pressed
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#222222] backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - MADE INTO A BUTTON TO SCROLL TO HOME */}
        <button
          onClick={() => scrollToSection("home")}
          className={`text-2xl font-serif font-bold text-[#B9975B] transition-colors duration-300 ${isScrolled ? "text-white" : "text-[#222222]"} cursor-pointer hover:text-[#B9975B]/80 focus:outline-none`}
          aria-label="Go to home screen"
        >
          VastraLens
        </button>

        {/* Nav Links */}
        <div
          className={`hidden md:flex gap-8 items-center ${isScrolled ? "text-white" : "text-[#222222]"}`}
        >
          <NavLink
            id="app"
            label="App"
            scrollToSection={scrollToSection}
          />
          <NavLink
            id="platform"
            label="Platform"
            scrollToSection={scrollToSection}
          />

          <NavLink
            id="final-cta"
            label="Subscribe"
            scrollToSection={scrollToSection}
          />
        </div>

        {/* CTA Button: NOW TRIGGERS THE POPUP */}
        <Button
          onClick={onContactClick} // <-- NEW: Calls the handler passed from the parent
          className="bg-[#B9975B] hover:bg-[#a08750] text-white font-medium px-6 py-2"
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
}

// --- Reusable Component for Nav Links ---
interface NavLinkProps {
  id: string;
  label: string;
  scrollToSection: (id: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ id, label, scrollToSection }) => (
  <button
    onClick={() => scrollToSection(id)}
    // Added 'group' for hover effects
    className="text-sm transition-all duration-200
               relative group
               hover:text-[#B9975B]
               focus:outline-none"
  >
    {/* The actual text content */}
    <span
      className="inline-block transition-transform duration-200 ease-in-out
                 group-hover:scale-110
                 group-hover:animate-wobble-text
                 "
    >
      {label}
    </span>

    {/* Custom Underline Element */}
    <span
      className="absolute bottom-[-4px] left-0 w-full h-[2px]
                 bg-[#B9975B] transform origin-left scale-x-0
                 transition-transform duration-300 ease-in-out
                 group-hover:scale-x-100"
    />
  </button>
);
