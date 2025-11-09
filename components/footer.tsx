"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, TicketIcon as TikTok, Youtube, MoreHorizontal, X } from "lucide-react"
import { scrollToElement } from "@/lib/scroll-utils"

export default function Footer() {
  return (
    <footer className="w-full bg-navy-900 text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Stay Connected & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 pb-16 border-b border-white/10">
          {/* Left - Stay Connected */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">STAY CONNECTED</h3>

            {/* Social Icons */}
            <div className="flex gap-6 mb-12">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <X size={24} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <TikTok size={24} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Youtube size={24} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <MoreHorizontal size={24} />
              </Link>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ACC</span>
              </div>
              <div>
                <p className="font-bold text-sm">AUSTRALIAN</p>
                <p className="text-xs text-gray-400">CRYPTO CONVENTION</p>
              </div>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">SUBSCRIBE FOR UPDATES & GIVEAWAYS</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email here *"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <Button className="bg-white text-navy-900 hover:bg-gray-100 rounded-full px-8 py-3 font-bold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <Link href="#" className="flex items-center justify-between group mb-6 pb-6 border-b border-white/10">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">Agenda</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#" className="flex items-center justify-between group mb-6 pb-6 border-b border-white/10">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">Speakers</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#" className="flex items-center justify-between group mb-6 pb-6 border-b border-white/10">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">Sponsors</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#" className="flex items-center justify-between group">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">Media</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Column 2 */}
          <div>
            <Link href="#" className="flex items-center justify-between group mb-6 pb-6 border-b border-white/10">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">News</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#" className="flex items-center justify-between group mb-6 pb-6 border-b border-white/10">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">Ticket Help</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#" className="flex items-center justify-between group mb-6 pb-6 border-b border-white/10">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                Terms & Conditions
              </span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="#" className="flex items-center justify-between group">
              <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">Contact Us</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end">
          <Button
            onClick={() => scrollToElement("registration-form")}
            className="bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white rounded-full px-8 py-3 flex items-center gap-2 text-lg font-bold"
          >
            GET TICKETS
            <span>→</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
