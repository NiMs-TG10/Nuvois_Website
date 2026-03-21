"use client"

import React, { useState, useEffect } from 'react'
import { ArrowDown } from "lucide-react"
import WorldMap from './WorldMap'

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const words = ["into intelligence", "into systems", "into signals"]

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Main content area */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Left side: Text content */}
        <div className="flex flex-col justify-center w-full lg:w-[45%] pt-28 lg:pt-0 pb-8 lg:pb-0">
          
          {/* Section label */}
          <p
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'rgba(255, 255, 255, 0.35)' }}
          >
            00 / Home
          </p>

          <h1
            className="font-sans text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.2] mb-8"
            style={{ color: '#EDEDED' }}
          >
            Crafting your vision
            <br className="hidden sm:block" />
            <span className="relative inline-grid overflow-hidden align-bottom" style={{ paddingBottom: '0.1em' }}>
              {words.map((word, idx) => (
                <span
                  key={word}
                  className="col-start-1 row-start-1 pb-1 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{
                    transform: `translateY(${(idx - wordIndex) * 100}%)`,
                    opacity: idx === wordIndex ? 1 : 0,
                    pointerEvents: idx === wordIndex ? 'auto' : 'none'
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-base lg:text-lg leading-relaxed max-w-md mb-10"
            style={{ color: 'rgba(255, 255, 255, 0.55)', lineHeight: '1.8' }}
          >
            Cloud, Data, Web3 and AI built with discipline.
            <br />
            We turn vision into systems that improve speed, control risk, and protect cost.
          </p>

          {/* Services link */}
          <button
            onClick={() => scrollToSection('services')}
            className="group flex items-center gap-3 text-sm tracking-[0.15em] uppercase transition-colors duration-300"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            <span className="text-white/40 font-light">01</span>
            <span className="inline-block w-6 h-[1px] bg-white/20 group-hover:w-10 group-hover:bg-[#B9975B] transition-all duration-300" />
            <span className="group-hover:text-[#B9975B] transition-colors duration-300">
              Services
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Right side: World Map */}
        <div className="w-full lg:w-[55%] flex items-center justify-center relative min-h-[350px] lg:min-h-0">
          <WorldMap />
        </div>
      </div>

      {/* Vertical "INDEX" text on left edge */}
      <div
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-20"
      >
        <div className="w-[1px] h-16 bg-white/10" />
        <span
          className="text-[10px] tracking-[0.4em] uppercase"
          style={{
            color: 'rgba(255, 255, 255, 0.25)',
            writingMode: 'vertical-lr',
            transform: 'rotate(180deg)',
          }}
        >
          Index
        </span>
        <div className="w-[1px] h-16 bg-white/10" />
      </div>

      {/* Scroll to continue */}
      <div className="relative z-20 flex justify-start px-6 lg:px-12 pb-10 max-w-[1400px] mx-auto w-full">
        <button
          onClick={() => scrollToSection('services')}
          className="group flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full hover:border-white/25 transition-all duration-300"
        >
          <span
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
          >
            Scroll to continue
          </span>
          <ArrowDown
            className="w-3.5 h-3.5 text-white/30 group-hover:text-[#B9975B] group-hover:translate-y-0.5 transition-all duration-300"
          />
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
        }}
      />
    </section>
  )
}
