"use client"

export default function Team() {
  const team = [
    {
      name: "Alex Kumar",
      role: "Founder & CEO",
      image: "/founder-ceo-professional-headshot.jpg",
    },
    {
      name: "Jessica Lee",
      role: "Head of Operations",
      image: "/operations-manager-woman-professional.jpg",
    },
    {
      name: "Marcus Williams",
      role: "Quality Assurance Lead",
      image: "/quality-assurance-man-professional.jpg",
    },
    {
      name: "Priya Patel",
      role: "Customer Success Manager",
      image: "/customer-success-manager-woman.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Meet Our Team</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Dedicated professionals committed to connecting you with the best service providers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-64 rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
