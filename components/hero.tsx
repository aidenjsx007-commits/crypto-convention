"use client"

import { scrollToElement } from "@/lib/scroll-utils"

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Titles */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-4">
            <span className="text-blue-900">CONNECT</span>
            <span className="mx-4">·</span>
            <span className="text-purple-900">BUILD</span>
            <span className="mx-4">·</span>
            <span className="text-blue-900">PARTNER</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">22-23 November, 2025 | ICC, Sydney</p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Get ready for the{" "}
                <span className="font-bold text-navy-900">Southern Hemisphere's largest crypto event</span>, uniting
                <span className="font-bold text-navy-900"> Industry leaders, Investors, Innovators,</span> and{" "}
                <span className="font-bold text-navy-900">Crypto Enthusiasts</span> under one roof.
              </p>
            </div>

            <button
              onClick={() => scrollToElement("registration-form")}
              className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-800 transition"
            >
              <span className="w-5 h-5 flex items-center justify-center">→</span>
              GET TICKETS
            </button>
          </div>

          {/* Right Content - Australia Shape */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-96 bg-gradient-to-br from-purple-600 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white/30 text-center p-4">
                <div className="space-y-2">
                  <div className="text-2xl font-bold">CRY</div>
                  <div className="text-2xl font-bold">BINANCE AU</div>
                  <div className="text-sm">Event Photos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
