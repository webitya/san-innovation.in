import TermsContent from "@/components/PolicyPage/TermsContent"

export const metadata = {
  title: "Terms & Conditions",
  description:
    "San Innovation Terms & Conditions - Read our terms of service and conditions for using our digital marketing services.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsConditionsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <TermsContent />
      </div>
    </div>
  )
}
