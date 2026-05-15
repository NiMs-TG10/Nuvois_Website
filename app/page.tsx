// app/page.tsx

"use client"; // Add this if it's not already at the top of the file

import { useRouter } from 'next/navigation'; // Import useRouter
import Navigation from "@/components/sections/navigation"
import Hero from "@/components/sections/hero"
import Problem from "@/components/sections/problem"
import AppShowcase from "@/components/sections/app-showcase"
import Services from "@/components/sections/services"
import OperatingModel from "@/components/sections/operating-model"
// import Technology from "@/components/sections/technology" // Keep commented out
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
// Import the new FAQ component
import FAQ from "@/components/sections/faq"
// Import the new Contact component
import Contact from "@/components/sections/contact"; 
// Import the new SidebarIndex component
import SidebarIndex from "@/components/sections/sidebar-index";

export default function Home() {
  const router = useRouter();

  // Scroll to the contact section
  const handleOpenContactPage = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-background text-foreground">
      {/* Global Sidebar Index */}
      <SidebarIndex />

      {/* 3. Pass the handler to the Navigation component */}
      <Navigation onContactClick={handleOpenContactPage} /> 
      
      {/* Your Page Sections */}
      <Hero />
      {/* <Problem /> */}
      {/* <AppShowcase /> */}
      <Services onContactClick={handleOpenContactPage} />
      <OperatingModel />
      <FAQ />
      {/* <FinalCTA /> */}
      
      {/* Render the Contact Section inline */}
      <Contact />

      <Footer />
    </main>
  )
}