"use client";

import { useRouter } from "next/navigation";
import Navigation from "@/components/sections/navigation";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  const router = useRouter();

  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Navigation onContactClick={() => {
        // We are already on contact page, so just scroll
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }} />
      <div className="flex-1 mt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
