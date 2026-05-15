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
      className="relative min-h-screen flex flex-col overflow-hidden bg-background text-foreground"
    >
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--glow-color)] blur-[120px] opacity-40 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--glow-color)] blur-[120px] opacity-20 pointer-events-none" />
      {/* Main content area */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Left side: Text content */}
        <div className="flex flex-col justify-center w-full lg:w-[45%] pt-28 lg:pt-0 pb-8 lg:pb-0">
          
          {/* Section label */}
          <p
            className="text-xs tracking-[0.3em] uppercase mb-8 text-muted-foreground"
          >
            00 / Home
          </p>

          <h1
            className="font-sans text-5xl sm:text-6xl lg:text-5xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground drop-shadow-sm"
          >
            Crafting your vision
            <br className="hidden sm:block" />
            <span className="relative inline-grid overflow-hidden align-bottom" style={{ paddingBottom: '0.1em' }}>
              {words.map((word, idx) => (
                <span
                  key={word}
                  className="col-start-1 row-start-1 pb-1 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] bg-gradient-to-br from-primary to-indigo-400 bg-clip-text text-transparent inline-block"
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
            className="text-base lg:text-lg leading-relaxed max-w-md mb-10 text-muted-foreground"
          >
            Cloud, Data, Web3 and AI built with discipline.
            <br />
            We turn vision into systems that improve speed, control risk, and protect cost.
          </p>

          {/* Services link */}
          <button
            onClick={() => scrollToSection('services')}
            className="group flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-medium transition-colors duration-300 text-muted-foreground hover:text-foreground"
          >
            <span className="text-muted-foreground font-light group-hover:text-primary transition-colors duration-300">01</span>
            <span className="inline-block w-6 h-[1px] bg-foreground/30 group-hover:w-12 group-hover:bg-primary transition-all duration-500 ease-out" />
            <span className="group-hover:text-primary transition-colors duration-300">
              Services
            </span>
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-primary">→</span>
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
        <div className="w-[1px] h-16 bg-border" />
        <span
          className="text-[10px] tracking-[0.4em] uppercase"
          style={{
            color: 'var(--muted-foreground)',
            writingMode: 'vertical-lr',
            transform: 'rotate(180deg)',
          }}
        >
          Index
        </span>
        <div className="w-[1px] h-16 bg-border" />
      </div>

      {/* Scroll to continue */}
      <div className="relative z-20 flex justify-start px-6 lg:px-12 pb-10 max-w-[1400px] mx-auto w-full">
        <button
          onClick={() => scrollToSection('services')}
          className="group flex items-center gap-4 px-6 py-3 bg-background/50 border border-border/50 hover:border-primary/50 backdrop-blur-sm rounded-full hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] transition-all duration-500"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300"
          >
            Scroll to continue
          </span>
          <div className="bg-muted p-1.5 rounded-full group-hover:bg-primary/10 transition-colors duration-300">
            <ArrowDown
              className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary animate-bounce group-hover:animate-none transition-all duration-300"
            />
          </div>
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--background))',
        }}
      />
    </section>
  )
}
