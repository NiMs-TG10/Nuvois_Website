"use client";

import React from "react";
import { ArrowRight, Plus } from "lucide-react";

interface ServicesProps {
  onContactClick?: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      number: "01",
      title: "Salesforce",
      description:
        "We build custom CRM solutions, streamline sales pipelines with automation, and run unified platforms on Salesforce — so teams close deals faster with fewer manual tasks and lower operational overhead.",
      targets: "LEAD TIME TARGET · ADOPTION TARGET · ROI VARIANCE TARGET",
      outcome:
        "Business outcome: self-service sales platform, consistent automation controls, faster onboarding, and governed data costs.",
      comingSoon: true,
    },
    {
      number: "02",
      title: "AI",
      description:
        "We build intelligent automation and generative models, implement AI observability across your data estate, and engineer tailored LLM solutions — so your business is reliable and scalable.",
      targets: "MODEL RELIABILITY TARGET · DATA FRESHNESS TARGET · INFERENCE SLA TARGET",
      outcome:
        "Business outcome: trusted AI workflows, model observability with automated alerting, and a governed AI platform that supports both analytics and generative workloads.",
      comingSoon: true,
    },
    {
      number: "03",
      title: "Web3",
      description:
        "We build decentralized applications, harden smart contracts with rigorous security controls, and deploy blockchain infrastructure — so your ecosystems are transparent, secure, and future-proof.",
      targets: "TRANSACTION SPEED TARGET · SECURITY AUDIT TARGET · GAS COST TARGET",
      outcome:
        "Business outcome: decentralized trust, consistent Web3 security controls, faster deployments, and governed blockchain infrastructure.",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full text-[#EDEDED] flex overflow-hidden border-t border-white/5"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Sidebar with vertical SERVICES text */}
      <div className="hidden lg:flex flex-col items-center justify-center w-16 xl:w-24 border-r border-white/5 shrink-0 py-12 relative z-10">
        <span
          className="text-xs tracking-[0.4em] uppercase font-medium"
          style={{
            color: "rgba(255, 255, 255, 0.6)",
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
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "rgba(255, 255, 255, 0.4)" }}
            >
              01 / SERVICES
            </p>
            <h2 className="font-sans text-5xl sm:text-6xl font-medium tracking-tight leading-[1.1]">
              Services
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-start">
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Three focused practices — Salesforce, AI, and Web3 — delivered by one
              accountable pod.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Every engagement maps to measurable outcomes: release speed, operational risk,
              cloud cost, and AI ROI.
              <br />
              <br />
              Senior certified engineers across leading ecosystems, from enterprise CRM
              and blockchain networks to agentic AI in production.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="border border-white/10 p-5 flex flex-col gap-2 rounded-sm bg-white/[0.02]">
                <p className="text-[9px] tracking-[0.2em] uppercase text-white/40">Delivery</p>
                <p className="text-sm text-white/70 leading-snug">
                  CI/CD, GitOps, and release quality
                </p>
              </div>
              <div className="border border-white/10 p-5 flex flex-col gap-2 rounded-sm bg-white/[0.02]">
                <p className="text-[9px] tracking-[0.2em] uppercase text-white/40">Risk</p>
                <p className="text-sm text-white/70 leading-snug">
                  DevSecOps, compliance, and change control
                </p>
              </div>
              <div className="border border-white/10 p-5 flex flex-col gap-2 rounded-sm bg-white/[0.02]">
                <p className="text-[9px] tracking-[0.2em] uppercase text-white/40">Value</p>
                <p className="text-sm text-white/70 leading-snug">
                  FinOps, cloud cost, and AI ROI
                </p>
              </div>
            </div>

            <p className="text-sm text-white/50 mb-8 italic">
              Proof is being prepared through case studies. Each service panel already lists
              certification coverage and delivery standards.
            </p>

            <div>
              <button 
                onClick={onContactClick}
                className="group flex items-center gap-4 px-6 py-3 border border-white/20 hover:border-white/40 transition-colors uppercase text-xs tracking-[0.2em] rounded-sm bg-transparent"
              >
                <span className="text-white/80 group-hover:text-white transition-colors">
                  Say Hello
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Services List Section */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 py-16 border-b border-white/10"
            >
              {/* Left Title & Description */}
              <div className="lg:col-span-6 flex gap-6 lg:gap-10">
                <div className="text-2xl font-light text-white/40 pt-1 shrink-0">
                  {svc.number}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-3xl sm:text-4xl font-normal leading-tight mb-6">
                    {svc.title}
                  </h3>
                  <p className="text-base text-white/60 leading-relaxed max-w-lg">
                    {svc.description}
                  </p>
                  
                  <div className="mt-8 flex flex-col gap-2">
                     <p className="text-[10px] tracking-[0.1em] uppercase text-white/40">Core Scope</p>
                     <p className="text-sm text-white/60">
                       {svc.title === "Salesforce" && "Salesforce Configuration · Integrations · Automation & Analytics"}
                       {svc.title === "AI" && "Machine Learning · LLM Development · Data Observability"}
                       {svc.title === "Web3" && "Smart Contracts · Node Infrastructure · DApp Architecture"}
                     </p>
                  </div>
                </div>
              </div>

              {/* Right Targets & Details */}
              <div className="lg:col-span-6 flex flex-col justify-between pt-1">
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/40 mb-4 leading-relaxed">
                    {svc.targets}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed max-w-md mb-6">
                    {svc.outcome}
                  </p>
                  {svc.comingSoon && (
                    <p className="text-xs uppercase tracking-wider text-[#d9553f] mb-6 font-medium">
                      Case studies coming soon
                    </p>
                  )}
                </div>

                {/* <div className="flex items-center justify-start lg:justify-end mt-4 lg:mt-0">
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
