"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Grow Your Business with
              <span className="text-yellow-400"> Digital Innovation</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              San Innovation is your trusted digital marketing partner in Ranchi. We help businesses thrive online with
              cutting-edge strategies and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
              >
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                <TrendingUpIcon className="w-5 h-5 mr-2" />
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6">Why Choose San Innovation?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Proven track record of success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Local expertise in Ranchi market</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Comprehensive digital solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
