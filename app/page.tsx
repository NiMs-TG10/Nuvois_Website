// app/page.tsx

"use client"; // Add this if it's not already at the top of the file

import { useState } from 'react'; // Import useState
import Navigation from "@/components/sections/navigation"
import Hero from "@/components/sections/hero"
import Problem from "@/components/sections/problem"
import AppShowcase from "@/components/sections/app-showcase"
import Platform from "@/components/sections/platform"
// import Technology from "@/components/sections/technology" // Keep commented out
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
// Import the new ContactDialog component
import ContactDialog from "@/components/sections/ContactDialog"; 

export default function Home() {
  // 1. State to control the visibility of the Contact Dialog
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  // 2. Handler function to open the dialog
  const handleOpenContactDialog = () => {
    setIsContactDialogOpen(true);
  };

  return (
    <main className="bg-background text-foreground">
      {/* 3. Pass the handler to the Navigation component */}
      <Navigation onContactClick={handleOpenContactDialog} /> 
      
      {/* Your Page Sections */}
      <Hero />
      <Problem />
      <AppShowcase />
      <Platform />
      <FinalCTA />
      <Footer />
      
      {/* 4. Render the Contact Dialog */}
      <ContactDialog 
        isOpen={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />
    </main>
  )
}