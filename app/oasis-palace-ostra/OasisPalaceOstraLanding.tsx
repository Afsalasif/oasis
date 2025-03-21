"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ContactModal from "@/components/ContactModal"

export default function OasisPalaceOstraLanding() {
    const [isVisible, setIsVisible] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const openContactModal = () => {
        setIsContactModalOpen(true)
      }
      const payments = [
        { percent: '10%', title: 'Down Payment', subtitle: 'On Booking', date: '' },
        { percent: '10%', title: '1st Installment', subtitle: '', date: 'June 2025' },
        { percent: '10%', title: '2nd Installment', subtitle: '', date: 'January 2026' },
        { percent: '10%', title: '3rd Installment', subtitle: '', date: 'July 2026' },
        { percent: '10%', title: '4th Installment', subtitle: 'Upon 25% Construction Completion', date: 'April 2027' },
        { percent: '10%', title: '5th Installment', subtitle: 'Upon 40% Construction Completion', date: 'December 2027' },
        { percent: '10%', title: '6th Installment', subtitle: 'Upon 60% Construction Completion', date: 'May 2028' },
        { percent: '10%', title: '7th Installment', subtitle: 'Upon 80% Construction Completion', date: 'December 2028' },
        { percent: '20%', title: '8th Installment', subtitle: 'Upon 100% Construction Completion', date: 'September 2029' },
      ];
    
      const closeContactModal = () => {
        setIsContactModalOpen(false)
      }
    useEffect(() => {
        setIsVisible(true)
    }, [])
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <div className="bg-white">
            <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
            {/* Hero Section */}
            <section className="relative h-screen">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="absolute left-10 top-5 h-25 z-30 w-25"><img className="h-full invert w-full" src="/noorsaraylogo.svg" alt="" /></div>
                <div className="absolute inset-0">
                    <Image
                        src="/hero.png"
                        alt="Oasis Palace Ostra"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50 z-20"></div>

                <div className="relative z-30 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <Badge className="bg-[#c0aa83] hover:bg-[#b09973] text-white px-4 py-1 text-sm uppercase tracking-wider">
                            Limited Release
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl uppercase md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
                    >
                        Oasis Palace Ostra
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl uppercase md:text-2xl text-white/90 mb-8 max-w-3xl"
                    >
                        First Palace Branded Villas in Dubai
                    </motion.p>

                    {/* <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl italic"
                    >
                        Where Luxury, Royalty & Heritage All Come Together To Create A Premium Experience
                    </motion.p> */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button asChild className="bg-[#c0aa83] hover:bg-[#b09973] text-white border-none px-8 py-6 text-lg">
                            <Link href="/oasis-palace-ostra/details">Explore Details</Link>
                        </Button>
                        <Button
                                        variant="outline"
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg"
                                        onClick={openContactModal}
                                    >
                                        Contact Us
                                    </Button>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    >
                        <Link href="#introduction" className="text-white/80 hover:text-white">
                            <div className="flex flex-col items-center">
                                <span className="text-sm mb-2">Scroll Down</span>
                                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                                    <motion.div
                                        initial={{ y: 0 }}
                                        animate={{ y: 10 }}
                                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                                        className="w-1.5 h-1.5 bg-white rounded-full"
                                    />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center">
                                
                                <div>
                                    <p className="text-gray-900 font-medium">Brought to you by</p>
                                    <h3 className="text-xl font-serif text-[#c0aa83]">Noor Saray Real Estate</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {/* <Button asChild variant="outline" className="border-[#c0aa83] capitalize text-[#c0aa83] hover:bg-[#c0aa83]/5">
                                <Link href="https://wa.me/+971501527835" target="_blank" rel="noopener noreferrer">
                                    contact us
                                </Link>
                            </Button> */}
                            <Button asChild className="bg-[#c0aa83] hover:bg-[#b09973] text-white">
                                <Link href="tel:+97141234567">+971 50 152 7835</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section id="introduction" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeIn}>
                            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 leading-tight">
                                A New Benchmark for <span className="text-[#c0aa83]">Luxury Living</span> in Dubai
                            </h2>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Oasis Palace Ostra sets a new standard for luxury living in Dubai, offering an exclusive collection of
                                palace-inspired villas that blend timeless elegance with modern sophistication.
                            </p>

                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Each residence is meticulously crafted to provide an unparalleled living experience, where every detail
                                reflects the pinnacle of architectural excellence and interior design.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-8">
                                <div className="flex items-start">
                                    <div className="mr-4 mt-1 bg-[#c0aa83]/10 p-2 rounded-full">
                                        <MapPin className="h-5 w-5 text-[#c0aa83]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Prime Location</h3>
                                        <p className="text-gray-600 text-sm">Situated in one of Dubai's most prestigious neighborhoods</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 mt-1 bg-[#c0aa83]/10 p-2 rounded-full">
                                        <Calendar className="h-5 w-5 text-[#c0aa83]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Handover</h3>
                                        <p className="text-gray-600 text-sm">September 2029</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Badge className="bg-red-100 text-red-800 capitalize border-none mr-3">Limited time Opportunity</Badge>
                                <p className="text-gray-700 text-sm">Booking starts Monday</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/about.png"
                                alt="Oasis Palace Ostra Villa"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <p className="text-white font-medium">Architectural Excellence</p>
                                <p className="text-white/80 text-sm">Palace-inspired design with modern amenities</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                            Exceptional <span className="text-[#c0aa83]">Features</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Oasis Palace Ostra offers an array of premium features and amenities designed to elevate your lifestyle.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-3 mb-8">
                            <div className="h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/lux.png"
                                    alt="Oasis Palace Ostra Features"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl font-serif text-white mb-2">Unparalleled Luxury</h3>
                                    <p className="text-white/80 max-w-xl">
                                        Experience the epitome of luxury living with meticulously designed spaces and premium finishes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-2 border-[#c0aa83]">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#c0aa83]/10 flex items-center justify-center mr-4">
                                    <span className="text-[#c0aa83] font-serif">01</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Palace-Inspired Architecture</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Majestic facades and grand entrances that reflect royal heritage and timeless elegance.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-2 border-[#c0aa83]">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#c0aa83]/10 flex items-center justify-center mr-4">
                                    <span className="text-[#c0aa83] font-serif">02</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Premium Finishes</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Imported marble, custom millwork, and designer fixtures throughout each residence.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-2 border-[#c0aa83]">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#c0aa83]/10 flex items-center justify-center mr-4">
                                    <span className="text-[#c0aa83] font-serif">03</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Smart Home Technology</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                State-of-the-art automation systems for lighting, climate, security, and entertainment.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-2 border-[#c0aa83]">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#c0aa83]/10 flex items-center justify-center mr-4">
                                    <span className="text-[#c0aa83] font-serif">04</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Private Gardens</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Meticulously landscaped outdoor spaces designed for relaxation and entertainment.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-2 border-[#c0aa83]">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#c0aa83]/10 flex items-center justify-center mr-4">
                                    <span className="text-[#c0aa83] font-serif">05</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Basement Options</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Flexible basement spaces that can be customized for entertainment, fitness, or staff quarters.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-2 border-[#c0aa83]">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#c0aa83]/10 flex items-center justify-center mr-4">
                                    <span className="text-[#c0aa83] font-serif">06</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">Exclusive Community</h3>
                            </div>
                            <p className="text-gray-600 pl-14">
                                Gated community with 24/7 security, concierge services, and premium amenities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Villa Types */}
            <section id="villa-types" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                            Exquisite <span className="text-[#c0aa83]">Villa Types</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Choose from a range of meticulously designed villas to suit your lifestyle and preferences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {[
                            {
                                title: "4 Bedroom Villa with Basement",
                                plot: "9,081 sqft",
                                bua: "7,287 sqft",
                                price: "AED 13.13 up to 15.79 Million",
                                image: "/bed4.png",
                            },
                            {
                                title: "5 Bedroom Villa without Basement",
                                plot: "9,548 sqft",
                                bua: "7,986 sqft",
                                price: "AED 14.56 up to 17.81 Million",
                                image: "/bed5.png",
                            },
                            {
                                title: "5 Bedroom Villa with Basement",
                                plot: "11,500 sqft",
                                bua: "10,359 sqft",
                                price: "AED 18.25 up to 22.65 Million",
                                image: "/bed5w.png",
                            },
                            {
                                title: "5 Bedroom with Basement - Drop Type",
                                plot: "10,935 sqft",
                                bua: "11,111 sqft",
                                price: "AED 22.15 up to 24.28 Million",
                                image: "/bed5d.png",
                            },
                            {
                                title: "6 Bedroom Villa with Basement",
                                plot: "14,800 sqft",
                                bua: "12,859 sqft",
                                price: "AED 24.05 up to 27.96 Million",
                                image: "/bed6.png",
                            },
                        ].map((villa, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={villa.image || "/placeholder.svg"}
                                        alt={villa.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-medium text-white">{villa.title}</h3>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500">Plot Size</span>
                                            <span className="text-gray-900 font-medium">{villa.plot}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500">Built-Up Area</span>
                                            <span className="text-gray-900 font-medium">{villa.bua}</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <span className="text-sm text-gray-500">Price Range</span>
                                        <p className="text-[#c0aa83] font-medium text-lg">{villa.price}</p>
                                    </div>

                                    <Button
                                        asChild
                                        className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-[#c0aa83] group-hover:border-[#c0aa83] group-hover:text-[#c0aa83] transition-all duration-300"
                                    >
                                        <Link href="/oasis-palace-ostra/details">
                                            <span>View Details</span>
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Plan */}
           


    <section className="py-12 md:py-16 bg-neutral-100 text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif bg-[#c0aa83] text-white py-3 md:py-4 px-4 md:px-8 tracking-wide md:tracking-widest">
              PAYMENT PLAN
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
            {payments.map((payment, index) => (
              <div key={index} className="text-center px-4">
                <div className="mb-1">
                  <span className="text-4xl md:text-5xl font-light text-[#c0aa83]">{payment.percent}</span>
                </div>
                <div className="mb-1">
                  <h3 className="text-base md:text-lg font-medium">{payment.title}</h3>
                </div>
                <div className="text-xs md:text-sm text-gray-600 mb-1">
                  {payment.subtitle}
                </div>
                <div className="text-xs md:text-sm">
                  {payment.date}
                </div>
                <div className="w-full h-px bg-[#c0aa83] mt-2 md:mt-3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gray-50 p-12 border border-gray-100 rounded-lg">
                            <div className="text-center mb-10">
                                <Badge className="bg-[#c0aa83]/10 text-[#c0aa83] mb-4">Limited Time Opportunity</Badge>
                                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                                    Secure Your Palace-Inspired Villa Today
                                </h2>
                                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                    With limited units available and booking starting Monday, don't miss your chance to own one of these
                                    exceptional residences.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                                <div className="flex items-center">
                               
                                    <div>
                                        <p className="text-gray-700">For inquiries, contact</p>
                                        <h3 className="text-xl font-serif text-[#c0aa83]">Noor Saray Real Estate</h3>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild className="bg-[#c0aa83] hover:bg-[#b09973] text-white border-none px-8 py-6 text-lg">
                                        <Link href="/oasis-palace-ostra/details">Explore Details</Link>
                                    </Button>
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
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

