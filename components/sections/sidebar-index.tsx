"use client";

import { useState } from "react";

export default function SidebarIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const sections = [
    { id: "home", label: "00 / Home" },
    { id: "services", label: "01 / Services" },
    { id: "operating-model", label: "02 / Operating Model" },
    { id: "faq", label: "03 / Q&A" },
    { id: "contact", label: "04 / Contact" },
  ];

  return (
    <>
      {/* Overlay to catch clicks outside or dim background (optional) - let's keep it simple and just use the sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] transition-opacity duration-500 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-screen z-[60] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col items-start overflow-hidden border-r border-white/5 ${
          isOpen 
            ? "w-72 bg-white text-black shadow-[20px_0_40px_rgba(0,0,0,0.3)]" 
            : "w-4 lg:w-16 bg-transparent text-white"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Hover Trigger Area (Mobile/Tablet friendly & Desktop transparent trigger) */}
        {!isOpen && (
          <div className="absolute inset-0 w-full h-full cursor-pointer z-[61]" onClick={() => setIsOpen(true)} />
        )}

        {/* Open State Content */}
        <div 
          className={`w-full h-full flex flex-col py-24 px-10 transition-opacity duration-500 ${
            isOpen ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 font-semibold mb-2">
              Navigation
            </p>
            <h2 className="text-2xl font-medium tracking-tight text-black">
              Index
            </h2>
          </div>

          <nav className="flex flex-col gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group flex flex-col items-start gap-1 py-2 text-left w-full border-b border-black/5 pb-4 last:border-0"
              >
                <span className="text-[10px] tracking-[0.2em] font-medium text-black/40 group-hover:text-[#B9975B] transition-colors duration-300">
                  {section.label.split(' / ')[0]}
                </span>
                <span className="text-lg font-medium text-black/80 group-hover:text-black group-hover:translate-x-2 transition-all duration-300">
                  {section.label.split(' / ')[1]}
                </span>
              </button>
            ))}
          </nav>
          
          <div className="mt-auto">
            <p className="text-[10px] text-black/30 uppercase tracking-[0.2em] mb-4">
              Nuvois.ai
            </p>
            <p className="text-sm text-black/50 leading-relaxed font-light">
              Crafting your vision into systems that improve speed, control risk, and protect cost.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
