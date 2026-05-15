"use client";

import React from "react";
import { ArrowRight, Box, Code, Cpu, Database } from "lucide-react";

interface ServicesProps {
  onContactClick?: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      number: "01",
      title: "Salesforce",
      icon: <Database className="w-8 h-8 text-primary" />,
      description:
        "We build custom CRM solutions, streamline sales pipelines with automation, and run unified platforms on Salesforce — so teams close deals faster with fewer manual tasks and lower operational overhead.",
      targets: "LEAD TIME TARGET · ADOPTION TARGET · ROI VARIANCE TARGET",
      outcome:
        "Business outcome: self-service sales platform, consistent automation controls, faster onboarding, and governed data costs.",
      comingSoon: true,
      scope: "Salesforce Configuration · Integrations · Automation & Analytics",
    },
    {
      number: "02",
      title: "AI",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      description:
        "We build intelligent automation and generative models, implement AI observability across your data estate, and engineer tailored LLM solutions — so your business is reliable and scalable.",
      targets: "MODEL RELIABILITY TARGET · DATA FRESHNESS TARGET · INFERENCE SLA TARGET",
      outcome:
        "Business outcome: trusted AI workflows, model observability with automated alerting, and a governed AI platform that supports both analytics and generative workloads.",
      comingSoon: true,
      scope: "Machine Learning · LLM Development · Data Observability",
    },
    {
      number: "03",
      title: "Web3",
      icon: <Box className="w-8 h-8 text-primary" />,
      description:
        "We build decentralized applications, harden smart contracts with rigorous security controls, and deploy blockchain infrastructure — so your ecosystems are transparent, secure, and future-proof.",
      targets: "TRANSACTION SPEED TARGET · SECURITY AUDIT TARGET · GAS COST TARGET",
      outcome:
        "Business outcome: decentralized trust, consistent Web3 security controls, faster deployments, and governed blockchain infrastructure.",
      comingSoon: true,
      scope: "Smart Contracts · Node Infrastructure · DApp Architecture",
    },
    {
      number: "04",
      title: "Custom Website & App Development",
      icon: <Code className="w-8 h-8 text-primary" />,
      description:
        "We build stunning custom websites and native mobile applications, engineer scalable web platforms, and design modern user interfaces — so your digital presence is engaging, performant, and accessible.",
      targets: "PAGE LOAD SPEED TARGET · ACCESSIBILITY SCORE TARGET · USER RETENTION TARGET",
      outcome:
        "Business outcome: responsive web experiences, functional mobile apps, modern architecture, and improved digital footprint.",
      comingSoon: true,
      scope: "Full-Stack Web · Native Mobile Apps · UI/UX Design",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full flex flex-col lg:flex-row overflow-hidden bg-background text-foreground border-t border-border/50 transition-colors duration-500"
    >
      {/* Sidebar with vertical SERVICES text */}
      <div className="hidden lg:flex flex-col items-center justify-center w-16 xl:w-24 border-r border-border/50 shrink-0 py-12 relative z-10 bg-secondary/20 backdrop-blur-sm">
        <span
          className="text-xs tracking-[0.4em] uppercase font-medium text-muted-foreground"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Services
        </span>
      </div>

      <div className="flex-1 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 pb-32">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-5 flex flex-col justify-start">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6 text-primary font-bold">
              01 / SERVICES
            </p>
            <h2 className="font-sans text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] text-foreground bg-clip-text">
              Services
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-start">
            <p className="text-lg leading-relaxed mb-6 text-foreground/90 font-medium">
              Four focused practices — Custom Web & App Development, Salesforce, AI, and Web3 — delivered by one
              accountable pod.
            </p>
            <p className="text-base leading-relaxed mb-10 text-muted-foreground">
              Every engagement maps to measurable outcomes: release speed, operational risk,
              cloud cost, and AI ROI.
              <br />
              <br />
              Senior certified engineers across leading ecosystems, from enterprise CRM
              and blockchain networks to agentic AI in production.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {['Delivery', 'Risk', 'Value'].map((item, idx) => (
                <div key={item} className="group border border-border/50 p-6 flex flex-col gap-2 rounded-xl bg-card hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary relative z-10">{item}</p>
                  <p className="text-sm leading-snug text-foreground/80 relative z-10">
                    {idx === 0 && "CI/CD, GitOps, and release quality"}
                    {idx === 1 && "DevSecOps, compliance, and change focus"}
                    {idx === 2 && "FinOps, cloud cost, and AI ROI"}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm mb-8 italic text-muted-foreground">
              Proof is being prepared through case studies. Each service panel already lists
              certification coverage and delivery standards.
            </p>

            <div>
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-4 px-8 py-4 border border-border/60 hover:border-primary/80 transition-all duration-300 uppercase text-xs font-semibold tracking-[0.2em] rounded-full bg-background hover:bg-secondary/30 hover:shadow-[0_0_15px_rgba(79,70,229,0.1)] cursor-pointer"
              >
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Say Hello
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Services List Section (Card Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col p-8 sm:p-10 rounded-2xl border border-border/40 bg-card hover:bg-card/80 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Card Ambient Glow background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="text-5xl font-light text-muted-foreground/30 font-sans group-hover:text-primary/20 transition-colors duration-500">
                  {svc.number}
                </div>
                <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-500 group-hover:scale-110">
                  {svc.icon}
                </div>
              </div>

              <div className="flex flex-col relative z-10 flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-8">
                  {svc.description}
                </p>

                <div className="mt-auto flex flex-col gap-6">
                  {/* Scope */}
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-2">Core Scope</p>
                    <p className="text-sm font-medium text-foreground/80">
                      {svc.scope}
                    </p>
                  </div>

                  {/* Targets */}
                  <div className="pt-6 border-t border-border/50 group-hover:border-primary/20 transition-colors duration-500">
                    <p className="text-[10px] tracking-[0.1em] uppercase mb-4 leading-relaxed font-semibold text-muted-foreground">
                      {svc.targets}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/70 mb-4 bg-secondary/40 p-4 rounded-lg italic">
                      {svc.outcome}
                    </p>
                    {svc.comingSoon && (
                      <span className="inline-flex items-center justify-center px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-primary/10 text-primary border border-primary/20">
                        Case studies coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
