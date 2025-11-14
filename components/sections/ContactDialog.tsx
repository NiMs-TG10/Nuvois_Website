

// "use client";

// import { Mail } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog"; // Assuming you use these

// interface ContactDialogProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onOpenChange }) => {
//   const emails = [
//     // "davesarjan@gmail.com",
//     // "devangimehta29@gmail.com",
//     // "mehtanishant1030@gmail.com",
//     "enquire@vastralens.com",
//   ];

//   return (
//     <Dialog open={isOpen} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader className="text-center">
//           <DialogTitle className="text-3xl font-serif text-[#222222]">
//             Contact Our Team 
//           </DialogTitle>
//           <DialogDescription className="text-lg text-[#222222]/70">
//             Reach out directly to us for business inquiries.
//           </DialogDescription>
//         </DialogHeader>
        
//         <div className="py-6 space-y-4">
//           {emails.map((email) => (
//             <a
//               key={email}
//               href={`mailto:${email}`}
//               className="flex items-center space-x-3 p-4 border border-[#B9975B]/30 rounded-xl transition-colors duration-200 hover:bg-[#B9975B]/10 group"
//             >
//               <Mail className="w-5 h-5 text-[#B9975B] group-hover:scale-110 transition-transform" />
//               <span className="text-base font-semibold text-[#222222]">
//                 {email}
//               </span>
//             </a>
//           ))}
//         </div>
        
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ContactDialog;



//------
//-----
//-----
//-----
//-----
//-----
//-----
//-----
//-----
//-----
// "use client";

// import { Mail, Send } from "lucide-react";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input"; // Assuming you have these
// import { Button } from "@/components/ui/button"; // Assuming you have these
// import { Label } from "@/components/ui/label"; // Assuming you have these
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"; // Assuming you have these

// interface ContactDialogProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onOpenChange }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     enquiryType: "Personal Wardrobe Assistance", // Default value
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, enquiryType: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitSuccess(null);

//     // --- FORM SUBMISSION LOGIC GOES HERE ---
//     console.log("Submitting form data:", formData);

//     // Simulate an API call or email sending process
//     try {
//       // Replace this with your actual fetch/API call
//       await new Promise(resolve => setTimeout(resolve, 1500)); 

//       // On successful submission:
//       setSubmitSuccess(true);
//       // Optional: Clear form data
//       setFormData({
//         name: "",
//         email: "",
//         enquiryType: "Personal Wardrobe Assistance", 
//         message: "",
//       });

//     } catch (error) {
//       console.error("Submission failed:", error);
//       setSubmitSuccess(false);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader className="text-center">
//           <DialogTitle className="text-3xl font-serif text-[#222222]">
//             Contact Our Team 
//           </DialogTitle>
//           <DialogDescription className="text-lg text-[#222222]/70">
//             Send us a message for business inquiries.
//           </DialogDescription>
//         </DialogHeader>
        
//         <form onSubmit={handleSubmit} className="py-4 space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               placeholder="Your Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="enquiryType">Enquiry Type</Label>
//             <Select
//               onValueChange={handleSelectChange}
//               value={formData.enquiryType}
//               required
//             >
//               <SelectTrigger id="enquiryType">
//                 <SelectValue placeholder="Select enquiry type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Personal Wardrobe Assistance">Personal Wardrobe Assistance</SelectItem>
//                 <SelectItem value="Store Outfit Suggestion">Store Outfit Suggestion</SelectItem>
//                 <SelectItem value="Other Business Inquiry">Other Business Inquiry</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             <textarea
//               id="message"
//               rows={4}
//               placeholder="Tell us about your inquiry..."
//               value={formData.message}
//               onChange={handleChange}
//               className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" // You might want to use a custom component for textarea if available
//               required
//             />
//           </div>

//           <DialogFooter className="pt-4">
//             <Button 
//               type="submit" 
//               className="w-full bg-[#B9975B] hover:bg-[#A88A4F] text-white"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>Sending...</>
//               ) : (
//                 <>
//                   <Send className="mr-2 h-4 w-4" /> Send Message
//                 </>
//               )}
//             </Button>
//           </DialogFooter>
//         </form>

//         {/* Submission Status Feedback */}
//         {submitSuccess === true && (
//           <div className="p-3 text-center text-sm text-green-600 border border-green-300 bg-green-50 rounded-md">
//             Message sent successfully! We will get back to you soon.
//           </div>
//         )}
//         {submitSuccess === false && (
//           <div className="p-3 text-center text-sm text-red-600 border border-red-300 bg-red-50 rounded-md">
//             Failed to send message. Please try again or email us directly.
//           </div>
//         )}
        
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ContactDialog;

"use client";

import { Mail, Send } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import { Label } from "@/components/ui/label"; 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "Personal Wardrobe Assistance", // Default value
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, enquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);

    // --- VERCEL SERVERLESS FUNCTION SUBMISSION LOGIC ---
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
            
            // Clear form data on successful submission
            setFormData({
                name: "",
                email: "",
                enquiryType: "Personal Wardrobe Assistance", 
                message: "",
            });
        } else {
            // Handle API route errors (e.g., 500 from the serverless function)
            setSubmitSuccess(false);
            const errorData = await response.json();
            console.error("Submission failed on API route:", errorData.message);
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-serif text-[#222222]">
            Contact Our Team 
          </DialogTitle>
          <DialogDescription className="text-lg text-[#222222]/70">
            Send us a message for business inquiries.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="py-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="enquiryType">Enquiry Type</Label>
            <Select
              onValueChange={handleSelectChange}
              value={formData.enquiryType}
              required
            >
              <SelectTrigger id="enquiryType">
                <SelectValue placeholder="Select enquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Personal Wardrobe Assistance">Personal Wardrobe Assistance</SelectItem>
                <SelectItem value="Store Outfit Suggestion">Store Outfit Suggestion</SelectItem>
                <SelectItem value="Other Business Inquiry">Other Business Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your inquiry..."
              value={formData.message}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" // You might want to use a custom component for textarea if available
              required
            />
          </div>

          <DialogFooter className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-[#B9975B] hover:bg-[#A88A4F] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </DialogFooter>
        </form>

        {/* Submission Status Feedback */}
        {submitSuccess === true && (
          <div className="p-3 text-center text-sm text-green-600 border border-green-300 bg-green-50 rounded-md">
            Message sent successfully! We will get back to you soon.
          </div>
        )}
        {submitSuccess === false && (
          <div className="p-3 text-center text-sm text-red-600 border border-red-300 bg-red-50 rounded-md">
            Failed to send message. Please try again or email us directly.
          </div>
        )}
        
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
