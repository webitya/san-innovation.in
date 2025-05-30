"use client"

import { motion } from "framer-motion"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"

const contactInfo = [
  {
    icon: LocationOnIcon,
    title: "Our Office",
    details: ["Lalpur, Ranchi", "Jharkhand, 834001", "India"],
    color: "bg-blue-500",
  },
  {
    icon: PhoneIcon,
    title: "Phone Number",
    details: ["+91 9470352144"],
    color: "bg-green-500",
  },
  {
    icon: EmailIcon,
    title: "Email Address",
    details: ["contact@saninnovation.in"],
    color: "bg-purple-500",
  },
  {
    icon: AccessTimeIcon,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
    color: "bg-orange-500",
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with San Innovation. We're here to help you grow your business with our comprehensive digital
          marketing solutions.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4"
          >
            <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
              <info.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
        <p className="text-gray-600 mb-4">
          Stay connected with us on social media for the latest updates and digital marketing tips.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h3>
        <p className="text-gray-600 mb-4">
          Not sure which service is right for you? Schedule a free consultation with our digital marketing experts.
        </p>
        <a
          href="tel:+919470352144"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <PhoneIcon className="w-5 h-5 mr-2" />
          Call Now
        </a>
      </div>
    </motion.div>
  )
}
