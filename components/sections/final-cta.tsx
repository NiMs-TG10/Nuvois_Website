// components/FinalCTA.tsx

"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import WishlistDialog from "@/components/WishlistDialog";
// The 'lucide-react' Mail icon and ContactEmail helper component are no longer needed.
// import { Mail } from "lucide-react"; 

export default function FinalCTA() {
  // State for the Wishlist Dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to open the dialog for the subscription offer
  const handleSubscriptionClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <section id="final-cta" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-6xl font-bold text-[#222222] mb-6 text-balance">
          The Future of Fashion is Personal.
        </h2>

        <p className="text-xl text-[#222222]/70 mb-16 text-balance">
          Find your style and get started today.
        </p>

        {/* Single Column CTA (Simplified from Two Column) */}
        <div className="grid md:grid-cols-1 max-w-lg mx-auto"> 
          {/* B2C - FREE SUBSCRIPTION OFFER */}
          <div className="p-8 bg-[#FDFDFD] rounded-xl border border-[#222222]/10 relative overflow-hidden">
            {/* Exclusivity Tag */}
            <div className="absolute top-0 right-0 bg-[#B9975B] text-white text-xs font-bold py-1 px-3 transform rotate-45 translate-x-5 -translate-y-2.5">
              LIMITED OFFER!
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#222222] mb-4">
              Unlock Your Free Year of Style!
            </h3>
            <p className="text-sm text-red-600 font-bold mb-2">
              Limited to the First 100 Users!
            </p>
            <p className="text-[#222222]/60 mb-8">
              Sign up now for a Free One-Year Subscription to our AI style
              service. Don't miss this exclusive chance!
            </p>

            {/* Single CTA Button for the offer */}
            <Button
              className="w-full bg-[#B9975B] hover:bg-[#a08750] text-white font-semibold py-3 text-lg"
              onClick={handleSubscriptionClick}
            >
              Get Free Subscription
            </Button>
          </div>
          
          {/* The B2B section has been removed */}
        </div>
      </div>

      {/* Render the Wishlist Dialog component */}
      <WishlistDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        // Assuming the WishlistDialog no longer requires a 'storeName' prop 
        // since the old app download buttons are gone, and it's now used 
        // for the subscription offer.
      />
    </section>
  );
}