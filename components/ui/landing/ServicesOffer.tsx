"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    id: 1,
    title: "UX/UI",
    description: "At Tech Mission, our design team is passionate about creating...",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    description: "At Tech Mission, our design team is passionate about creating...",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "UX/UI",
    description: "At Tech Mission, our design team is passionate about creating...",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "UX/UI",
    description: "At Tech Mission, our design team is passionate about creating...",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
      </svg>
    ),
  },
]

function ServicesOffer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600 rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>

      <div className="contiainer px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services We Offer</h2>
          <p className="text-lg text-gray-600">Tailored Solutions for Your Needs</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 -translate-x-4"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 translate-x-4"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out mb-4 "
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${(services.length * 100) / 3}%`,
              }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="flex-shrink-0 px-4" style={{ width: `${100 / services.length}%` }}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white"
                        style={{ backgroundColor: "#1f2937" }}
                      >
                        {service.id}
                      </div>
                      <div className="p-3 bg-blue-50 rounded-xl">{service.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Read More Link */}
                    <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOffer
