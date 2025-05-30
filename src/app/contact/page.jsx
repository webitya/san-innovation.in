import ContactHero from "@/components/ContactPage/ContactHero"
import ContactForm from "@/components/ContactPage/ContactForm"
import ContactInfo from "@/components/ContactPage/ContactInfo"
import ContactMap from "@/components/ContactPage/ContactMap"

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with San Innovation. Contact us at contact@saninnovation.in or +91 9470352144. Visit our office in Lalpur, Ranchi.",
  openGraph: {
    title: "Contact San Innovation - Digital Marketing Agency",
    description: "Get in touch with our digital marketing experts in Ranchi.",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </>
  )
}
