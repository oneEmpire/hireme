"use client"

export default function Services() {
  const services = [
    {
      icon: "🧹",
      title: "Cleaning",
      description: "Keep your home clean and tidy",
      image: "/professional-cleaning-service-home.jpg",
    },
    {
      icon: "🧺",
      title: "Washing",
      description: "Wash and iron clothes and textiles",
      image: "/laundry-washing-service-clothes.jpg",
    },
    {
      icon: "🍳",
      title: "Cooking",
      description: "Prepare delicious meals",
      image: "/chef-cooking-meal-kitchen.jpg",
    },
    {
      icon: "🪡",
      title: "Tailoring",
      description: "Sew and mend clothes",
      image: "/tailor-sewing-professional.jpg",
    },
    {
      icon: "👗",
      title: "Fashion Advice",
      description: "Get helpful fashion guidance",
      image: "/fashion-stylist-advice-wardrobe.jpg",
    },
    {
      icon: "👶",
      title: "Childcare",
      description: "Professional babysitting services",
      image: "/nanny-childcare-professional.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Wide range of domestic services to meet all your household needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1"
            >
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
