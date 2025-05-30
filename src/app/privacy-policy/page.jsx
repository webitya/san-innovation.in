import PrivacyContent from "@/components/PolicyPage/PrivacyContent"

export const metadata = {
  title: "Privacy Policy",
  description: "San Innovation Privacy Policy - Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrivacyContent />
      </div>
    </div>
  )
}
