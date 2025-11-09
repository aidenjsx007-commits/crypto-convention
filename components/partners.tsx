export default function Partners() {
  const titlePartners = [
    { name: "Binance AU", logo: "BINANCE AU" },
    { name: "CoinSpot", logo: "CoinSpot" },
    { name: "MEXC", logo: "MEXC" },
  ]

  const allPartners = [
    "Cardano",
    "ZeroCap",
    "Intersect",
    "CoinFlip",
    "RocketPool",
    "PayPal",
    "Kaspa",
    "OpenZK",
    "Bloomberg",
    "Worldpay",
    "eToro",
    "CoinSpot",
    "Chainlink",
    "OKX",
    "Vechain",
    "Koinly",
    "Dogecoin",
    "ChainUp",
    "ANZ",
    "Luvium",
    "DACM",
    "Bitget",
    "MEXC",
    "Trust",
    "Digital X",
    "Coinbase",
    "NAB",
    "MHC",
    "Filecoin",
    "Hashlock",
  ]

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24">
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
            {allPartners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center p-4 md:p-6 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="text-sm md:text-base text-gray-300 text-center font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
