"use client";

import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Our timelines vary based on scope, but a standard application or platform MVP typically takes 8-12 weeks from kickoff to launch. We prioritize iterative delivery so you see value early and often."
    },
    {
      question: "Do you offer post-launch support & maintenance?",
      answer: "Yes, we provide continuous maintenance, performance monitoring, and SLA-backed support packages to ensure your platform remains secure, updated, and highly available as you scale."
    },
    {
      question: "How do you approach data security and privacy?",
      answer: "Security is foundational to our engineering process. We implement DevSecOps practices, end-to-end encryption, zero-trust architectures, and ensure compliance with major regulatory standards from day one."
    },
    {
      question: "What is your pricing model?",
      answer: "Every engagement maps to measurable outcomes. We offer fixed-bid pricing for clearly defined scopes and dedicated pod retainers for ongoing product development and AI/Web3 R&D."
    }
  ];

  return (
    <section
      id="faq"
      className="relative w-full text-[#EDEDED] flex overflow-hidden border-t border-white/5"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Sidebar with vertical Q&A text */}
      <div className="hidden lg:flex flex-col items-center justify-center w-16 xl:w-24 border-r border-white/5 shrink-0 py-12 relative z-10">
        <span
          className="text-xs tracking-[0.4em] uppercase font-medium"
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Q&A
        </span>
      </div>

      <div className="flex-1 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 pb-32">
        {/* Header Section */}
        <div className="flex flex-col justify-start mb-20">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(255, 255, 255, 0.4)" }}
          >
            03 / Q&A
          </p>
          <h2 className="font-sans text-5xl sm:text-6xl font-medium tracking-tight leading-[1.1]">
            Q&A
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="group relative border-b border-white/10 py-8 lg:py-10 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-center px-0 lg:px-4">
                <h3 className="text-xl sm:text-2xl font-light text-white/90 group-hover:text-white transition-colors duration-300">
                  {faq.question}
                </h3>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out px-0 lg:px-4">
                <div className="overflow-hidden">
                  <p className="text-base text-white/60 leading-relaxed font-light pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
