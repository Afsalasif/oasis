"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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

          <div className="bg-[#c0aa83] p-6 text-white">
            <div className="flex items-center">
              <div className="relative w-10 h-10 mr-3">
                <div className="absolute inset-0 rounded-full border border-white/70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-serif text-sm font-light text-white italic tracking-wider">NS</div>
                </div>
              </div>
              <h3 className="text-xl font-medium">Contact Noor Saray</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Our dedicated sales team is ready to assist you with any inquiries about Oasis Palace Ostra. Fill out the
              form below and we'll get back to you shortly.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="villaType" className="text-sm font-medium text-gray-700">
                  Interested In
                </label>
                <select
                  id="villaType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                >
                  <option value="">Select Villa Type</option>
                  <option value="4br-basement">4 Bedroom Villa with Basement</option>
                  <option value="5br-no-basement">5 Bedroom Villa without Basement</option>
                  <option value="5br-basement">5 Bedroom Villa with Basement</option>
                  <option value="5br-drop">5 Bedroom with Basement - Drop Type</option>
                  <option value="6br-basement">6 Bedroom Villa with Basement</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                ></textarea>
              </div>

              <Button className="w-full bg-[#c0aa83] hover:bg-[#b09973] text-white">Submit Inquiry</Button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">You can also reach us directly at:</p>
                <p className="text-[#c0aa83] font-medium">+971 4 123 4567</p>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

