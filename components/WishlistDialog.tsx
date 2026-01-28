// // components/WishlistDialog.tsx

// "use client";

// import * as React from "react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"; // Assuming you use shadcn/ui input
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// // Define the props for the WishlistDialog
// interface WishlistDialogProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
//   storeName: "App Store" | "Google Play"; // To dynamically reference which store they clicked
// }

// export default function WishlistDialog({
//   isOpen,
//   onOpenChange,
//   storeName,
// }: WishlistDialogProps) {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // 1. **SEND DATA TO YOUR BACKEND/API HERE**
//     console.log(`Wishlist submission from ${storeName}: ${email}`);

//     // 2. Clear the input and show a success message
//     // Simulate submission success
//     setTimeout(() => {
//       setIsSubmitted(true);
//       setEmail("");
//     }, 300);
//   };

//   // Reset state when the dialog closes
//   const handleOpenChange = (open: boolean) => {
//     onOpenChange(open);
//     if (!open) {
//       setIsSubmitted(false);
//       setEmail("");
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={handleOpenChange}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader className="text-center">
//           <DialogTitle className="font-serif text-3xl font-bold text-[#222222]">
//             {isSubmitted ? "You're In! 🎉" : "Join the Wishlist"}
//           </DialogTitle>
//           <DialogDescription className="text-lg pt-2">
//             {isSubmitted
//               ? "Thanks for your interest! We'll notify you when the app launches and send your exclusive early access perks."
//               : `The app isn't quite ready for ${storeName} yet, but you can be one of our initial users!`}
//           </DialogDescription>
//         </DialogHeader>

//         {!isSubmitted && (
//           <form onSubmit={handleSubmit} className="space-y-4 pt-4">
//             <h4 className="text-left text-sm font-medium text-[#222222]">
//               Be an Initial User and Get Exclusive Benefits:
//             </h4>
//             <ul className="list-disc list-inside text-sm text-left space-y-1 text-[#222222]/80 pl-4">
//               <li>Priority Access to the Beta</li>
//               <li>50% Off your first Premium Subscription</li>
//               <li>Direct feedback channel with the Founders</li>
//             </ul>

//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your best email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="col-span-3 border-[#B9975B] focus:border-[#B9975B]"
//             />

//             <Button
//               type="submit"
//               className="w-full bg-[#B9975B] hover:bg-[#a08750] text-white font-semibold py-3"
//               disabled={email.length < 5 || email.indexOf("@") === -1}
//             >
//               Secure My Spot
//             </Button>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }

//--------------------------------------------------------
//--------------------------------------------------------//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

// "use client";

// import * as React from "react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"; // Assuming you use shadcn/ui input
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// // Define the props for the Dialog - storeName prop is REMOVED
// interface FreeSubscriptionDialogProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
//   // storeName: "App Store" | "Google Play"; // REMOVED
// }

// export default function WishlistDialog({
//   isOpen,
//   onOpenChange,
// }: FreeSubscriptionDialogProps) {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // 1. **SEND DATA TO YOUR BACKEND/API HERE**
//     // The submission should be handled as claiming the exclusive offer.
//     console.log(`Free Subscription Claim: ${email}`);

//     // 2. Clear the input and show a success message
//     // Simulate submission success
//     setTimeout(() => {
//       setIsSubmitted(true);
//       setEmail("");
//     }, 300);
//   };

//   // Reset state when the dialog closes
//   const handleOpenChange = (open: boolean) => {
//     onOpenChange(open);
//     if (!open) {
//       setIsSubmitted(false);
//       setEmail("");
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={handleOpenChange}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader className="text-center">
//           <DialogTitle className="font-serif text-3xl font-bold text-[#222222]">
//             {isSubmitted ? "Success! You've Claimed It 🎉" : "Claim Your Free Year"}
//           </DialogTitle>
//           <DialogDescription className="text-lg pt-2">
//             {isSubmitted
//               ? "Your spot for the free one-year subscription is secured! We'll email you with access instructions soon."
//               : "Be one of the first 100 users to claim a FREE One-Year Subscription to NUVOIS.ai."}
//           </DialogDescription>
//         </DialogHeader>

//         {!isSubmitted && (
//           <form onSubmit={handleSubmit} className="space-y-4 pt-4">
//             <h4 className="text-left text-lg font-bold text-red-600">
//               Limited Availability!
//             </h4>
//             <ul className="list-disc list-inside text-sm text-left space-y-2 text-[#222222]/80 pl-4">
//               <li className="font-bold">
//                 Free 12-Month Access to All Premium Features
//               </li>
//               <li>Guaranteed spot among our first 100 exclusive users</li>
//               <li>Direct feedback channel with the Founders</li>
//             </ul>

//             <Input
//               id="email"
//               type="email"
//               placeholder="Enter your email to secure your spot"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="col-span-3 border-[#B9975B] focus:border-[#B9975B]"
//             />

//             <Button
//               type="submit"
//               className="w-full bg-[#B9975B] hover:bg-[#a08750] text-white font-semibold py-3 text-lg"
//               disabled={email.length < 5 || email.indexOf("@") === -1}
//             >
//               Secure My Free Subscription
//             </Button>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }
"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Define the props for the Dialog
interface FreeSubscriptionDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WishlistDialog({
  isOpen,
  onOpenChange,
}: FreeSubscriptionDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // --- API ENDPOINT FOR SUBSCRIPTION CLAIM SHEET ---
    const API_ENDPOINT = "/api/subscription"; 

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ email }) // Only sending the email field
        });

        if (response.ok) {
            setIsSubmitted(true);
            setEmail("");
        } else {
            console.error("Subscription submission failed on API route.");
            // Optional: Show a temporary error message here instead of the success message
        }

    } catch (error) {
      console.error("Network error during submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset state when the dialog closes
  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setIsSubmitted(false);
      setEmail("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle className="font-serif text-3xl font-bold text-[#222222]">
            {isSubmitted ? "Success! You've Claimed It 🎉" : "Claim Your Free Year"}
          </DialogTitle>
          <DialogDescription className="text-lg pt-2">
            {isSubmitted
              ? "Your spot for the free one-year subscription is secured! We'll email you with access instructions soon."
              : "Be one of the first 100 users to claim a FREE One-Year Subscription to NUVOIS.ai."}
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <h4 className="text-left text-lg font-bold text-red-600">
              Limited Availability!
            </h4>
            <ul className="list-disc list-inside text-sm text-left space-y-2 text-[#222222]/80 pl-4">
              <li className="font-bold">
                Free 12-Month Access to All Premium Features
              </li>
              <li>Guaranteed spot among our first 100 exclusive users</li>
              <li>Direct feedback channel with the Founders</li>
            </ul>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email to secure your spot"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="col-span-3 border-[#B9975B] focus:border-[#B9975B]"
            />

            <Button
              type="submit"
              className="w-full bg-[#B9975B] hover:bg-[#a08750] text-white font-semibold py-3 text-lg"
              disabled={isSubmitting || email.length < 5 || email.indexOf("@") === -1}
            >
              {isSubmitting ? "Securing Spot..." : "Secure My Free Subscription"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}