"use client"

import { motion } from "framer-motion"
import SearchIcon from "@mui/icons-material/Search"
import SocialIcon from "@mui/icons-material/Share"
import WebIcon from "@mui/icons-material/Language"
import AdsIcon from "@mui/icons-material/Campaign"
import ContentIcon from "@mui/icons-material/Article"
import AnalyticsIcon from "@mui/icons-material/Analytics"
import EmailIcon from "@mui/icons-material/Email"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const services = [
  {
    icon: SearchIcon,
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility on search engines and drive organic traffic.",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Link Building Strategies",
      "Local SEO for Ranchi businesses",
      "Monthly SEO Reports",
    ],
    color: "bg-green-500",
  },
  {
    icon: SocialIcon,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience across social platforms.",
    features: [
      "Social Media Strategy Development",
      "Content Creation & Curation",
      "Community Management",
      "Social Media Advertising",
      "Influencer Marketing",
      "Performance Analytics",
    ],
    color: "bg-blue-500",
  },
  {
    icon: WebIcon,
    title: "Web Development",
    description: "Create stunning, responsive websites that convert visitors into customers.",
    features: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Website Maintenance",
      "Performance Optimization",
    ],
    color: "bg-purple-500",
  },
  {
    icon: AdsIcon,
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Drive targeted traffic and maximize ROI with strategic paid advertising campaigns.",
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "Campaign Strategy & Setup",
      "Ad Copy & Creative Design",
      "Bid Management",
      "Conversion Tracking",
    ],
    color: "bg-red-500",
  },
  {
    icon: ContentIcon,
    title: "Content Marketing",
    description: "Tell your brand story with compelling content that resonates with your audience.",
    features: [
      "Content Strategy Development",
      "Blog Writing & Management",
      "Video Content Creation",
      "Infographic Design",
      "Content Distribution",
      "Content Performance Analysis",
    ],
    color: "bg-orange-500",
  },
  {
    icon: AnalyticsIcon,
    title: "Analytics & Reporting",
    description: "Track your success with detailed analytics and comprehensive performance reports.",
    features: [
      "Google Analytics Setup",
      "Custom Dashboard Creation",
      "Monthly Performance Reports",
      "ROI Analysis",
      "Competitor Analysis",
      "Data-Driven Recommendations",
    ],
    color: "bg-indigo-500",
  },
  {
    icon: EmailIcon,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with targeted email marketing campaigns.",
    features: [
      "Email Campaign Strategy",
      "Newsletter Design & Development",
      "Automated Email Sequences",
      "List Building & Segmentation",
      "A/B Testing",
      "Performance Tracking",
    ],
    color: "bg-pink-500",
  },
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Marketing",
    description: "Boost your online store sales with specialized e-commerce marketing strategies.",
    features: [
      "Product Listing Optimization",
      "Shopping Ads Management",
      "Conversion Rate Optimization",
      "Cart Abandonment Recovery",
      "Customer Retention Strategies",
      "Marketplace Management",
    ],
    color: "bg-teal-500",
  },
]

export default function ServicesList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
