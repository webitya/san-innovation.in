"use client"

import { motion } from "framer-motion"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "San Innovation was established with a vision to transform digital marketing in Ranchi.",
  },
  {
    year: "2020",
    title: "First 50 Clients",
    description: "Reached our first milestone of serving 50 satisfied clients across various industries.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Expanded our team with specialized experts in SEO, social media, and web development.",
  },
  {
    year: "2022",
    title: "Award Recognition",
    description: 'Recognized as the "Best Digital Marketing Agency" in Ranchi by local business community.',
  },
  {
    year: "2023",
    title: "100+ Success Stories",
    description: "Celebrated helping over 100 businesses achieve their digital marketing goals.",
  },
  {
    year: "2024",
    title: "Innovation Continues",
    description: "Continuing to innovate and lead the digital marketing landscape in Jharkhand.",
  },
]

export default function OurJourney() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a leading digital marketing agency, here's how we've grown over the years.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
