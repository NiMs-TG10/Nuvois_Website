"use client"

import { useState, useEffect } from "react"
import { Camera, Upload, Sparkles } from "lucide-react"

export default function AppShowcase() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Camera,
      title: "Scan Your Body",
      description:
        "Our AI uses your phone's camera to analyze your body shape and proportions—no measuring tape needed.",
    },
    {
      icon: Upload,
      title: "Sync Your Closet",
      description: "Upload photos of your clothes, and we'll tag and organize them into your virtual wardrobe.",
    },
    {
      icon: Sparkles,
      title: "Get Perfect Outfits",
      description:
        "Receive daily looks that mix your clothes with new items, perfectly matched to your body, the weather, and your style.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("app")
      if (section) {
        const rect = section.getBoundingClientRect()
        const scrollProgress = Math.max(0, 1 - rect.top / window.innerHeight)
        setActiveStep(Math.min(2, Math.floor(scrollProgress * 3)))
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="app" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center text-[#222222] mb-4 text-balance">
          Meet Your Personal AI Stylist.
        </h2>

        <p className="text-center text-[#222222]/60 text-lg mb-16 text-balance">
          Three simple steps to perfect outfits, every day.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Feature List */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${activeStep >= index ? "opacity-100" : "opacity-50"}`}
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          activeStep >= index
                            ? "bg-[#B9975B] text-white"
                            : "bg-[#FDFDFD] text-[#222222] border-2 border-[#222222]/10"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#222222] mb-2">{step.title}</h3>
                      <p className="text-[#222222]/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Device Mock */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-96 bg-[#222222] rounded-3xl shadow-2xl flex items-center justify-center border-8 border-[#222222]/20">
              {/* iPhone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-[#222222] rounded-b-3xl" />

              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#B9975B] to-[#8b7449] flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-serif font-bold mb-2">Step {activeStep + 1}</div>
                  <p className="text-sm opacity-90">{steps[activeStep].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Store Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <button className="px-6 py-3 bg-[#222222] text-white rounded-lg font-semibold hover:bg-[#222222]/90 transition-colors">
            App Store
          </button>
          <button className="px-6 py-3 bg-[#222222] text-white rounded-lg font-semibold hover:bg-[#222222]/90 transition-colors">
            Google Play
          </button>
        </div> */}
      </div>
    </section>
  )
}
