"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Sandeep Kumar",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    description: "Digital marketing expert with 8+ years of experience in helping businesses grow online.",
  },
  {
    name: "Priya Singh",
    role: "Head of SEO",
    image: "/placeholder.svg?height=300&width=300",
    description: "SEO specialist with proven track record of ranking websites on first page of Google.",
  },
  {
    name: "Rahul Sharma",
    role: "Social Media Manager",
    image: "/placeholder.svg?height=300&width=300",
    description: "Creative social media strategist who builds engaging brand communities.",
  },
  {
    name: "Anjali Gupta",
    role: "Web Developer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Full-stack developer creating beautiful and functional websites that convert.",
  },
]

export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of digital marketing professionals is dedicated to delivering exceptional results for your
            business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
