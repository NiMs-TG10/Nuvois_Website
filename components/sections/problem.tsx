"use client";

import { Package, ShoppingCart, Brain } from "lucide-react";

export default function Problem() {
  // Define a dark background color for the section
  const sectionBgColor = "bg-[#222222]";
  // Define a light text color for the majority of the content
  const lightTextColor = "text-gray-200";
  // Define a slightly lighter color for secondary text/opacity
  const faintTextColor = "text-gray-400";

  return (
    <section className={`py-24 px-6 ${sectionBgColor}`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`font-serif text-5xl font-bold text-center ${lightTextColor} mb-4 text-balance`}
        >
          Fashion is Personal. Your Recommendations Should Be.
        </h2>

        <p
          className={`text-center ${faintTextColor} text-lg mb-16 text-balance`}
        >
          We understand the challenges both consumers and retailers face.
        </p>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              {/* Icon container remains the same, assuming B9975B (Gold) works well on dark */}
              <div className="bg-[#B9975B]/10 p-6 rounded-full">
                <Package className="w-8 h-8 text-[#B9975B]" />
              </div>
            </div>
            <h3 className={`font-serif text-2xl font-bold ${lightTextColor}`}>
              B2C Problem
            </h3>
            <p className={`${faintTextColor} leading-relaxed`}>
              A closet full of clothes, but nothing to wear. Generic
              recommendations don't match your unique style or body.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <div className="bg-[#B9975B]/10 p-6 rounded-full">
                <ShoppingCart className="w-8 h-8 text-[#B9975B]" />
              </div>
            </div>
            <h3 className={`font-serif text-2xl font-bold ${lightTextColor}`}>
              B2B Problem
            </h3>
            <p className={`${faintTextColor} leading-relaxed`}>
              High return rates and generic suggestions kill conversions. Your
              platform needs smarter recommendations.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <div className="bg-[#B9975B]/10 p-6 rounded-full">
                <Brain className="w-8 h-8 text-[#B9975B]" />
              </div>
            </div>
            <h3 className={`font-serif text-2xl font-bold ${lightTextColor}`}>
              Our Solution
            </h3>
            <p className={`${faintTextColor} leading-relaxed`}>
              We use AI to understand the person, not just the product.
              Hyper-personalized recommendations that convert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
