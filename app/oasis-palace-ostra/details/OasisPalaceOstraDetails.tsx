"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MapPin, Calendar, Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ContactModal from "@/components/ContactModal";

export default function OasisPalaceOstraDetails() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const payments = [
    { percent: "10%", title: "Down Payment", subtitle: "On Booking", date: "" },
    {
      percent: "10%",
      title: "1st Installment",
      subtitle: "",
      date: "June 2025",
    },
    {
      percent: "10%",
      title: "2nd Installment",
      subtitle: "",
      date: "January 2026",
    },
    {
      percent: "10%",
      title: "3rd Installment",
      subtitle: "",
      date: "July 2026",
    },
    {
      percent: "10%",
      title: "4th Installment",
      subtitle: "Upon 25% Construction Completion",
      date: "April 2027",
    },
    {
      percent: "10%",
      title: "5th Installment",
      subtitle: "Upon 40% Construction Completion",
      date: "December 2027",
    },
    {
      percent: "10%",
      title: "6th Installment",
      subtitle: "Upon 60% Construction Completion",
      date: "May 2028",
    },
    {
      percent: "10%",
      title: "7th Installment",
      subtitle: "Upon 80% Construction Completion",
      date: "December 2028",
    },
    {
      percent: "20%",
      title: "8th Installment",
      subtitle: "Upon 100% Construction Completion",
      date: "September 2029",
    },
  ];
  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const villaTypes = [
    {
      id: "type1",
      title: "4 Bedroom Villa with Basement",
      plot: "9,081 sqft",
      bua: "7,287 sqft",
      price: "AED 13.13 up to 15.79 Million",
      bedrooms: 4,
      bathrooms: 5,
      features: [
        "Spacious living areas",
        "Private garden",
        "Basement for entertainment",
        "Maid's room",
        "Smart home technology",
        "Premium finishes",
      ],
      image: "/bed4.png",
    },
    {
      id: "type2",
      title: "5 Bedroom Villa without Basement",
      plot: "9,548 sqft",
      bua: "7,986 sqft",
      price: "AED 14.56 up to 17.81 Million",
      bedrooms: 5,
      bathrooms: 6,
      features: [
        "Expansive living and dining areas",
        "Private garden",
        "Family lounge",
        "Maid's room",
        "Smart home technology",
        "Premium finishes",
      ],
      image: "/bed5.png",
    },
    {
      id: "type3",
      title: "5 Bedroom Villa with Basement",
      plot: "11,500 sqft",
      bua: "10,359 sqft",
      price: "AED 18.25 up to 22.65 Million",
      bedrooms: 5,
      bathrooms: 6,
      features: [
        "Expansive living and dining areas",
        "Private garden",
        "Basement for entertainment",
        "Family lounge",
        "Maid's room",
        "Smart home technology",
        "Premium finishes",
      ],
      image: "/bed5w.png",
    },
    {
      id: "type4",
      title: "5 Bedroom with Basement - Drop Type",
      plot: "10,935 sqft",
      bua: "11,111 sqft",
      price: "AED 22.15 up to 24.28 Million",
      bedrooms: 5,
      bathrooms: 6,
      features: [
        "Unique drop-type architecture",
        "Expansive living and dining areas",
        "Private garden",
        "Basement for entertainment",
        "Family lounge",
        "Maid's room",
        "Smart home technology",
        "Premium finishes",
      ],
      image: "/bed5d.png",
    },
    {
      id: "type5",
      title: "6 Bedroom Villa with Basement",
      plot: "14,800 sqft",
      bua: "12,859 sqft",
      price: "AED 24.05 up to 27.96 Million",
      bedrooms: 6,
      bathrooms: 7,
      features: [
        "Grand living and dining areas",
        "Expansive private garden",
        "Basement for entertainment",
        "Family lounge",
        "Multiple maid's rooms",
        "Smart home technology",
        "Premium finishes",
        "Private study",
      ],
      image: "/bed6.png",
    },
  ];

  const [selectedVilla, setSelectedVilla] = useState(villaTypes[0]);

  return (
    <div className="bg-white">
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      {/* Header */}
      <div className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/oasis-palace-ostra"
              className="flex items-center gap-2 text-gray-900 hover:text-[#c0aa83] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Overview</span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center">
                <div className="relative w-20 h-20 mr-4">
                  {/* <div className="absolute inset-0 rounded-full border border-[#c0aa83]/70"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="font-serif text-xl font-light text-[#c0aa83] italic tracking-wider">NS</div>
                                    </div> */}
                  <img
                    className="h-full w-full "
                    src="/noorsaraylogo.svg"
                    alt=""
                  />
                </div>
                
              </div>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                onClick={openContactModal}
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/hero2.png"
            alt="Oasis Palace Ostra"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50 z-20"></div>

        <div className="relative z-30 container mx-auto h-full flex flex-col justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <Badge className="bg-[#c0aa83] hover:bg-[#b09973] text-white px-4 py-1 text-sm uppercase tracking-wider">
              Limited Release
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight max-w-3xl"
          >
            Oasis Palace Ostra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl"
          >
            First Palace Branded Villas in Dubai
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#c0aa83] mr-2" />
              <span className="text-white">Premium Location, Dubai Land</span>
            </div>
            <div className="flex items-center">
              <Home className="h-5 w-5 text-[#c0aa83] mr-2" />
              <span className="text-white">4-6 Bedroom Luxury Villas</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-[#c0aa83] mr-2" />
              <span className="text-white">Handover: September 2029</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                
                <div>
                  <p className="text-gray-900 capitalize font-medium">
                  Brought to you by </p>
                  <h3 className="text-xl font-serif text-[#c0aa83]">
                    Noor Saray Real Estate
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-700 text-right">
                For inquiries:{" "}
                <span className="text-[#c0aa83] font-medium">
                  +971 50 152 7835
                </span>
              </p>
              <p className="text-gray-700 text-right">
                Email:{" "}
                <span className="text-[#c0aa83] font-medium">
                  nsr@noorsaay.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start bg-transparent h-auto border-b-0 p-0 overflow-x-auto flex-nowrap">
              {[
                "overview",
                "villa-types",
                "payment-plan",
                "location",
                "gallery",
                "contact",
              ].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="py-4 px-5 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#c0aa83] data-[state=active]:text-[#c0aa83] data-[state=active]:shadow-none data-[state=active]:bg-transparent text-gray-600 hover:text-[#c0aa83] transition-colors capitalize whitespace-nowrap"
                >
                  {tab.replace("-", " ")}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-0">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  Where Luxury, Royalty & Heritage All Come Together
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Oasis Palace Ostra represents the pinnacle of luxury living in
                  Dubai, offering an exclusive collection of palace-inspired
                  villas that blend timeless elegance with modern
                  sophistication. As the first palace-branded villas in Dubai,
                  these residences set a new benchmark for opulent living.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each villa is meticulously crafted with attention to detail,
                  featuring grand entrances, spacious living areas, premium
                  finishes, and smart home technology. The architectural design
                  draws inspiration from royal palaces, creating a sense of
                  majesty and grandeur that is unparalleled in Dubai's real
                  estate landscape.
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Residents of Oasis Palace Ostra will enjoy not only the
                  exceptional quality of their homes but also the exclusivity of
                  being part of a limited collection of luxury villas in a prime
                  location. With a range of villa types to choose from, each
                  offering unique features and layouts, there is a perfect
                  residence for even the most discerning buyer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Community Parks & Playgrounds",
                    "Tracks for Jogging and Cycling",
                    "Wellness & Spa Facilities",
                    "Sports Courts & Fitness Facilities",
                    "Retail Centres",
                    "Community Centre",
                    "Swimmable Lagoon",
                    "Swimming Pools",
                    "Pocket Parks",
                    "Beaches",
                    "Schools",
                    "Clubhouse",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-[#c0aa83]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => setActiveTab("villa-types")}
                  className="bg-[#c0aa83] hover:bg-[#b09973] text-white"
                >
                  Explore Villa Types
                </Button>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Project Highlights
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Developer</span>
                      <span className="text-gray-900 font-medium">Emaar</span>
                    </div>
                    <Separator />

                    <div className="flex justify-between">
                      <span className="text-gray-600">Project Type</span>
                      <span className="text-gray-900 font-medium">
                        Luxury Villas
                      </span>
                    </div>
                    <Separator />

                    <div className="flex justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="text-gray-900 font-medium">
                        Premium Dubai Location
                      </span>
                    </div>
                    <Separator />

                    <div className="flex justify-between">
                      <span className="text-gray-600">Handover</span>
                      <span className="text-gray-900 font-medium">
                        September 2029
                      </span>
                    </div>
                    <Separator />

                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Plan</span>
                      <span className="text-gray-900 font-medium">80:20</span>
                    </div>
                    <Separator />

                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Launching Soon
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-[#c0aa83]/10 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Limited Time Opportunity
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Booking starts Monday with a limited number of units
                    available. Secure your palace-inspired villa today.
                  </p>
                  {/* <Button className="w-full bg-[#c0aa83] hover:bg-[#b09973] text-white">Register Interest</Button> */}
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Villa Types Tab */}
          <TabsContent value="villa-types" className="mt-0">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                    Exquisite Villa Types
                  </h2>
                  <p className="text-gray-700 mb-8">
                    Oasis Palace Ostra offers a range of meticulously designed
                    villas to suit different preferences and lifestyle needs.
                    Each villa type features premium finishes, smart home
                    technology, and palace-inspired architectural elements.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1 space-y-4">
                  {villaTypes.map((villa) => (
                    <div
                      key={villa.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedVilla.id === villa.id
                          ? "bg-[#c0aa83]/10 border-l-4 border-[#c0aa83]"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedVilla(villa)}
                    >
                      <h3
                        className={`font-medium mb-2 ${
                          selectedVilla.id === villa.id
                            ? "text-[#c0aa83]"
                            : "text-gray-900"
                        }`}
                      >
                        {villa.title}
                      </h3>
                      <p className="text-sm text-gray-600">{villa.price}</p>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative h-[300px] md:h-[400px]">
                      <Image
                        src={selectedVilla.image || "/placeholder.svg"}
                        alt={selectedVilla.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-4">
                        {selectedVilla.title}
                      </h3>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Plot Size
                          </span>
                          <span className="text-gray-900 font-medium">
                            {selectedVilla.plot}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Built-Up Area
                          </span>
                          <span className="text-gray-900 font-medium">
                            {selectedVilla.bua}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Bedrooms
                          </span>
                          <span className="text-gray-900 font-medium">
                            {selectedVilla.bedrooms}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Bathrooms
                          </span>
                          <span className="text-gray-900 font-medium">
                            {selectedVilla.bathrooms}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <span className="text-sm text-gray-500">
                          Price Range
                        </span>
                        <p className="text-[#c0aa83] font-medium text-lg">
                          {selectedVilla.price}
                        </p>
                      </div>

                      <Separator className="mb-6" />

                      <h4 className="font-medium text-gray-900 mb-4">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {selectedVilla.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* <Button className="bg-[#c0aa83] hover:bg-[#b09973] text-white">Download Floor Plan</Button> */}
                        <Button
                          variant="outline"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                          onClick={openContactModal}
                        >
                          Contact Sales Team
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Payment Plan Tab */}
          <TabsContent value="payment-plan" className="mt-0">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                  Payment Plan
                </h2>
                <p className="text-gray-700 mb-12">
                  Oasis Palace Ostra offers a straightforward 80:20 payment
                  plan, designed to make your investment journey smooth and
                  convenient.
                </p>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                  <div className="bg-[#c0aa83] p-6 text-white">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-medium">
                        80:20 Payment Plan
                      </h3>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>Handover: September 2029</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
                    {payments.map((payment, index) => (
                      <div key={index} className="text-center px-4">
                        <div className="mb-1">
                          <span className="text-4xl md:text-5xl font-light text-[#c0aa83]">
                            {payment.percent}
                          </span>
                        </div>
                        <div className="mb-1">
                          <h3 className="text-base md:text-lg font-medium">
                            {payment.title}
                          </h3>
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 mb-1">
                          {payment.subtitle}
                        </div>
                        <div className="text-xs md:text-sm">{payment.date}</div>
                        <div className="w-full h-px bg-[#c0aa83] mt-2 md:mt-3"></div>
                      </div>
                    ))}
                  </div>
                  {/* s */}
                  {/* <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium text-gray-900">During Construction</h4>
                          <span className="text-2xl font-semibold text-[#c0aa83]">80%</span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          The construction payment is divided into installments linked to construction milestones:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium">Booking Amount</span>
                              <p className="text-gray-600 text-sm">Initial reservation payment</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium">Foundation Completion</span>
                              <p className="text-gray-600 text-sm">Payment upon completion of foundation work</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium">Structure Completion</span>
                              <p className="text-gray-600 text-sm">Payment upon completion of structural work</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium">Finishing Stage</span>
                              <p className="text-gray-600 text-sm">Payment during interior and exterior finishing</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium text-gray-900">On Handover</h4>
                          <span className="text-2xl font-semibold text-[#c0aa83]">20%</span>
                        </div>
                        <p className="text-gray-600 mb-4">The final payment is made upon handover of your villa:</p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium">Final Payment</span>
                              <p className="text-gray-600 text-sm">Remaining 20% paid upon handover</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium">Key Handover</span>
                              <p className="text-gray-600 text-sm">Receive keys to your new home</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-gray-900 font-medium">Move-In Ready</span>
                              <p className="text-gray-600 text-sm">Begin your luxury living experience</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Payment Plan Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Straightforward structure with clear milestones
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Majority of payment during construction period
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Manageable final payment at handover
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        No post-handover payments required
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </TabsContent>

          {/* Location Tab */}
          <TabsContent value="location" className="mt-0">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                    Prime Location
                  </h2>

                  <p className="text-gray-700 mb-6">
                    Oasis Palace Ostra is strategically located in one of
                    Dubai's most prestigious neighborhoods, offering residents
                    the perfect balance of privacy and connectivity.
                  </p>

                  <p className="text-gray-700 mb-8">
                    The development enjoys proximity to key landmarks,
                    educational institutions, healthcare facilities, and leisure
                    destinations, making it an ideal location for families and
                    individuals seeking a premium lifestyle.
                  </p>
                  {/* 
                  <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px] mb-8 relative">
                
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
                    </div>
                  </div> */}

                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Nearby Attractions
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      { name: "Premium Shopping Mall", distance: "10 minutes" },
                      { name: "International Schools", distance: "15 minutes" },
                      {
                        name: "Championship Golf Course",
                        distance: "5 minutes",
                      },
                      { name: "Beach Access", distance: "20 minutes" },
                      { name: "Business Districts", distance: "25 minutes" },
                      {
                        name: "Dubai International Airport",
                        distance: "30 minutes",
                      },
                      {
                        name: "Luxury Hotels & Resorts",
                        distance: "15 minutes",
                      },
                      { name: "Medical Centers", distance: "10 minutes" },
                    ].map((attraction, index) => (
                      <div key={index} className="flex items-start">
                        <MapPin className="h-5 w-5 text-[#c0aa83] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-gray-900 font-medium">
                            {attraction.name}
                          </span>
                          <p className="text-gray-600 text-sm">
                            {attraction.distance} drive
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Location Highlights
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Area</span>
                        <span className="text-gray-900 font-medium">
                          Premium Dubai Location
                        </span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-gray-600">Community Type</span>
                        <span className="text-gray-900 font-medium">
                          Gated Luxury Villa Community
                        </span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-gray-600">Security</span>
                        <span className="text-gray-900 font-medium">
                          24/7 Manned & CCTV
                        </span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-gray-600">Lifestyle</span>
                        <span className="text-gray-900 font-medium">
                          Ultra-Luxury
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/hero.png"
                        alt="Oasis Palace Ostra Aerial View"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Schedule a Site Visit
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Experience the location firsthand with a guided tour of
                        the development site.
                      </p>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                        onClick={openContactModal}
                      >
                        Contact Sales Team
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="mt-0">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                Gallery
              </h2>

              <p className="text-gray-700 mb-8">
                Explore the stunning visuals of Oasis Palace Ostra through our
                curated gallery of renderings and design concepts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  "/hero.png",
                  "/about.png",
                  "/lux.png",
                  "/hero2.png",
                  "/g1.png",
                  "/g2.png",
                  "/g3.png",
                  "/g4.png",
                ].map((ah, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <Image
                      src={ah}
                      alt={`Oasis Palace Ostra Gallery Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white/20"
                      >
                        View Larger
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Experience Oasis Palace Ostra in Person
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our sales gallery features detailed scale models, material
                  samples, and immersive visualizations of the project.
                </p>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                  onClick={openContactModal}
                >
                  Contact Sales Team
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="mt-0">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                    Contact Noor Saray
                  </h2>

                  <p className="text-gray-700 mb-8">
                    Our dedicated sales team at Noor Saray Real Estate is ready
                    to assist you with any inquiries about Oasis Palace Ostra.
                    Reach out to us through any of the following channels.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-[#c0aa83]/10 p-2 rounded-full">
                        <div className="w-5 h-5 flex items-center justify-center text-[#c0aa83] font-serif">
                          T
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          Call Us
                        </h3>
                        <p className="text-gray-600">+971 50 152 7835</p>
                        <p className="text-gray-500 text-sm">
                          Available 7 days a week, 9am - 8pm
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-[#c0aa83]/10 p-2 rounded-full">
                        <div className="w-5 h-5 flex items-center justify-center text-[#c0aa83] font-serif">
                          E
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          Email Us
                        </h3>
                        <p className="text-gray-600">nsr@noorsaay.com</p>
                        <p className="text-gray-500 text-sm">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-[#c0aa83]/10 p-2 rounded-full">
                        <div className="w-5 h-5 flex items-center justify-center text-[#c0aa83] font-serif">
                          V
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          Visit Our Sales Center
                        </h3>
                        <p className="text-gray-600">
                          Noor Saray Real Estate,Clover Bay ,Buissness bay
                        </p>
                        <p className="text-gray-500 text-sm">
                          Open daily from 10am - 6pm
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Booking Opens Monday
                    </h3>
                    <p className="text-gray-700 mb-4">
                      With limited units available, we recommend registering
                      your interest early to secure your preferred villa type.
                    </p>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                      onClick={openContactModal}
                    >
                      Contact Sales Team
                    </Button>
                  </div>
                </div>
                {/* start */}
                {/* <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="relative w-10 h-10 mr-3">
                      <div className="absolute inset-0 rounded-full border border-[#c0aa83]/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="font-serif text-sm font-light text-[#c0aa83] italic tracking-wider">
                          NS
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">
                      Send Us a Message
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-gray-700"
                        >
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
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="villaType"
                        className="text-sm font-medium text-gray-700"
                      >
                        Interested In
                      </label>
                      <select
                        id="villaType"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                      >
                        <option value="">Select Villa Type</option>
                        <option value="4br-basement">
                          4 Bedroom Villa with Basement
                        </option>
                        <option value="5br-no-basement">
                          5 Bedroom Villa without Basement
                        </option>
                        <option value="5br-basement">
                          5 Bedroom Villa with Basement
                        </option>
                        <option value="5br-drop">
                          5 Bedroom with Basement - Drop Type
                        </option>
                        <option value="6br-basement">
                          6 Bedroom Villa with Basement
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0aa83] focus:border-transparent"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-[#c0aa83] hover:bg-[#b09973] text-white">
                      Submit Inquiry
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </div>
                </div> */}
                {/* end */}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 text-gray-900 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-12 shadow-lg rounded-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center mb-4">
                 
                    <div>
                      <p className="text-gray-700 capitalize font-medium">
                      Brought to you by 
                      </p>
                      <h3 className="text-xl font-serif text-[#c0aa83]">
                        Noor Saray Real Estate
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 max-w-md">
                    With limited units available and booking starting Monday,
                    secure your palace-inspired villa today.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                    onClick={openContactModal}
                  >
                    Contact Sales Team
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4"
                  >
                    <Link href="tel:+97141234567">+971 50 152 7835</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
