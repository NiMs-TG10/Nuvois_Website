"use client"

import { ArrowRight } from "lucide-react"

export default function Technology() {
  const steps = [
    { icon: "📸", label: "Image Input", description: "User photo" },
    { icon: "🧠", label: "3D Pose Analysis", description: "Extracts 3D landmarks" },
    { icon: "🔍", label: "Vector Search", description: "Matches shape to items" },
    { icon: "👗", label: "Outfit Generated", description: "Presents the look" },
  ]

  return (
    <section id="technology" className="py-24 px-6 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center text-[#222222] mb-16 text-balance">How It Works</h2>

        {/* Horizontal Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center w-full md:w-auto">
              {/* Step */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-24 h-24 bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg border-2 border-[#B9975B]/20">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <div className="text-xs text-center text-[#222222]/60 font-semibold">{step.label}</div>
                </div>
                <p className="text-xs text-[#222222]/50 mt-2 text-center w-24">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-[#B9975B] mx-4 hidden md:block flex-shrink-0" />
              )}

              {/* Mobile arrow */}
              {index < steps.length - 1 && <div className="md:hidden h-8 w-0.5 bg-[#B9975B] my-2" />}
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 p-8 bg-white rounded-xl border border-[#222222]/10">
          <h3 className="font-serif text-2xl font-bold text-[#222222] mb-6">Built with Industry-Leading Technology</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-[#222222]/60 font-semibold mb-2">VISION</p>
              <p className="font-semibold text-[#222222]">MediaPipe</p>
              <p className="text-sm text-[#222222]/50">3D pose detection</p>
            </div>
            <div>
              <p className="text-sm text-[#222222]/60 font-semibold mb-2">DETECTION</p>
              <p className="font-semibold text-[#222222]">YOLOv8</p>
              <p className="text-sm text-[#222222]/50">Object & garment tagging</p>
            </div>
            <div>
              <p className="text-sm text-[#222222]/60 font-semibold mb-2">MATCHING</p>
              <p className="font-semibold text-[#222222]">pg_vector</p>
              <p className="text-sm text-[#222222]/50">Vector similarity search</p>
            </div>
            <div>
              <p className="text-sm text-[#222222]/60 font-semibold mb-2">PERSONALIZATION</p>
              <p className="font-semibold text-[#222222]">LLM Ranking</p>
              <p className="text-sm text-[#222222]/50">Style preference learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
