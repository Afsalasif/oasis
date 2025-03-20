"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent actual form submission
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000); // Simulate network delay
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] p-0 bg-white rounded-lg overflow-hidden">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus:outline-none z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="bg-[#c0aa83] p-6 text-white flex items-center">
            <img className="h-20 w-20" src="/noorsaraylogo.svg" alt="Noor Saray Logo" />
          </div>

          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700">Thank you!</h3>
                <p className="text-gray-600 mt-2">We've received your inquiry and will get back to you soon.</p>
                <Button className="mt-4 bg-[#c0aa83] hover:bg-[#b09973] text-white w-full" onClick={onClose}>
                  Close
                </Button>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  Our dedicated sales team is ready to assist you. Fill out the form below, and we'll get back to you
                  shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Interested In</label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select Villa Type</option>
                      <option value="4br-basement">4 Bedroom Villa with Basement</option>
                      <option value="5br-no-basement">5 Bedroom Villa without Basement</option>
                      <option value="5br-basement">5 Bedroom Villa with Basement</option>
                      <option value="5br-drop">5 Bedroom with Basement - Drop Type</option>
                      <option value="6br-basement">6 Bedroom Villa with Basement</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#c0aa83] hover:bg-[#b09973] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
