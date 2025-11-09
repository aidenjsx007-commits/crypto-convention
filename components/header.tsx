"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 10,
    minutes: 42,
    seconds: 29,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 23
              days--
            }
          }
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Promo Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm md:text-base">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="font-semibold">Book now & save up to $500</span>
          <div className="flex items-center gap-4 text-xs md:text-sm">
            <span>{timeLeft.days} DAYS</span>
            <span>{timeLeft.hours} HOURS</span>
            <span>{timeLeft.minutes} MINUTES</span>
            <span>{timeLeft.seconds} SECONDS</span>
          </div>
          <span className="font-semibold">Until November 1 Price Increase — Premium GA SOLD OUT</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-700 text-white px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg"></div>
            <div className="text-sm font-bold">
              <div>AUSTRALIAN</div>
              <div className="text-xs">CRYPTO CONVENTION</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-gray-300 transition">
              AGENDA
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              SUPER YACHT PARTY
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              SPEAKERS
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              PARTNERS
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              PLAN YOUR VISIT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <a href="#" className="hover:text-gray-300 transition">
              AGENDA
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              SUPER YACHT PARTY
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              SPEAKERS
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              PARTNERS
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              PLAN YOUR VISIT
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
