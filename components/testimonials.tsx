"use client"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "/professional-woman-portrait.png",
      text: "SkillHaus has been a lifesaver! I found an amazing housekeeper and now I have more time for my business.",
    },
    {
      name: "Michael Chen",
      role: "Busy Professional",
      image: "/professional-man-portrait.png",
      text: "The process was so easy. Within days I had a chef preparing meals for my family. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      role: "Working Parent",
      image: "/smiling-woman-face.png",
      text: "Finally, I found reliable help for childcare. The workers are professional and trustworthy.",
    },
    {
      name: "David Thompson",
      role: "Executive",
      image: "/professional-man-smiling.png",
      text: "SkillHaus connects you with only the best. The quality of service is exceptional and consistent.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Join thousands of satisfied customers who trust SkillHaus
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
