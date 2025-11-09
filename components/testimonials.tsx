export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "The most professional crypto event I've been to in Australia. The speakers were incredible and the networking opportunities were unmatched.",
      author: "Sarah L.",
      title: "CEO, Blockchain Solutions",
    },
    {
      id: 2,
      quote:
        "An absolute must-attend for anyone serious about crypto. The quality of discussions and the caliber of attendees was top-notch.",
      author: "Jessica T.",
      title: "Head of Investments, Digital Wealth Fund",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-red-950 to-slate-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Images with decorative pattern */}
          <div className="relative h-96 md:h-full min-h-96">
            {/* Decorative hexagon pattern background */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                <defs>
                  <pattern id="hexagons" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="8" fill="white" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#hexagons)" />
              </svg>
            </div>

            {/* Image placeholders */}
            <div className="absolute top-0 left-0 w-40 h-48 md:w-48 md:h-56 rounded-lg overflow-hidden shadow-lg">
              <img src="/crypto-conference-attendees-networking.jpg" alt="Conference attendees" className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-0 right-0 w-40 h-48 md:w-48 md:h-56 rounded-lg overflow-hidden shadow-lg">
              <img src="/crypto-event-stage-presentation.jpg" alt="Event stage" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">WHAT ATTENDEES ARE SAYING</h2>

            <div className="space-y-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="space-y-3">
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
