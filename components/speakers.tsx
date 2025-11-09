"use client"

import {
  Bitcoin,
  Zap,
  Code,
  Coins,
  Network,
  CreditCard,
  Cpu,
  Lock,
  TrendingUp,
  DollarSign,
  Award,
  Globe,
  Link2,
  Database,
  Shuffle,
  Briefcase,
  Building,
  Users,
  Layers,
  FileText,
  Wallet,
  BarChart3,
  Shield,
  Smartphone,
  Landmark,
  HeartHandshake,
  Hexagon,
} from "lucide-react"

export default function Partners() {
  const titlePartners = [
    { name: "Binance AU", logo: "BINANCE AU" },
    { name: "CoinSpot", logo: "CoinSpot" },
    { name: "MEXC", logo: "MEXC" },
  ]

  const allPartners = [
    { name: "Cardano", icon: Bitcoin },
    { name: "ZeroCap", icon: Zap },
    { name: "Intersect", icon: Code },
    { name: "CoinFlip", icon: Coins },
    { name: "RocketPool", icon: Network },
    { name: "PayPal", icon: CreditCard },
    { name: "Kaspa", icon: Cpu },
    { name: "OpenZK", icon: Lock },
    { name: "Bloomberg", icon: TrendingUp },
    { name: "Worldpay", icon: DollarSign },
    { name: "eToro", icon: Award },
    { name: "CoinSpot", icon: Globe },
    { name: "Chainlink", icon: Link2 },
    { name: "OKX", icon: Database },
    { name: "Vechain", icon: Shuffle },
    { name: "Koinly", icon: Briefcase },
    { name: "Dogecoin", icon: Smartphone },
    { name: "ChainUp", icon: Building },
    { name: "ANZ", icon: Users },
    { name: "Luvium", icon: Layers },
    { name: "DACM", icon: FileText },
    { name: "Bitget", icon: Wallet },
    { name: "MEXC", icon: BarChart3 },
    { name: "Trust", icon: Shield },
    { name: "Digital X", icon: Hexagon },
    { name: "Coinbase", icon: Landmark },
    { name: "NAB", icon: Briefcase },
    { name: "MHC", icon: HeartHandshake },
    { name: "Filecoin", icon: Database },
    { name: "Hashlock", icon: Lock },
  ]

  return (
    <section className="w-full bg-linear-to-b from-slate-900 to-slate-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Partners Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">2025 TITLE PARTNERS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {titlePartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-32 md:min-h-40 hover:shadow-lg transition-shadow"
              >
                <span className="text-xl md:text-2xl font-bold text-slate-900">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Partners Section */}
        <div>
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
            WHERE THE INDUSTRY'S BIGGEST NAMES CONVERGE
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {allPartners.map((partner) => {
              const IconComponent = partner.icon
              return (
                <div
                  key={partner.name}
                  className="flex flex-col items-center justify-center p-4 md:p-6 rounded-lg hover:bg-slate-800 transition-colors gap-2"
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
                  <span className="text-sm md:text-base text-gray-300 text-center font-medium">{partner.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
