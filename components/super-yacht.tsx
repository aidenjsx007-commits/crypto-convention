"use client"

import { scrollToElement } from "@/lib/scroll-utils"

export default function SuperYacht() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                <span className="text-[#6B1B47]">SUPER YACHT</span>
                <br />
                <span className="text-[#001F5C]">AFTER PARTY</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Don't miss out! Join us for the <span className="font-bold">sell-out</span> Australian Crypto Convention
                official after party on a <span className="font-bold">SUPER Yacht</span> around{" "}
                <span className="font-bold">Sydney Harbour</span>.
              </p>

              <p>
                Enjoy an <span className="font-bold">Open Bar</span>,{" "}
                <span className="font-bold">Curated Culinary Offerings</span>, an{" "}
                <span className="font-bold">Exclusive VIP Lounge</span>, and{" "}
                <span className="font-bold">World Class Entertainment</span>.
              </p>

              <p className="text-sm">
                <span className="font-bold">Limited tickets available.</span> Premium GA & VIP Ticket Holders Only.
              </p>
            </div>

            <button
              onClick={() => scrollToElement("registration-form")}
              className="inline-flex items-center gap-3 bg-[#001F5C] hover:bg-[#001F5C]/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              <span className="w-5 h-5 flex items-center justify-center">→</span>
              GET TICKETS
            </button>
          </div>

          {/* Right Video */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/z7md_yRfgxE"
                title="Crypto Drone Show"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#6B1B47] to-[#001F5C] rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold">Ready to join the party?</h3>
            <p className="text-white/80 mt-2">Limited tickets available for Premium GA & VIP holders</p>
          </div>
          <button
            onClick={() => scrollToElement("registration-form")}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap"
          >
            GET TICKETS
            <span className="w-5 h-5 flex items-center justify-center">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
