"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function OasisPalaceOstraLanding() {
    const [isVisible, setIsVisible] = useState(false)

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
            {/* Hero Section */}
            <section className="relative h-screen">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
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
                        className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
                    >
                        Oasis Palace Ostra
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl"
                    >
                        First Palace Branded Villas in Dubai
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl italic"
                    >
                        Where Luxury, Royalty & Heritage All Come Together To Create A Premium Experience
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button asChild className="bg-[#c0aa83] hover:bg-[#b09973] text-white border-none px-8 py-6 text-lg">
                            <Link href="/oasis-palace-ostra/details">Explore Details</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg">
                            <Link href="#villa-types">View Villa Types</Link>
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
                                <div className="relative w-12 h-12 mr-4">
                                    <div className="absolute inset-0 rounded-full border border-[#c0aa83]/70"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="font-serif text-xl font-light text-[#c0aa83] italic tracking-wider">NS</div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-900 font-medium">Exclusively Presented By</p>
                                    <h3 className="text-xl font-serif text-[#c0aa83]">Noor Saray Real Estate</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button asChild variant="outline" className="border-[#c0aa83] capitalize text-[#c0aa83] hover:bg-[#c0aa83]/5">
                                <Link href="https://wa.me/+971501527835" target="_blank" rel="noopener noreferrer">
                                    contact us
                                </Link>
                            </Button>
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
                                <Badge className="bg-red-100 text-red-800 border-none mr-3">Limited Units</Badge>
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
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif mb-4">
                                Payment <span className="text-[#c0aa83]">Plan</span>
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                A flexible payment plan designed to make your investment journey smooth and convenient.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-white/10 pb-10">
                                <div className="text-center md:text-left mb-6 md:mb-0">
                                    <h3 className="text-2xl font-medium mb-2">80:20 Payment Plan</h3>
                                    <p className="text-gray-300">Simple and straightforward</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-[#c0aa83]/20 p-3 rounded-full mr-4">
                                        <Clock className="h-6 w-6 text-[#c0aa83]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-300">Handover</p>
                                        <p className="font-medium">September 2029</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/5 rounded-lg p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-medium">During Construction</h4>
                                        <span className="text-2xl font-semibold text-[#c0aa83]">80%</span>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Booking amount</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Installments linked to construction milestones</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Flexible payment schedule</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 rounded-lg p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-medium">On Handover</h4>
                                        <span className="text-2xl font-semibold text-[#c0aa83]">20%</span>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Final payment upon handover</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Receive keys to your new home</span>
                                        </li>
                                        <li className="flex items-start">
                                            <Check className="h-5 w-5 text-[#c0aa83] mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">Begin your luxury living experience</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                                    <div className="relative w-16 h-16 mr-4">
                                        <div className="absolute inset-0 rounded-full border-2 border-[#c0aa83]"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="font-serif text-2xl font-light text-[#c0aa83] italic tracking-wider">NS</div>
                                        </div>
                                    </div>
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
                                        asChild
                                        variant="outline"
                                        className="border-gray-300 text-gray-700 capitalize hover:bg-gray-50 px-8 py-6 text-lg"
                                    >
                                        <Link href="https://wa.me/+971501527835" target="_blank" rel="noopener noreferrer">
                                            contact sales team
                                        </Link>
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

