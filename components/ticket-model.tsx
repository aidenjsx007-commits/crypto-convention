"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function TicketModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  if (!isOpen) return null

  const handleGetTickets = () => {
    setIsOpen(false)
    const formSection = document.getElementById("registration-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-linear-to-br from-slate-900 via-purple-900 to-slate-800 rounded-2xl max-w-2xl w-full px-8 py-16 text-center">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        {/* Logo/Brand */}
        <p className="text-sm text-gray-400 mb-8">AUSTRALIAN CRYPTO CONVENTION - TICKET + ONLINE ACCESS</p>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight">
          Pass a Quiz and get your Conference ticket
        </h1>

        {/* Get Tickets Button */}
        <button
          onClick={handleGetTickets}
          className="inline-flex items-center justify-center gap-2 bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Get Tickets
          <span>→</span>
        </button>

        {/* Date */}
        <p className="absolute top-8 right-8 md:top-12 md:right-12 text-sm font-semibold text-gray-700">
          22-23
          <br />
          NOVEMBER
        </p>
      </div>
    </div>
  )
}
