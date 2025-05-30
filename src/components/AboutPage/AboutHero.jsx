"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About San Innovation</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are a passionate team of digital marketing experts based in Ranchi, dedicated to helping businesses
            thrive in the digital world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
