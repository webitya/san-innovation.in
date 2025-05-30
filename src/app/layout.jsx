import { Inter } from "next/font/google"
import Header from "@/components/shared/Header"
import Footer from "@/components/shared/Footer"
import Providers from "@/components/shared/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "San Innovation - Digital Marketing Agency",
    template: "%s | San Innovation",
  },
  description:
    "Leading digital marketing agency in Ranchi providing SEO, social media marketing, web development, and digital advertising services.",
  keywords: "digital marketing, SEO, social media marketing, web development, Ranchi, digital agency",
  authors: [{ name: "San Innovation" }],
  creator: "San Innovation",
  publisher: "San Innovation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://saninnovation.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "San Innovation - Digital Marketing Agency",
    description: "Leading digital marketing agency in Ranchi providing comprehensive digital solutions.",
    url: "https://saninnovation.in",
    siteName: "San Innovation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Innovation - Digital Marketing Agency",
    description: "Leading digital marketing agency in Ranchi providing comprehensive digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}


import './globals.css'