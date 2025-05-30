"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import GroupIcon from "@mui/icons-material/Group"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import SupportIcon from "@mui/icons-material/Support"

const stats = [
  { number: "100+", label: "Happy Clients" },
  { number: "500+", label: "Projects Completed" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
]

const features = [
  {
    icon: GroupIcon,
    title: "Expert Team",
    description: "Our team of certified digital marketing professionals brings years of experience.",
  },
  {
    icon: TrendingUpIcon,
    title: "Proven Results",
    description: "We deliver measurable results that drive real business growth and ROI.",
  },
  {
    icon: SupportIcon,
    title: "Dedicated Support",
    description: "Get round-the-clock support from our dedicated account managers.",
  },
]

export default function HomeAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About San Innovation</h2>
            <p className="text-lg text-gray-600 mb-8">
              Based in Ranchi, San Innovation is a leading digital marketing agency dedicated to helping businesses
              succeed online. We combine creativity, technology, and data-driven strategies to deliver exceptional
              results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Data-driven marketing strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Transparent reporting and analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Customized solutions for every business</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Local market expertise</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-blue-50 rounded-lg p-6"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 rounded-lg p-3">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
