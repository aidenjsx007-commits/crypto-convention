"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { scrollToElement } from "@/lib/scroll-utils"

export default function EventHighlights() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-gray-600 mb-4">JOIN US ON 22-23 NOVEMBER 2025</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 text-balance">
            THE SOUTHERN HEMISPHERE'S LARGEST CRYPTO EVENT
          </h2>
        </div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-3xl h-80 md:h-96">
            <Image
              src="/crypto-conference-networking-attendees.jpg"
              alt="Crypto conference networking"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-8">
              <Button
                onClick={() => scrollToElement("registration-form")}
                className="bg-navy-900 hover:bg-navy-800 text-white rounded-full px-8 py-3 flex items-center gap-2"
              >
                <span>→</span>
                GET TICKETS
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-3xl h-80 md:h-96">
            <Image
              src="/crypto-event-attendees-selfie-group-photo.jpg"
              alt="Event attendees taking selfie"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-8">
              <Button
                onClick={() => scrollToElement("registration-form")}
                className="bg-navy-900 hover:bg-navy-800 text-white rounded-full px-8 py-3 flex items-center gap-2"
              >
                <span>→</span>
                GET TICKETS
              </Button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-3xl h-80 md:h-96">
            <Image
              src="/crypto-panel-discussion-speakers-stage.jpg"
              alt="Panel discussion on stage"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-8">
              <Button
                onClick={() => scrollToElement("registration-form")}
                className="bg-navy-900 hover:bg-navy-800 text-white rounded-full px-8 py-3 flex items-center gap-2"
              >
                <span>→</span>
                GET TICKETS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
