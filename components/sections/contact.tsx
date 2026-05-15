"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);

    const API_ENDPOINT = "/api/contact"; 

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSubmitSuccess(true);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setTimeout(() => setSubmitSuccess(null), 5000);
        } else {
            setSubmitSuccess(false);
        }

    } catch (error) {
      console.error("Network error during submission:", error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-border/50 bg-background transition-colors duration-500"
    >
      {/* Sidebar with vertical CONTACT text */}
      <div className="hidden lg:flex flex-col items-center justify-center w-16 xl:w-24 border-r border-border/50 shrink-0 py-12 relative z-10 bg-secondary/20 backdrop-blur-sm">
        <span
          className="text-xs tracking-[0.4em] uppercase font-medium text-muted-foreground"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Contact
        </span>
      </div>

      <div className="flex-1 max-w-[1400px] mx-auto px-6 lg:px-12 py-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col justify-start">
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-6 text-primary font-bold"
            >
              04 / CONTACT
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-4 text-foreground">
              Say Hello<span className="text-primary animate-pulse">.</span>
            </h2>
            <p className="text-base text-muted-foreground mt-4 font-light leading-relaxed max-w-sm">
              Have a project in mind? Let's discuss how we can help you architect intelligence.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-start">
            <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-2xl">
              <div className="space-y-2 group">
                <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-primary transition-colors">Name</Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/20 border-border rounded-lg px-4 h-14 text-base focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all placeholder:text-muted-foreground/50 shadow-sm"
                />
              </div>
              
              <div className="space-y-2 group">
                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-primary transition-colors">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/20 border-border rounded-lg px-4 h-14 text-base focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all placeholder:text-muted-foreground/50 shadow-sm"
                />
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-focus-within:text-primary transition-colors">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="flex w-full bg-secondary/20 border border-border rounded-lg p-4 text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all resize-none placeholder:text-muted-foreground/50 min-h-[120px] shadow-sm"
                />
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto px-12 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-full h-14 uppercase text-xs tracking-[0.2em] font-semibold group shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-8 min-h-[24px]">
              {submitSuccess === true && (
                <p className="text-sm text-green-400 font-medium">
                  Message sent successfully. We'll be in touch.
                </p>
              )}
              {submitSuccess === false && (
                <p className="text-sm text-red-400 font-medium">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
