"use client"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center animate-in fade-in zoom-in duration-300">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Success!</h2>
        <p className="text-gray-600 text-base mb-8">
          Your registration has been submitted successfully. Check your email for your conference ticket.
        </p>

        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-linear-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}
