export default function Stats() {
  const stats = [
    { number: "10,000+", label: "Attendees" },
    { number: "1,000+", label: "Companies" },
    { number: "150+", label: "Speakers" },
    { number: "120+", label: "Sponsors" },
    { number: "1M+", label: "Prize in VC Funding" },
  ]

  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-navy-900 py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 md:divide-x md:divide-purple-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-6 md:py-8 px-2 md:px-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
