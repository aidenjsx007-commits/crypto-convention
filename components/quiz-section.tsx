"use client"

import { scrollToElement } from "@/lib/scroll-utils"

export default function QuizSection() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-red-900 to-purple-950 py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Background logo */}
          <div className="absolute top-10 left-0 opacity-10 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-white text-sm font-semibold tracking-widest mb-4">
                  AUSTRALIAN CRYPTO CONVENTION - TICKET + ONLINE ACCESS
                </p>
                <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                  Pass a Quiz and get your
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    preference ticket
                  </span>
                </h2>
              </div>

              <button
                onClick={() => scrollToElement("registration-form")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Take the Quiz
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 10a.75.75 0 01.75-.75h6.19l-1.72-1.72a.75.75 0 111.06-1.06l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H7.75A.75.75 0 017 10z" />
                </svg>
              </button>
            </div>

            {/* Right - Event Date */}
            <div className="flex justify-end items-start">
              <div className="text-right">
                <p className="text-white text-6xl md:text-7xl font-bold">22-23</p>
                <p className="text-white text-2xl font-semibold">NOVEMBER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
