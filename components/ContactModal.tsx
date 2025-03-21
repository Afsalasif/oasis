"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { E164Number } from "libphonenumber-js";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { getCountries, CountryCode } from "libphonenumber-js";
import "react-phone-number-input/style.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>();
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>("AE");
  const [phoneError, setPhoneError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
  });

  // Fetch user's country from IP and validate it
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const country = data.country as CountryCode;
        if (getCountries().includes(country)) {
          setCountryCode(country);
        } else {
          setCountryCode("AE"); // Default to UAE if invalid
        }
      })
      .catch(() => console.log("Could not fetch country"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
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
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone Input with Validation */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <PhoneInput
                      defaultCountry={countryCode}
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      international
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c0aa83]"
                      disabled={isSubmitting}
                    />
                    {phoneError && <p className="text-red-500 text-xs">{phoneError}</p>}
                  </div>

                  {/* Interest Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Interested In</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
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

                  {/* Submit Button */}
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
