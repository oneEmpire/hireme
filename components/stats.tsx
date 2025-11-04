"use client"

export default function Stats() {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "5K+", label: "Skilled Workers" },
    { number: "50K+", label: "Jobs Completed" },
    { number: "4.9★", label: "Average Rating" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
