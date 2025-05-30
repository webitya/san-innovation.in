"use client"

import { motion } from "framer-motion"

export default function PrivacyContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> January 1, 2024
        </p>

        <p className="text-gray-600 mb-8">
          At San Innovation, we are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit
          our website or use our services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Business information (company name, industry, website)</li>
            <li>Usage data (how you interact with our website)</li>
            <li>Technical data (IP address, browser type, device information)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To communicate with you about our services</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your
            consent, except in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>With trusted service providers who assist us in operating our business</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
          <p className="text-gray-600">
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your
            browser settings, but this may affect the functionality of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600">
              <strong>San Innovation</strong>
              <br />
              Email: contact@saninnovation.in
              <br />
              Phone: +91 9470352144
              <br />
              Address: Lalpur, Ranchi, 834001
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  )
}
