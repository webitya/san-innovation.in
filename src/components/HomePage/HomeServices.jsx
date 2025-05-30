"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import SearchIcon from "@mui/icons-material/Search"
import SocialIcon from "@mui/icons-material/Share"
import WebIcon from "@mui/icons-material/Language"
import AdsIcon from "@mui/icons-material/Campaign"
import ContentIcon from "@mui/icons-material/Article"
import AnalyticsIcon from "@mui/icons-material/Analytics"

const services = [
  {
    icon: SearchIcon,
    title: "Search Engine Optimization",
    description: "Boost your website's visibility and rank higher on Google with our proven SEO strategies.",
    color: "bg-green-500",
  },
  {
    icon: SocialIcon,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness across all major social media platforms.",
    color: "bg-blue-500",
  },
  {
    icon: WebIcon,
    title: "Web Development",
    description: "Create stunning, responsive websites that convert visitors into customers.",
    color: "bg-purple-500",
  },
  {
    icon: AdsIcon,
    title: "PPC Advertising",
    description: "Drive targeted traffic and maximize ROI with our expert Google Ads and Facebook Ads management.",
    color: "bg-red-500",
  },
  {
    icon: ContentIcon,
    title: "Content Marketing",
    description: "Tell your brand story with compelling content that resonates with your target audience.",
    color: "bg-orange-500",
  },
  {
    icon: AnalyticsIcon,
    title: "Analytics & Reporting",
    description: "Track your success with detailed analytics and comprehensive performance reports.",
    color: "bg-indigo-500",
  },
]

export default function HomeServices() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business succeed in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href="/services" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
