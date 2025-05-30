"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

export default function HomeCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how San Innovation can help you achieve your digital marketing goals. Contact us today for a
            free consultation and custom strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919470352144"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                +91 9470352144
              </a>
              <a
                href="mailto:contact@saninnovation.in"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                <EmailIcon className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <PhoneIcon className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                <p className="text-sm">+91 9470352144</p>
              </div>
              <div>
                <EmailIcon className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                <p className="text-sm">contact@saninnovation.in</p>
              </div>
              <div>
                <div className="w-6 h-6 mx-auto mb-2 text-yellow-400">📍</div>
                <p className="text-sm">Lalpur, Ranchi, 834001</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
