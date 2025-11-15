// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowDown } from "lucide-react"

// export default function Hero() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     element?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#FDFDFD] via-[#f8f8f8] to-[#f0f0f0]">
//       {/* Subtle decorative elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#B9975B]/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B9975B]/5 rounded-full blur-3xl" />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//         <h1 className="font-serif text-6xl md:text-7xl font-bold text-[#222222] mb-6 text-balance">
//           Your Style.
//           <br />
//           Perfected by AI.
//         </h1>

//         <p className="text-xl md:text-2xl text-[#222222]/80 mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
//           Stop guessing. Get personalized, AI-driven style recommendations that match your unique body, budget, and
//           existing wardrobe.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Button
//             onClick={() => scrollToSection("app")}
//             className="bg-[#B9975B] hover:bg-[#a08750] text-white px-8 py-3 text-lg font-medium"
//           >
//             <ArrowDown className="w-4 h-4 mr-2" />
//             See how it works 
//           </Button>
//           {/* <Button
//             onClick={() => scrollToSection("platform")}
//             variant="outline"
//             className="border-2 border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white px-8 py-3 text-lg font-medium"
//           >
//             Learn About the API
//           </Button> */}
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ArrowDown className="w-6 h-6 text-[#B9975B]" />
//       </div>
//     </section>
//   )
// }

//--------------------------------------------------------
//--------------------------------------------------------//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowDown } from "lucide-react"

// export default function Hero() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     element?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section 
//       className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
//     >
//       {/* FULL BACKGROUND IMAGE - This will cover the entire section */}
//       <div 
//         className="absolute inset-0 w-full h-full"
//         style={{
//           backgroundImage: "url('/bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>
      
//       {/* Full Background Overlay for general image softening 
//           (Keeping this for readability as text is now directly on the image) */}
//       <div className="absolute inset-0 bg-white/30"></div> 
      
//       {/* Subtle decorative elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#B9975B]/5 rounded-full blur-3xl z-0" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B9975B]/5 rounded-full blur-3xl z-0" />

//       {/* Main Content Container - text will float over the image on the left 2/3 */}
//       <div className="relative z-10 flex w-full max-w-7xl mx-auto px-6 h-full items-center">
        
//         {/* Left 2/3 for pure text content (NO BOX/BACKGROUND) */}
//         <div className="w-2/3 flex flex-col justify-center items-start text-left pr-10 md:py-20"> 
//           <h1 className="font-serif text-6xl md:text-7xl font-bold text-[#222222] mb-6 text-balance">
//             Your Style.
//             <br />
//             Perfected by AI.
//           </h1>

//           <p className="text-xl md:text-2xl text-[#222222]/80 mb-12 max-w-lg leading-relaxed text-balance">
//             Stop guessing. Get personalized, AI-driven style recommendations that match your unique body, budget, and
//             existing wardrobe.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
//             <Button
//               onClick={() => scrollToSection("app")}
//               className="bg-[#B9975B] hover:bg-[#a08750] text-white px-8 py-3 text-lg font-medium"
//             >
//               <ArrowDown className="w-4 h-4 mr-2" />
//               See how it works 
//             </Button>
//           </div>
//         </div>

//         {/* The remaining 1/3 space on the right is intentionally left blank to reveal the full background image */}
//         <div className="w-1/3">
//           {/* This div acts as a spacer. The background image will show through here. */}
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
//         <ArrowDown className="w-6 h-6 text-[#B9975B]" />
//       </div>
//     </section>
//   )
// }


"use client"

import React from 'react'
import { ArrowDown, Zap } from "lucide-react" 

// Mock Button component (assuming its structure)
const Button = ({ onClick, children, className }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ${className}`}
    >
        {children}
    </button>
)


export default function Hero() {
  const scrollToSection = (id: string) => {
    // Check if running in a browser environment
    if (typeof document !== 'undefined') {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      // Added bg-white for a clean background on mobile when the image is hidden
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* FULL BACKGROUND IMAGE 
        Added 'hidden lg:block' to hide the image on screens smaller than large (desktop).
      */}
      <div 
        className="absolute inset-0 w-full h-full hidden lg:block"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      ></div>
      
      {/* Full Background Overlay 
        Also added 'hidden lg:block' to ensure the overlay disappears with the image on mobile.
      */}
      <div className="absolute inset-0 bg-white/30 hidden lg:block" aria-hidden="true"></div> 
      
      {/* Subtle decorative elements (kept visible for mobile styling) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B9975B]/5 rounded-full blur-3xl z-0" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B9975B]/5 rounded-full blur-3xl z-0" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="relative z-10 flex w-full max-w-7xl mx-auto px-6 h-full items-center">
        
        {/* Left 2/3 for pure text content (Adjusted for full width on small screens) */}
        {/* On mobile (default), it takes full width (w-full). On large screens, it takes w-2/3 */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pr-0 lg:pr-10 py-20"> 
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-[#222222] mb-6 text-balance">
            Your Style.
            <br className='hidden sm:block'/>
            Perfected by AI.
          </h1>

          <p className="text-lg md:text-2xl text-[#222222]/80 mb-12 max-w-2xl lg:max-w-lg leading-relaxed text-balance">
            Stop guessing. Get personalized, AI-driven style recommendations that match your unique body, budget, and
            existing wardrobe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"> {/* <-- FIX: The div tag was fixed here */}
            <Button
              onClick={() => scrollToSection("app")}
              className="bg-[#B9975B] hover:bg-[#a08750] text-white px-8 py-3 text-lg font-medium"
            >
              <ArrowDown className="w-4 h-4 mr-2" />
              See how it works 
            </Button>
          </div>
        </div>

        {/* The right 1/3 space is now only a spacer on desktop, and hidden on mobile */}
        <div className="hidden lg:block w-1/3" aria-hidden="true">
          {/* This div acts as a spacer, ensuring the text stays on the left */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-[#B9975B]" />
      </div>
    </section>
  )
}
