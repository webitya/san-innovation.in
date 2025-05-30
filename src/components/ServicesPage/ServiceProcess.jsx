"use client"

import { motion } from "framer-motion"
import AssessmentIcon from "@mui/icons-material/Assessment"
import StrategyIcon from "@mui/icons-material/Psychology"
import BuildIcon from "@mui/icons-material/Build"
import LaunchIcon from "@mui/icons-material/RocketLaunch"
import MonitorIcon from "@mui/icons-material/Visibility"
import OptimizeIcon from "@mui/icons-material/TrendingUp"

const processSteps = [
  {
    icon: AssessmentIcon,
    title: "Discovery & Analysis",
    description: "We analyze your business, competitors, and target audience to understand your unique needs.",
    color: "bg-blue-500",
  },
  {
    icon: StrategyIcon,
    title: "Strategy Development",
    description: "Create a customized digital marketing strategy tailored to your business goals.",
    color: "bg-green-500",
  },
  {
    icon: BuildIcon,
    title: "Implementation",
    description: "Execute the strategy with precision, setting up campaigns and optimizing your presence.",
    color: "bg-purple-500",
  },
  {
    icon: LaunchIcon,
    title: "Launch & Execute",
    description: "Launch your campaigns and start driving traffic, leads, and conversions.",
    color: "bg-red-500",
  },
  {
    icon: MonitorIcon,
    title: "Monitor & Track",
    description: "Continuously monitor performance and track key metrics to ensure success.",
    color: "bg-orange-500",
  },
  {
    icon: OptimizeIcon,
    title: "Optimize & Scale",
    description: "Optimize campaigns based on data insights and scale successful strategies.",
    color: "bg-indigo-500",
  },
]

export default function ServiceProcess() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your digital marketing success. Here's how we work with you every
            step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
