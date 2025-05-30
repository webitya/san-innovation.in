"use client"

import { motion } from "framer-motion"

export default function TermsContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> January 1, 2024
        </p>

        <p className="text-gray-600 mb-8">
          Welcome to San Innovation. These Terms and Conditions govern your use of our website and services. By
          accessing or using our services, you agree to be bound by these terms.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-600 mb-4">
            San Innovation provides digital marketing services including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing</li>
            <li>Web Development</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
            <li>Content Marketing</li>
            <li>Email Marketing</li>
            <li>Analytics and Reporting</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Client Responsibilities</h2>
          <p className="text-gray-600 mb-4">As our client, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Respond to requests for information in a timely manner</li>
            <li>Make payments according to agreed terms</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not engage in any activities that could harm our reputation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
          <p className="text-gray-600 mb-4">
            Payment terms will be specified in individual service agreements. Generally:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Invoices are due within 30 days of receipt</li>
            <li>Late payments may incur additional charges</li>
            <li>Services may be suspended for non-payment</li>
            <li>Refunds are subject to our refund policy</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-600">
            All content, materials, and intellectual property created by San Innovation remain our property unless
            otherwise specified in writing. Clients retain ownership of their original content and materials provided to
            us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600">
            San Innovation shall not be liable for any indirect, incidental, special, or consequential damages arising
            from the use of our services. Our total liability shall not exceed the amount paid for our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
          <p className="text-gray-600">
            Either party may terminate the service agreement with 30 days written notice. San Innovation reserves the
            right to terminate services immediately for breach of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
          <p className="text-gray-600">
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be
            subject to the jurisdiction of the courts in Ranchi, Jharkhand.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms & Conditions, please contact us:
          </p>
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
