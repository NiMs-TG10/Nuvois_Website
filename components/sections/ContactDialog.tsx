

// "use client";

import { Send, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import { Label } from "@/components/ui/label"; 

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onOpenChange }) => {
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
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#0A0A0A] border-white/10 text-white p-0 overflow-hidden rounded-none sm:rounded-sm">
        <div className="relative p-8 md:p-12">
          <DialogHeader className="mb-10 text-left">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4 text-white/40">
              01 / CONTACT
            </p>
            <DialogTitle className="text-4xl md:text-5xl font-medium tracking-tight leading-none text-white font-sans italic">
              Say Hello<span className="text-[#FF5500]">.</span>
            </DialogTitle>
            <DialogDescription className="text-base text-white/50 mt-4 font-light leading-relaxed">
              Have a project in mind? Let's discuss how we can help you architect intelligence.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2 group">
              <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-focus-within:text-[#FF5500] transition-colors">Name</Label>
              <Input
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-12 text-base focus-visible:ring-0 focus-visible:border-[#FF5500] transition-all placeholder:text-white/10"
              />
            </div>
            
            <div className="space-y-2 group">
              <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-focus-within:text-[#FF5500] transition-colors">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-12 text-base focus-visible:ring-0 focus-visible:border-[#FF5500] transition-all placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2 group">
              <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-focus-within:text-[#FF5500] transition-colors">Message</Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="flex w-full bg-transparent border-0 border-b border-white/10 rounded-none px-0 py-3 text-base focus-visible:outline-none focus-visible:border-[#FF5500] transition-all resize-none placeholder:text-white/10 min-h-[100px]"
              />
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-[#FF5500] hover:text-white transition-all duration-300 rounded-none h-14 uppercase text-xs tracking-[0.2em] font-medium group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                )}
              </Button>
            </div>
          </form>

          {/* Submission Status Feedback */}
          <div className="mt-6 min-h-[24px]">
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
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

