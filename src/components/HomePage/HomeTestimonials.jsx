"use client"

import { motion } from "framer-motion"
import StarIcon from "@mui/icons-material/Star"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Electronics",
    content:
      "San Innovation transformed our online presence completely. Our website traffic increased by 300% and sales doubled within 6 months.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Priya Sharma",
    company: "Sharma Fashion House",
    content:
      "The team at San Innovation is incredibly professional and results-driven. Their social media strategies helped us reach thousands of new customers.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Amit Singh",
    company: "Singh Consultancy",
    content:
      "Working with San Innovation was the best decision for our business. Their SEO expertise got us to the top of Google search results.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function HomeTestimonials() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with San
            Innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 relative"
            >
              <FormatQuoteIcon className="absolute top-4 right-4 w-8 h-8 text-blue-400 opacity-50" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
