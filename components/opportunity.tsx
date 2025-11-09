"use client"

import { scrollToElement } from "@/lib/scroll-utils"

export default function Opportunity() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-gray-300 to-transparent"></div>
        <div className="absolute top-1/3 left-1/2 w-px h-40 bg-gradient-to-b from-gray-300 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-gray-300 to-transparent"></div>
        <div className="absolute top-1/3 right-1/2 w-px h-40 bg-gradient-to-b from-gray-300 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-sm md:text-base text-blue-900 font-semibold mb-4">TICKETS AVAILABLE NOW</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-navy-900">WHERE CRYPTO MEETS</span>
          <span className="text-purple-900"> OPPORTUNITY</span>
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          With <span className="font-bold text-navy-900">10,000+ Attendees</span> and{" "}
          <span className="font-bold text-navy-900">1,000+ Companies</span>, AusCryptoCon is where{" "}
          <span className="font-bold text-navy-900">Education, Innovation,</span> and{" "}
          <span className="font-bold text-navy-900">High-value connections</span> converge to shape the future of crypto
          and blockchain.
        </p>

        <p className="text-gray-600 mb-8">Get your Super Early Bird tickets now — prices will only go up from here.</p>

        <button
          onClick={() => scrollToElement("registration-form")}
          className="inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-800 transition"
        >
          <span className="w-5 h-5 flex items-center justify-center">→</span>
          GET TICKETS
        </button>
      </div>
    </section>
  )
}
