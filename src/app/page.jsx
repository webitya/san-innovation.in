import HomeHero from "@/components/HomePage/HomeHero"
import HomeServices from "@/components/HomePage/HomeServices"
import HomeAbout from "@/components/HomePage/HomeAbout"
import HomeTestimonials from "@/components/HomePage/HomeTestimonials"
import HomeCTA from "@/components/HomePage/HomeCTA"

export const metadata = {
  title: "Home",
  description:
    "San Innovation - Your trusted digital marketing partner in Ranchi. We provide comprehensive digital marketing solutions including SEO, social media marketing, and web development.",
  openGraph: {
    title: "San Innovation - Digital Marketing Agency in Ranchi",
    description: "Your trusted digital marketing partner providing comprehensive solutions.",
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <HomeTestimonials />
      <HomeCTA />
    </>
  )
}
