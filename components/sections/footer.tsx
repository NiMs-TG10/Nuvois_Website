"use client";

import { useState, useEffect } from "react";
// import { Linkedin, Instagram } from "lucide-react";

const ROTATING_TEXTS = [
  <>Architecting intelligence<br/>from signal to system.</>,
  <>Precision delivery<br/>across cloud, data, and AI.</>,
  <>From first signal to production systems,<br/>we keep it measurable.</>
];

export default function Footer() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        setFade(true);
      }, 500); // 500ms for fade out duration
    }, 4000); // 4 seconds total display time per text

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-6 md:py-24">
      <div className="max-w-[90rem] mx-auto">
        {/* Rotating Text Section */}
        <div className="mb-20 md:mb-32 min-h-[140px] md:min-h-[160px] flex items-center">
          <h2 
            className={`text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {ROTATING_TEXTS[index]}
          </h2>
        </div>

        <div className="border-t border-white/10 pt-16 md:pt-24 mb-16">
          {/* Logo */}
          <div className="font-sans text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-6 md:mb-12">
            NUVOIS<span className="text-[#FF5500]">.</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
            <div className="text-xs md:text-sm tracking-widest text-white/50 uppercase font-medium">
              NUVOIS CONSULTANCY SERVICES
            </div>
            {/* Social Links Optional */}
            <div className="flex gap-6 mt-6 md:mt-0">
            </div>
          </div>
        </div>

        {/* Footer Links */}
        {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between text-[10px] md:text-xs text-white/40 pt-8 border-t border-white/10 uppercase tracking-widest font-mono gap-6 lg:gap-0">
          <p>MANAGE CONTENT [COOKIES]</p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex gap-4 md:gap-6 text-left md:text-center">
              <a href="#" className="hover:text-white transition-colors leading-tight">
                PRIVACY<br/>PROTOCOL
              </a>
              <span className="text-white/20 mt-2 md:mt-0 hidden md:inline">/</span>
              <a href="#" className="hover:text-white transition-colors leading-tight">
                TERMS<br/>OF SERVICE
              </a>
            </div>
            <p className="mt-4 md:mt-0">© {new Date().getFullYear()} Nuvois. All rights reserved.</p>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
