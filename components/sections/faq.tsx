"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full flex overflow-hidden border-t border-black/10"
      style={{ backgroundColor: "#b9975b", color: "#111111" }}
    >
      {/* Sidebar with vertical Q&A text */}
      <div className="hidden lg:flex flex-col items-center justify-center w-16 xl:w-24 border-r border-black/10 shrink-0 py-12 relative z-10">
        <span
          className="text-xs tracking-[0.4em] uppercase font-medium"
          style={{
            color: "#111111",
            opacity: 0.5,
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
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "#111111", opacity: 0.55 }}>
            03 / Q&A
          </p>
          <h2 className="font-sans text-5xl sm:text-6xl font-medium tracking-tight leading-[1.1]" style={{ color: "#111111" }}>
            Q&A
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col border-t border-black/20">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group relative border-b border-black/20 py-8 lg:py-10 cursor-pointer transition-colors ${openIndex === idx ? "is-open" : ""}`}
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex justify-between items-center px-0 lg:px-4">
                <h3
                  className="text-xl sm:text-2xl font-light transition-colors duration-300"
                  style={{ color: "#111111" }}
                >
                  {faq.question}
                </h3>
                <div className="ml-4 relative w-6 h-6 flex items-center justify-center" style={{ color: "#111111", opacity: 0.6 }}>
                  <Plus
                    size={24}
                    strokeWidth={1.5}
                    className={`absolute transition-all duration-300 ${openIndex === idx ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
                  />
                  <Minus
                    size={24}
                    strokeWidth={1.5}
                    className={`absolute transition-all duration-300 ${openIndex === idx ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
                  />
                </div>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out px-0 lg:px-4 ${openIndex === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="text-base leading-relaxed font-light pt-6" style={{ color: "#111111", opacity: 0.7 }}>
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
