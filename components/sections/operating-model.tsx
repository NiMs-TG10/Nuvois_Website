"use client";

import React from "react";

export default function OperatingModel() {
  const modelSteps = [
    {
      step: "01",
      title: "DEFINE",
      tag: "MEASURE",
      heading: "Success metrics\nand constraints.",
      description:
        "Before we build, we define what done means through success metrics, acceptance criteria, risk boundaries, and cost constraints so delivery stays focused and decisions stay fast.",
    },
    {
      step: "02",
      title: "DELIVER",
      tag: "OWN",
      heading: "Short cycles,\nverified progress.",
      description:
        "We deliver in tight iterations with documented decisions, measurable checkpoints, and reviewable changes so progress is always visible and ownership is never ambiguous.",
    },
    {
      step: "03",
      title: "OPERATE",
      tag: "SECURE",
      heading: "Observability\nand handover.",
      description:
        "We harden what ships through monitoring, tracing, security baselines, access controls, and runbooks so systems remain stable after launch and teams can operate confidently.",
    },
  ];

  return (
    <section
      id="operating-model"
      className="relative w-full text-foreground flex overflow-hidden border-t border-border"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Sidebar with vertical INDEX text */}
      <div className="hidden lg:flex flex-col items-center justify-center w-16 xl:w-24 border-r border-white/5 shrink-0 py-12 relative z-10">
        <span
          className="text-xs tracking-[0.4em] uppercase font-medium"
          style={{
            color: "var(--muted-foreground)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Index
        </span>
      </div>

      <div className="flex-1 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 pb-32">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground">
            02/
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-normal tracking-tight text-foreground">
            Operating model
          </h2>
        </div>

        {/* Main Card */}
        <div className="border border-border rounded-2xl bg-foreground/[0.01] flex flex-col md:flex-row shadow-[0_4px_40px_rgba(0,0,0,0.1)]">
          {/* Card Left Sidebar */}
          <div className="hidden md:flex flex-col items-center justify-center w-24 lg:w-32 border-r border-border relative py-20 shrink-0">
            {/* Orange glowing line */}
            <div className="absolute left-6 lg:left-8 top-16 bottom-16 flex justify-center">
              <div className="w-[1px] h-full bg-gradient-to-b from-[#f95d2b]/0 via-[#f95d2b]/80 to-[#f95d2b]/0" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f95d2b] shadow-[0_0_12px_rgba(249,93,43,0.9)] absolute top-1/2 -translate-y-1/2" />
            </div>

            <span
              className="text-3xl lg:text-4xl font-bold tracking-[0.3em] text-foreground"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              OPERATING MODEL
            </span>
          </div>

          {/* Card Right Content */}
          <div className="flex-1 flex flex-col">
            {/* Top Description */}
            <div className="p-8 lg:p-12 pb-10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6 font-medium">
                OPERATING MODEL
              </p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Measure. Own. Secure.
              </h3>
              <p className="text-[15px] sm:text-base text-foreground/80 leading-relaxed max-w-2xl mb-4">
                An operating model for Infra, Data, and AI built for speed with accountability.
              </p>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Target baselines guide planning, and certified specialists provide proof as delivery matures into case studies.
              </p>
            </div>

            {/* List Rows */}
            <div className="flex flex-col">
              {modelSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-8 lg:px-12 py-10 border-t border-border"
                >
                  {/* Left Column */}
                  <div className="lg:col-span-3 flex flex-col justify-between gap-8 h-full">
                    <div className="text-xl sm:text-2xl font-medium tracking-wide">
                      {item.step} /
                      <br />
                      {item.title}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium pt-2">
                      {item.tag}
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="lg:col-span-4 flex flex-col justify-between gap-8 h-full">
                    <div className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug whitespace-pre-wrap">
                      {item.heading}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
                    <div className="text-[13px] sm:text-[15px] text-foreground/70 leading-relaxed font-light">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 px-2 flex justify-start">
          <p className="text-[11px] sm:text-xs text-muted-foreground font-mono italic">
            If it cannot be measured, it cannot be trusted.
          </p>
        </div>
      </div>
    </section>
  );
}
