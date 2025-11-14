"use client";

import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <div className="text-2xl font-serif font-bold text-[#B9975B] mb-6 md:mb-0">
            NUVOIS.ai
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-[#B9975B] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#B9975B] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>© 2025 NUVOIS.ai. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#B9975B] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#B9975B] transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
